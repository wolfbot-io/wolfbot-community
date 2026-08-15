---
title: "Kết nối KuCoin với WolfBot Community — Từng bước"
description: "Kết nối KuCoin với WolfBot Community — tạo API key với passphrase và bắt đầu giao dịch tự động trên Spot và Futures."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "brokers/kucoin"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bot giao dịch kucoin", "bot api kucoin", "kết nối kucoin với wolfbot"]
sitemap_priority: 0.80
---

# Kết nối KuCoin với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-11

**Trạng thái hỗ trợ KuCoin:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Hướng dẫn này dành cho ai

Bất kỳ ai kết nối tài khoản KuCoin với WolfBot Community.

## Bạn cần gì

- Một tài khoản KuCoin ([đăng ký](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community đã cài
- 5 phút

---

## Bước 1: Tạo KuCoin API Key

1. Đăng nhập vào [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)
2. Vào **Account → API Management**
3. Bấm **Create API**
4. Đặt tên "WolfBot Community"
5. Đặt một **API Passphrase** (bắt buộc với KuCoin — hãy nhớ nó!)
6. Quyền:
   - Spot Trading: ✅ BẬT
   - Futures Trading: ✅ BẬT (nếu dùng futures)
   - Withdrawal: ❌ TẮT
   - Transfer: ❌ TẮT
7. (Khuyến nghị) Gắn địa chỉ IP
8. Hoàn tất xác minh → lưu Key, Secret, và Passphrase

> ⚠️ KuCoin yêu cầu passphrase. Lưu nó an toàn — bạn sẽ cần nó trong WolfBot.

---

## Bước 2: Thêm vào WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Chọn **KuCoin**
3. Chọn loại tài khoản: **Spot** hoặc **Futures**
4. Nhập API Key, Secret Key, **và Passphrase**
5. Bấm **Test Connection**

---

## Bước 3: Kiểm tra

1. Smart Terminal → chọn cặp giao dịch
2. Bắt đầu với API key Demo → rồi một lệnh live nhỏ
3. Xác minh trên KuCoin → hủy

---

## Ghi chú riêng về KuCoin

- **Passphrase bắt buộc** — khác với hầu hết broker, KuCoin yêu cầu API passphrase
- **Demo:** KuCoin Sandbox khả dụng để kiểm thử
- **Futures:** Khả dụng
- **Đa dạng token:** KuCoin có nhiều cặp altcoin được hỗ trợ

---

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| "Passphrase incorrect" | Nhập lại; passphrase phân biệt hoa thường |
| API key invalid | Tạo lại trên KuCoin |
| Permission denied | Bật Spot Trading |
| Connection timeout | Kiểm tra firewall |

---

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)**
