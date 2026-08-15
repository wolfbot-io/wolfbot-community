---
title: "KuCoin を WolfBot Community に接続 — ステップバイステップ"
description: "KuCoin を WolfBot Community に接続 — Passphrase 付きの API キーを作成し、現物・先物の自動取引を開始しましょう。"
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin trading bot", "kucoin api bot", "connect kucoin to wolfbot"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "brokers/kucoin"
---

# KuCoin を WolfBot Community に接続

**WolfBot Community v0.1.0-p12-ghcr-rc8 でテスト済み** · 最終更新: 2026-08-15

**KuCoin サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅

## このガイドの対象者

KuCoin 口座を WolfBot Community に接続したいすべての方。

## 必要なもの

- KuCoin 口座 ([登録](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community インストール済み
- 5 分

---

## ステップ 1: KuCoin API キーを作成

1. [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO) にログイン
2. **Account → API Management** へ
3. **Create API** をクリック
4. 「WolfBot Community」とラベル付け
5. **API Passphrase** を設定 (KuCoin 必須 — 覚えておいてください!)
6. 権限:
   - Spot Trading: ✅ ON
   - Futures Trading: ✅ ON (先物を使用する場合)
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
7. (推奨) IP アドレスをバインド
8. 認証を完了 → Key, Secret, Passphrase を保存

> ⚠️ KuCoin は Passphrase が必要です。WolfBot で必要になるので安全に保管してください。

---

## ステップ 2: WolfBot に追加

1. WolfBot → **Exchange Accounts → Add Account**
2. **KuCoin** を選択
3. 口座タイプを選択: **Spot** または **Futures**
4. API Key, Secret Key, **Passphrase** を入力
5. **Test Connection** をクリック

---

## ステップ 3: テスト

1. Smart Terminal → 取引ペアを選択
2. デモ API キーで開始 → 少量の実注文
3. KuCoin で確認 → キャンセル

---

## KuCoin 固有の注意点

- **Passphrase 必須** — 多くのブローカーと異なり、KuCoin は API Passphrase を要求
- **デモ:** KuCoin Sandbox でテスト可能
- **先物:** 利用可能
- **トークンの多様性:** KuCoin は多くのアルトコインペアに対応

---

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| "Passphrase incorrect" | 再入力; Passphrase は大文字小文字を区別 |
| API key invalid | KuCoin で再生成 |
| Permission denied | Spot Trading を有効化 |
| Connection timeout | ファイアウォール確認 |

---

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)**
