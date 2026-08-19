---
title: "Bybit を WolfBot Community に接続 — ステップバイステップ"
description: "Bybit を WolfBot Community に接続 — Trade-Only API キーを作成し、現物・先物・デモの自動取引を開始しましょう。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["bybit trading bot", "bybit self hosted bot", "bybit api trading automation", "connect bybit to wolfbot"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "brokers/bybit"
---

# Bybit を WolfBot Community に接続

**WolfBot Community v0.1.0-p12-ghcr-rc17 でテスト済み** · 最終更新: 2026-08-15

**Bybit サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅

## このガイドの対象者

自動取引のために Bybit 口座(デモまたは実口座)を WolfBot Community に接続したいすべての方。

## 必要なもの

- Bybit 口座 ([登録](https://partner.bybit.com/b/WOLFBOT))
- WolfBot Community インストール済み・実行中
- 5 分

---

## ステップ 1: Bybit API キーを作成

### デモ(テストネット)用

1. [testnet.bybit.com](https://testnet.bybit.com) にログイン
2. **Account & Security → API Management** へ
3. **Create New Key** をクリック
4. **System-generated API Key** を選択
5. 権限を設定:
   - ✅ **Trade** (読み取り-書き込み)
   - ❌ **Withdrawal** (無効)
   - ❌ **Transfer** (無効)
6. (任意) セキュリティ強化のため IP アドレスをバインド
7. **Confirm** をクリック
8. **API Key と Secret Key をコピー・保存**

### 実取引用

1. [bybit.com](https://partner.bybit.com/b/WOLFBOT) にログイン
2. **Account & Security → API Management** へ
3. デモと同じ手順 — 出金・振替は常に無効

> ⚠️ **重要:** 出金(Withdrawal)または振替(Transfer)権限を決して有効にしないでください。WolfBot に必要なのは取引権限だけです。

---

## ステップ 2: Bybit 口座を追加

1. WolfBot Community を開く
2. **Exchange Accounts → Add Account** へ
3. ブローカー一覧から **Bybit** を選択
4. 口座タイプを選択: **Demo** または **Live**
5. API Key と Secret Key を入力
6. **Test Connection** をクリック

WolfBot が以下を確認します:
- API キーの有効性
- 権限の正確性
- ネットワーク接続

---

## ステップ 3: 接続をテスト

接続成功後:

1. **Smart Terminal** へ
2. Bybit 取引ペアを選択 (例: BTC/USDT)
3. 最初のテストは **Simulation** モードであることを確認
4. 少量のシミュレーション注文を発注
5. 注文が Positions に表示されることを確認

その後 **Live**(デモまたは実口座)に切り替え:
1. 最小ポジションサイズで開始
2. 少量の指値注文を発注
3. Bybit で注文が表示されることを確認
4. テスト注文をキャンセル

---

## ステップ 4: 設定を構成

Bybit 推奨設定:

| 設定 | デモ | 実口座 |
|---|---|---|
| モード | まず Simulation、その後 Live | 少量で開始 |
| ポジションサイズ | 任意 | 最小 |
| 最大レバレッジ | 任意 | 1x から開始 |
| TP/SL | 有効 | 有効 |
| ヘッジモード | 任意 | 任意 |

---

## 期待される結果

セットアップ成功後:
- **Exchange Accounts** に Bybit が "Connected" と表示
- Smart Terminal に Bybit 残高が表示
- Bybit に表示される注文を発注可能

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| "API key invalid" | キーの有効期限を確認、必要なら再生成 |
| "Permission denied" | Trade 有効・Withdrawal 無効を確認 |
| "Connection timeout" | ファイアウォール/ネットワークを確認 |
| "IP restriction" | 自分の IP が API キー制限と一致するか確認 |
| "Insufficient balance" | 実口座: 入金、デモ: テストネット残高を要求 |

---

## Bybit 固有の注意点

- **ヘッジモード:** 対応。まず Bybit 口座設定で有効化し、その後 WolfBot で使用
- **ポジションモード:** One-Way とヘッジモードの両方に対応
- **注文タイプ:** Market, Limit, TP/SL, DCA すべて対応
- **レート制限:** WolfBot が Bybit のレート制限を自動で遵守

---

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)** または **[Binance 接続 →](/brokers/binance)**
