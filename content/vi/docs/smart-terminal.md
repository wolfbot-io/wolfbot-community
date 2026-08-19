---
title: "Smart Terminal của WolfBot Community — Hướng dẫn giao dịch thủ công"
description: "Cách dùng Smart Terminal của WolfBot Community để giao dịch thủ công. Đặt lệnh với kiểm soát rủi ro tự động trên tất cả sàn crypto và broker MT5 đã kết nối."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/smart-terminal"
next_guide: "/vi/docs/risk-controls"
previous_guide: "/vi/docs/simulation"
related_guides: ["/vi/docs/simulation", "/vi/docs/risk-controls", "/vi/brokers/api-key-guide"]
keywords: ["smart terminal wolfbot", "giao dịch thủ công wolfbot", "terminal giao dịch crypto", "terminal bot giao dịch"]
sitemap_priority: 0.85
---

# Hướng dẫn Smart Terminal

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc17** · Cập nhật lần cuối: 2026-08-11

## Smart Terminal là gì?

Smart Terminal là giao diện giao dịch thủ công của WolfBot Community. Khác với giao diện giao dịch sàn thông thường, nó tự động áp dụng thiết lập rủi ro của bạn — giới hạn vị thế, stop-loss, và take-profit — cho mọi lệnh bạn đặt. Nó hoạt động giống hệt dù bạn giao dịch crypto trên Binance, futures trên Bybit, hay vàng qua MT5.

## Các khái niệm chính

| Tính năng | Nó làm gì |
|---|---|
| **Risk-Aware Entry** | Tự động tính kích thước vị thế dựa trên thiết lập rủi ro của bạn |
| **Auto TP/SL** | Tự động đặt lệnh take-profit và stop-loss |
| **Smart Limit** | Định tuyến lệnh thông minh dựa trên độ sâu thị trường |
| **Position Monitor** | Theo dõi P&L thời gian thực trên tất cả vị thế |

## Cách sử dụng

### 1. Mở Smart Terminal

1. Khởi chạy WolfBot Community
2. Bấm **Smart Terminal** trong sidebar
3. Chọn cặp giao dịch (ví dụ BTC/USDT cho crypto, EUR/USD cho forex, XAU/USD cho vàng)
4. Chọn tài khoản broker của bạn

### 2. Cấu hình lệnh của bạn

Terminal hiển thị các giá trị đã điền sẵn dựa trên cấu hình rủi ro của bạn:

- **Kích thước vị thế** — Tính từ phần trăm rủi ro và số dư tài khoản của bạn
- **Stop-Loss** — Tự đặt dựa trên tham số rủi ro của bạn
- **Take-Profit** — Tự đặt dựa trên tỷ lệ lợi nhuận của bạn
- **Loại lệnh** — Market, Limit, hoặc Smart Limit

### 3. Đặt lệnh

1. Xem lại các tham số đã điền sẵn
2. Điều chỉnh nếu cần (terminal cảnh báo nếu bạn vượt giới hạn rủi ro)
3. Bấm **Buy** hoặc **Sell**
4. Xác nhận chi tiết lệnh
5. Lệnh của bạn được đặt với bảo vệ TP/SL đã gắn sẵn

### 4. Giám sát vị thế

Sau khi đặt lệnh:
- Vị thế xuất hiện trong bảng **Positions**
- P&L cập nhật thời gian thực
- Mức TP/SL hiển thị
- Bạn có thể sửa hoặc đóng từ terminal

## Lưới an toàn rủi ro

Smart Terminal tự động thực thi:

- **Trần kích thước vị thế** — Không thể vượt mức tối đa đã cấu hình
- **Stop-Loss bắt buộc** — Mọi vị thế phải có stop-loss (có thể cấu hình)
- **Cooldown Timer** — Ngăn bắn lệnh liên tục (có thể cấu hình)
- **Giới hạn lệnh hàng ngày** — Số lệnh tối đa mỗi ngày (có thể cấu hình)

Xem [Kiểm soát rủi ro →](/vi/docs/risk-controls) để cấu hình các tham số an toàn của bạn.

## Tài khoản Demo vs Live

Không có chế độ terminal riêng để chuyển — tài khoản bạn chọn ở Bước 1 quyết định điều đó:

| Loại tài khoản | Cách hoạt động |
|---|---|
| **Demo** | Lệnh khớp với testnet của broker bằng tiền ảo — không rủi ro |
| **Live** | Lệnh khớp trên tài khoản sàn hoặc broker MT5 thật của bạn |

Smart Terminal hành xử giống hệt dù theo cách nào — cùng kiểm soát rủi ro, cùng logic lệnh.

> ⚠️ Luôn kiểm thử trên tài khoản Demo trước khi chuyển sang Live. Xem [Hướng dẫn tài khoản Demo →](/vi/docs/simulation)

## Loại lệnh

### Market Order
Khớp ngay lập tức ở mức giá tốt nhất khả dụng.

### Limit Order
Chỉ khớp ở mức giá bạn chỉ định hoặc tốt hơn.

### Smart Limit
WolfBot theo dõi sổ lệnh và khớp khi điều kiện tối ưu — cân bằng giữa giá và xác suất khớp.

## Các thao tác thường gặp

| Thao tác | Cách làm |
|---|---|
| Đặt lệnh mua thị trường | Chọn cặp → bấm **Buy Market** |
| Đặt lệnh mua giới hạn | Chọn cặp → chọn **Limit** → đặt giá → bấm **Buy** |
| Đặt TP/SL | Tự đặt từ cấu hình rủi ro; ghi đè thủ công trong bảng vị thế |
| Đóng vị thế | Bấm vị thế → **Close** |
| Sửa TP/SL | Bấm vị thế → sửa giá trị TP/SL → xác nhận |
| Xem lịch sử lệnh | Tab **Activity** trong sidebar |

## Khắc phục sự cố

- **"Risk limit exceeded"** — Giảm kích thước vị thế hoặc điều chỉnh thiết lập rủi ro
- **"Cooldown active"** — Chờ cooldown timer hết hạn
- **"Insufficient balance"** — Kiểm tra số dư sàn hoặc broker MT5 của bạn
- **"Order rejected"** — Kiểm tra mức tối thiểu của sàn hoặc yêu cầu kích thước lot MT5

## Bước tiếp theo

> **[Cấu hình kiểm soát rủi ro →](/vi/docs/risk-controls)**
