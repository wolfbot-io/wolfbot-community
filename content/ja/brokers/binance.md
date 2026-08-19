---
title: "Binance を WolfBot Community に接続 — ステップバイステップ"
description: "Binance を WolfBot Community に接続 — Trade-Only API キーを作成し、現物・先物の自動取引を開始しましょう。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["binance trading bot", "binance api bot", "connect binance to wolfbot"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "brokers/binance"
---

# Binance を WolfBot Community に接続

**WolfBot Community v0.1.0-p12-ghcr-rc19 でテスト済み** · 最終更新: 2026-08-15

**Binance サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅

## このガイドの対象者

Binance 口座(デモまたは実口座)を WolfBot Community に接続したいすべての方。

## 必要なもの

- Binance 口座 ([登録](https://accounts.binance.com/register?ref=WOLFBOT))
- WolfBot Community インストール済み
- 5 分

---

## ステップ 1: Binance API キーを作成

1. [binance.com](https://accounts.binance.com/register?ref=WOLFBOT) にログイン
2. **プロフィール → API Management** へ
3. **Create API** をクリック
4. **System generated** を選択
5. 権限を設定:
   - ✅ **Enable Spot & Margin Trading**
   - ❌ **Enable Withdrawals** (無効)
6. (推奨) 信頼できる IP に制限
7. **Create** をクリック
8. **API Key と Secret Key をコピー・保存**

> ⚠️ **重要:** 出金(Withdrawal)権限を決して有効にしないでください。WolfBot に必要なのは取引権限だけです。

---

## ステップ 2: WolfBot に追加

1. WolfBot → **Exchange Accounts → Add Account**
2. ブローカー一覧から **Binance** を選択
3. 口座タイプを選択: **Spot** または **Futures**
4. API Key と Secret Key を入力
5. **Test Connection** をクリック

---

## ステップ 3: 接続をテスト

1. Smart Terminal → 取引ペアを選択 (例: BTC/USDT)
2. デモ API キーで開始 → 少量の実注文
3. Binance で注文を確認 → テスト注文をキャンセル

---

## Binance 固有の注意点

- **現物と先物** の両方をサポート
- **ヘッジモード** 対応
- **注文タイプ:** Market, Limit, TP/SL, DCA すべて対応
- **レート制限:** WolfBot が自動で遵守

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| API key invalid | Binance でキーを再生成 |
| Permission denied | Spot & Margin Trading が有効か確認 |
| IP restriction | 自分の IP が許可リストにあるか確認 |

---

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)**
