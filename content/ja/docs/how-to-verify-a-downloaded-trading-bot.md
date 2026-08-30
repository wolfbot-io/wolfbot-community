---
title: "ダウンロードした取引ボットを検証する方法 — インストール前に確認すべきこと"
description: "取引ボットをインストールする前に、ソースとファイルを検証しましょう。公式リリース・ダイジェスト・署名と照合してダウンロードを確認する方法を解説し、未検証の取引ソフトウェアを実行しないようにします。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/security"
related_guides: ["/security", "/faq", "/about", "/download"]
keywords: [
  "verify downloaded trading bot",
  "verify trading bot checksum",
  "trading software authenticity",
  "check wolfbot download sha256",
  "safe install trading bot",
  "verify bot download linux"
]
sitemap_priority: 0.7
lang: "ja"
translation_of: "docs/how-to-verify-a-downloaded-trading-bot"
---

# ダウンロードした取引ボットを検証する方法

**WolfBot Community v0.1.0-beta.4 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **取引ボットをダウンロードした(またはこれからダウンロードする)方で、それが本物であることを確認したい方** — 2分でできる2つのチェックを紹介します。
- **技術的な背景のある方** — メンテナーが公開しているダイジェストと署名を使って、バイナリを独立して確認する方法を説明します。

## なぜ検証が必要なのか

取引ソフトウェアはあなたの取引所とお金に触れます。「WolfBot」という名前のバイナリは誰でも公開できます — 最も安全な習慣は、実行する**前**に、ファイルが名前の通り本物であることを確認することです。確認できる2つのシグナルがあります:

1. **どこから来たか** — 公式のリリースソース。
2. **ファイルの実体は何か** — 一致するダイジェストと署名。

## 2分でできるチェック

**1. 公式ソースを使う。**

公式の GitHub リポジトリ(`github.com/wolfbot-io/wolfbot-community`)または `community.wolfbot.io` からのみダウンロードしてください。それ以外の場所 — 適当なブログ、ミラーサイト、DM — で提供されるファイルは、定義上未検証です。

**2. チェックサムを比較する。**

WolfBot は各インストーラーの **SHA-256 ダイジェスト** を公開しています(ダウンロードページとリリースノートに記載)。ダウンロード後:

```bash
# Linux/macOS
sha256sum WolfBot-Setup-linux-amd64.deb
# Windows (PowerShell)
Get-FileHash .\WolfBot-Setup.exe -Algorithm SHA256
```

出力は公開されたダイジェストと完全に一致する必要があります。一致しない場合、そのファイルはオリジナルではありません — インストールしないでください。

**3. (技術的な確認) 署名を検証する。**

公式リリースは暗号学的に署名されています。プロジェクトの公開鍵に対して署名を検証すれば、ハッシュ化されたファイルとは独立して、誰がビルドしたかを確認できます。

## 危険信号

- ダイジェストが公開された値と**一致しない**。
- ファイルが公式リポジトリ/コミュニティサイト以外のソースから来ている。
- ダウンロード元のページが本物の wolfbot.io/github ドメインではない。
- 未検証のソースからインストーラーを管理者として実行するよう求められる。

これらのいずれかに該当する場合は中止し、公式リリースからダウンロードし直してください。

## WolfBot Community がこれを公開する理由

透明性はセルフホスティングを安全にする要素の一部です。常にインストールする内容を検証できるため、ダウンロードページの名前を鵜呑みにする必要はありません。

## 次に読むべきもの

- [セキュリティ →](/security)
- [About と公式ソース →](/about)
- [公式リリースをダウンロード →](/download)

## 次のステップ

> **[セキュリティページを読む →](/security)**
