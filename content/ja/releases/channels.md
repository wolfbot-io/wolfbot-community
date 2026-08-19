---
title: "WolfBot Community リリースチャネルの説明"
description: "WolfBot Community のリリースチャネルを理解する: Stable, Beta, RC, Alpha, Dev Preview。正しいチャネルを選びましょう。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["wolfbot release channels", "wolfbot stable beta", "wolfbot dev preview", "wolfbot version"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "releases/channels"
---

# リリースチャネルの説明

**WolfBot Community v0.1.0-p12-ghcr-rc19 でテスト済み** · 最終更新: 2026-08-15

## 利用可能なチャネル

| チャネル | 状態 | 対象 | 自動更新 |
|---|---|---|---|
| **Stable** | 本番対応 | 実取引者 | ✅ |
| **RC** (Release Candidate) | 最終テスト | 慎重なアーリーアダプター | 任意 |
| **Beta** | 機能プレビュー | テスター、愛好家 | ✅ |
| **Alpha** | 初期機能テスト | 技術テスター | 任意 |
| **Dev Preview** | 最新ビルド | 開発者、フィードバック | 手動 |

---

## Stable

すべての品質段階を通過した本番対応リリース。

- **更新頻度:** 1〜2 か月ごと
- **リスク:** 最低
- **最適:** 実取引、本番利用
- **サポート:** 完全なコミュニティサポート

> ✅ すべての実取引に推奨。

---

## Beta

より広いテスト段階にある機能完備ビルド。

- **更新頻度:** 1〜2 週間ごと
- **リスク:** 低 — 機能は動くがエッジケースがある可能性
- **最適:** Stable 前に新機能をテスト
- **サポート:** コミュニティフィードバック歓迎

---

## Dev Preview

最新の開発ビルド — 最新機能、最もテストされていない。

- **更新頻度:** 週に複数回
- **リスク:** 中 — 機能が未完成の場合がある
- **最適:** 開発者、早期フィードバック、愛好家
- **サポート:** ベストエフォート

> ⚠️ Dev Preview には未完成の機能が含まれる場合があります。既定モードは Simulation です。

---

## チャネルの仕組み

```text
Dev Preview (頻繁)
    ↓
Alpha (機能テスト)
    ↓
Beta (より広いテスト)
    ↓
RC (Release Candidate)
    ↓
Stable (本番)
```

各ビルドは不変です — 公開済みリリースを決して変更しません。バグが見つかると新バージョンが公開されます。

---

## 現在の状態

WolfBot Community は現在 **Public Preview**(Beta 段階)です。

```text
Stable: 未公開
現在の公開バージョン: v0.1.0-p12-ghcr-rc19
```

意味:
- ソフトウェアは機能し、インストール可能
- 機能は広くテスト中
- バージョン間に破壊的変更が発生しうる
- テスト時はデモ口座を推奨

---

## チャネルの変更

アプリ内のチャネル切り替えはありません — チャネルは単にダウンロードしてインストールするリリースです。より新しい機能を試すには、ダウンロードページの Stable リンクではなく [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) から Beta または Dev Preview ビルドを取得してください; インストーラーはどちらにしても既存のインストールをその場で更新します。

より実験的なチャネルを試すときは、まずデモ口座でテストすることをお勧めします。

---

## バージョン番号体系

```text
MAJOR.MINOR.PATCH-channel.NUMBER

0.1.0-p12-ghcr-rc19
│   │  │
│   │  └── チャネル: beta, ビルド 2
│   └───── マイナーバージョン (機能リリース)
└───────── メジャーバージョン (0 = Stable 前)
```

Stable バージョンは `1.0.0`, `1.1.0` などを使用します。

---

## GitHub Releases

すべてのリリースは [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) に公開されます:

- **Pre-release:** Dev Preview, Alpha, Beta, RC
- **Full Release:** Stable のみ
- 各リリースに含まれるもの: インストーラーファイル、チェックサム、リリースノート

---

## 次のステップ

> **[アップデートガイド →](/docs/updates)**
