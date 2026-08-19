---
title: "取引所と MT5 をまたぐ1つのポートフォリオ — すべてのポジションを1つのビューで確認"
description: "各取引所にログインする代わりに、暗号通貨と MT5 を合わせたポートフォリオ全体が1つのセルフホスト型ビューに表示されます。統合ポートフォリオの可視化が何をもたらし、リスク管理をどう変えるかを解説します。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "unified portfolio trading",
  "one portfolio multiple exchanges",
  "crypto mt5 portfolio view",
  "portfolio across exchanges",
  "single portfolio view bot",
  "wolfbot portfolio dashboard"
]
sitemap_priority: 0.8
lang: "ja"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
---

# 取引所と MT5 をまたぐ1つのポートフォリオ

**WolfBot Community v0.1.0-p12-ghcr-rc17 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **複数の取引所と MT5 でポジションを保有していて**、頭の中やスプレッドシートで合計するのに疲れた方。
- **技術的な背景のある方** — まったく異なる取引所のポジションが、どのように1つの読みやすいポートフォリオに統合されるかを説明します。

## 分散したポートフォリオの問題

取引する市場が増えるほど、「ポートフォリオ」はログイン画面をまたいで分散していきます: ある取引所の先物ポジション、別の取引所の現物、MT5 のゴールドと FX。手動で合計しない限り何もまとまらず、合計し終わる頃には数字はもう動いています。

WolfBot Community は **1つのポートフォリオ** を表示します — 接続されたすべての口座、暗号通貨も MT5 も、単一のセルフホスト型ダッシュボードに。

## 統合された可視化がもたらすもの

- **一目で分かる総エクスポージャー。** タブをまたいで分割する代わりに、リスク全体を確認できます。
- **一貫したシンボル。** 同じ銘柄は、MT5(`XAUUSD`)から来たものでも暗号通貨ペアから来たものでも1行として表示されます — [シンボルマッピング](/docs/mt5-symbol-mapping)が名前を調整します。
- **ポートフォリオレベルの数値。** 証拠金、ドローダウン、エクスポージャーはまとめて計算され、緩やかにまとまったボットごとの数字ではなく、[統合リスクエンジン](/docs/how-unified-risk-differs-from-per-bot-risk)に供給されます。

## 仕組み

内部では、Binance と MT5 は無関係なシステムです — 先物 REST API と Windows 取引ターミナル。WolfBot は両方を接続し、間にあるシンボル/取引所の違いを解決しながら、1つのポートフォリオビューとして提示します。どのブローカーも手放すことなく、一貫した全体像が得られます。

## 小さく始める

暗号通貨とMT5のデモ口座を接続し、それぞれに小さなポジションを開いて、ポートフォリオビューを確認してください — 両方が同じリストに表示されます。それが、より大きなサイズで運用する前に統合された数値を信頼するための土台になります。

## 次に読むべきもの

- [リスク管理 →](/docs/risk-controls)
- [統合リスクの違い →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [暗号通貨と MT5 を1つのプラットフォームで →](/docs/crypto-and-mt5-one-platform)

## 次のステップ

> **[リスク管理ガイドを読む →](/docs/risk-controls)**
