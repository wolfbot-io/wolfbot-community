---
title: "Kết nối BingX với WolfBot Community — Từng bước"
description: "Kết nối BingX với WolfBot Community — tạo API key chỉ cho phép giao dịch và bắt đầu giao dịch tự động trên Standard và Perpetual Futures."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "brokers/bingx"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bot giao dịch bingx", "bot api bingx", "kết nối bingx với wolfbot"]
sitemap_priority: 0.80
---

# Kết nối BingX với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-11

**Trạng thái hỗ trợ BingX:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Hướng dẫn này dành cho ai

Bất kỳ ai muốn kết nối tài khoản BingX với WolfBot Community để giao dịch tự động trên Standard hoặc Perpetual Futures.

## Bạn cần gì

- Một tài khoản BingX ([đăng ký](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community đã cài
- 5 phút

---

## Bước 1: Tạo BingX API Key

1. Đăng nhập vào [bingx.com](https://bingxdao.com/partner/Wolfbot/)
2. Vào **API Management** (dưới profile/settings)
3. Bấm **Create API Key**
4. Đặt tên "WolfBot Community"
5. Đặt quyền:
   - Standard/Contract Trading: ✅ BẬT
   - Withdrawal: ❌ TẮT
6. (Khuyến nghị) Gắn địa chỉ IP
7. Hoàn tất xác minh → lưu Key + Secret

> ⚠️ Không bao giờ bật Withdrawal — WolfBot chỉ cần quyền giao dịch.

---

## Bước 2: Thêm vào WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Chọn **BingX**
3. Chọn **Standard** hoặc **Perpetual Futures**
4. Nhập API Key + Secret → **Test Connection**

---

## Bước 3: Kiểm tra

1. Smart Terminal → chọn cặp giao dịch (ví dụ BTC/USDT)
2. Bắt đầu với API key Demo → rồi một lệnh giới hạn live nhỏ
3. Xác minh trên BingX → hủy lệnh kiểm tra

---

## Ghi chú riêng về BingX

- **Demo trading:** Khả dụng trong ứng dụng tại Derivatives → Perpetual Futures → Demo Trading (dùng tiền ảo) — [cách hoạt động](https://bingx.com/en/wiki/detail/demo-trading) — dùng API key riêng
- **Futures:** Dùng loại tài khoản Perpetual Futures trong WolfBot
- **Copy trading:** WolfBot không tương tác với tính năng copy trading của BingX

---

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| API key invalid | Tạo lại trên BingX |
| Permission error | Bật Standard/Contract Trading |
| Connection timeout | Kiểm tra firewall; BingX có thể bị hạn chế theo vùng |

---

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)**
