---
title: "Trade-Only API キーの説明"
description: "取引ボット接続時に「出金なし」設定が最も重要なセキュリティ管理である理由と、それが資本を守る方法。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/brokers/api-key-guide"
related_guides: ["/brokers/api-key-guide", "/security", "/docs/why-bots-fail-risk-management"]
keywords: ["trade only api key", "api key permissions", "no withdrawal api key", "trading bot security", "api key safety"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "docs/trade-only-api-keys-explained"
---

# Trade-Only API キーの説明

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-15

## 最も重要なセキュリティ決定

取引口座をソフトウェアに接続するとき、ほぼすべての資本を守るたった1つの決定をします:

> **取引ソフトウェアに使用する API キーに出金(Withdrawal)権限を決して有効にしないでください。**

## このガイドの対象者

- **すべてのトレーダー:** この1つの設定がお金を守る理由を簡単な言葉で理解。
- **技術ユーザー:** API 権限スコープの正確な説明と、Trade-Only が正しい原則である理由を確認。

## API キーとは?

API キーは、アプリに渡す **口座の鍵** のようなものです。有効にする「権限」によって、異なるキーが異なることを実行できます。

## 3種類の権限

ほぼすべての取引所が3つの基本権限を提供します:

| 権限 | 許可するもの | 取引ボット用? |
|---|---|---|
| **Read** | 残高と履歴の閲覧 | ✅ 有効化 |
| **Trade** | 注文の発注/取消 | ✅ 有効化 |
| **Withdrawal** | 資金の出金 | ❌ **絶対に不可** |

## 出金が危険な理由

キーに **Withdrawal** 権限があると:

- キーを持つ誰でも **口座から資金を出金できる**
- ソフトウェアが侵害されると、攻撃者が資金を盗める
- バグがあれば意図しない出金が起きうる

出金権限がなければ:
- 起こりうる **最悪** は望まない取引 (見て取り消せる)
- 資金が口座を **離れられない**
- 資本の完全な管理を維持

## WolfBot がこれを強制する方法

WolfBot Community は Read と Trade 権限だけを必要とするよう設計されています。WolfBot には出金を必要とする **機能がありません** — WolfBot がノンカストディアルで資金に決して触れないからです。

出金権限のある API キーを WolfBot に入力すると、ベストプラクティスに反します。出金なしでキーを作り直すことを強く推奨します。

## ステップバイステップ (全取引所)

### Binance

1. **API Management** → **Create API**
2. 有効化: `Enable Spot & Margin Trading`
3. 無効化: `Enable Withdrawals` (既定オフのまま)
4. (推奨) 自分の IP に制限

### Bybit

1. **API Management** → **Create New Key**
2. 有効化: `Trade`
3. 無効化: `Withdrawal`, `Transfer`
4. (推奨) IP バインド

### BingX / KuCoin / Bitget

同じパターン — `Trade` を有効化、`Withdrawal` を無効化、自分の IP に制限。

> 取引所別の完全な手順は [Trade-Only API キーガイド →](/brokers/api-key-guide) 参照

## 侵害された Trade-Only キーが意味するもの

最悪のケースでも、被害は限定的です:

| シナリオ | 出金あり | Trade-Only |
|---|---|---|
| 攻撃者がキーを盗む | 資金を **出金** できる | 取引のみ可能 |
| ソフトウェアのバグ | 出金を誘発しうる | 望まない取引のみ |
| 結果 | **資本の損失** | **回復可能** |

望まない取引は悪いですが、すぐ見て決済できます。出金はしばしば **不可逆** です。

## 追加の保護策

1. **IP バインド** — キーを自分のマシンに制限
2. **別々のキー** — サービスごとに1つのキー
3. **定期的な監査** — 古いキーを削除
4. **即時取り消し** — 疑わしいときは即削除

---

## よくある質問

**Q: 取引所が出金の有効化を強制したらどうしますか?**
主要な取引所はどれも強制しません。強制するサービスは避けてください — 危険信号です。

**Q: Trade-Only キーで WolfBot は完全に動作しますか?**
はい。すべての WolfBot 機能(注文、ポジション、リスク管理)は Read + Trade だけで動作します。

**Q: Transfer 権限はどうですか?**
Transfer は口座間(例: 現物 ↔ 先物)の資金移動です。WolfBot には不要です — 同様に無効化してください。

---

## 次のステップ

> **[Trade-Only API キーガイド →](/brokers/api-key-guide)** — 各取引所のステップバイステップ
