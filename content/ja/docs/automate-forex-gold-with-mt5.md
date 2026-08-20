---
title: "MT5 で FX・ゴールドを自動化 — ゴールド・FX・コモディティ戦略をセルフホストで実行"
description: "自分のマシンや VPS 上で、MT5 を使って FX・ゴールド・コモディティ CFD 戦略を暗号通貨と並行して自動化 — 同じ WolfBot インターフェース、統合リスク、1つのポートフォリオで。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "fx 自動売買 bot",
  "ゴールド 自動売買 mt5",
  "mt5 自動化 fx ゴールド",
  "コモディティ 取引 bot",
  "metatrader 5 セルフホスト",
  "fx ゴールド mt5 wolfbot"
]
sitemap_priority: 0.8
lang: "ja"
translation_of: "docs/automate-forex-gold-with-mt5"
---

# MT5 で FX・ゴールドを自動化

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **FX・ゴールド・指数・コモディティ CFD を取引していて、自分のマシンで自動化したい方** — 2台目の Windows サーバーを借りずに WolfBot Community で MT5 戦略を動かす方法を説明します。
- **技術的な背景のある方** — MT5 ターミナル・シンボルマッピング・WolfBot の統合リスクがどう組み合わさるかを理解し、どこで何が動いているかを正確に把握できます。

## FX・ゴールド・MT5 — 昔ながらの自動化の悩み

MetaTrader 5 は、多くの FX・ゴールド・CFD トレーダーがすでに使っているツールです。従来の自動化方法は、MT5 ターミナルを1つ生かしておくためだけに **Windows マシンを 24 時間365日稼働させる** こと — たいていは借りた VPS 上で — でした。それに加えて、他に運用しているものも別途動かす必要がありました。

WolfBot Community はその2台目のマシンをなくします。MT5 は WolfBot の他の部分と同じ Linux ボックス(または Windows)上のコンテナ内で動作するため、ゴールド/FX 戦略と暗号通貨戦略が1つのプラットフォームに共存します。

## 自動化されたゴールド・FX 取引の全体像

```text
自分のマシン(または VPS)、24時間365日
    │
    ├── WolfBot Community — 戦略 + 統合リスク + ポートフォリオ
    │
    └── MT5 ブリッジコンテナ
            ├── 実際の MT5 ターミナル(ヘッドレス、自分のブローカー口座)
            └── それを覗くブラウザウィンドウ(リモートデスクトップ不要)
```

MT5 のゴールド/FX 戦略も、暗号通貨先物戦略も、手動ポジションも、すべて **1つのダッシュボード、1つのリスクエンジン、1つのポートフォリオビュー** に表示されます — 別々のアプリに散らばることはありません。

## シンボルは市場をまたいで自動的に対応

MT5 上のゴールド戦略はこの金属を `XAUUSD` と表示しますが、暗号通貨取引所ではトークン化ゴールドのペア `PAXGUSDT` として保有することがあります。WolfBot のシンボルマッピングはこれを自動的に一致させるので([シンボルマッピングガイド](/docs/mt5-symbol-mapping)参照)、ポートフォリオには切り離された2つの市場ではなく、1つの「ゴールド」銘柄として表示されます。

## まずはシミュレーションから始める

最初に MT5 の **デモ** 口座を接続し(接続ガイドが手順を案内します)、期待通りにシンボルが解決されることを確認したうえで、信頼できるまでシミュレーションで戦略を運用してください。それができてから初めて、実口座を接続して慎重に進めましょう。

## はじめる

- [MT5 を接続 →](/brokers/mt5) — Windows・Linux 向けのステップバイステップ
- [MT5 シンボルマッピング →](/docs/mt5-symbol-mapping)
- [Windows VPS なしで MT5 を動かす →](/docs/mt5-without-windows-vps)

## 次のステップ

> **[MT5 シンボルマッピング →](/docs/mt5-symbol-mapping)**
