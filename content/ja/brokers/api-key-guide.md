---
title: "Trade-Only API キーガイド — セキュリティのベストプラクティス"
description: "WolfBot Community のための安全な Trade-Only API キーを作成する方法。出金権限を決して有効にしないでください。Binance, Bybit, BingX, KuCoin, Bitget ガイド。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: ["trade only api key", "api key security trading bot", "non custodial trading bot", "safe api key setup"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "brokers/api-key-guide"
---

# Trade-Only API キーガイド

**WolfBot Community v0.1.0-beta.4 でテスト済み** · 最終更新: 2026-08-15

## なぜ Trade-Only なのか?

WolfBot Community は **ノンカストディアル** です — 資金を決して保持しません。自分が管理する API キーを通じて取引所に接続します。このキーはいつでも取り消せます。

**黄金律:** 取引ソフトウェアに使用する API キーに出金(Withdrawal)または振替(Transfer)権限を決して有効にしないでください。この 1 つの設定が他よりも重要な理由は [Trade-Only API キーの説明 →](/docs/trade-only-api-keys-explained) を参照してください。

## 必要な権限

WolfBot に必要なのは次の権限だけです:

| 権限 | 必要 | 理由 |
|---|---|---|
| **Trade** (読み取り-書き込み) | ✅ はい | 注文の発注/取消、ポジション確認 |
| **Read** (読み取り専用) | ✅ はい | 残高、ポジション、注文履歴の読み取り |
| **Withdrawal** | ❌ 絶対に不可 | WolfBot は資金を出金しない |
| **Transfer** | ❌ 絶対に不可 | WolfBot は口座間で振替しない |

取引所が細分化された権限を提供する場合は、以下も無効にしてください:
- ❌ **Withdrawal**
- ❌ **Internal Transfer**
- ❌ **Sub-account Transfer**
- ❌ **Earn/Staking** 管理

## 取引所別

### Binance
1. API Management → Create API
2. 有効化: **Enable Spot & Margin Trading**
3. 無効化: **Enable Withdrawals**
4. (推奨) 信頼できる IP に制限

### Bybit
1. API Management → Create New Key
2. 有効化: **Trade** 権限
3. 無効化: **Withdrawal**, **Transfer**
4. (推奨) IP アドレスをバインド

### BingX
1. API Management → Create API Key
2. 有効化: **Trade**
3. 無効化: **Withdrawal**
4. (推奨) IP アクセスを制限

### KuCoin
1. API Management → Create API
2. 有効化: Spot Trading の **Trade**
3. 無効化: **Withdrawal**, **Transfer**
4. Passphrase を設定 (KuCoin 必須)

### Bitget
1. API Management → Create API Key
2. 有効化: **Trade**
3. 無効化: **Withdrawal**
4. (推奨) IP をバインド

## 追加のセキュリティヒント

### IP バインド (推奨)
対応している場合、API キーを自分のマシンの IP アドレスにバインドしてください:
- 他の場所からの使用を防止
- IP 変更時に更新
- 24/7 運用には固定 IP または VPS を使用

### サービスごとに別々のキー
- WolfBot Community 用の API キー 1 つ
- ポートフォリオ追跡アプリ用の別キー
- 個別の統合の取り消しが容易に

### 定期的な監査
- 毎月 API キーを確認
- 未使用キーを削除
- 定期的にキーを再生成

### キーの保管
- API シークレットを安全に保管 (WolfBot がローカルで暗号化)
- スクリーンショットやサポートメッセージでキーを共有しない
- クラウドメモやメールにキーを保存しない

---

## キーが侵害された場合は?

1. **即座に** 取引所で API キーを削除
2. 口座に不正な活動がないか確認
3. 新しい Trade-Only キーを作成
4. WolfBot を新しいキーで更新

出金が無効なので、侵害された Trade-Only キーは資金を盗めません — ただし望まない取引を行う可能性があります。常に迅速に対応してください。

---

## 次のステップ

> **[Bybit 接続 →](/brokers/bybit)** または **[セキュリティ概要 →](/security)**
