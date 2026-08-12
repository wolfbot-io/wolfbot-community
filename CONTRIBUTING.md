# Contributing to WolfBot Community

Thanks for your interest in WolfBot Community!

## What lives in this repository

This repository (`wolfbot-io/wolfbot-community`) contains the
**community.wolfbot.io website source** (documentation, broker guides, the
download/release pages) and the public issue tracker for the WolfBot
Community product. The WolfBot trading engine itself is closed-source and
distributed only as signed, compiled installers via
[GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases)
— see [SECURITY.md](SECURITY.md) for the signed-release/verification model.

That means:

- **Website/docs fixes** (typos, unclear steps, outdated screenshots,
  broken links, new broker guides) — pull requests welcome.
- **The trading engine itself** (execution, risk, strategies) — not
  open for external code contributions; report bugs via
  [Issues](https://github.com/wolfbot-io/wolfbot-community/issues) instead.

## Ways to contribute without writing code

- **Report bugs** — use the [Bug Report](../../issues/new/choose) form.
  Include your OS, WolfBot version, and steps to reproduce.
- **Report broker/install problems** — dedicated forms exist for these,
  they help us triage faster than a blank issue.
- **Suggest features** — open a
  [Feature Request](../../issues/new/choose), or start a discussion in the
  [Ideas category](https://github.com/wolfbot-io/wolfbot-community/discussions/categories/ideas).
- **Answer questions** — [Discussions Q&A](https://github.com/wolfbot-io/wolfbot-community/discussions)
  is community-run; helping other users is genuinely valuable.
- **Improve docs** — see below.

## Submitting a documentation/website pull request

1. Fork this repository and create a branch from `main`.
2. Content pages live in `content/*.md` (frontmatter + Markdown); site code
   lives in `app/` and `components/` (Next.js).
3. Before opening a PR, run locally:
   ```bash
   npm install
   npm run typecheck
   npm run sitemap && npm run build
   ```
4. Keep changes focused — one topic per pull request.
5. If you're updating a guide, verify the steps against a real install
   first and update the `tested_version` / `last_updated` frontmatter
   fields accordingly (see [SUPPORT.md](SUPPORT.md) for what a good bug
   report/PR description looks like).

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you agree to uphold it.

## Security issues

Do not open a public issue for a security vulnerability — see
[SECURITY.md](SECURITY.md) for how to report it privately.
