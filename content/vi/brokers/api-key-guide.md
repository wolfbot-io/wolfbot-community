---
title: "Hướng dẫn API Key chỉ cho phép giao dịch — Thực hành bảo mật tốt nhất"
description: "Cách tạo API key chỉ cho phép giao dịch an toàn cho WolfBot Community. Không bao giờ bật quyền rút tiền. Hướng dẫn cho Binance, Bybit, BingX, KuCoin, Bitget."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "brokers/api-key-guide"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: [
  "api key chỉ cho phép giao dịch",
  "bảo mật api key bot giao dịch",
  "bot giao dịch phi tập trung",
  "thiết lập api key an toàn",
  "quyền api wolfbot"
]
sitemap_priority: 0.80
---

# Hướng dẫn API Key chỉ cho phép giao dịch

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc21** · Cập nhật lần cuối: 2026-08-11

## Vì sao chỉ cho phép giao dịch?

WolfBot Community là **phi tập trung (non-custodial)** — nó không bao giờ giữ tiền của bạn. Nó kết nối tới các sàn qua API key mà bạn kiểm soát. Bạn có thể thu hồi các key này bất cứ lúc nào.

**Quy tắc vàng:** Không bao giờ bật quyền Withdrawal hoặc Transfer trên bất kỳ API key nào dùng với phần mềm giao dịch. Xem [Giải thích API key chỉ cho phép giao dịch →](/docs/trade-only-api-keys-explained) để biết vì sao thiết lập duy nhất này quan trọng hơn bất kỳ thiết lập nào khác.

## Quyền cần thiết

WolfBot chỉ cần các quyền này:

| Quyền | Cần thiết | Vì sao |
|---|---|---|
| **Trade** (Read-Write) | ✅ Có | Đặt/hủy lệnh, kiểm tra vị thế |
| **Read** (Read-Only) | ✅ Có | Đọc số dư, vị thế, lịch sử lệnh |
| **Withdrawal** | ❌ KHÔNG BAO GIỜ | WolfBot không rút tiền |
| **Transfer** | ❌ KHÔNG BAO GIỜ | WolfBot không chuyển tiền giữa các tài khoản |

Nếu sàn cung cấp quyền chi tiết, cũng tắt:
- ❌ **Withdrawal**
- ❌ **Internal Transfer**
- ❌ **Sub-account Transfer**
- ❌ Quản lý **Earn/Staking**

## Theo từng sàn

### Binance
1. API Management → Create API
2. Bật: **Enable Spot & Margin Trading**
3. Tắt: **Enable Withdrawals**
4. (Khuyến nghị) Giới hạn theo IP tin cậy

### Bybit
1. API Management → Create New Key
2. Bật: quyền **Trade**
3. Tắt: **Withdrawal**, **Transfer**
4. (Khuyến nghị) Gắn địa chỉ IP

### BingX
1. API Management → Create API Key
2. Bật: **Trade**
3. Tắt: **Withdrawal**
4. (Khuyến nghị) Hạn chế truy cập IP

### KuCoin
1. API Management → Create API
2. Bật: **Trade** dưới Spot Trading
3. Tắt: **Withdrawal**, **Transfer**
4. Đặt passphrase (bắt buộc với KuCoin)

### Bitget
1. API Management → Create API Key
2. Bật: **Trade**
3. Tắt: **Withdrawal**
4. (Khuyến nghị) Gắn IP

## Mẹo bảo mật bổ sung

### Gắn IP (Khuyến nghị)
Nơi nào hỗ trợ, hãy gắn API key vào địa chỉ IP máy của bạn:
- Ngăn sử dụng từ các vị trí khác
- Cập nhật khi IP của bạn thay đổi
- Dùng IP tĩnh hoặc VPS cho hoạt động 24/7

### Key riêng cho từng dịch vụ
- Một API key cho WolfBot Community
- Các key khác cho ứng dụng theo dõi danh mục
- Dễ dàng thu hồi từng tích hợp riêng

### Kiểm tra định kỳ
- Xem lại API key hàng tháng
- Xóa các key không dùng
- Tạo lại key định kỳ

### Lưu trữ key
- Lưu API secret an toàn (WolfBot mã hóa chúng cục bộ)
- Không bao giờ chia sẻ key trong ảnh chụp màn hình hay tin nhắn hỗ trợ
- Không lưu key trong ghi chú đám mây hay email

---

## Điều gì xảy ra nếu key bị lộ?

1. **Ngay lập tức** xóa API key trên sàn
2. Kiểm tra tài khoản của bạn cho hoạt động trái phép
3. Tạo một key chỉ cho phép giao dịch mới
4. Cập nhật WolfBot với key mới

Vì quyền rút tiền bị tắt, một key chỉ cho phép giao dịch bị lộ không thể đánh cắp tiền — nhưng nó có thể đặt các lệnh không mong muốn. Luôn hành động nhanh.

---

## Bước tiếp theo

> **[Kết nối Bybit →](/brokers/bybit)** hoặc **[Tổng quan bảo mật →](/security)**
