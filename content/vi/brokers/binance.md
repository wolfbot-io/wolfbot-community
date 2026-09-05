---
title: "Kết nối Binance với WolfBot Community — Từng bước"
description: "Kết nối Binance với WolfBot Community — tạo API key chỉ cho phép giao dịch và bắt đầu giao dịch tự động trên Spot và Futures."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "brokers/binance"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["bot giao dịch binance", "bot api binance", "kết nối binance với wolfbot", "binance giao dịch thống nhất", "bot binance tự host"]
sitemap_priority: 0.85
---

# Kết nối Binance với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-11

**Trạng thái hỗ trợ Binance:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Hướng dẫn này dành cho ai

Bất kỳ ai muốn kết nối tài khoản Binance với WolfBot Community để giao dịch trên nhiều thị trường.

## Bạn cần gì

- Một tài khoản Binance ([đăng ký](https://www.binance.com/register?ref=WOLFBOT))
- WolfBot Community đã cài và đang chạy
- 5 phút

---

## Bước 1: Tạo Binance API Key

### Cho giao dịch Spot

1. Đăng nhập vào [binance.com](https://www.binance.com/register?ref=WOLFBOT)
2. Vào **Profile → API Management**
3. Bấm **Create API**
4. Chọn loại key **System-generated**
5. Đặt tên "WolfBot Community"
6. Hoàn tất xác minh bảo mật
7. **Quan trọng — Chỉnh hạn chế (restrictions):**
   - Enable Spot & Margin Trading: ✅ BẬT
   - Enable Withdrawals: ❌ TẮT
   - Enable Universal Transfer: ❌ TẮT
8. (Khuyến nghị) Giới hạn theo IP tin cậy
9. Bấm **Save**

> ⚠️ Không bao giờ bật Withdrawals. WolfBot chỉ cần quyền giao dịch.

---

## Bước 2: Thêm tài khoản Binance vào WolfBot

1. Mở WolfBot Community → **Exchange Accounts → Add Account**
2. Chọn **Binance** → chọn **Spot** hoặc **Futures**
3. Nhập API Key và Secret Key
4. Bấm **Test Connection**

---

## Bước 3: Kiểm tra

1. Vào **Smart Terminal** → chọn BTC/USDT
2. Bắt đầu với tài khoản **Demo** trước
3. Sau đó chuyển sang tài khoản **Live** và đặt một lệnh giới hạn nhỏ
4. Xác minh trên Binance rằng lệnh xuất hiện → Hủy nó

Tài khoản Binance của bạn xuất hiện trong Exchange Accounts với môi trường Live/Demo và trạng thái quyền:

![WolfBot Exchange Accounts hiển thị tài khoản sàn đã kết nối cùng môi trường và quyền](/screenshots/wolfbot-accounts.webp)

---

## Ghi chú riêng về Binance

- **Rate Limits:** WolfBot tự động tôn trọng giới hạn rate API của Binance (1200 weight/phút)
- **Hạn chế IP:** Khuyến nghị mạnh cho key production
- **Loại lệnh:** Market, Limit, Stop-Limit, OCO được hỗ trợ đầy đủ

---

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| "API key invalid" | Tạo lại key trên Binance |
| "IP not whitelisted" | Thêm IP của bạn hoặc tắt hạn chế |
| "Insufficient permissions" | Bật Spot Trading trên Binance |
| "Connection timeout" | Kiểm tra firewall/mạng |

---

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)**
