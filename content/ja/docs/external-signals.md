---
title: "外部シグナル — あらゆるソースから WolfBot Community に市場シグナルを送信"
description: "TradingView アラート・カスタム Webhook・シグナルサービスなどの外部取引シグナルを、1つの署名付きリスクゲート型パイプラインを通じてセルフホストの WolfBot Community ボットに配線します。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "external trading signals",
  "webhook trading bot",
  "custom signals into trading bot",
  "signal service wolfbot",
  "signed webhook automation",
  "external signals self hosted"
]
sitemap_priority: 0.75
lang: "ja"
translation_of: "docs/external-signals"
---

# 外部シグナル

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **すでに他所からシグナルを受け取っていて** — TradingView アラート、有料シグナルサービス、自作スクリプトなど — 手動実行の代わりに自分のボットでポジションを開かせたい方。
- **技術的な背景のある方** — すべての外部シグナルが通る1本のパイプライン(検証 → 解析 → 正規化 → リスク → 実行)を理解し、独自のソースを新しい経路を発明せずに組み込めます。

## ここでいう「外部シグナル」とは

外部シグナルとは、WolfBot Community の**外**から来て取引になる必要のある買い/売りの指示です。例:

- TradingView アラート Webhook(専用の [TradingView ガイド](/docs/tradingview)を参照)。
- 自作のスクリプトやサービスが発火するカスタム Webhook。
- リスクレイヤーに向けて信頼できるシグナルサービス。

これらはすべて、それぞれ独自の連携を実装するのではなく、単一の署名付きエントリーポイントを共有します。

## すべての外部シグナルが通る1本のパイプライン

ソースが何であれ、すべての受信シグナルは同じ経路をたどります:

```text
HTTP POST(署名付き)
   → 署名検証(あなたの Webhook シークレットによる HMAC)
   → シグナルを解析(シンボル、方向、from/to)
   → 対象ブローカー向けにシンボルを正規化
   → 識別情報を付与(ソース、戦略、ティア)
   → 共有のリスク/実行レイヤーを通じてエントリーをキュー投入
```

すべてのソースが同じパイプラインを通るため、シグナルがどこから来たかにかかわらず同じ保証が得られます:

- **認証済み** — あなたのシークレットで署名されたリクエストだけが実行されます。
- **リスクゲート付き** — エントリーは手動注文や戦略注文と同じリスク管理を通過します。
- **シンボル正規化済み** — シグナル内の MT5/USD 名は、対象取引所の正しいペアにマッピングされます。

## ティアがソースに応じた適切なシグナルを保証

外部シグナルは同じ3段階のペイロードモデルを使うため、軽いシグナルも完全な注文リクエストもどちらも対応できます:

- `signal_only` — 方向/シンボルのみ。サイジングと保護は WolfBot が判断します。
- `signal_and_risk` — 想定元本とテイクプロフィットのフィールドを追加。
- `full_entry_request` — 対象口座を含む完全なリクエスト。

新しい外部ソースは `signal_only` から始め、シミュレーションでクリーンなサイクルを確認してからステップアップしましょう。

## 新しいソースはまずシミュレーションでテスト

どの外部ソースについても:

1. 専用の Webhook URL + シークレットを持つ **シミュレーション** 戦略に接続する。
2. テストシグナルを発火し、認証された状態で意図したシンボルに届くことを確認する。
3. リスクゲート付きのエントリーが期待通りに動作するか確認する。
4. その上で初めて実口座にコピーを切り替える。

## セキュリティに関する注意

- 各外部ソースには**専用の Webhook シークレット**を発行してください — API キーと同様に扱ってください。公開チャートやリポジトリの外に置かないでください。
- Webhook のルートは自分のホストの背後に置いてください。認証するのは署名であり、URL の秘匿性ではありません。
- ボットに向けるシグナルサービスは信頼できるものにしてください — パイプラインはリクエストを認証しますが、シグナルの内容が正しいかどうかは判断できません。

## 次に読むべきもの

- [TradingView アラート →](/docs/tradingview) — 最も一般的な外部ソースをステップバイステップで
- [自動売買ワークフロー →](/docs/automated-trading-workflow)
- [まずシミュレーションで →](/docs/simulation)

## 次のステップ

> **[TradingView アラート →](/docs/tradingview)**
