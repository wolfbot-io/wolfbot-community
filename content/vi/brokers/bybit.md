---
title: "Kết nối Bybit với WolfBot Community — Từng bước"
description: "Kết nối Bybit với WolfBot Community — tạo API key chỉ cho phép giao dịch và bắt đầu giao dịch tự động trên Spot, Futures và Demo."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "brokers/bybit"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "bot giao dịch bybit",
  "bot bybit tự host",
  "tự động giao dịch api bybit",
  "kết nối bybit với wolfbot",
  "bybit giao dịch thống nhất"
]
sitemap_priority: 0.85
---

# Kết nối Bybit với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc17** · Cập nhật lần cuối: 2026-08-11

**Trạng thái hỗ trợ Bybit:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Hướng dẫn này dành cho ai

Bất kỳ ai muốn kết nối tài khoản Bybit (Demo hoặc Live) với WolfBot Community để giao dịch tự động.

## Bạn cần gì

- Một tài khoản Bybit ([đăng ký](https://partner.bybit.com/b/WOLFBOT))
- WolfBot Community đã cài và đang chạy
- 5 phút

---

## Bước 1: Tạo Bybit API Key

### Cho Demo (Testnet)

1. Vào [testnet.bybit.com](https://testnet.bybit.com) và đăng nhập
2. Điều hướng tới **Account & Security → API Management**
3. Bấm **Create New Key**
4. Chọn **System-generated API Key**
5. Cấu hình quyền:
   - ✅ **Trade** (Read-Write)
   - ❌ **Withdrawal** (tắt)
   - ❌ **Transfer** (tắt)
6. (Tùy chọn) Gắn địa chỉ IP để tăng bảo mật
7. Bấm **Confirm**
8. **Sao chép và lưu** API Key và Secret Key

### Cho giao dịch Live

1. Vào [bybit.com](https://partner.bybit.com/b/WOLFBOT) và đăng nhập
2. Điều hướng tới **Account & Security → API Management**
3. Làm theo các bước giống như Demo — luôn tắt Withdrawal và Transfer

> ⚠️ **Quan trọng:** Không bao giờ bật quyền Withdrawal hoặc Transfer. WolfBot chỉ cần quyền Trade.

---

## Bước 2: Thêm tài khoản Bybit vào WolfBot

1. Mở WolfBot Community
2. Vào **Exchange Accounts → Add Account**
3. Chọn **Bybit** từ danh sách broker
4. Chọn loại tài khoản: **Demo** hoặc **Live**
5. Nhập API Key và Secret Key
6. Bấm **Test Connection**

WolfBot sẽ xác minh:
- API key hợp lệ
- Quyền chính xác
- Kết nối mạng

---

## Bước 3: Kiểm tra kết nối

Sau khi kết nối thành công:

1. Vào **Smart Terminal**
2. Chọn cặp giao dịch Bybit (ví dụ BTC/USDT)
3. Đảm bảo chế độ là **Simulation** (cho lần kiểm tra đầu)
4. Đặt một lệnh mô phỏng nhỏ
5. Xác minh lệnh xuất hiện trong Positions

Sau đó chuyển sang **Live** (Demo hoặc Real):
1. Bắt đầu với kích thước vị thế tối thiểu
2. Đặt một lệnh giới hạn nhỏ
3. Kiểm tra Bybit để xác nhận lệnh xuất hiện
4. Hủy lệnh kiểm tra

---

## Bước 4: Cấu hình thiết lập

Thiết lập khuyến nghị cho Bybit:

| Thiết lập | Demo | Live |
|---|---|---|
| Chế độ | Simulation trước, rồi Live | Bắt đầu nhỏ |
| Kích thước vị thế | Bất kỳ | Tối thiểu |
| Đòn bẩy tối đa | Bất kỳ | Bắt đầu 1x |
| TP/SL | Bật | Bật |
| Hedge Mode | Tùy chọn | Tùy chọn |

---

## Kết quả kỳ vọng

Sau khi thiết lập thành công:
- **Exchange Accounts** hiển thị Bybit là "Connected"
- Smart Terminal hiển thị số dư Bybit của bạn
- Bạn có thể đặt lệnh xuất hiện trên Bybit

Các tài khoản đã kết nối của bạn xuất hiện trong Exchange Accounts cùng trạng thái và quyền:

![WolfBot Exchange Accounts hiển thị trạng thái tài khoản Bybit, môi trường (Live/Demo) và quyền](/screenshots/wolfbot-accounts.webp)

---

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| "API key invalid" | Kiểm tra key chưa hết hạn; tạo lại nếu cần |
| "Permission denied" | Xác minh quyền Trade được bật, Withdrawal bị tắt |
| "Connection timeout" | Kiểm tra firewall/mạng; đảm bảo Bybit không bị hạn chế theo vùng địa lý của bạn |
| "IP restriction" | Nếu gắn IP, đảm bảo IP máy bạn khớp với hạn chế của API key |
| "Insufficient balance" | Cho Live: nạp tiền; cho Demo: yêu cầu tiền testnet |

---

## Ghi chú riêng về Bybit

- **Hedge Mode:** Được hỗ trợ. Bật trong thiết lập tài khoản Bybit trước, rồi trong WolfBot.
- **Position Mode:** Cả One-Way và Hedge Mode đều được hỗ trợ.
- **Loại lệnh:** Market, Limit, TP/SL, DCA đều được hỗ trợ.
- **Rate Limits:** WolfBot tự động tôn trọng giới hạn rate của Bybit.

---

## Khắc phục sự cố

Với các vấn đề kéo dài:
1. Kiểm tra [Bybit API System Status](https://bybit-exchange.github.io/docs/v5/system-status)
2. Xác minh quyền API key trên Bybit
3. Tạo lại API key và thêm lại trong WolfBot
4. Kiểm tra log WolfBot: `wolfbot logs` (Linux) hoặc `C:\Program Files\WolfBot\logs\` (Windows)

---

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)** hoặc **[Kết nối Binance →](/brokers/binance)**
