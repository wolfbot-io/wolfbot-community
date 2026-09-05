---
title: "WolfBot Community のアップデート — Windows & Linux"
description: "チャネルとロールバックを含め、Windows と Linux で WolfBot Community を最新バージョンにアップデートする方法。"
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/backup"
related_guides: ["/docs/backup", "/docs/troubleshooting", "/releases/channels"]
keywords: ["wolfbot update", "wolfbot upgrade", "update trading bot", "wolfbot auto update"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "docs/updates"
---

# アップデート

**WolfBot Community v0.1.0-beta.9 でテスト済み** · 最終更新: 2026-08-15

## アップデート方法

WolfBot Community は、必要に応じて以前のバージョンに戻せる簡単なアップデートを提供します。

---

## 自動アップデート

既定では、WolfBot はアップデートを確認してダウンロードします:

1. 起動時に、WolfBot が構成済みチャネルの新しいリリースを確認
2. アップデートがあれば通知
3. 適用タイミングを選択
4. アップデートがダウンロード・検証・適用される

> ℹ️ 実取引には **Stable** チャネルが推奨されます。インストールするリリースでチャネルを選択します ([リリースチャネル](/releases/channels) 参照)。

---

## 手動アップデート (CLI)

### Linux

```bash
# 最新バージョンへアップデート
wolfbot update
```

### Windows

```bash
wolfbot update
```

---

## ロールバック

アップデートが問題を引き起こした場合、以前のバージョンに戻せます:

```bash
wolfbot rollback
```

以前にインストールされていたバージョンを復元します。

---

## アップデートチャネル

リスクプロファイルに合ったチャネルを選択:

| チャネル | 推奨対象 | 更新頻度 |
|---|---|---|
| **Stable** | 実取引 | 月次 |
| **Beta** | テスター | 週次 |
| **Dev Preview** | 開発者 | 週に複数回 |

> 💡 完全な説明は [リリースチャネル](/releases/channels) 参照

---

## アップデート前

### 1. バックアップを作成

アップデート前に必ずバックアップを作成してください:

```bash
wolfbot backup
```

### 2. ポジション状態を確認

- 重要なポジションが無防備でないか確認
- 不確実なら TP/SL レベルを確認
- 大きなアップデート前は一時停止を検討

### 3. タイミングを選ぶ

- アクティブな取引時間外にアップデート
- 再起動のため数分を計画
- ロールバック計画を用意

---

## アップデート中

WolfBot:
1. 新しいリリースをダウンロード
2. 整合性を検証 (チェックサム)
3. 現在のバージョンをバックアップ
4. アップデートを適用
5. サービスを再起動
6. 起動を確認

---

## アップデート後

1. WolfBot が正しく起動するか確認
2. すべての口座が接続されているか確認
3. リスク管理が無傷か確認
4. 最初の取引を注意深く監視

---

## アップデートのトラブルシューティング

| 問題 | 解決策 |
|---|---|
| アップデート失敗 | `wolfbot rollback` で以前のバージョンへ復元 |
| アップデート後にサービスが起動しない | ログ確認; `wolfbot logs` |
| アップデート後に口座が切断 | 再接続; 必要ならバックアップから復元 |
| ダウンロードが遅い | 再試行; ファイアウォール/ネットワーク問題を確認 |

---

## よくある質問

**Q: アップデートで設定が失われますか?**
いいえ。アップデートは設定を保持します。それでもベストプラクティスとしてバックアップを推奨します。

**Q: 特定の古いバージョンに戻せますか?**
`wolfbot rollback` は以前のバージョンに戻ります。任意のバージョンは [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) から希望のリリースを再インストールしてください。

**Q: アップデートは無停止ですか?**
いいえ、WolfBot サービスはアップデート中に再起動されます (通常数秒〜数分)。

---

## 次のステップ

> **[トラブルシューティング →](/docs/troubleshooting)**
