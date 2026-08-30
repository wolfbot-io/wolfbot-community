---
title: "WolfBot Community を VPS で 24/7 実行"
description: "PC を常時起動せずに、仮想プライベートサーバー(VPS)で WolfBot Community を 24 時間運用する方法 — 暗号通貨と MT5 取引。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "20 minutes"
next_guide: "/docs/run-24-7-on-a-vps"
related_guides: ["/install/linux", "/docs/self-hosted-explained", "/docs/mt5-without-windows-vps", "/docs/backup"]
keywords: ["run trading bot 24/7", "vps trading bot", "trading bot vps setup", "wolfbot vps", "24/7 crypto bot"]
sitemap_priority: 0.85
lang: "ja"
translation_of: "docs/run-24-7-on-a-vps"
---

# VPS で 24/7 実行

**WolfBot Community v0.1.0-beta.4 でテスト済み** · 最終更新: 2026-08-15

## なぜ VPS なのか?

自動取引は **常に動作しているとき** に最もよく機能します。PC は 24 時間動作するようには設計されていません — スリープに入る、再起動する、ネットワークが切断されます。

**VPS(Virtual Private Server)** はデータセンター内のコンピュータで:
- 24/7 電源オン
- 安定したインターネット接続
- ローカルの電源/ネットワークに依存しない
- 安価 (通常月 $5〜20)

## このガイドの対象者

- **すべてのトレーダー:** VPS がボットをより信頼できるものにする理由と、深いサーバー知識なしで WolfBot 用に設定する方法。
- **技術ユーザー:** 安定した 24/7 運用のための具体的なコマンドとベストプラクティス。

---

## VPS の選択

### 最小要件

| リソース | 最小 | 推奨 |
|---|---|---|
| **CPU** | 1コア | 2コア |
| **RAM** | 2 GB | 4 GB |
| **ストレージ** | 20 GB SSD | 40 GB SSD |
| **ネットワーク** | 1 Gbit/s | 1 Gbit/s |
| **OS** | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

> 同じ VPS で MT5 を取引するなら 4 GB RAM 以上を使用。

### プロバイダー

評判の良い VPS プロバイダーならどれでも動作します。人気の選択肢: DigitalOcean, Linode, Vultr, Hetzner, AWS Lightsail。

---

## ステップ 1: VPS を作成

1. Ubuntu 22.04 イメージを選択
2. ブローカーサーバーに近いリージョンを選択 (低遅延)
3. サイズを選択 (2 vCPU / 4 GB 推奨)
4. SSH キーを設定 (パスワードより安全)
5. サーバーを作成して起動

---

## ステップ 2: 接続

```bash
ssh root@自分のVPSのIP
```

`自分のVPSのIP` をサーバーの IP アドレスに置き換え。

---

## ステップ 3: WolfBot Community をインストール

[Linux インストールガイド](/install/linux)に従ってください。

まとめ:

```bash
# システムを更新
sudo apt update && sudo apt upgrade -y

# WolfBot をインストール (正確なコマンドは /install/linux 参照)
# ...
```

---

## ステップ 4: 口座を接続して構成

1. ブローカー口座を接続 (暗号通貨および/または MT5) — [市場を接続](/getting-started) 参照
2. リスク管理を構成 — [リスク管理ガイド](/docs/risk-controls) 参照
3. ボットを設定 — [自動取引ワークフロー](/docs/automated-trading-workflow) 参照

---

## ステップ 5: 24 時間運用を確保

### サービスとして実行

WolfBot はサービスとして実行され、起動時に自動開始します:

```bash
# 状態を確認
sudo systemctl status wolfbot

# 必要に応じて有効化
sudo systemctl enable wolfbot
```

### 自動バックアップ

毎日の cron バックアップを設定:

```bash
# cron を開く
crontab -e

# 毎日午前3時にバックアップを追加
0 3 * * * wolfbot backup
```

### アップデートを計画

Stable チャネルで自動アップデートを許可するか、手動でアップデートするかを決定:

```bash
# 手動アップデート
wolfbot update
```

---

## 技術ユーザー向け: 安定性のヒント

### 稼働時間の監視

cron による簡単なヘルスチェック:

```bash
# 5分ごとにサービスが動作しているか確認
*/5 * * * * systemctl is-active --quiet wolfbot || systemctl restart wolfbot
```

### スワップを構成

スワップバッファは小さな VPS で OOM クラッシュを防ぎます:

```bash
# 2 GB のスワップを作成 (ない場合)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### VPS で MT5

MT5 は WolfBot コンテナを通じて Linux で実行されます — Windows VPS は不要。 [Windows VPS なしで Linux 上で MT5 →](/docs/mt5-without-windows-vps) 参照。

---

## セキュリティ

VPS は取引アクセスを保持します — 安全に保ってください:

- [ ] SSH はキーのみ (パスワードなし)
- [ ] ファイアウォール有効 (必要なポートのみ)
- [ ] 定期的なシステムアップデート
- [ ] WolfBot バックアップを別の場所に
- [ ] 不要なサービスをインストールしない

> ⚠️ SSH キーや VPS 資格情報を決して共有しないでください。取引への完全なアクセスを提供します。

---

## よくある質問

**Q: 取引用の VPS は安全ですか?**
はい、ベストプラクティス(キー認証、ファイアウォール、アップデート)に従えば安全です。どのサーバーとも同じセキュリティです。

**Q: VPS のコストはいくらですか?**
WolfBot には通常月 $5〜20。MT5 を取引するなら(WolfBot が Linux で動作)Windows VPS より安いことが多いです。

**Q: 日中だけ取引するなら VPS が必要ですか?**
いいえ — 取引時間に PC がオンなら十分です。VPS は 24/7 運用向けです。

**Q: 別の大陸の VPS を使えますか?**
はい、でも低遅延(ブローカー近くのサーバー)が実行速度に有利です。

---

## 次のステップ

> **[Linux インストール →](/install/linux)** — VPS のセットアップを開始
