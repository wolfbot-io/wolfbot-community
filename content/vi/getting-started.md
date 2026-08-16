---
title: "Bắt đầu với WolfBot Community"
description: "Các bước đầu tiên sau khi cài WolfBot Community. Kết nối tài khoản Demo, khám phá Dashboard, và thêm các sàn crypto hoặc broker MT5 của bạn."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "getting-started"
next_guide: "/docs/simulation"
previous_guide: "/vi/install/windows"
related_guides: ["/docs/simulation", "/brokers/bybit", "/docs/risk-controls"]
keywords: ["wolfbot bắt đầu", "hướng dẫn wolfbot", "cách dùng wolfbot", "nền tảng giao dịch thống nhất"]
sitemap_priority: 0.9
---

# Bắt đầu với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-12

## Chào mừng! 👋

WolfBot Community là một nền tảng giao dịch thống nhất — một giao diện cho các sàn crypto và broker MT5. Việc cài đặt nó không tạo bất kỳ tài khoản sàn nào hay đặt bất kỳ lệnh nào — không có gì được kết nối cho đến khi bạn thêm một tài khoản. Hãy làm theo các bước này theo thứ tự.

> **One Platform. Every Market.** — Crypto + Futures + MT5, thống nhất bởi WolfBot.

## Bước 1: Mở Dashboard

Khởi chạy WolfBot Community. Bạn sẽ đến trang **Capability Status** — nó cho thấy những broker và tính năng nào khả dụng trên bản cài của bạn, và xác nhận chưa có gì được kết nối.

## Bước 2: Khám phá Dashboard

| Khu vực | Mục đích |
|---|---|
| **Portfolio Overview** | Số dư, P&L, vị thế — trên TẤT CẢ thị trường đã kết nối |
| **Bots** | Bot giao dịch tự động cho crypto và MT5 |
| **Smart Terminal** | Giao dịch thủ công với kiểm soát rủi ro |
| **Risk Controls** | Giới hạn vị thế, bảo vệ drawdown |
| **Exchange Accounts** | Kết nối broker và API key |

![Tổng quan dashboard WolfBot Community hiển thị danh mục thống nhất, các tài khoản đã kết nối và liên kết nhanh tới Portfolio, Bots, Terminal và Risk](/screenshots/wolfbot-community-dashboard.webp)

## Bước 3: Kết nối tài khoản Demo — Không rủi ro

WolfBot không có nút "Simulation mode" riêng. Thay vào đó, bạn kết nối tài khoản **Demo/testnet** của chính broker — dữ liệu thị trường thật, tiền ảo, cùng đúng giao diện và bộ máy rủi ro mà sau này bạn sẽ dùng cho giao dịch live.

1. Vào **Exchange Accounts → Add Account**
2. Chọn **Bybit** và làm theo [các bước thiết lập Bybit Demo](/brokers/bybit) — WolfBot tự phát hiện Demo vs. Live từ API key bạn dán vào
3. Thử **Smart Terminal** với tài khoản Demo
4. Quan sát cách vị thế xuất hiện trong Dashboard

> ✅ Tài khoản Demo tốn 0 đồng và không bao giờ chạm tới tiền thật — cách an toàn nhất để học WolfBot trên mọi thị trường được hỗ trợ.

[Hướng dẫn Demo/Simulation đầy đủ →](/docs/simulation)

## Bước 4: Kết nối thị trường của bạn cho giao dịch thật

Khi sẵn sàng chuyển live:
1. Tạo API key chỉ cho phép giao dịch trên sàn của bạn
2. Exchange Accounts → Add Account → Chọn broker → Nhập key
3. Bắt đầu với vị thế nhỏ và kiểm soát rủi ro chặt

> ⚠️ Luôn dùng API key chỉ cho phép giao dịch (không có quyền rút tiền).

Hướng dẫn broker: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

## Checklist tuần đầu

- [ ] Khám phá Dashboard
- [ ] Kết nối tài khoản Demo (Bybit Demo hoặc MT5 demo)
- [ ] Giao dịch Demo trong 1–2 ngày
- [ ] Thử Smart Terminal với tài khoản Demo
- [ ] Đọc [Hướng dẫn Risk Controls](/docs/risk-controls)
- [ ] Kết nối tài khoản Live khi bạn sẵn sàng

## Cần giúp đỡ?

- [Documentation](/docs)
- [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [Troubleshooting](/docs/troubleshooting)
- [FAQ](/faq)

## Bước tiếp theo

> **[Kết nối tài khoản Demo →](/docs/simulation)**
