---
title: "Bitget を WolfBot Community に接続 — ステップバイステップ"
description: "Bitget を WolfBot Community に接続 — Trade-Only API キーを作成し、現物・先物の自動取引を開始しましょう。"
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget trading bot", "bitget api bot", "connect bitget to wolfbot"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "brokers/bitget"
---

# Bitget を WolfBot Community に接続

**WolfBot Community v0.1.0-p12-ghcr-rc21 でテスト済み** · 最終更新: 2026-08-15

**Bitget サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅

## このガイドの対象者

Bitget 口座を WolfBot Community に接続したいすべての方。

## 必要なもの

- Bitget 口座 ([登録](https://partner.bitget.com/bg/WOLFBOT))
- WolfBot Community インストール済み
- 5 分

---

## ステップ 1: Bitget API キーを作成

1. [bitget.com](https://partner.bitget.com/bg/WOLFBOT) にログイン
2. **Account → API Management** へ
3. **Create API Key** をクリック
4. 「WolfBot Community」とラベル付け
5. 権限を設定:
   - Trade: ✅ ON
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
6. (推奨) IP アドレスをバインド
7. 認証を完了 → Key + Secret を保存

---

## ステップ 2: WolfBot に追加

1. WolfBot → **Exchange Accounts → Add Account**
2. **Bitget** を選択
3. **Spot** または **Futures** を選択
4. API Key + Secret を入力 → **Test Connection**

---

## ステップ 3: テスト

1. Smart Terminal → 取引ペアを選択
2. デモ API キーで開始 → 少量の実指値注文
3. Bitget で確認 → キャンセル

---

## Bitget 固有の注意点

- **デモ取引:** Bitget テストネットでテスト可能
- **先物:** 利用可能
- **コピートレード:** WolfBot は Bitget コピートレードと相互作用しません

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| API key invalid | Bitget で再生成 |
| Permission denied | Trade 権限を有効化 |
| IP restriction error | 自分の IP を追加または制限を無効化 |

---

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)**
