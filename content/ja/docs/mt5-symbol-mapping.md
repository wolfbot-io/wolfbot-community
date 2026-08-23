---
title: "MT5 シンボルマッピング — WolfBot Community が MT5 と暗号通貨取引所の間でシンボルをルーティングする仕組み"
description: "MT5 は BTCUSD や XAUUSD のような USD 建てシンボルを使い、暗号通貨取引所は BTCUSDT のような USDT ペアを使います。WolfBot Community がこれらをマッピングし、手動でのシンボル変換なしに MT5・Binance・Bybit・BingX をまたいで1つのシグナルが機能する仕組みを正確に解説します。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mt5 symbol mapping",
  "mt5 to crypto symbol",
  "xauusd to paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 futures crypto",
  "wolfbot symbol mapping",
  "cross market trading symbols"
]
sitemap_priority: 0.75
lang: "ja"
translation_of: "docs/mt5-symbol-mapping"
---

# MT5 シンボルマッピング

**WolfBot Community v0.1.0-beta.2 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **暗号通貨と MT5 の両方で同じ市場を取引している方** — たとえばゴールドや BTC の戦略を運用していて1つのダッシュボードにまとめたい場合 — シンボル名が異なって見える理由と、WolfBot Community がそれをどう調整するかを説明します。
- **技術的な背景のある方** — WolfBot 内部で実際に動作しているマッピングテーブルを紹介するので、ポジションを開く前にシンボルが何に解決されるかを正確に把握できます。

## MT5 と暗号通貨取引所でシンボル名が異なる理由

各取引所は独自の形式で価格を表示します:

- **MT5(FX、ゴールド、指数、株式/CFD)** は **USD 建て** 形式で表示します: `BTCUSD`、`XAUUSD`、`XAGUSD`、`ETHUSD`。
- **Binance、Bybit、BingX** などの暗号通貨現物/先物取引所は **USDT** ペアで表示します: `BTCUSDT`、`XAUUSDT`、`ETHUSDT`。
- ゴールドは特に異なります: ほとんどの暗号通貨取引所には「XAU/USDT」ペアが存在しません — WolfBot はゴールドをトークン化されたゴールド ETF である `PAXG` トークン(`PAXGUSDT`)にマッピングします。

もし調整なしに MT5 ブローカーと暗号通貨取引所の両方を接続していたら、同じ戦略が2つの異なる名前のシンボルを見て、それらを別々の市場として扱ってしまいます。WolfBot Community はこれを解消し、1つのポートフォリオビューで両方を表示できるようにします。

## WolfBot Community がシンボルをマッピングする方法

WolfBot Community は単一の信頼できるシンボルマップを保持しています。シグナルや戦略がシンボルを参照すると、注文が組み立てられる前に対象取引所のネイティブ名に変換されます。一般的なルールは次の通りです:

- `BTCUSD` → `BTCUSDT`、`ETHUSD` → `ETHUSDT` など — 暗号通貨系の USD 建て MT5 シンボルは対応する `USDT` ペアにマッピングされます。
- `XAUUSD` / `GOLD` → `PAXGUSDT` — ゴールドは Binance のトークン化ゴールドペアにマッピングされます。
- `XAGUSD` / `SILVER` → `XAGUSDT` — シルバーにはネイティブの USDT ペアがあります。
- シルバーは内部のスワップ ID を持つ BingX の TradFi シルバー無期限契約にもマッピングされます。
- マッピングが**存在しない**シンボルはそのまま素通りするため、カスタム銘柄が誤って書き換えられることはありません。

このテーブルは、取引所シンボルマッピング(`map_symbol(source, target_exchange)`)としてコード内に存在します。対象取引所で使用可能な名前、またはエントリが存在しない場合は元のシンボルをそのまま返します。

## あなたの環境にとって何を意味するか

- **戦略は一度書くだけ。** MT5 のゴールドシグナルと暗号通貨のゴールドポジションは、WolfBot の統合リスク・ポートフォリオビューでは1つの銘柄として表示されます。
- **手動でのシンボル変換は不要。** 2つ目の取引所を追加するたびにすべてのボットを編集する必要はありません。
- **決定論的。** マップはプラットフォーム内に固定されているため、同じシグナルは常に同じ対象シンボルに解決されます — デモテストと実運用の間で予期しない違いはありません。

## 実践例

シルバー戦略を例に取りましょう。MT5 ブローカー上ではシンボルは `XAGUSD` と表示され、Binance では `XAGUSDT` です。WolfBot がその戦略をルーティングすると、ソースシンボルを各取引所の正しい名前に解決し、注文が各取引所の正しいペアに向かうようにします。そしてポートフォリオビューは、切り離された2つの市場ではなく、依然として1つの「シルバー」銘柄のままです。

## 次に読むべきもの

- [まず安全にテスト →](/docs/simulation) — 実運用の前にデモ口座でシンボルをマッピング・検証
- [よくある MT5 の問題 →](/docs/mt5-troubleshooting)
- [MT5 を接続 →](/brokers/mt5)

## 次のステップ

> **[MT5 トラブルシューティング →](/docs/mt5-troubleshooting)**
