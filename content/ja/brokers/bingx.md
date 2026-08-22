---
title: "BingX を WolfBot Community に接続 — ステップバイステップ"
description: "BingX を WolfBot Community に接続 — Trade-Only API キーを作成し、Standard および Perpetual Futures の自動取引を開始しましょう。"
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx trading bot", "bingx api bot", "connect bingx to wolfbot"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "brokers/bingx"
---

# BingX を WolfBot Community に接続

**WolfBot Community v0.1.0-p12-ghcr-rc21 でテスト済み** · 最終更新: 2026-08-15

**BingX サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅

## このガイドの対象者

Standard または Perpetual Futures の自動取引のために BingX 口座を WolfBot Community に接続したいすべての方。

## 必要なもの

- BingX 口座 ([登録](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community インストール済み
- 5 分

---

## ステップ 1: BingX API キーを作成

1. [bingx.com](https://bingxdao.com/partner/Wolfbot/) にログイン
2. **API Management** へ (プロフィール/設定の下)
3. **Create API Key** をクリック
4. 「WolfBot Community」とラベル付け
5. 権限を設定:
   - Standard/Contract Trading: ✅ ON
   - Withdrawal: ❌ OFF
6. (推奨) IP アドレスをバインド
7. 認証を完了 → Key + Secret を保存

> ⚠️ 出金を決して有効にしないでください — WolfBot に必要なのは取引だけです。

---

## ステップ 2: WolfBot に追加

1. WolfBot → **Exchange Accounts → Add Account**
2. **BingX** を選択
3. **Standard** または **Perpetual Futures** を選択
4. API Key + Secret を入力 → **Test Connection**

---

## ステップ 3: テスト

1. Smart Terminal → 取引ペアを選択 (例: BTC/USDT)
2. デモ API キーで開始 → 少量の実指値注文
3. BingX で確認 → テスト注文をキャンセル

---

## BingX 固有の注意点

- **デモ取引:** アプリの Derivatives → Perpetual Futures → Demo Trading で利用可能(仮想残高を使用) — [仕組み](https://bingx.com/en/wiki/detail/demo-trading) — 別の API キー
- **先物:** WolfBot で Perpetual Futures 口座タイプを使用
- **コピートレード:** WolfBot は BingX コピートレードと相互作用しません

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| API key invalid | BingX で再生成 |
| Permission error | Standard/Contract Trading を有効化 |
| Connection timeout | ファイアウォール確認、BingX の地域制限の可能性 |

---

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)**
