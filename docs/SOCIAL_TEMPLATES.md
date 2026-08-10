# WolfBot Community — Release Social Automation

**Sections:** 75, 76, 123, 124 (Master Plan V2)  
**Goal:** Mỗi GitHub Release tự động generate social content  

---

## 1. GitHub Release Template (Section 123)

```markdown
# WolfBot Community v{VERSION}

**Release Date:** {DATE} | **Channel:** {CHANNEL}

## Highlights
- {HIGHLIGHT_1}
- {HIGHLIGHT_2}
- {HIGHLIGHT_3}

## Download
### Windows
| File | SHA256 |
|---|---|
| WolfBot-Setup-{VERSION}-windows-x64.exe | {SHA256} |

### Linux
| File | SHA256 |
|---|---|
| WolfBot-Setup-{VERSION}-linux-amd64.deb | {SHA256} |

[Download all →](https://community.wolfbot.io/download)

## What's New
### Added
- {FEATURE_1}
- {FEATURE_2}

### Fixed
- {FIX_1}
- {FIX_2}

## Known Issues
- {ISSUE_1}

## Documentation
- [Getting Started](https://community.wolfbot.io/getting-started)
- [Install Windows](https://community.wolfbot.io/install/windows)
- [Install Linux](https://community.wolfbot.io/install/linux)

## Feedback
[Join the discussion →](https://github.com/wolfbot-io/wolfbot-community/discussions)

**WolfBot Community** — *One Platform. Every Market.*
```

---

## 2. Social Post Templates per Channel

### X/Twitter Post
```
🐺 WolfBot Community v{VERSION} is here!

{BULLET_1}
{BULLET_2}
{BULLET_3}

📥 Download: community.wolfbot.io/download
#WolfBot #TradingBot
```

### LinkedIn Post
```
🚀 WolfBot Community v{VERSION} — {CHANNEL}

We just shipped the latest update to our free self-hosted unified
trading platform connecting crypto exchanges and MT5 brokers —
one platform, every market.

What's new:
✅ {FEATURE_1}
✅ {FEATURE_2}
✅ {FEATURE_3}

📥 community.wolfbot.io/download
📖 github.com/wolfbot-io/wolfbot-community/releases/tag/v{VERSION}

#TradingAutomation #FinTech #Crypto
```

### Telegram/Discord Announcement
```
🐺 **WolfBot Community v{VERSION} is live!**

📦 What's new:
• {FEATURE_1}
• {FEATURE_2}
• {FEATURE_3}

📥 Download: community.wolfbot.io/download
📖 Notes: github.com/wolfbot-io/wolfbot-community/releases/tag/v{VERSION}
💬 Discuss: github.com/wolfbot-io/wolfbot-community/discussions
```

### GitHub Discussion (Release Announcement)
```markdown
# 🐺 WolfBot Community v{VERSION} Released

## What's in this release?
### ✅ New Features
- {FEATURE_1}
- {FEATURE_2}

### 🔧 Fixes
- {FIX_1}

### 📦 Download
- [Windows]({WINDOWS_URL})
- [Linux]({LINUX_URL})

### 📖 Full Release Notes
{RELEASE_URL}

---

💬 Share your feedback below! What should we build next?
```

---

## 3. Release Checklist

```text
Pre-release:
[ ] Build passes (npm run build)
[ ] Release notes drafted
[ ] Social media posts drafted
[ ] Open Graph image generated

Release:
[ ] Tag pushed (git tag v{VERSION})
[ ] GitHub Release published with assets
[ ] Checksums verified
[ ] Download page updated

Post-release:
[ ] Twitter/X post
[ ] LinkedIn post
[ ] Telegram/Discord announcement
[ ] GitHub Discussion created
[ ] Reply to feedback within 24h
```

---

## 4. Release Social Automation Script

File: `scripts/release-social.sh`

```bash
#!/bin/bash
VERSION=$1
CHANNEL=$2
echo "Generating social posts for WolfBot Community v${VERSION} (${CHANNEL})"
python3 scripts/generate_release_social.py --version "$VERSION" --channel "$CHANNEL"
echo "Done."
```

Usage: `./scripts/release-social.sh v0.8.0 Stable`
