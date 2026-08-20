---
title: "出金権限を無効のままにしておくべき理由 — 侵害された鍵から資金を守る"
description: "Trade-only API キーは出金を無効のままにしておくためのものです。出金が有効な鍵が、侵害された取引所鍵を盗まれた残高に変えてしまう主な原因である理由と、自分の鍵を確認する方法を解説します。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "withdrawal permission api key",
  "trade only api key",
  "disable withdrawal trading bot",
  "api key security",
  "no withdrawal permissions exchange key",
  "secure bot api credentials"
]
sitemap_priority: 0.7
lang: "ja"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
---

# 出金権限を無効のままにしておくべき理由

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-18

## 一行で答えると

取引ボットは取引を発注・管理するだけで十分です。あなたの資金を外に移動させる必要は決してありません。だからこそ、WolfBot Community を含むあらゆるセルフホスト型ボットにとって最も安全な API キーは、**出金権限を無効にした trade-only(取引専用)キー**です。

## API キーが持てる権限

取引所で API キーを作成するとき、通常はそのキーがどの操作を実行できるかを選びます。取引ボットにとって意味のある違いは次の2つです:

- **Trade(取引):** 残高の読み取り、注文の発注、ポジションの管理 — まさにボットが行うことです。
- **Withdraw(出金):** 口座から資金を外部に移動させる。

後者こそが、漏洩または盗まれた鍵を「誰かが自分の取引をいじれる」状態から「誰かが自分のお金を奪える」状態に変えてしまうものです。

## あなたの資金にとってなぜ重要か

鍵の出金権限が**無効**であれば、たとえ鍵が完全に侵害されたとしても、あなたの残高をどこかに送ることはできません — 取引所はそのキーからの出金リクエストを単純に拒否します。これは、盗まれた認証情報があなたの実際の資金に与えられるダメージに対する明確な歯止めになります。

もし出金権限が**有効**であれば、その鍵が漏洩した瞬間(貼り付けミス、侵害されたマシン、実行してしまった悪意のある依存関係など)、攻撃者は追加の手順なしに口座を直接空にすることができます。

## 自分の鍵を確認する方法

1. 取引所にログインし、**API 管理** を開きます。
2. ボットに接続されている鍵を見つけます。
3. **Trade / Read** のみが有効で、**Withdraw が無効**になっていることを確認します。
4. もし出金が有効になっていたら、無効にしてからボットを再接続してください。WolfBot はそれを一切必要としません。

## trade-only キーのまとめ

- trade-only キーは、ボットが行うすべてのこと(読み取り・発注・管理)を満たしています。
- 出金を無効にすることは、私たち一人ひとりがコントロールできる、最も安価で最も効果的な資金保護策です。

## 次に読むべきもの

- [Trade-Only API キーの説明 →](/docs/trade-only-api-keys-explained)
- [セキュリティ →](/security)
- [リスク管理 →](/docs/risk-controls)

## 次のステップ

> **[Trade-Only API キーの説明 →](/docs/trade-only-api-keys-explained)**
