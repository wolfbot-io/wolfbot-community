---
title: "WolfBot Community のインストール (Windows)"
description: "Windows に WolfBot Community をステップバイステップでインストールする方法 — システム要件、インストーラー、初回起動。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/binance"
related_guides: ["/getting-started", "/docs/troubleshooting"]
keywords: ["wolfbot windows install", "wolfbot windows setup", "install wolfbot on windows", "trading bot windows"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "install/windows"
---

# Windows に WolfBot Community をインストール

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-15

## システム要件

| 要件 | 最小 | 推奨 |
|---|---|---|
| **OS** | Windows 10+ | 最新の安定版 |
| **RAM** | 4 GB | 8 GB |
| **ストレージ** | 2 GB 空き | 5 GB 空き |
| **インターネット** | 必須 | 有線接続 |

---

## インストール手順

### ステップ 1: インストーラーをダウンロード

1. [ダウンロードページ](/download) へ
2. **Windows Installer** をダウンロード
3. ファイルが `Downloads` フォルダに保存されます

### ステップ 2: インストーラーを実行

1. ダウンロードした `.exe` ファイルをダブルクリック
2. Windows SmartScreen 警告が表示されたら **詳細情報 → 実行** をクリック
3. インストールウィザードの指示に従う
4. 既定のインストール先をそのまま使うか、任意の場所を選択

### ステップ 3: 初回起動

1. スタートメニューまたはデスクトップから **WolfBot Community** を起動
2. ブラウザが自動で開き、ダッシュボードが表示されます
3. オンボーディングの指示に従って設定

---

## インストールの確認

正常にインストールされると:

- ✅ スタートメニューに WolfBot Community が存在
- ✅ ブラウザにダッシュボードが開く
- ✅ CLI コマンド `wolfbot` が利用可能 (PowerShell で)

```powershell
# インストール確認
wolfbot doctor
```

---

## MT5 の使用(任意)

WolfBot Community には MT5 が内蔵されています。Windows では MT5 が既にインストール済みの MetaTrader 5 アプリに接続されます。詳細は [MT5 接続 →](/brokers/mt5) を参照。

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| SmartScreen 警告 | 詳細情報 → 実行 をクリック |
| ファイアウォール警告 | WolfBot のネットワークアクセスを許可 |
| ダッシュボードが開かない | サービス状態を確認 (`wolfbot doctor`) |
| インストール失敗 | インストーラーを管理者として実行 |

---

## アンインストール

WolfBot を削除するには:

1. **設定 → アプリ** を開く
2. **WolfBot Community** を検索
3. **アンインストール** をクリック

> 設定とバックアップは別途保持されます。完全に削除するには `%USERPROFILE%\.wolfbot\` フォルダも削除してください。

---

## 次のステップ

> **[Binance 接続 →](/brokers/binance)** または **[デモ口座で始める →](/docs/simulation)**
