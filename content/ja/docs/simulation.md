---
title: "WolfBot Community でデモ口座から始める"
description: "WolfBot Community をブローカーのデモ口座でリスクなしにテストする方法。実資金を賭けずに、暗号通貨・MT5 市場でリアルタイムデータに対してペーパートレードしましょう。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/getting-started"
related_guides: ["/getting-started", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: ["wolfbot simulation", "wolfbot paper trading", "wolfbot demo mode", "test trading bot without money", "bybit demo account"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "docs/simulation"
---

# デモ口座から始める

**WolfBot Community v0.1.0-p12-ghcr-rc20 でテスト済み** · 最終更新: 2026-08-15

## WolfBot の「Simulation」とは?

WolfBot には、オン・オフを切り替える独立したグローバルな「シミュレーションモード」はありません。代わりに、ブローカー自身の **デモ(テストネット)口座** を接続します — 実取引と同じインターフェース、同じリスクエンジン、同じ注文ロジックが、実資金ではなく仮想残高でリアルタイムの市場データに対して実行されます。デモと実取引の間でプラットフォームに違いはなく、取引する口座だけが異なります。

Bybit の場合、WolfBot は API キーがデモ口座か実口座かを自動検出します — モードを手動で選択しません。

## なぜデモ口座から始めるのか?

1. **ゼロリスク** — 実資金が関与しない
2. **インターフェースを学ぶ** — 市場全体で注文、ポジション、リスク管理を理解
3. **戦略をテスト** — 実取引前に暗号通貨と MT5 商品でアプローチを検証
4. **自信をつける** — さまざまな資産クラスで WolfBot が市場の動きにどう反応するか確認

## ステップ 1: デモ口座を接続

1. WolfBot Community を開く → **Exchange Accounts → Add Account**
2. **Bybit** を選択してデモ/テストネット API キーを作成 — 正確な手順は [Bybit 接続ガイド](/brokers/bybit) 参照
3. キーを貼り付け。WolfBot がデモキーであることを自動検出し、口座にその旨ラベル付け
4. MT5 ユーザー: ほとんどの MT5 ブローカーも無料デモ口座を提供 — ブローカーのダッシュボードを確認し、[MT5 接続ガイド](/brokers/mt5) に従う

## ステップ 2: Smart Terminal を探索

Smart Terminal は手動取引のインターフェースです — 後で実取引に使うものと同じです。

1. **Smart Terminal** へ
2. デモ口座を選択し、取引ペアを選択 (例: 暗号通貨なら BTC/USDT、MT5 で金なら XAU/USD)
3. 事前入力されたリスクパラメータを確認:
   - ポジションサイズ
   - ストップロス
   - テイクプロフィット
4. **Place Order** をクリック

注文が **Positions** パネルに即座に表示されます — デモ口座の仮想残高で賄われます。

## ステップ 3: デモポートフォリオを観察

1. **Portfolio Overview** へ
2. デモ口座の残高と P&L を確認
3. ポジションがリアルタイムの市場価格で更新される様子を観察
4. TP/SL レベルがポジションを保護する様子を観察

## ステップ 4: リスク管理を構成

デモモードでも良いリスク管理を実践してください — この設定は実口座接続時にも同じように適用されます:

1. **Position Limits** — 1取引あたりの最大サイズ
2. **Drawdown Guards** — 停止前の最大損失
3. **Cooldowns** — 取引間の最小時間
4. **Daily Limits** — 1日あたりの最大取引数

> 🛡️ リスク管理はデモと実口座で同一に機能します。実取引に備えて今構成してください。

[リスク管理ガイド参照 →](/docs/risk-controls)

## ステップ 5: 自動ボットを試す

1. **Bots → Create Bot** へ
2. 戦略テンプレートを選択
3. パラメータを構成
4. ボットをデモ口座に設定
5. 自動で取引を実行する様子を観察 — 暗号通貨と MT5 商品で同じロジックが実行

## 実取引への切り替え

自信がついたら:
1. 実取引 Trade-Only API キーでブローカー口座を接続 ([市場を接続](/getting-started) 参照)
2. 最小ポジションサイズで開始
3. 狭いストップロスを維持
4. 動作を確認しながら徐々に拡大

> ⚠️ 経験豊富なトレーダーも、新しい戦略はまずデモ口座でテストすべきです — 特にさまざまな市場タイプを取引するとき。

## よくある質問

**Q: デモ口座は実際の市場データを使いますか?**
はい。WolfBot はデモ・実口座の両方で取引所と MT5 ブローカーからリアルタイム価格を取得します。

**Q: デモ口座でお金を失えますか?**
いいえ。デモ口座は実資金ではなく取引所/ブローカーの仮想残高で取引します。

**Q: デモは実取引とどれほど現実的ですか?**
WolfBot は両方で同じ注文ロジックを実行します。主な違いは約定です — デモ口座は実際の注文板ではなく取引所のテストネットで約定するため、スリッページがわずかに異なる場合があります。これは暗号通貨、外国為替、金の取引に共通です。

**Q: デモ残高をリセットできますか?**
WolfBot ではなく取引所によります — ほとんどのブローカーは自社ウェブサイトからデモ口座の仮想残高をチャージまたはリセットできます(例: Bybit テストネットダッシュボード)。

## 次のステップ

> **[Bybit デモを接続 →](/brokers/bybit)** または **[リスク管理を探索 →](/docs/risk-controls)**
