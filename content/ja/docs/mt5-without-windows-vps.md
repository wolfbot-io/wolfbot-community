---
title: "Windows VPS なしで Linux 上で MT5 — 説明"
description: "WolfBot Community が Windows VPS なしで Linux 上で MT5 を実行する方法。ブラウザで直接外国為替・金・CFD を取引しましょう。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "reference"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
previous_guide: "/install/linux"
related_guides: ["/brokers/mt5", "/install/linux", "/docs/run-24-7-on-a-vps"]
keywords: ["mt5 on linux", "mt5 without windows", "metatrader 5 linux", "mt5 vps linux", "mt5 wine docker"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "docs/mt5-without-windows-vps"
---

# Windows VPS なしで Linux 上で MT5

**WolfBot Community v0.1.0-p12-ghcr-rc19 でテスト済み** · 最終更新: 2026-08-15

## よくある思い込み

多くの人が、MetaTrader 5 を実行するには Windows マシン(または Windows VPS)が必要だと考えています — MT5 が公式に Windows アプリだからです。

**WolfBot Community ではその必要はありません。**

## このガイドの対象者

- **すべてのトレーダー:** MT5(外国為替、金、指数、CFD)が暗号通貨取引と同じように Linux サーバーで動作します — Windows マシン不要。
- **技術ユーザー:** WolfBot が Linux でコンテナブリッジを通じて MT5 を実行する方法を理解。

## 仕組み

WolfBot Community は MT5 を直接内蔵します — 別の Windows マシンも、Wine 設定の手間もありません。Linux では、WolfBot が MT5 ターミナルをコンテナで実行し、ブラウザウィンドウを提供します:

```text
自分のブラウザ → WolfBot (Linux) → MT5 ターミナル (コンテナ内) → MT5 ブローカーサーバー
```

Windows では、WolfBot が既にインストール済みの MetaTrader 5 アプリに接続します。どちらの場合も、同じ統合インターフェースで暗号通貨と並んで外国為替・金・CFD を取引します。

## すべてのトレーダーにとっての利点

1. **Windows ライセンス不要** — Linux マシンだけでOK
2. **1つの VPS、全市場** — 同じボックスで暗号通貨 + MT5
3. **使い慣れたインターフェース** — MT5 がブラウザに表示
4. **低コスト** — 追加の Windows VPS 不要
5. **統合プラットフォーム** — 暗号通貨と MT5 で同じリスク管理

## セットアップ方法

1. **Linux マシンを用意** (または [VPS で 24/7 セットアップ →](/docs/run-24-7-on-a-vps))
2. **WolfBot Community をインストール** — [Linux インストール](/install/linux) 参照
3. **MT5 口座を接続** — [MT5 ガイド](/brokers/mt5) に従う

それだけです — MT5 は別ダウンロードではなく WolfBot Community の一部です。

## 技術ユーザー向け

### アーキテクチャ

WolfBot は3つのコンポーネントを組み合わせたコンテナで Linux 上の MT5 を実行します:

```text
MT5 Bridge Container
├── MetaTrader 5 Terminal (Wine で実行)
├── VNC Server (ブラウザで GUI を提供)
└── RPyC Bridge (WolfBot をターミナルに接続)
```

WolfBot は MT5 を*通じてのみ*ブローカーと通信します — ブローカーに直接接続することはありません。MT5 ログインはそのコンテナに保持されます。

### 一度限りのセットアップ

MT5 コンテナは基本インストールで自動起動されないため(すべてのコミュニティユーザーが MT5 を取引するわけではない)、初回は次のように起動します:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

その後、ブラウザで **`http://127.0.0.1:8090/mt5-vnc/`** を開き(パスワード `wolfbot`、または `MT5_VNC_PASSWORD` で設定した値)、ブローカーにログインします — これが WolfBot の通常の MT5 フローが以降使用するものと同じブラウザウィンドウです。

### なぜコンテナなのか?

- **隔離** — MT5 がシステムから分離して実行
- **再現可能** — どの Linux ホストでも同じ動作
- **簡単なデプロイ** — `docker compose up` 一つで
- **手動の Wine セットアップ不要** — コンテナに事前設定済み

### Linux-MT5 の要件

| 要件 | 推奨 |
|---|---|
| Docker Engine | 20.10+ |
| RAM | 4 GB+ (MT5 コンテナに 2 GB) |
| CPU | 2コア |
| ブラウザ | 最新のブラウザならどれでも |
| ネットワーク | MT5 ブローカーサーバーへのアクセス |

### Linux-MT5 のトラブルシューティング

| 問題 | 解決策 |
|---|---|
| VNC ページが読み込まれない | コンテナの実行を確認 (`docker compose ... ps`); 初回起動は 1 分かかることがある |
| "Bridge connection failed" | MT5 がブラウザにログイン済みか確認 |
| コンテナが起動しない | `docker compose ... logs` でエラー確認 |
| MT5 がフリーズ | コンテナを再起動 (`docker compose ... restart`) |

---

## 次のステップ

> **[MT5 を接続 →](/brokers/mt5)**
