---
title: "WolfBot Community を始める"
description: "WolfBot Community をインストールし、ブローカーを接続して、暗号通貨・先物・MT5 市場を1つのプラットフォームで自動取引する方法を学びます。"
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "15 minutes"
next_guide: "/docs/simulation"
related_guides: ["/install/windows", "/install/linux", "/docs/simulation"]
keywords: ["wolfbot community", "wolfbot install", "wolfbot getting started", "self hosted trading bot", "wolfbot setup"]
sitemap_priority: 1.0
lang: "ja"
translation_of: "getting-started"
---

# WolfBot Community を始める

**WolfBot Community v0.1.0-p12-ghcr-rc21 でテスト済み** · 最終更新: 2026-08-15

## WolfBot Community とは?

WolfBot Community は、無料のセルフホスト型統合取引プラットフォームです。暗号通貨、先物、MT5(外国為替・金・指数)を **1つのインターフェース** で取引できます。

**主要ポイント:**
- ✅ 無料 — サブスクリプション料金なし
- ✅ セルフホスト — データは自分のマシンに保持
- ✅ ノンカストディアル — 資金は常に自分が管理
- ✅ 統合プラットフォーム — 暗号通貨 + 先物 + MT5

## このガイドの対象者

- **すべてのトレーダー:** インストールから最初の取引までのクイックスタート。
- **技術的な背景のある方:** セルフホストの正確な仕組みは [セルフホスティングの説明 →](/docs/self-hosted-explained) を参照。

---

## ステップ 1: インストール

### Windows
Windows インストーラーをダウンロードして実行します。詳細は [Windows インストール →](/install/windows) を参照。

### Linux
Linux インストーラーまたは Docker を使用します。詳細は [Linux インストール →](/install/linux) を参照。

---

## ステップ 2: ブローカーを接続

WolfBot は API キーでブローカーに接続します:

| ブローカー | タイプ | ガイド |
|---|---|---|
| Binance | 暗号通貨 | [Binance 接続 →](/brokers/binance) |
| Bybit | 暗号通貨/先物 | [Bybit 接続 →](/brokers/bybit) |
| BingX | 暗号通貨/先物 | [BingX 接続 →](/brokers/bingx) |
| KuCoin | 暗号通貨 | [KuCoin 接続 →](/brokers/kucoin) |
| Bitget | 暗号通貨/先物 | [Bitget 接続 →](/brokers/bitget) |
| MT5 | 外国為替/金/指数/CFD | [MT5 接続 →](/brokers/mt5) |

> ⚠️ **重要:** API キー作成時に **出金(Withdrawal)** 権限を決して有効にしないでください。WolfBot に必要なのは取引(Trade)権限だけです。[Trade-Only API キーガイド →](/brokers/api-key-guide)

---

## ステップ 3: デモ口座でテスト

実資金を投入する前に、デモ(テストネット)口座で練習しましょう:

1. **Exchange Accounts → Add Account** へ
2. デモ口座を接続(例: Bybit テストネット)
3. Smart Terminal でシミュレーション注文を発注
4. 仮想残高でポジションが開くことを確認

> 💡 完全なガイドは [デモ口座で始める →](/docs/simulation)

---

## ステップ 4: リスク管理を設定

実取引の前にリスク管理ルールを設定します:

- **ポジションサイズ制限** — 1取引あたりの最大サイズ
- **ドローダウンガード** — 損失上限
- **クールダウンタイマー** — 取引間隔
- **1日の取引上限** — 1日あたりの最大取引数

> 🛡️ [リスク管理ガイド →](/docs/risk-controls)

---

## ステップ 5: 実取引を開始

準備ができたら:

1. **Trade-Only** API キーで実口座を接続
2. 最小ポジションサイズで開始
3. 狭いストップロスを設定
4. 動作を確認しながら徐々に拡大

---

## サポートを受ける

- **GitHub Discussions:** [github.com/wolfbot-io/wolfbot-community/discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- **GitHub Releases:** [github.com/wolfbot-io/wolfbot-community/releases](https://github.com/wolfbot-io/wolfbot-community/releases)
- **ドキュメント:** このサイトの Academy

---

## 次のステップ

> **[デモ口座で始める →](/docs/simulation)**
