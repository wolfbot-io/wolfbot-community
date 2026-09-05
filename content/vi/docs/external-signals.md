---
title: "Tín hiệu ngoài - Đưa tín hiệu thị trường vào WolfBot Community từ bất kỳ nguồn nào"
description: "Nối tín hiệu giao dịch bên ngoài, alert TradingView, webhook tùy chỉnh và dịch vụ tín hiệu vào bot WolfBot Community tự lưu trữ qua các luồng nhận tín hiệu được xác thực và kiểm soát rủi ro."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-23"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/external-signals"
next_guide: "/vi/docs/tradingview"
related_guides: ["/vi/docs/tradingview", "/vi/docs/automated-trading-workflow", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: [
  "tín hiệu giao dịch bên ngoài",
  "webhook bot giao dịch",
  "tín hiệu tùy chỉnh vào bot giao dịch",
  "dịch vụ tín hiệu wolfbot",
  "tự động hóa webhook có chữ ký",
  "tín hiệu ngoài tự lưu trữ"
]
sitemap_priority: 0.75
---

# Tín hiệu ngoài

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-23

## Hướng dẫn này dành cho ai

- **Nếu bạn đã nhận tín hiệu từ nguồn nào khác** — alert TradingView, dịch vụ tín hiệu trả phí, hay script của chính bạn — và muốn chúng mở lệnh trên bot của bạn thay vì thực thi thủ công.
- **Nếu bạn am hiểu kỹ thuật** — bạn sẽ thấy một pipeline mà mọi tín hiệu ngoài đều đi qua (verify → parse → chuẩn hóa → rủi ro → thực thi), để bạn cắm nguồn riêng mà không cần phát minh một đường mới.

## "Tín hiệu ngoài" ở đây nghĩa là gì

Tín hiệu ngoài là bất kỳ chỉ thị buy/sell/close nào đến từ **bên ngoài** WolfBot Community và cần trở thành một command được queue trong WolfBot. Ví dụ:

- Webhook alert TradingView (xem hướng dẫn riêng [TradingView](/vi/docs/tradingview)).
- Một webhook tùy chỉnh do script hoặc dịch vụ của bạn kích hoạt.
- Một dịch vụ tín hiệu bạn tin cậy đủ để trỏ vào lớp rủi ro của mình.

Alert TradingView simple dùng route TradingView riêng được mô tả trong [hướng dẫn TradingView](/vi/docs/tradingview). Webhook Strategy OS đầy đủ dùng route webhook có chữ ký HMAC.

## Một pipeline mà mọi tín hiệu ngoài đều dùng

Bất kể nguồn nào, mọi tín hiệu đến đều đi cùng một đường:

```text
HTTP POST
   → tìm source và xác thực
   → phân tích tín hiệu (symbol, action, sizing tùy chọn)
   → chuẩn hóa symbol tới broker đích
   → đính kèm danh tính (source, strategy hoặc integration id)
   → queue command qua lớp rủi ro/khớp lệnh chung
```

Vì mọi nguồn đều dồn qua cùng pipeline, bạn nhận được các đảm bảo giống nhau bất kể tín hiệu đến từ đâu:

- **Có xác thực** — TradingView simple cần source secret trong JSON body; webhook Strategy OS dùng chữ ký HMAC.
- **Gating rủi ro** — entry vẫn qua cùng kiểm soát rủi ro như lệnh thủ công hoặc lệnh chiến lược.
- **Chuẩn hóa symbol** — tên MT5/USD trong tín hiệu được map đúng cặp trên sàn đích.

## Chọn đúng luồng nhận tín hiệu

WolfBot hỗ trợ hai kiểu external signal:

| Luồng | Phù hợp cho | Xác thực | Payload |
|---|---|---|---|
| TradingView simple | Alert TradingView do user cấu hình thủ công | Static source secret trong JSON body | `secret`, `symbol`, `action`, `notional_usd` tùy chọn, `signal_id` tùy chọn |
| Strategy OS signed webhook | Dịch vụ/script tự viết có thể tính chữ ký | Header HMAC theo từng request | Schema giàu thông tin, có version, strategy identity và risk fields |

Bắt đầu với TradingView simple nếu bạn đang paste JSON vào TradingView. Chỉ dùng route Strategy OS signed khi phía gửi có thể tính chữ ký cho từng request.

## Kiểm thử mọi nguồn mới trên Simulation trước

Với bất kỳ nguồn ngoài nào:

1. Trỏ nó vào chiến lược **Simulation** với webhook URL + secret riêng.
2. Kích hoạt một tín hiệu test và xác nhận nó đáp, đã xác thực, đúng symbol dự kiến.
3. Kiểm entry được gating rủi ro hoạt động như mong đợi.
4. Chỉ khi đó mới chuyển bản sao sang Live.

## Ghi chú bảo mật

- Mỗi nguồn ngoài có **secret hoặc signing key riêng** — hãy coi từng cái như một API key. Đừng để chúng trong chart/công khai repository.
- Giữ route webhook sau HTTPS host của bạn; secret/chữ ký là thứ xác thực, không phải sự bí mật của URL.
- Dịch vụ tín hiệu bạn trỏ vào bot phải là dịch vụ bạn tin cậy — pipeline xác thực request nhưng không thể đánh giá ý tưởng tín hiệu có đúng hay không.

## Bước tiếp theo

- [Alert TradingView →](/vi/docs/tradingview) — nguồn ngoài phổ biến nhất, từng bước
- [Quy trình giao dịch tự động →](/vi/docs/automated-trading-workflow)
- [Simulation trước →](/vi/docs/simulation)

> **[Alert TradingView →](/vi/docs/tradingview)**
