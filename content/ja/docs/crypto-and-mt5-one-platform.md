---
title: "暗号通貨と MT5 を1つのプラットフォームで — 両方を1つの WolfBot インターフェースで"
description: "暗号通貨先物と MT5 の FX・ゴールドを1つのセルフホスト型インターフェースに統合することが WolfBot Community 最大の強み — 両方の世界にまたがる1つのログイン、1つのリスクエンジン、1つのポートフォリオ。"
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/brokers/mt5", "/docs/mt5-symbol-mapping", "/docs/risk-controls", "/community-vs-cloud"]
keywords: [
  "crypto and mt5 one platform",
  "crypto forex futures one interface",
  "wolfbot multi market trading",
  "unified crypto mt5",
  "one interface crypto mt5",
  "crypto plus metatrader"
]
sitemap_priority: 0.8
lang: "ja"
translation_of: "docs/crypto-and-mt5-one-platform"
---

# 暗号通貨と MT5 を1つのプラットフォームで

**WolfBot Community v0.1.0-beta.9 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **暗号通貨と FX/ゴールドの両方を取引していて**、2つのボット、2つのダッシュボード、2セットのリスクルールを行き来するのに疲れた方。
- **技術的な背景のある方** — 基盤となる取引所がまったく異なるシステムであっても、シンボル・ポジション・リスクがどのように統合されるかを説明します。

## 分断の問題

多くの自動取引環境では、ツールをまたいで作業が分断されます。Binance 用のボット1つ、MT5 用のボット1つ、ポジション確認用の別画面、そしてお互いに連携しないリスクルール。この分断こそがミスの温床です — 片方のプラットフォームのポジションが、もう片方であなたがしたことを無視してしまいます。

WolfBot Community はその逆の発想で作られています: **1つのプラットフォーム、あらゆる市場。** 暗号通貨先物口座も MT5 口座も同じセルフホスト型 WolfBot 内に存在し、1つのブラウザインターフェースから到達できます。

## 実際に「1つ」になるもの

- **1つのダッシュボード。** Binance/Bybit のポジションと MT5 のゴールドポジションが、別々のアプリではなく並んで表示されます。
- **1つのリスクエンジン。** 同じリスク管理が暗号通貨と MT5 の両方に適用されるため、暗号通貨側のルールがゴールドポジションと切り離されることはありません。
- **1つのポートフォリオビュー。** 総エクスポージャー、証拠金、ドローダウンをプラットフォームをまたいで頭の中で合算するのではなく、一緒に確認できます。
- **1セットの戦略。** 戦略はどちらの世界のシンボルも参照でき、[シンボルマッピング](/docs/mt5-symbol-mapping)が名前の違いを処理します。

## 内部の仕組み

暗号通貨と MT5 は本当に異なるシステムです — 一方は REST/先物 API、もう一方は Windows 取引ターミナルです。WolfBot はこれらを1つの実行 + リスクレイヤーの背後に統合し、ブローカー対応のシンボルマッピング(MT5 の `XAUUSD` → 暗号通貨ペアの `PAXGUSDT` など)でレートを整合させます。違いは内部で処理され続け、あなたが見るインターフェースは1つのプラットフォームです。

## 小さく始める

暗号通貨のデモ口座と MT5 のデモ口座を並べて接続し、よく知っているシンボル(BTC やゴールドなど)を追加して、同じ銘柄がポートフォリオに一貫して表示されるのを確認しましょう。それができたら、シミュレーションで実際の戦略を追加し始めます。

## はじめる

- [MT5 を接続 →](/brokers/mt5)
- [市場をまたいだシンボルマッピング →](/docs/mt5-symbol-mapping)
- [自動売買ワークフロー →](/docs/automated-trading-workflow)

## 次のステップ

> **[MT5 接続ガイドを読む →](/brokers/mt5)**
