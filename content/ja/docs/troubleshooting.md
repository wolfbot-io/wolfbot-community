---
title: "WolfBot Community トラブルシューティング — 一般的な問題"
description: "一般的な WolfBot Community の問題を解決 — 接続エラー、注文拒否、サービスが起動しない、など。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "15 minutes"
next_guide: "/docs/backup"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/backup", "/security", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot troubleshooting", "wolfbot error", "trading bot connection error", "wolfbot not starting", "api key error"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "docs/troubleshooting"
---

# トラブルシューティング

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-15

## クイック診断

WolfBot には一般的な問題を自動検出する診断コマンドが含まれています:

```bash
wolfbot doctor
```

何かが機能しないときはまずこのコマンドを実行してください — サービス状態、設定、ネットワーク、一般的な設定ミスを確認します。

---

## 一般的な問題

### 1. サービスが起動しない

**症状:** インターフェースが読み込まれない、サービスが起動しない。

**確認:**

```bash
# Linux
sudo systemctl status wolfbot

# Windows
# サービス (services.msc) で "WolfBot" を検索
```

**解決策:**
- ログ確認: `wolfbot logs`
- ポートが占有されていないか確認
- 設定変更後に再起動
- 継続する場合: `wolfbot repair` を実行

---

### 2. API キーが無効

**症状:** "API key invalid" または "Authentication failed"。

**解決策:**
1. WolfBot → **Exchange Accounts** でキーを再入力
2. キーが取引所で期限切れまたは削除されていないか確認
3. キーに **Trade** 権限があるか確認
4. IP バインド時、自分の IP が一致するか確認
5. 取引所で新しいキーを生成して再接続

---

### 3. 注文が拒否される

**症状:** 注文が発注されない、"Order rejected"。

**一般的な原因:**
- リスク上限超過 (サイズ, レバレッジ, 1日の上限)
- 残高不足
- シンボル利用不可
- 価格がティックサイズ外

**解決策:**
- リスク管理設定を確認
- 残高を確認
- 選択した口座のシンボルを確認
- 注文サイズを取引所のティックサイズに合わせる

---

### 4. 接続問題

**症状:** ブローカーまたは MT5 接続が切断、"Connection lost"。

**解決策:**
- ネットワーク接続を確認
- 取引所のステータスを確認 (メンテナンス?)
- MT5 の場合: MT5 が実行中でログイン済みか確認
- ファイアウォール設定を確認
- VPS の場合: サービスが実行中か確認

---

### 5. データが表示されない

**症状:** 残高、ポジション、チャートが読み込まれない。

**解決策:**
- ブローカー/MT5 接続を確認
- API キー権限を確認 (Read が有効であること)
- インターフェースを更新/再読み込み
- ログでデータエラーを確認

---

### 6. MT5 が接続しない

**症状:** MT5 が表示されない、または注文が拒否される。

**解決策:**
- MT5 が実行中でブローカーにログイン済みか確認
- Linux の場合: MT5 コンテナがアクティブか確認 ([MT5 ガイド](/brokers/mt5) 参照)
- MT5 で: Tools → Options → Expert Advisors → **Allow Automated Trading** を有効化
- ブローカーの最小ロットサイズと取引時間を確認

---

## ログ

### ログを表示

```bash
# Linux
wolfbot logs

# Windows
# ログは %USERPROFILE%\.wolfbot\logs\ にあります
```

### ログの理解

ログは識別のためタグを使用します:
- `[EXEC]` — 注文実行
- `[TP/SL]` — テイクプロフィット/ストップロス
- `[COOLDOWN]` — クールダウンイベント
- `[FETCHER]` — 市場データ取得
- `[MT5-BRIDGE]` — MT5 ブリッジイベント

---

## 修復コマンド

設定が破損しているか、サービスが悪い状態の場合:

```bash
wolfbot repair
```

これは:
- 設定の整合性を確認
- 一般的な設定問題を修復
- 破損状態を復元

---

## バックアップからの復元

すべてが失敗したら、バックアップから復元します:

```bash
wolfbot restore-backup
```

[バックアップ & 復元参照 →](/docs/backup)

---

## 助けを求めるべきとき

問題を解決できない場合:
1. 関連ログを収集 (シークレットはマスク!)
2. 再現手順を記録
3. [GitHub Discussion](https://github.com/wolfbot-io/wolfbot-community/discussions) を作成
4. 詳細を提供: OS、バージョン、ブローカー、エラーメッセージ

> ⚠️ ディスカッションで API キー、パスワード、個人データを絶対に共有しないでください。

---

## 次のステップ

> **[バックアップ & 復元 →](/docs/backup)**
