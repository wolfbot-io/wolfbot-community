---
title: "WolfBot Community エラーコード — クイック修正リファレンス"
description: "WolfBot Community の全エラーコードを解説: WB-WIN-001 から WB-WIN-004、WB-LNX-001 から WB-LNX-002。インストーラーや起動時のエラーに対する正確な修正方法を見つけましょう。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot error codes",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot installer error",
  "wolfbot linux error",
  "wolfbot windows error code"
]
sitemap_priority: 0.80
lang: "ja"
translation_of: "docs/error-codes"
---

# WolfBot Community エラーコード

**WolfBot Community v0.1.0-p12-ghcr-rc19 でテスト済み** · 最終更新: 2026-08-18

1つのコードに1つの修正。エラーコードは何が失敗したかを正確に教えてくれるので、
推測する必要はありません。以下から自分のコードを見つけて修正を適用し、
問題が続く場合は[完全なトラブルシューティングガイド](/docs/troubleshooting)へ進んでください。

---

## クイック検索テーブル

| エラーコード | 発生箇所 | 一行修正 |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--ディスク容量不足) | Windows インストーラー | ディスクの空き容量を 2 GB 確保 |
| [WB-WIN-002](#wb-win-002--アクセス拒否) | Windows インストーラー | インストーラーを管理者として実行 |
| [WB-WIN-003](#wb-win-003--破損したダウンロード) | Windows インストーラー | 再ダウンロードして SHA256 チェックサムを検証 |
| [WB-WIN-004](#wb-win-004--依存関係の不足) | Windows 初回起動 | Visual C++ Redistributable をインストール |
| [WB-LNX-001](#wb-lnx-001--docker-not-found) | Linux インストーラー | Docker をインストール、またはインストーラーを再実行 |
| [WB-LNX-002](#wb-lnx-002--ポートの競合) | Linux 初回起動 | ポート 8765 を使用しているものを停止 |

---

## Windows エラーコード

### WB-WIN-001 — ディスク容量不足
**症状:** インストーラーが「ディスク容量が不足しています」で失敗する。

**修正:** 少なくとも 2 GB を解放してから再試行してください。まず `C:` ドライブの空き容量を確認しましょう。

### WB-WIN-002 — アクセス拒否
**症状:** インストール中に「アクセスが拒否されました」。

**修正:** インストーラーを右クリックして **管理者として実行** を選択してください。

### WB-WIN-003 — 破損したダウンロード
**症状:** インストーラーが起動しない、または整合性チェックに失敗する。

**修正:** [community.wolfbot.io/download](https://community.wolfbot.io/download) から再ダウンロードし、実行前に SHA256 チェックサムを公式の値と照合してください。[ダウンロードした取引ボットを検証する方法](/docs/how-to-verify-a-downloaded-trading-bot)を参照。

### WB-WIN-004 — 依存関係の不足
**症状:** WolfBot 起動時に「VCRUNTIME140.dll not found」。

**修正:** [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) をインストールしてから WolfBot を再起動してください。

---

## Linux エラーコード

### WB-LNX-001 — Docker Not Found
**症状:** 「Docker is not installed」。

**修正:** `sudo apt-get install docker.io` を実行するか、インストーラーを再実行するだけで構いません — Docker を自動的にインストールして起動します。

### WB-LNX-002 — ポートの競合
**症状:** 「Port 8765 already in use」。

**修正:** `sudo lsof -i :8765` でポートを使用しているプロセスを特定し、そのサービスを停止してから WolfBot を再起動してください。

---

## 関連

- [完全なトラブルシューティングガイド](/docs/troubleshooting) — ネットワーク・更新・パフォーマンス・データの問題。
- [Windows に WolfBot をインストール](/install/windows) — Windows セットアップの正確な手順。
- [Linux に WolfBot をインストール](/install/linux) — Ubuntu/Debian のセットアップとサービス状態。
- [更新とロールバック](/docs/updates) — 更新が失敗したときの対処法。
- 見つからないコードがありますか? [GitHub Discussions で検索](https://github.com/wolfbot-io/wolfbot-community/discussions)するか、[Issue を開いて](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose)ください。
