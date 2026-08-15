---
title: "WolfBot Community バックアップ & 復元"
description: "Windows と Linux で WolfBot Community の設定、口座、設定をバックアップ・復元する方法。"
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/updates"
previous_guide: "/docs/troubleshooting"
related_guides: ["/docs/updates", "/docs/troubleshooting", "/security"]
keywords: ["wolfbot backup", "wolfbot restore", "wolfbot config backup", "backup trading bot settings"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "docs/backup"
---

# バックアップ & 復元

**WolfBot Community v0.1.0-p12-ghcr-rc8 でテスト済み** · 最終更新: 2026-08-15

## 何がバックアップされるのか?

WolfBot Community のバックアップにはセットアップ全体が含まれます:

- **口座設定** — 接続された暗号通貨取引所と MT5 ブローカー (API キーは暗号化)
- **リスク管理設定** — すべての上限、ドローダウン保護、クールダウン
- **戦略設定** — ボット設定
- **ユーザー設定** — インターフェースおよび表示設定

---

## バックアップの作成 (CLI)

WolfBot Community はコマンドラインでバックアップと復元を提供します。

### Linux

```bash
# 圧縮ファイルにバックアップを作成
wolfbot backup

# 既定のバックアップディレクトリに保存されます
```

### Windows

```bash
# WolfBot CLI でバックアップを作成
wolfbot backup
```

> ℹ️ バックアップコマンドは設定と設定をバックアップします。市場データと取引履歴は WolfBot に保存され、必要に応じて別途エクスポートできます。

---

## 復元 (CLI)

### Linux

```bash
# バックアップから復元
wolfbot restore-backup
```

### Windows

```bash
wolfbot restore-backup
```

プロンプトに従ってバックアップファイルを選択します。

---

## バックアップ保存場所

既定では、WolfBot は指定された場所にバックアップを保存します:

| OS | 既定のバックアップディレクトリ |
|---|---|
| Linux | `/opt/wolfbot/backups/` |
| Windows | `%USERPROFILE%\.wolfbot\backups\` |

---

## ベストプラクティス

### 定期的なバックアップ

- 大きな設定変更後にバックアップ
- アップデート前にバックアップ
- アクティブに取引中の場合は週次バックアップ
- バックアップを別の安全な場所に保管

### セキュリティ

- バックアップには暗号化された API シークレットが含まれる
- バックアップファイルを機密として扱う
- 暗号化されていないクラウドストレージにバックアップを保管しない
- 不要になった古いバックアップを削除

---

## 自動バックアップ

Linux では cron でバックアップをスケジュールできます:

```bash
# 例: 毎週日曜の午前3時にバックアップ
0 3 * * 0 wolfbot backup
```

---

## 新しいマシンでのバックアップ & 復元

新しいマシンへ移行するには:

1. **旧マシンで:** `wolfbot backup` を実行
2. **バックアップファイルを転送** — 安全に (例: SSH/SCP)
3. **新マシンで:** WolfBot Community をインストール
4. `wolfbot restore-backup` を実行し、転送したファイルを選択

---

## トラブルシューティング

| 問題 | 解決策 |
|---|---|
| バックアップコマンドが見つからない | WolfBot が正しくインストールされているか確認; ターミナル再起動 |
| 復元に失敗 | バックアップファイルが破損していないか確認 |
| "Permission denied" (Linux) | `sudo` を使用するか、ファイル権限を確認 |

---

## 次のステップ

> **[アップデートガイド →](/docs/updates)**
