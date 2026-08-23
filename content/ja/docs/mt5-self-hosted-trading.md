---
title: "MT5 セルフホスト取引 — レンタルではなく自分のマシンで MetaTrader 5 を動かす"
description: "セルフホスト型 MT5 取引とは、自分のコンピューターや自分の VPS など、自分がコントロールできる場所で MetaTrader 5 ターミナルを動かすことを意味します — 別の Windows マシンを借りる必要はありません。何が変わり、なぜそれが重要かを解説します。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "9 minutes"
next_guide: "/docs/mt5-without-windows-vps"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/self-hosted-explained", "/docs/risk-controls"]
keywords: [
  "mt5 self hosted",
  "self hosted mt5 trading",
  "run mt5 on own server",
  "metatrader self hosted bot",
  "mt5 without windows vps",
  "self host mt5 linux"
]
sitemap_priority: 0.8
lang: "ja"
translation_of: "docs/mt5-self-hosted-trading"
---

# MT5 セルフホスト取引

**WolfBot Community v0.1.0-beta.2 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **MT5 の自動化は「Windows VPS を借りる」ことだと思ってきた方** — セルフホストの代替手段を平易な言葉で説明します。
- **技術的な背景のある方** — MT5 ターミナルが実際にどこで動作し、なぜレンタルデスクトップが唯一の選択肢ではないかを説明します。

## MT5 における「セルフホスト」の意味

あなたの MetaTrader 5 ターミナルは、MT5 を生かしておくためだけに借りたマシンではなく、**あなたがコントロールする**場所 — 自分の Linux マシンや自分の VPS — で動作します。

WolfBot Community はセルフホスト型で、その MT5 サポートも同じルールに従います: 実際の MT5 ターミナルが、WolfBot の他の部分と一緒に自分のマシン上のコンテナ内で動作し、ブラウザから到達できます。別の Windows サーバーも、リモートデスクトップクライアントも、ターミナルを維持するためだけの月額レンタルも不要です。

## 何を保ち、何を手放すか

- **保つもの:** 実際に完全に動作する MT5 ターミナル — 同じブローカーログイン、同じチャート、同じ注文。
- **手放すもの:** 2台目のマシン。1台のホストが暗号通貨口座、MT5 口座、そして WolfBot 自体を動かします。
- **保つもの:** 自分のハードウェア上のデータ。セルフホスティングとは、ポジションと鍵が自分が運用するインフラ上に留まることを意味します。

## なぜ重要か

- **コスト。** MT5 のための追加の Windows-VPS 料金が不要です。すでに Linux VPS で WolfBot を動かしているなら、MT5 は同じマシンに乗せられます。
- **コントロール。** マシン、ターミナル、データを自分が所有します。
- **シンプルさ。** レンタルデスクトップの群れをやりくりする代わりに、暗号通貨 + MT5 用の1つのブラウザインターフェースです。

## セルフホストが誰にでも必要とは限らない

サーバーを運用・維持したくない場合は、マネージドホスティングも選択肢です — 比較は [Community vs Cloud](/community-vs-cloud) を参照してください。セルフホストは無料で、完全に自分のコントロール下に置ける経路です。

## はじめる

- [Windows VPS なしで MT5 を動かす →](/docs/mt5-without-windows-vps)
- [MT5 を接続 →](/brokers/mt5)
- [なぜセルフホストなのか? →](/docs/self-hosted-explained)

## 次のステップ

> **[Windows VPS なしで MT5 を動かす →](/docs/mt5-without-windows-vps)**
