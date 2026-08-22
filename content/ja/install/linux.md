---
title: "WolfBot Community のインストール (Linux)"
description: "Linux に WolfBot Community をステップバイステップでインストールする方法 — システム要件、インストーラーおよび Docker オプション。"
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/binance"
related_guides: ["/getting-started", "/docs/troubleshooting", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot linux install", "wolfbot linux setup", "install wolfbot on linux", "trading bot linux"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "install/linux"
---

# Linux に WolfBot Community をインストール

**WolfBot Community v0.1.0-p12-ghcr-rc21 でテスト済み** · 最終更新: 2026-08-15

## システム要件

| 要件 | 最小 | 推奨 |
|---|---|---|
| **OS** | Ubuntu 20.04+ | Ubuntu 22.04 LTS |
| **RAM** | 2 GB | 4 GB |
| **ストレージ** | 1 GB 空き | 5 GB 空き |
| **Docker** (Docker 使用時) | 20.10+ | 最新の安定版 |

---

## インストール方法

WolfBot Community は Linux で2つの方法でインストールできます:

1. **インストーラー** (推奨) — 自動セットアップ
2. **Docker** — コンテナベースのデプロイ

---

## 方法 1: インストーラー (推奨)

### ステップ 1: インストールスクリプトをダウンロード

```bash
curl -fsSL https://wolfbot.io/install.sh -o install.sh
```

### ステップ 2: インストールを実行

```bash
sudo bash install.sh
```

インストーラーが:
- 依存関係の確認とインストール
- WolfBot ファイルを `/opt/wolfbot` に配置
- サービスの登録
- CLI コマンド `wolfbot` の設定

### ステップ 3: サービスを開始

```bash
sudo systemctl start wolfbot
sudo systemctl enable wolfbot
```

### ステップ 4: ダッシュボードを開く

ブラウザで `http://localhost:3000`(またはインストールガイドに表示されたアドレス)を開きます。

---

## 方法 2: Docker

### ステップ 1: Docker をインストール

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```

### ステップ 2: WolfBot コンテナを実行

```bash
docker run -d \
  --name wolfbot \
  --restart unless-stopped \
  -p 3000:3000 \
  -v wolfbot-data:/data \
  ghcr.io/wolfbot-io/wolfbot-community:latest
```

### ステップ 3: ダッシュボードを開く

ブラウザで `http://localhost:3000` を開きます。

---

## MT5 の使用(任意)

WolfBot Community には MT5 が内蔵されています。Linux では MT5 がコンテナ内で実行され、ブラウザウィンドウで提供されます。初回は MT5 コンテナを起動する必要があります:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

詳細は [MT5 接続 →](/brokers/mt5) を参照。

---

## インストールの確認

```bash
# 診断を実行
wolfbot doctor

# サービス状態を確認
sudo systemctl status wolfbot
```

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| ポート競合 | 別のポートを使用するよう設定変更 |
| 権限エラー | `sudo` を使用、またはユーザーグループを確認 |
| Docker エラー | Docker サービスが実行中か確認 |
| サービスが起動しない | `wolfbot logs` でログ確認 |

---

## 24/7 運用

Linux VPS で WolfBot を 24 時間運用するには [VPS で 24/7 実行 →](/docs/run-24-7-on-a-vps) を参照。

---

## 次のステップ

> **[Binance 接続 →](/brokers/binance)** または **[デモ口座で始める →](/docs/simulation)**
