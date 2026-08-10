#!/usr/bin/env python3
"""
Broker Capability Manifest Generator
=====================================
Implements Sections 21-22, 144-145 of the Community Brand/SEO/Growth Master Plan.

Generates a broker-capabilities.json from certified test evidence and
release manifest data. This single source of truth drives:
- community.wolfbot.io/brokers page
- GitHub README broker status table
- Release notes broker section

Usage:
    python3 generate_broker_capabilities.py \\
        --evidence-dir docs/ \\
        --output community/website/content/brokers/
"""

import json
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional


# ── Broker capability schema v1 ────────────────────────────────────

BROKERS = ["binance", "bybit", "bingx", "kucoin", "bitget", "mt5"]

STATUS_LEVELS = ["stable", "beta", "experimental", "unsupported"]

CAPABILITIES = [
    "demo",
    "live",
    "market_order",
    "limit_order",
    "tp_sl",
    "dca",
    "hedge_mode",
    "terminal",
    "strategy",
]


def get_default_capabilities() -> dict:
    """Return the default broker capabilities manifest structure."""
    return {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "brokers": {},
    }


def get_empty_broker_entry(name: str) -> dict:
    """Return an empty broker entry with all capabilities set to 'unsupported'."""
    return {
        "name": name,
        "display_name": name.upper() if name != "mt5" else "MT5",
        "overall_status": "unsupported",
        "platforms": ["linux", "windows"],
        "capabilities": {cap: "unsupported" for cap in CAPABILITIES},
        "certified_version": None,
        "last_certified": None,
        "notes": "",
    }


def load_certified_status(evidence_dir: Path) -> dict:
    """Scan broker evidence files to determine certified status.

    This is a placeholder that reads a local certification manifest.
    In production, this should read from the release pipeline output.
    """
    cert_path = evidence_dir / "unified-platform" / "P13" / "p13-broker-capability-evidence.json"
    if cert_path.exists():
        with open(cert_path) as f:
            return json.load(f)

    # Fallback: return default certified status (conservative)
    return {"brokers": {}}


def generate_capability_manifest(
    evidence_dir: Path,
    certified_version: Optional[str] = None,
) -> dict:
    """Generate the full broker capability manifest."""
    manifest = get_default_capabilities()

    certified = load_certified_status(evidence_dir)

    for broker_id in BROKERS:
        entry = get_empty_broker_entry(broker_id)

        # Check certified data
        broker_cert = certified.get("brokers", {}).get(broker_id, {})
        if broker_cert:
            entry["overall_status"] = broker_cert.get("overall_status", "unsupported")
            entry["capabilities"] = broker_cert.get("capabilities", entry["capabilities"])
            entry["certified_version"] = broker_cert.get("version", certified_version)
            entry["last_certified"] = broker_cert.get("last_certified")

        manifest["brokers"][broker_id] = entry

    if certified_version:
        manifest["certified_version"] = certified_version

    return manifest


def generate_broker_matrix_html(manifest: dict) -> str:
    """Generate an HTML table of broker support suitable for the website."""
    rows = []
    for broker_id, broker in manifest["brokers"].items():
        status = broker["overall_status"]
        status_class = {
            "stable": "status-stable",
            "beta": "status-beta",
            "experimental": "status-experimental",
        }.get(status, "status-unsupported")

        capabilities_str = " ".join(
            f'<span class="cap-{cap} cap-{broker["capabilities"].get(cap, "unsupported")}">{cap}</span>'
            for cap in ["demo", "live", "terminal", "strategy"]
        )

        rows.append(
            f'<tr><td><strong>{broker["display_name"]}</strong></td>'
            f'<td class="{status_class}">{status.title()}</td>'
            f"<td>{capabilities_str}</td></tr>"
        )

    return f"""<table class="broker-matrix">
<thead><tr><th>Broker</th><th>Status</th><th>Capabilities</th></tr></thead>
<tbody>{''.join(rows)}</tbody>
</table>"""


def generate_broker_matrix_md(manifest: dict) -> str:
    """Generate a Markdown table of broker support for GitHub README."""
    lines = ["| Broker | Status | Capabilities |", "|---|---|---|"]
    for broker_id, broker in manifest["brokers"].items():
        status = broker["overall_status"].title()
        caps = ", ".join(
            cap
            for cap in ["demo", "live", "terminal", "strategy"]
            if broker["capabilities"].get(cap) != "unsupported"
        )
        if not caps:
            caps = "—"
        lines.append(f"| {broker['display_name']} | {status} | {caps} |")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Generate broker capability manifest for WolfBot Community"
    )
    parser.add_argument(
        "--evidence-dir", default="docs/", help="Directory containing broker evidence files"
    )
    parser.add_argument(
        "--output", "-o", default=".", help="Output directory"
    )
    parser.add_argument(
        "--version", help="Certified WolfBot version (e.g., 0.8.0-beta.2)"
    )
    args = parser.parse_args()

    evidence_dir = Path(args.evidence_dir)
    manifest = generate_capability_manifest(evidence_dir, args.version)

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Write JSON manifest
    manifest_path = out_dir / "broker-capabilities.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    print(f"  ✓ {manifest_path}")

    # Write Markdown matrix (for GitHub README)
    md_path = out_dir / "broker-matrix.md"
    md_content = generate_broker_matrix_md(manifest)
    with open(md_path, "w") as f:
        f.write(md_content)
    print(f"  ✓ {md_path}")

    # Print summary
    print("\n── Broker Support Summary ──\n")
    for broker_id, broker in manifest["brokers"].items():
        print(f"  {broker['display_name']:10s} → {broker['overall_status']:14s} "
              f"(certified: {broker.get('certified_version', 'none')})")
    print()


if __name__ == "__main__":
    main()
