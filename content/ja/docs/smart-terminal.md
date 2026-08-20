---
title: "Smart Terminal ガイド — 統合取引ツール"
description: "WolfBot Community Smart Terminal を学ぶ — 暗号通貨・先物・MT5 市場を1つのインターフェースで扱う統合コントロールセンター。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/bybit"
related_guides: ["/brokers/bybit", "/docs/risk-controls", "/docs/simulation"]
keywords: ["wolfbot smart terminal", "crypto trading terminal", "mt5 terminal self hosted", "unified trading platform", "manual trading tool"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "docs/smart-terminal"
---

# Smart Terminal ガイド

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-15

## Smart Terminal とは?

Smart Terminal は手動取引のコントロールセンターです — アプリを切り替えることなく、暗号通貨取引所 **および** MT5 口座を監視・取引できる単一の統合画面です。Binance で BTC/USDT を、Bybit で先物契約を、MT5 で金(XAU/USD)を取引するかにかかわらず同じツールです。

## 主要エリア

| エリア | 機能 |
|---|---|
| **Chart** | 複数時間足に対応する選択シンボルの価格チャート |
| **Order Panel** | Market, Limit, TP/SL 注文の発注 |
| **Positions** | アクティブポジション、未約定注文、取引履歴 |
| **Watchlist** | 暗号通貨と MT5 にまたがるお気に入りシンボル |
| **Account Selector** | 接続された暗号通貨・MT5 口座間の素早い切り替え |

---

## Smart Terminal の使い方

### ステップ 1: 口座を選択

上部の **Account Selector** で取引する口座を選択 — 接続された暗号通貨取引所と MT5 ブローカーがすべて同じ一覧に表示されます。

### ステップ 2: シンボルを選択

シンボルを入力するか、Watchlist からクリック:

- **暗号通貨:** 例: `BTC/USDT`, `ETH/USDT`
- **先物:** 例: `BTC/USDT-PERP`
- **MT5:** 例: `XAU/USD` (金), `EUR/USD` (外国為替)

> 各シンボルはそれが存在する口座に紐づいています — 口座を選択し、次にシンボルを選択します。

### ステップ 3: 注文パラメータを構成

Order Panel はリスク管理に基づく事前入力値を表示します:

1. **注文タイプ** — Market または Limit
2. **サイズ** — ポジションサイズ (リスク上限で制限)
3. **ストップロス (SL)** — 自動停止レベル
4. **テイクプロフィット (TP)** — 自動目標レベル
5. **方向** — ロングまたはショート

### ステップ 4: 注文を発注

1. リスクパラメータを確認
2. **Place Order** をクリック
3. 求められたら確認

注文が **Positions** パネルに即座に表示されます。

---

## ポジション管理

### アクティブポジションの監視

**Positions** パネルは以下を表示します:
- 現在の P&L (実現・未実現)
- エントリー価格 vs 現在の市場価格
- TP/SL レベル
- ポジションサイズ

### ポジションの決済

1. **Positions** パネルでポジションを選択
2. **Close** をクリック
3. 全量または一部決済を選択
4. 確認

### TP/SL の変更

1. ポジションを選択
2. **Modify** をクリック
3. TP/SL レベルを調整
4. 変更を確認

---

## チャート

内蔵チャートは以下を表示します:

- 選択シンボルのローソク足価格データ
- カスタマイズ可能な時間足
- TP/SL レベルのオーバーレイ
- 注文発注後のエントリーポイント

---

## Watchlist

重要なシンボルに素早くアクセスするための Watchlist を作成 — 同じパネルで暗号通貨ペアと MT5 商品を混在できます。

1. **+ Add Symbol** をクリック
2. シンボルを検索して選択
3. Watchlist のシンボルをクリックしてチャートに読み込み

---

## 取引中の口座切り替え

Smart Terminal は口座を分離して保持します:
- ポジションは取引された口座の下に表示
- **Account Selector** で切り替えるだけでOK

---

## ヒント

### Smart Terminal 作業用

- 事前入力されたリスクパラメータを活用 — リスク管理から来るもの
- まずデモ口座にテスト注文を発注
- 主要シンボルへの素早いアクセスのため Watchlist を維持
- Positions パネルで未約定注文を監視

### 技術ユーザー向け

- チャートデータは通常のブローカー/MT5 接続を通じて流れます — 注文を駆動するものと同じ価格
- TP/SL はブローカー API または MT5 を通じて実行されるクライアント側の指示
- 注文タイプは取引所/ブローカーが定義する通りに正確に渡されます (Market, Limit, ReduceOnly など)

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| 注文が拒否される | リスク上限を確認 (サイズ, レバレッジ, 1日の上限) |
| シンボルが見つからない | 選択した口座にシンボルが存在するか確認 |
| チャートが読み込まれない | ブローカー/MT5 接続を確認 |
| "Insufficient balance" | 選択した口座の残高を確認 |

---

## 次のステップ

> **[リスク管理を構成 →](/docs/risk-controls)**
