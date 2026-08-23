---
title: "MT5 を WolfBot Community に接続 — ステップバイステップ"
description: "WolfBot Community には MT5 が内蔵されています — 別の Windows マシンなしで Windows または Linux で外国為替・金・指数・株式/CFD を取引できます。ステップバイステップ接続ガイド。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gold trading automation", "mt5 on linux"]
sitemap_priority: 0.80
lang: "ja"
translation_of: "brokers/mt5"
---

# MT5 を WolfBot Community に接続

**WolfBot Community v0.1.0-beta.2 でテスト済み** · 最終更新: 2026-08-15

**MT5 サポート状況:** 安定 · デモ ✅ · 実口座 ✅ · ターミナル ✅ · 戦略 ✅ · Windows ✅ · Linux ✅

## MT5 は内蔵されています

外国為替、金、指数、株式/CFD — MT5 市場は、暗号通貨口座と並んで同じダッシュボードで WolfBot Community に最初から内蔵されています。Windows と Linux で同じように動作し、MT5 を取引するために別の Windows マシンは一切必要ありません。

- **Windows** では、既に使用している MetaTrader 5 アプリに WolfBot が接続します。
- **Linux** では、WolfBot がブラウザで直接 MT5 を開きます — 追加インストールは不要です。

## このガイドの対象者

MT5 取引を WolfBot Community で自動化したいトレーダー — 既に使っている OS 上で暗号通貨と伝統的市場のための統合プラットフォーム。

## 必要なもの

- WolfBot Community インストール済み
- MT5 ブローカー口座 (デモまたは実口座)
- Windows の場合: [MetaTrader 5](https://www.metatrader5.com/en/download) インストール済み
- 15 分

## MT5 を接続

1. WolfBot Community を開く
2. **Exchange Accounts → Add Account → MT5** へ
3. ブローカー口座にログイン (デモまたは実口座)
   - **Windows:** MetaTrader 5 アプリ内で行う
   - **Linux:** WolfBot ブラウザウィンドウで直接行う — 初回のみ簡単なセットアップ (下の [技術ユーザー向け](#技術ユーザー向け) 参照)
4. WolfBot が利用可能なシンボルを自動取得
5. 取引を開始 — Smart Terminal、ボット、リスク管理は暗号通貨口座とまったく同じように動作

> ⚠️ WolfBot が MT5 を通じて取引するには、MT5 がログインしている必要があります。

## 接続をテスト

1. WolfBot で: Smart Terminal → MT5 を選択
2. MT5 から利用可能なシンボルが表示されるはず
3. まずデモ口座に少量のテスト注文を発注
4. 実口座 MT5 に切り替えて最小サイズの注文を発注
5. MT5 で注文を確認
6. テスト注文をキャンセル

## 取引できるもの

MT5 はほぼすべての資産クラスをカバーします — WolfBot は固定リストではなく、ブローカーの MT5 口座が提供するものを取引します:

- **外国為替** — EUR/USD、GBP/USD、USD/JPY など 50 以上のペア
- **貴金属** — 金(XAU/USD)、銀(XAG/USD)、しばしばプラチナとパラジウム
- **エネルギー** — 原油、天然ガス (ブローカーによる)
- **指数** — US30、NAS100、S&P 500、DAX など
- **株式/CFD** — 個別企業株式、しばしば数千のシンボル (ブローカーによる)
- **農産物** — 小麦、トウモロコシ、コーヒー、砂糖など (ブローカーによる)
- **暗号通貨 CFD** — ブローカーが提供する場合

> 正確な商品提供は WolfBot ではなく MT5 ブローカーによって異なります — 口座が取引できる完全なシンボル一覧は MT5 ターミナルの **Market Watch** で確認してください。

## 金取引のための MT5

金(XAU/USD)は自動化で最も人気のある MT5 商品の一つです:

1. XAU/USD のある MT5 ブローカーを接続
2. WolfBot で: Smart Terminal → XAU/USD
3. リスクを構成 (金は変動が大きい — 少量で開始)
4. 実取引前にデモ口座でテスト

## 一般的な問題

| 問題 | 解決策 |
|---|---|
| MT5 が接続しない | MT5 でブローカー口座にログインしているか確認し、再試行 |
| "Symbol not available" | ブローカーの利用可能な商品を確認 |
| "Automated trading disabled" | MT5 で: Tools → Options → Expert Advisors → Allow Automated Trading |
| "Order rejected by broker" | 最小ロットサイズと取引時間を確認 |

## 次のステップ

> **[リスク管理を設定 →](/docs/risk-controls)** — 変動の大きい MT5 商品に特に重要

---

## 技術ユーザー向け

以下の詳細は、MT5 ブリッジが正確にどう動作するかを理解したい方、または Linux のセットアップ手順をターミナルから実行したい方向けです。WolfBot で MT5 を使うための必須事項ではありません — 通常の流れは上の [MT5 を接続](#mt5-を接続) を参照してください。

### ブリッジの仕組み

**Windows** — MT5 は別のネイティブアプリとして動作し、WolfBot が直接接続します:

```text
WolfBot Community → MT5 Bridge (local) → MetaTrader 5 Terminal (自分のインストール) → MT5 ブローカーサーバー
```

**Linux** — WolfBot は MT5 ターミナルをコンテナで直接実行し、ブラウザウィンドウを提供します(VNC):

```text
WolfBot Community → MT5 Bridge Container (Terminal + VNC + RPyC) → ブラウザウィンドウ → MT5 ブローカーサーバー
```

どちらの場合も、ブリッジは MT5 を*通じてのみ*ブローカーと通信します — WolfBot がブローカーに直接接続することはありません。

### Linux: 一度限りのターミナルセットアップ

WolfBot の MT5 コンテナは基本インストールでは起動されないため(すべてのコミュニティユーザーが MT5 を取引するわけではない)、初回は次のように起動します:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

その後、ブラウザで **`http://127.0.0.1:8090/mt5-vnc/`** を開き(パスワード `wolfbot`、または `MT5_VNC_PASSWORD` で設定した値)、ブローカーにログインします — これが WolfBot の MT5 フローが以降使用するものと同じブラウザウィンドウです。共有クラウドインスタンスではなく自分のマシンなので、アクセスは恒久的で制限がありません。

### Windows: ブリッジ構成リファレンス

| 設定 | 値 |
|---|---|
| MT5 インストールパス | 自動検出 (通常 `C:\Program Files\MetaTrader 5`) |
| 口座タイプ | デモまたは実口座 |
| シンボルマッピング | 自動構成 |

### 要件

- 取引中は MT5 が実行中であること (Windows ではネイティブ、Linux ではブリッジコンテナ)
- MT5 で Automated Trading(アルゴ取引)が有効
- マシンが電源オンのままであること (または VPS を使用 — Windows と Linux の両方で可)
- 未対応: 同時の複数 MT5 インスタンス、一部の特殊なブローカー専用シンボル

### 技術的なトラブルシューティング

| 問題 | 解決策 |
|---|---|
| "MT5 not detected" (Windows) | インストールパスを確認; MT5 を再起動 |
| VNC ページが読み込まれない (Linux) | MT5 コンテナの実行を確認: `docker compose ... ps` — 初回起動は 1 分かかることがある |
| "Bridge connection failed" | MT5 が実行中でログイン済みであることを確認 — Windows はネイティブ、Linux はブラウザセッション |

### MT5 を 24/7 運用

- **Windows:** Windows VPS を使用し、MT5 + WolfBot Community をインストール、MT5 で自動ログインを有効化、Windows で WolfBot の自動起動を設定
- **Linux:** WolfBot Community と MT5 コンテナを有効にした Linux VPS を使用 — 自動ログインのスクリプトなしで、他の WolfBot サービスのようにログイン状態を維持して実行し続けます
