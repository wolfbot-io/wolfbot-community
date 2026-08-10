#!/usr/bin/env python3
"""
SEO Sitemap Generator for community.wolfbot.io
===============================================
Implements Section 52 of the Community Brand/SEO/Growth Master Plan V2.

Reads content frontmatter from all .md files in community/website/content/
and generates a standards-compliant sitemap.xml.

Usage:
    python3 generate_sitemap.py --content-dir community/website/content/ --output sitemap.xml
"""

import os
import re
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional
from xml.etree.ElementTree import Element, SubElement, tostring
from xml.dom import minidom


BASE_URL = "https://community.wolfbot.io"

# Priority defaults by category
CATEGORY_PRIORITY = {
    "install": 0.9,
    "getting-started": 0.9,
    "broker-setup": 0.85,
    "simulation": 0.85,
    "live-trading": 0.8,
    "risk-controls": 0.8,
    "smart-terminal": 0.8,
    "external-signals": 0.7,
    "custom-strategies": 0.7,
    "updates": 0.7,
    "backup": 0.7,
    "troubleshooting": 0.8,
    "academy": 0.7,
    "security": 0.8,
    "faq": 0.8,
    "release": 0.85,
}

# Default change frequency by category
CATEGORY_CHANGEFREQ = {
    "install": "weekly",
    "getting-started": "weekly",
    "broker-setup": "weekly",
    "simulation": "weekly",
    "live-trading": "weekly",
    "risk-controls": "weekly",
    "smart-terminal": "weekly",
    "external-signals": "monthly",
    "custom-strategies": "monthly",
    "updates": "daily",
    "backup": "monthly",
    "troubleshooting": "weekly",
    "academy": "monthly",
    "security": "monthly",
    "faq": "monthly",
    "release": "daily",
}


def parse_frontmatter(content: str) -> Optional[dict]:
    """Extract YAML-like frontmatter from markdown content."""
    match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return None
    fm_text = match.group(1)
    meta = {}
    for line in fm_text.split('\n'):
        if ':' in line:
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            meta[key] = value
    return meta


def resolve_url_path(filepath: Path, content_dir: Path) -> str:
    """Convert content file path to URL path."""
    rel = filepath.relative_to(content_dir)
    stem = str(rel.with_suffix(''))
    if stem == 'getting-started':
        return '/getting-started'
    return f'/{stem}'


def generate_sitemap(content_dir: str, output_path: str) -> str:
    """Generate sitemap.xml from content directory."""
    content_dir = Path(content_dir)

    urlset = Element('urlset', {
        'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    })

    entries = []

    for md_file in sorted(content_dir.rglob('*.md')):
        with open(md_file) as f:
            content = f.read()

        fm = parse_frontmatter(content)
        if not fm:
            continue

        # Skip noindex pages
        if fm.get('noindex', '').lower() == 'true':
            continue

        url_path = resolve_url_path(md_file, content_dir)
        category = fm.get('category', '')
        lastmod = fm.get('last_updated', datetime.now(timezone.utc).strftime('%Y-%m-%d'))
        priority = fm.get('sitemap_priority') or CATEGORY_PRIORITY.get(category, 0.5)
        changefreq = CATEGORY_CHANGEFREQ.get(category, 'weekly')

        entries.append({
            'url': f"{BASE_URL}{url_path}",
            'lastmod': lastmod,
            'changefreq': changefreq,
            'priority': str(priority),
        })

    # Sort by priority (highest first)
    entries.sort(key=lambda e: float(e['priority']), reverse=True)

    for entry in entries:
        url_elem = SubElement(urlset, 'url')
        SubElement(url_elem, 'loc').text = entry['url']
        SubElement(url_elem, 'lastmod').text = entry['lastmod']
        SubElement(url_elem, 'changefreq').text = entry['changefreq']
        SubElement(url_elem, 'priority').text = entry['priority']

    xml_str = minidom.parseString(tostring(urlset, 'utf-8')).toprettyxml(indent='  ')

    if output_path:
        with open(output_path, 'w') as f:
            f.write(xml_str)
        print(f"  ✓ Sitemap written to {output_path} ({len(entries)} URLs)")

    # Print summary
    print(f"\n── Sitemap Summary ──")
    for entry in entries[:10]:
        print(f"  {entry['priority']}  {entry['url']}")
    if len(entries) > 10:
        print(f"  ... and {len(entries) - 10} more URLs")

    return xml_str


def main():
    parser = argparse.ArgumentParser(description="Generate sitemap.xml for community.wolfbot.io")
    parser.add_argument("--content-dir", default="community/website/content/", help="Content directory")
    parser.add_argument("--output", "-o", default="sitemap.xml", help="Output file path")
    args = parser.parse_args()

    generate_sitemap(args.content_dir, args.output)


if __name__ == "__main__":
    main()
