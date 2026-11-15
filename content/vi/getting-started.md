---
title: "Bắt đầu với WolfBot Community"
description: "Các bước đầu tiên sau khi cài WolfBot Community. Kết nối tài khoản Demo, khám phá Dashboard, và thêm các sàn crypto hoặc broker MT5 của bạn."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "getting-started"
next_guide: "/docs/simulation"
previous_guide: "/vi/install/windows"
related_guides: ["/vi/docs/simulation", "/vi/brokers/bybit", "/vi/docs/risk-controls", "/vi/docs/connect-telegram-notifications"]
keywords: ["wolfbot bắt đầu", "hướng dẫn wolfbot", "cách dùng wolfbot", "nền tảng giao dịch thống nhất"]
sitemap_priority: 0.9
---

# Bắt đầu với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-08-12

## Chào mừng! 👋

WolfBot Community là một nền tảng giao dịch thống nhất — một giao diện cho các sàn crypto và broker MT5. Việc cài đặt nó không tạo bất kỳ tài khoản sàn nào hay đặt bất kỳ lệnh nào — không có gì được kết nối cho đến khi bạn thêm một tài khoản. Hãy làm theo các bước này theo thứ tự.

![Trang chủ WolfBot Community: Trade Every Market. From One Platform.](/images/product/0.1.0-beta.20/vi/01-home.webp "Trang chủ Community giới thiệu một workspace cho sàn crypto và broker MT5.")

> **One Platform. Every Market.** — Crypto + Futures + MT5, thống nhất bởi WolfBot.

## Bước 1: Mở Dashboard

![Thiết lập local và kiểm tra khả năng của WolfBot Community](/images/product/0.1.0-beta.20/vi/31-local-setup.webp "Local setup xác nhận bản cài trước khi kết nối account.")

Khởi chạy WolfBot Community. Màn hình thiết lập local kiểm tra bản cài đã sẵn sàng chưa: hiển thị chế độ hiện tại (mô phỏng), trạng thái dữ liệu thị trường và bảo vệ, và không bao giờ lưu khóa, bật giao dịch thật hay đặt lệnh. Chế độ thực hành dùng được ngay từ đầu; giao dịch thật vẫn tắt cho đến khi bạn kết nối tài khoản và hoàn tất các bước kiểm tra sẵn sàng.

## Bước 2: Khám phá Dashboard

| Khu vực | Mục đích |
|---|---|
| **Portfolio Overview** | Số dư, P&L, vị thế — trên TẤT CẢ thị trường đã kết nối |
| **Bots** | Bot giao dịch tự động cho crypto và MT5 |
| **Smart Terminal** | Giao dịch thủ công với kiểm soát rủi ro |
| **Risk Controls** | Giới hạn vị thế, bảo vệ drawdown |
| **Exchange Accounts** | Kết nối broker và API key |

![Màn hình Tổng quan WolfBot Community với tài khoản Demo và Live tách riêng](/images/product/0.1.0-beta.20/vi/02-overview-demo.webp "Tổng quan tách rõ tài khoản Demo và Live, các khu vực chính nằm ngay trên thanh bên.")

## Bước 3: Kết nối tài khoản Demo — Không rủi ro

![Màn hình chọn sàn hoặc broker để kết nối](/images/product/0.1.0-beta.20/vi/33-connect-account.webp "Chọn đường kết nối exchange hoặc broker từ một màn hình rõ ràng.")

WolfBot không có nút "Simulation mode" riêng. Thay vào đó, bạn kết nối tài khoản **Demo/testnet** của chính broker — dữ liệu thị trường thật, tiền ảo, cùng đúng giao diện và bộ máy rủi ro mà sau này bạn sẽ dùng cho giao dịch live.

1. Vào **Exchange Accounts → Add Account**
2. Chọn **Bybit** và làm theo [các bước thiết lập Bybit Demo](/brokers/bybit) — WolfBot tự phát hiện Demo vs. Live từ API key bạn dán vào
3. Thử **Smart Terminal** với tài khoản Demo
4. Quan sát cách vị thế xuất hiện trong Dashboard

> ✅ Tài khoản Demo tốn 0 đồng và không bao giờ chạm tới tiền thật — cách an toàn nhất để học WolfBot trên mọi thị trường được hỗ trợ.

> 🆕 **Chưa có tài khoản Bybit?** Bạn có thể [mở qua link đối tác của WolfBot](https://partner.bybit.com/b/WOLFBOT) — [hướng dẫn từng bước](/vi/brokers/open-bybit-account) bao gồm đăng ký, KYC và 2FA. Không tốn thêm phí, và giúp hỗ trợ WolfBot phát triển.

[Hướng dẫn Demo/Simulation đầy đủ →](/docs/simulation)

## Bước 4: Kết nối thị trường của bạn cho giao dịch thật

Khi sẵn sàng chuyển live:
1. Tạo API key chỉ cho phép giao dịch trên sàn của bạn
2. Exchange Accounts → Add Account → Chọn broker → Nhập key
3. Bắt đầu với vị thế nhỏ và kiểm soát rủi ro chặt

> ⚠️ Luôn dùng API key chỉ cho phép giao dịch (không có quyền rút tiền).

Hướng dẫn broker: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

Mới dùng một sàn? Hãy mở tài khoản đứng tên chính bạn theo các hướng dẫn mở tài khoản: [Bybit](/vi/brokers/open-bybit-account) · [Binance](/vi/brokers/open-binance-account) · [BingX](/vi/brokers/open-bingx-account) · [KuCoin](/vi/brokers/open-kucoin-account) · [Bitget](/vi/brokers/open-bitget-account) · [OKX](/vi/brokers/open-okx-account) · [Gate](/vi/brokers/open-gate-account) · [HTX](/vi/brokers/open-htx-account). Chưa quyết định được giữa hai sàn? Xem [so sánh các sàn](/vi/docs/which-exchange-to-automate-first).

*Công khai link đối tác: các hướng dẫn này dùng link giới thiệu của WolfBot — bạn không tốn thêm phí và link giúp tài trợ phát triển WolfBot. Mọi khuyến mãi hay điều kiện do từng sàn quyết định.*

## Bước 5: Kết nối thông báo Telegram

Tạo bot Telegram riêng và liên kết với WolfBot để nhận thông báo ENTRY, trạng thái lệnh, TP/SL, trailing và cảnh báo an toàn khi nền tảng self-hosted đang chạy.

[Kết nối Telegram từng bước →](/vi/docs/connect-telegram-notifications)

## Checklist tuần đầu

- [ ] Khám phá Dashboard
- [ ] Kết nối tài khoản Demo (Bybit Demo hoặc MT5 demo)
- [ ] Giao dịch Demo trong 1–2 ngày
- [ ] Thử Smart Terminal với tài khoản Demo
- [ ] Đọc [Hướng dẫn Risk Controls](/docs/risk-controls)
- [ ] Kết nối Telegram và nhận tin nhắn kiểm tra
- [ ] Kết nối tài khoản Live khi bạn sẵn sàng

## Cần giúp đỡ?

- [Documentation](/docs)
- [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [Troubleshooting](/docs/troubleshooting)
- [FAQ](/faq)

## Bước tiếp theo

> **[Kết nối tài khoản Demo →](/docs/simulation)**
