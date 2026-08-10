#!/usr/bin/env python3
"""
Release → Social Content Generator
===================================
Implements Sections 75-76, 124-125 of the Community Brand/SEO/Growth Master Plan.

Takes a wolfbot-release.json manifest and generates:
- release-social.json (X, LinkedIn, Telegram, Discord drafts)
- release-og.json (Open Graph image metadata)
- website-latest-release.json (for community.wolfbot.io latest-release block)
- release notes Markdown

Usage:
    python3 generate_release_social.py \\
        --manifest release/local/release-manifest.0.1.0-p12-product-rc1.json \\
        --output community/website/content/releases/
"""

import json
import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional


# ── Brand constants ────────────────────────────────────────────────────

BRAND = "WolfBot Community"
BRAND_BY = "by WolfBot.io"
WEBSITE = "community.wolfbot.io"
DOWNLOAD_URL = "https://community.wolfbot.io/download"
RELEASES_URL = "https://community.wolfbot.io/releases"
GITHUB_REPO = "wolfbot-io/wolfbot-community"


# ── Channel labels ─────────────────────────────────────────────────────

CHANNEL_LABELS = {
    "dev-preview": "Development Preview",
    "alpha": "Alpha",
    "beta": "Beta",
    "rc": "Release Candidate",
    "stable": "Stable",
}


CHANNEL_BADGES = {
    "dev-preview": "🧪 DEV PREVIEW",
    "alpha": "🧪 ALPHA",
    "beta": "🧪 BETA",
    "rc": "🚀 RC",
    "stable": "✅ STABLE",
}


# ── Platform icons ─────────────────────────────────────────────────────

PLATFORM_ICONS = {
    "windows": "🪟",
    "linux": "🐧",
}


def load_manifest(path: str) -> dict:
    """Load and validate the release manifest."""
    with open(path) as f:
        manifest = json.load(f)
    required = ["version", "channel"]
    for key in required:
        if key not in manifest:
            raise ValueError(f"Manifest missing required field: {key}")
    return manifest


def get_platforms(manifest: dict) -> list[str]:
    """Detect which platforms are available in the release."""
    platforms = []
    if "linux" in manifest and manifest["linux"].get("installer"):
        platforms.append("linux")
    if "windows" in manifest and manifest["windows"].get("installer"):
        platforms.append("windows")
    return platforms


def get_highlights(manifest: dict, max_items: int = 4) -> list[str]:
    """Extract highlight features from manifest, or use defaults."""
    highlights = manifest.get("highlights", [])
    if highlights:
        return highlights[:max_items]

    # Generate from feature flags if present
    features = manifest.get("features", {})
    generated = []
    feature_map = {
        "terminal": "Smart Terminal improvements",
        "broker": "Broker support updates",
        "installer": "Installer improvements",
        "risk": "Risk control updates",
        "signal": "External signal improvements",
        "snapshot": "Snapshot/backup improvements",
        "update": "Update system improvements",
        "strategy": "Strategy engine updates",
    }
    for key, label in feature_map.items():
        if features.get(key):
            generated.append(label)
    return generated[:max_items]


def generate_release_social(manifest: dict) -> dict:
    """Generate the release-social.json content."""
    version = manifest["version"]
    channel = manifest.get("channel", "stable")
    channel_label = CHANNEL_LABELS.get(channel, channel)
    platforms = get_platforms(manifest)
    highlights = get_highlights(manifest)
    build_id = manifest.get("build_id", "")
    release_date = manifest.get("release_date", datetime.now(timezone.utc).strftime("%Y-%m-%d"))

    platform_lines = "\n".join(
        f"{PLATFORM_ICONS.get(p, '•')} {p.title()}" for p in platforms
    )

    highlight_lines = "\n".join(f"✓ {h}" for h in highlights)

    # ── Primary social post (X/LinkedIn/Telegram/Discord) ────────────
    primary = f"""{BRAND} v{version} ({channel_label}) is out.

{platform_lines}

{highlight_lines}

Download: {DOWNLOAD_URL}
Release notes: {RELEASES_URL}/{version}"""

    # ── Short variant ─────────────────────────────────────────────────
    short = f"""{BRAND} v{version} ({channel_label})

{platform_lines}

{highlight_lines}

{DOWNLOAD_URL}"""

    # ── Announcement discussion post (GitHub) ─────────────────────────
    github_discussion = f"""# {BRAND} v{version} — {channel_label}

**Release date:** {release_date}
**Channel:** {channel_label}
**Build:** `{build_id or "N/A"}`

## What's New

{highlight_lines if highlight_lines else "• Release based on manifest v{version}"}

## Available Platforms

{platform_lines if platform_lines else "• See release assets"}

## Download

**Recommended:** [{DOWNLOAD_URL}]({DOWNLOAD_URL})

Direct downloads are available in the [release assets](https://github.com/{GITHUB_REPO}/releases/tag/v{version}).

## Documentation

- [Getting Started](https://community.wolfbot.io/getting-started)
- [Release Notes]({RELEASES_URL}/{version})
- [Known Issues]({RELEASES_URL}/{version}#known-issues)

## Feedback

Reply below or open an [issue](https://github.com/{GITHUB_REPO}/issues)."""

    return {
        "_meta": {
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "source_manifest_version": version,
            "generator": "community/scripts/generate_release_social.py",
        },
        "primary": primary,
        "short": short,
        "github_discussion": github_discussion,
        "hashtags": [
            "WolfBot",
            "WolfBotCommunity",
            "tradingbot",
            "cryptotrading",
            "selfhosted",
        ],
    }


def generate_og_metadata(manifest: dict) -> dict:
    """Generate Open Graph image metadata for the release."""
    version = manifest["version"]
    channel = manifest.get("channel", "stable")
    channel_label = CHANNEL_LABELS.get(channel, channel)
    platforms = get_platforms(manifest)

    platform_tags = " + ".join(p.title() for p in platforms) if platforms else "Multi-platform"

    return {
        "title": f"{BRAND} v{version}",
        "subtitle": channel_label,
        "platforms": platform_tags,
        "feature_highlight": get_highlights(manifest, max_items=1)[0] if get_highlights(manifest) else "",
        "badge": CHANNEL_BADGES.get(channel, ""),
    }


def generate_website_latest_release(manifest: dict) -> dict:
    """Generate website latest-release block data."""
    version = manifest["version"]
    channel = manifest.get("channel", "stable")
    channel_label = CHANNEL_LABELS.get(channel, channel)
    platforms = get_platforms(manifest)
    highlights = get_highlights(manifest)
    release_date = manifest.get("release_date", datetime.now(timezone.utc).isoformat())

    assets = {}
    if "linux" in manifest and manifest["linux"].get("installer"):
        linux_installer = manifest["linux"]["installer"]
        assets["linux"] = {
            "name": linux_installer.get("name", f"WolfBot-Setup-{version}-linux-amd64.deb"),
            "sha256": linux_installer.get("sha256", ""),
            "size": linux_installer.get("size", ""),
        }
    if "windows" in manifest and manifest["windows"].get("installer"):
        win_installer = manifest["windows"]["installer"]
        assets["windows"] = {
            "name": win_installer.get("name", f"WolfBot-Setup-{version}-windows-x64.exe"),
            "sha256": win_installer.get("sha256", ""),
            "size": win_installer.get("size", ""),
        }

    return {
        "version": version,
        "channel": channel,
        "channel_label": channel_label,
        "channel_badge": CHANNEL_BADGES.get(channel, ""),
        "release_date": release_date,
        "highlights": highlights,
        "platforms": platforms,
        "assets": assets,
        "github_release_url": f"https://github.com/{GITHUB_REPO}/releases/tag/v{version}",
        "download_url": DOWNLOAD_URL,
        "release_notes_url": f"{RELEASES_URL}/{version}",
    }


def generate_release_notes_md(manifest: dict) -> str:
    """Generate user-facing release notes in Markdown."""
    version = manifest["version"]
    channel = manifest.get("channel", "stable")
    channel_label = CHANNEL_LABELS.get(channel, channel)
    highlights = get_highlights(manifest)
    platforms = get_platforms(manifest)
    known_issues = manifest.get("known_issues", [])
    release_date = manifest.get("release_date", datetime.now(timezone.utc).strftime("%Y-%m-%d"))

    def _section(title: str, items: list[str]) -> str:
        if not items:
            return ""
        return f"## {title}\n\n" + "\n".join(f"- {item}" for item in items) + "\n"

    platform_section = ""
    if platforms:
        platform_section = "## Available Installers\n\n"
        for p in platforms:
            platform_section += f"- **{p.title()}** — see [download page]({DOWNLOAD_URL})\n"

    known_section = _section("Known Issues", known_issues)

    return f"""# {BRAND} v{version}

**{channel_label}** · {release_date}

## Highlights

{chr(10).join(f"- {h}" for h in highlights) if highlights else "- Initial release"}

{platform_section}
{known_section}
## Documentation

- [Getting Started](https://community.wolfbot.io/getting-started)
- [Full Documentation](https://community.wolfbot.io/docs)
- [Report an Issue](https://github.com/{GITHUB_REPO}/issues)

## Download

**Recommended:** [{DOWNLOAD_URL}]({DOWNLOAD_URL})

---

{BUILD_ID_LINE if (build_id := manifest.get("build_id", "")) else ""}
{BUILD_ID_LINE if (build_id := manifest.get("build_id", "")) else ""}{BRAND} {BRAND_BY}
"""
    pass  # placeholder for final formatting


# Re-write the function cleanly
def generate_release_notes_md_clean(manifest: dict) -> str:
    """Generate user-facing release notes in Markdown."""
    version = manifest["version"]
    channel = manifest.get("channel", "stable")
    channel_label = CHANNEL_LABELS.get(channel, channel)
    highlights = get_highlights(manifest)
    platforms = get_platforms(manifest)
    known_issues = manifest.get("known_issues", [])
    release_date = manifest.get("release_date", datetime.now(timezone.utc).strftime("%Y-%m-%d"))
    build_id = manifest.get("build_id", "")

    lines = [
        f"# {BRAND} v{version}",
        "",
        f"**{channel_label}** · {release_date}",
        "",
        "## Highlights",
        "",
    ]
    if highlights:
        lines.extend(f"- {h}" for h in highlights)
    else:
        lines.append("- Initial release")

    if platforms:
        lines.extend(["", "## Available Installers", ""])
        for p in platforms:
            lines.append(f"- **{p.title()}** — see [download page]({DOWNLOAD_URL})")

    if known_issues:
        lines.extend(["", "## Known Issues", ""])
        lines.extend(f"- {issue}" for issue in known_issues)

    lines.extend([
        "",
        "## Documentation",
        "",
        f"- [Getting Started](https://community.wolfbot.io/getting-started)",
        f"- [Full Documentation](https://community.wolfbot.io/docs)",
        f"- [Report an Issue](https://github.com/{GITHUB_REPO}/issues)",
        "",
        "## Download",
        "",
        f"**Recommended:** [{DOWNLOAD_URL}]({DOWNLOAD_URL})",
        "",
    ])

    if build_id:
        lines.extend(["---", "", f"Build: `{build_id}`"])

    lines.extend(["", f"{BRAND} · {BRAND_BY}"])

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Generate release social content from WolfBot release manifest"
    )
    parser.add_argument(
        "--manifest", "-m", required=True, help="Path to wolfbot-release.json"
    )
    parser.add_argument(
        "--output", "-o", default=".", help="Output directory for generated files"
    )
    args = parser.parse_args()

    # Load manifest
    manifest = load_manifest(args.manifest)
    version = manifest["version"]

    # Create output directory
    out_dir = Path(args.output) / f"v{version}"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Generate all outputs
    outputs = {
        "release-social.json": generate_release_social(manifest),
        "release-og.json": generate_og_metadata(manifest),
        "website-latest-release.json": generate_website_latest_release(manifest),
        "RELEASE_NOTES.md": generate_release_notes_md_clean(manifest),
    }

    for filename, content in outputs.items():
        filepath = out_dir / filename
        if filename.endswith(".json"):
            with open(filepath, "w") as f:
                json.dump(content, f, indent=2, ensure_ascii=False)
        else:
            with open(filepath, "w") as f:
                f.write(content)
        print(f"  ✓ {filepath}")

    print(f"\nGenerated release social content for v{version} at {out_dir}")

    # Print preview
    social = outputs["release-social.json"]
    print("\n── Social post preview ──\n")
    print(social["primary"])
    print()


if __name__ == "__main__":
    main()
