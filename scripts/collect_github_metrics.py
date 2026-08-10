#!/usr/bin/env python3
"""
GitHub Metrics Collector
=========================
Implements Sections 43-44, 106-108 of the Community Brand/SEO/Growth Master Plan V2.

Collects GitHub repository metrics for the community growth dashboard:
- Stars, watchers, forks
- Release download counts
- Traffic data (views, clones, referrers)
- Discussion/issue counts

Usage:
    python3 collect_github_metrics.py --repo wolfbot-io/wolfbot-community --output community/analytics/

Requires: gh CLI authenticated, or GITHUB_TOKEN env var.
"""

import json
import argparse
import subprocess
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path


def run_gh(args: list[str], check: bool = True) -> dict:
    """Run a gh CLI command and return JSON output."""
    cmd = ["gh", "api"] + args
    result = subprocess.run(cmd, capture_output=True, text=True)
    if check and result.returncode != 0:
        print(f"  ⚠️  gh command failed: {' '.join(cmd)}")
        print(f"     stderr: {result.stderr[:200]}")
        return {}
    try:
        return json.loads(result.stdout) if result.stdout.strip() else {}
    except json.JSONDecodeError:
        return {}


def collect_repo_metrics(owner: str, repo: str) -> dict:
    """Collect repository-level metrics."""
    data = run_gh([f"repos/{owner}/{repo}"])
    if not data:
        return {}

    return {
        "stars": data.get("stargazers_count", 0),
        "watchers": data.get("subscribers_count", 0),
        "forks": data.get("forks_count", 0),
        "open_issues": data.get("open_issues_count", 0),
        "description": data.get("description", ""),
        "topics": data.get("topics", []),
        "updated_at": data.get("updated_at", ""),
    }


def collect_release_metrics(owner: str, repo: str) -> dict:
    """Collect per-release download counts."""
    releases = run_gh([f"repos/{owner}/{repo}/releases?per_page=20"])
    if not isinstance(releases, list):
        return {"total_downloads": 0, "releases": []}

    total = 0
    release_data = []
    for rel in releases:
        assets = rel.get("assets", [])
        downloads = sum(a.get("download_count", 0) for a in assets)
        total += downloads
        release_data.append({
            "tag": rel.get("tag_name", ""),
            "name": rel.get("name", ""),
            "prerelease": rel.get("prerelease", False),
            "published_at": rel.get("published_at", ""),
            "downloads": downloads,
        })

    return {
        "total_downloads": total,
        "release_count": len(release_data),
        "releases": release_data,
    }


def collect_traffic_metrics(owner: str, repo: str) -> dict:
    """Collect GitHub traffic data (views, clones, referrers)."""
    views = run_gh([f"repos/{owner}/{repo}/traffic/views?per=week"])
    clones = run_gh([f"repos/{owner}/{repo}/traffic/clones?per=week"])
    referrers = run_gh([f"repos/{owner}/{repo}/traffic/popular/referrers"])

    return {
        "views_14d": views.get("count", 0) if isinstance(views, dict) else 0,
        "unique_visitors_14d": views.get("uniques", 0) if isinstance(views, dict) else 0,
        "views_daily": views.get("views", []) if isinstance(views, dict) else [],
        "clones_14d": clones.get("count", 0) if isinstance(clones, dict) else 0,
        "unique_cloners_14d": clones.get("uniques", 0) if isinstance(clones, dict) else 0,
        "top_referrers": referrers if isinstance(referrers, list) else [],
    }


def collect_community_metrics(owner: str, repo: str) -> dict:
    """Collect discussion and issue counts."""
    discussions_query = """
    query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        discussions(first: 100, states: OPEN) {
          totalCount
        }
      }
    }
    """
    # Use REST API as approximation
    issues = run_gh([f"repos/{owner}/{repo}/issues?state=open&per_page=1"], check=False)
    total_issues = int(subprocess.run(
        ["gh", "api", f"repos/{owner}/{repo}/issues?state=open&per_page=1",
         "--jq", ".length"],
        capture_output=True, text=True
    ).stdout.strip() or 0)

    return {
        "open_issues": total_issues,
    }


def main():
    parser = argparse.ArgumentParser(description="Collect WolfBot Community GitHub metrics")
    parser.add_argument("--repo", default="wolfbot-io/wolfbot-community", help="GitHub repo (owner/repo)")
    parser.add_argument("--output", "-o", default="community/analytics/", help="Output directory")
    args = parser.parse_args()

    owner, repo = args.repo.split("/")
    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H%M%S")

    print(f"Collecting metrics for {owner}/{repo}...\n")

    # Collect all metrics
    repo_data = collect_repo_metrics(owner, repo)
    release_data = collect_release_metrics(owner, repo)
    traffic_data = collect_traffic_metrics(owner, repo)
    community_data = collect_community_metrics(owner, repo)

    # Assemble snapshot
    snapshot = {
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "repo": f"{owner}/{repo}",
        "metrics": {
            "repo": repo_data,
            "releases": release_data,
            "traffic": traffic_data,
            "community": community_data,
        },
    }

    # Write snapshot
    snapshot_file = out_dir / f"github-metrics-{timestamp}.json"
    with open(snapshot_file, "w") as f:
        json.dump(snapshot, f, indent=2, ensure_ascii=False)
    print(f"\n  ✓ Metrics saved to {snapshot_file}")

    # Print summary
    print("\n── GitHub Metrics Summary ──")
    print(f"  ⭐ Stars:      {repo_data.get('stars', 'N/A')}")
    print(f"  👁️  Watchers:   {repo_data.get('watchers', 'N/A')}")
    print(f"  📥 Downloads:  {release_data.get('total_downloads', 'N/A')}")
    print(f"  📊 Views (14d): {traffic_data.get('views_14d', 'N/A')}")
    print(f"  🐛 Issues:     {community_data.get('open_issues', 'N/A')}")
    print()


if __name__ == "__main__":
    main()
