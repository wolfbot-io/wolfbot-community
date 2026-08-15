---
title: "Kết nối Bitget với WolfBot Community — Từng bước"
description: "Kết nối Bitget với WolfBot Community — tạo API key chỉ cho phép giao dịch và bắt đầu giao dịch tự động trên Spot và Futures."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "brokers/bitget"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bot giao dịch bitget", "bot api bitget", "kết nối bitget với wolfbot"]
sitemap_priority: 0.80
---

# Kết nối Bitget với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-11

**Trạng thái hỗ trợ Bitget:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Hướng dẫn này dành cho ai

Bất kỳ ai kết nối tài khoản Bitget với WolfBot Community.

## Bạn cần gì

- Một tài khoản Bitget ([đăng ký](https://www.bitget.com))
- WolfBot Community đã cài
- 5 phút

---

## Bước 1: Tạo Bitget API Key

1. Đăng nhập vào [bitget.com](https://www.bitget.com)
2. Vào **Account → API Management**
3. Bấm **Create API Key**
4. Đặt tên "WolfBot Community"
5. Đặt quyền:
   - Trade: ✅ BẬT
   - Withdrawal: ❌ TẮT
   - Transfer: ❌ TẮT
6. (Khuyến nghị) Gắn địa chỉ IP
7. Hoàn tất xác minh → lưu Key + Secret

---

## Bước 2: Thêm vào WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Chọn **Bitget**
3. Chọn **Spot** hoặc **Futures**
4. Nhập API Key + Secret → **Test Connection**

---

## Bước 3: Kiểm tra

1. Smart Terminal → chọn cặp giao dịch
2. Bắt đầu với API key Demo → rồi một lệnh giới hạn live nhỏ
3. Xác minh trên Bitget → hủy

---

## Ghi chú riêng về Bitget

- **Demo trading:** Bitget testnet khả dụng để kiểm thử
- **Futures:** Khả dụng
- **Copy trading:** WolfBot không tương tác với tính năng copy trading của Bitget

---

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| API key invalid | Tạo lại trên Bitget |
| Permission denied | Bật quyền Trade |
| IP restriction error | Thêm IP của bạn hoặc tắt hạn chế |

---

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)**
