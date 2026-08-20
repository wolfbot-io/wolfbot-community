---
title: "Bắt đầu WolfBot Community với tài khoản Demo"
description: "Học cách kiểm thử WolfBot Community không rủi ro với tài khoản Demo của broker. Giao dịch giấy với dữ liệu thị trường thật trên crypto và MT5 mà không mạo hiểm tiền thật."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/simulation"
next_guide: "/vi/brokers/bybit"
previous_guide: "/vi/getting-started"
related_guides: ["/vi/getting-started", "/vi/docs/risk-controls", "/vi/docs/smart-terminal"]
keywords: [
  "mô phỏng wolfbot",
  "giao dịch giấy wolfbot",
  "chế độ demo wolfbot",
  "kiểm thử bot giao dịch không tốn tiền",
  "trình mô phỏng giao dịch crypto",
  "tài khoản demo bybit"
]
sitemap_priority: 0.85
---

# Bắt đầu với tài khoản Demo

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc20** · Cập nhật lần cuối: 2026-08-12

## "Simulation" trong WolfBot là gì?

WolfBot không có "Simulation mode" toàn cục riêng để bạn bật/tắt. Thay vào đó, bạn kết nối tài khoản **Demo (testnet)** của chính broker — cùng giao diện, cùng bộ máy rủi ro và cùng logic lệnh như giao dịch live, nhưng chạy trên dữ liệu thị trường thời gian thực với tiền ảo thay vì tiền thật. Không có gì của nền tảng thay đổi giữa Demo và Live; chỉ có tài khoản bạn đang giao dịch là khác.

Riêng Bybit, WolfBot tự phát hiện API key thuộc tài khoản Demo hay Live — bạn không chọn chế độ thủ công.

## Vì sao bắt đầu với tài khoản Demo?

1. **Không rủi ro** — Không liên quan đến tiền thật
2. **Học giao diện** — Hiểu lệnh, vị thế, kiểm soát rủi ro trên các thị trường
3. **Kiểm thử chiến lược** — Xác thực cách tiếp cận của bạn trên crypto và MT5 trước khi chuyển live
4. **Xây dựng sự tự tin** — Xem cách WolfBot phản ứng với biến động thị trường trên các loại tài sản khác nhau

## Bước 1: Kết nối tài khoản Demo

1. Mở WolfBot Community → **Exchange Accounts → Add Account**
2. Chọn **Bybit** và tạo API key Demo/testnet — xem [hướng dẫn kết nối Bybit](/vi/brokers/bybit) để biết các bước chính xác
3. Dán key vào. WolfBot tự phát hiện đó là key Demo và gắn nhãn tài khoản tương ứng
4. Người dùng MT5: hầu hết broker MT5 cũng cung cấp tài khoản demo miễn phí — kiểm tra dashboard của broker bạn, rồi làm theo [hướng dẫn kết nối MT5](/vi/brokers/mt5)

## Bước 2: Khám phá Smart Terminal

Smart Terminal là giao diện giao dịch thủ công của bạn — cùng cái bạn sẽ dùng cho giao dịch live sau này.

1. Vào **Smart Terminal**
2. Chọn tài khoản Demo, rồi một cặp giao dịch (ví dụ BTC/USDT cho crypto, hoặc XAU/USD cho vàng qua MT5)
3. Chú ý các tham số rủi ro đã điền sẵn:
   - Kích thước vị thế
   - Stop-loss
   - Take-profit
4. Bấm **Place Order**

Lệnh của bạn xuất hiện ngay trong bảng **Positions** — được tài trợ bởi số dư ảo của tài khoản Demo.

## Bước 3: Xem danh mục Demo của bạn

1. Vào **Portfolio Overview**
2. Xem số dư và P&L của tài khoản Demo
3. Quan sát vị thế cập nhật theo giá thị trường thật
4. Quan sát cách mức TP/SL bảo vệ vị thế của bạn

## Bước 4: Cấu hình kiểm soát rủi ro

Ngay cả trên Demo, hãy thực hành quản trị rủi ro tốt — các thiết lập này chuyển sang giống hệt khi bạn kết nối tài khoản Live:

1. **Giới hạn vị thế** — Kích thước tối đa mỗi lệnh
2. **Bảo vệ drawdown** — Thua tối đa trước khi dừng
3. **Cooldown** — Thời gian tối thiểu giữa các lệnh
4. **Giới hạn hàng ngày** — Số lệnh tối đa mỗi ngày

> 🛡️ Kiểm soát rủi ro hoạt động giống hệt trên tài khoản Demo và Live. Cấu hình chúng ngay bây giờ để bạn sẵn sàng khi chuyển live.

Xem [Hướng dẫn kiểm soát rủi ro →](/vi/docs/risk-controls)

## Bước 5: Thử bot tự động

1. Vào **Bots → Create Bot**
2. Chọn một mẫu chiến lược
3. Cấu hình tham số
4. Trỏ bot vào tài khoản Demo của bạn
5. Xem nó thực hiện giao dịch tự động — cùng logic chạy cho crypto và MT5

## Chuyển sang giao dịch Live

Khi bạn tự tin:
1. Kết nối tài khoản broker với API key Live chỉ cho phép giao dịch (xem [Kết nối thị trường của bạn](/vi/getting-started))
2. Bắt đầu với kích thước vị thế tối thiểu
3. Giữ stop-loss chặt
4. Tăng dần khi bạn xác minh hành vi

> ⚠️ Ngay cả trader có kinh nghiệm cũng nên kiểm thử chiến lược mới trên tài khoản Demo trước — đặc biệt khi giao dịch trên các loại thị trường khác nhau.

## Câu hỏi thường gặp

**Q: Tài khoản Demo có dùng dữ liệu thị trường thật không?**
Có. WolfBot lấy giá thời gian thực từ các sàn và broker MT5 cho cả tài khoản Demo và Live.

**Q: Tôi có thể mất tiền trên tài khoản Demo không?**
Không. Tài khoản Demo giao dịch với tiền ảo do sàn/broker cung cấp, không phải tiền thật.

**Q: Demo so với Live thực tế đến đâu?**
WolfBot chạy đúng cùng logic lệnh trên cả hai. Khác biệt chính là khớp lệnh — tài khoản Demo khớp với testnet của sàn, không phải sổ lệnh thật, nên slippage có thể khác đôi chút. Điều này đúng dù bạn giao dịch crypto, forex, hay vàng.

**Q: Tôi có thể đặt lại số dư Demo không?**
Điều đó phụ thuộc vào sàn, không phải WolfBot — hầu hết broker cho phép bạn nạp thêm hoặc đặt lại số dư ảo của tài khoản Demo từ website của họ (ví dụ dashboard testnet của Bybit).

## Bước tiếp theo

> **[Kết nối Bybit Demo →](/vi/brokers/bybit)** hoặc **[Khám phá kiểm soát rủi ro →](/vi/docs/risk-controls)**
