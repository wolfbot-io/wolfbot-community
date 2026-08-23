---
title: "TradingView からセルフホスト取引ボットへ — TradingView アラートを WolfBot Community に接続"
description: "TradingView アラートの Webhook を、そのままセルフホストの WolfBot Community ボットに送信します。Webhook URL・HMAC 署名・3段階のアラートテンプレートの仕組みと、まずシミュレーションで安全にテストする方法を解説します。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview to trading bot",
  "tradingview webhook bot",
  "tradingview to self hosted bot",
  "tradingview alerts automation",
  "connect tradingview to wolfbot",
  "tradingview webhook self hosted"
]
sitemap_priority: 0.8
lang: "ja"
translation_of: "docs/tradingview"
---

# TradingView からセルフホスト取引ボットへ

**WolfBot Community v0.1.0-beta.2 でテスト済み** · 最終更新: 2026-08-18

## このガイドの対象者

- **すでに TradingView アラートを書いていて、それを紙のメモではなく自分のボットに反映させたい方** — 組み合わせるべき1つの URL と1つのアラートテンプレート、そして実資金に触れる前の安全なテスト方法を紹介します。
- **技術的な背景のある方** — Webhook がどう認証されるか(HMAC)、アラートのペイロード構造、注文が存在する前にシンボルがどうブローカー向けに正規化されるかを正確に見ていきます。

## TradingView が WolfBot Community に接続する仕組み

TradingView アラートは **HTTP Webhook** を発火できます。WolfBot Community はそのアラート用に Webhook エンドポイントを公開し、本当にあなたから送られたものであるかを検証し、他のすべてのエントリーと同じリスク・実行パイプラインを通る戦略シグナルに変換します。

流れ:

```text
TradingView アラート
   → あなたの Webhook URL への HTTP POST
   → WolfBot が HMAC 署名を検証
   → アラートを解析(シンボル、方向、from/to)
   → 対象ブローカー向けにシンボルを正規化
   → 共有のリスク/実行レイヤーを通じてエントリーをキュー投入
```

## 1. Webhook URL とシークレットを取得する

各 TradingView ソースには専用のエンドポイントが割り当てられます。パスの形は次の通りです:

```text
/api/v1/strategy-webhooks/{source_id}
```

これを自分の WolfBot Community ホスト(普段ログインするのと同じホスト)に対して URL エンコードし、ソースごとの Webhook シークレットと組み合わせます。このシークレットが、各リクエストが本当にあなたのものであることを WolfBot が検証するために使われます。

## 2. アラートテンプレートを使う(3段階)

WolfBot は3段階のアラートテンプレートを提供しているため、各状況に必要な内容だけを送信できます:

- **`signal_only`** — 方向とシンボルのみ。リスクや口座の詳細なし。サイジングと保護は WolfBot が判断します。
- **`signal_and_risk`** — 想定元本やテイクプロフィットなどのリスクフィールドを追加しますが、口座選択はありません。
- **`full_entry_request`** — 対象 `account_id` を含む完全なペイロード。1つのアラートで特定の口座を動かしたい場合に使います。

各ティアには識別フィールド — `tenant_id`、`source_id`、戦略インスタンス/バージョン、`definition_hash` — が含まれるため、シグナルは常に意図した正確な戦略に紐づけられます。

## 3. HMAC 署名

他人があなたのボットを勝手に動かせないように、Webhook は署名されています。TradingView から送信する HTTP リクエストには、Webhook シークレットを使って本文に対して計算された署名が含まれます(すぐ使える curl の例には、この HMAC の計算がすでに正しく組み込まれています)。WolfBot はサーバー側でそれを再計算し、署名が一致するリクエストだけを受け入れます。署名が一致しない場合は単純に拒否され、何も実行されません。

## 4. シンボルは自動的に正規化される

アラート内の `symbol` は MT5/USD 形式(`XAGUSD`)かもしれませんが、注文の対象は Binance(`XAGUSDT`)かもしれません。WolfBot は他の場所と同じブローカー対応のシンボルマッパーにアラートのシンボルを通すので、アラートは正しいペアに着地します。マッピングが存在しない場合、シンボルはひそかに書き換えられるのではなくそのまま通過します。完全なテーブルは[シンボルマッピングガイド](/docs/mt5-symbol-mapping)を参照してください。

## 5. 実際の取引の前にまずシミュレーションでテスト

アラートを実運用の戦略に向ける前に:

1. **シミュレーション** 口座で戦略を作成し、Webhook URL とテストアラートを設定する。
2. TradingView(または curl の例)からテストアラートを発火し、シグナルが WolfBot に届くのを確認する。
3. シンボルが期待通りのペアに解決され、ティアのフィールドが正しいことを確認する。
4. その上で初めて戦略を実運用に切り替える。

## セキュリティに関する注意

- Webhook シークレットは非公開に保ってください — それだけがリクエストを信頼できるものにします。API キーと同様に扱ってください。
- 自分の Community インスタンスは自分のホスト/ポートで運用し、署名検証なしに Webhook ルートをインターネットに公開しないでください。
- `signal_only` から始め、シミュレーションで一巡の動作を確認してから、リスク/テイクプロフィットのフィールドを追加してください。

## 次に読むべきもの

- [自動売買ワークフロー →](/docs/automated-trading-workflow) — アラートが組み込まれるより広いループ
- [まずシミュレーションで →](/docs/simulation)
- [リスク管理 →](/docs/risk-controls)

## 次のステップ

> **[自動売買ワークフロー →](/docs/automated-trading-workflow)**
