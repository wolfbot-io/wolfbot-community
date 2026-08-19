---
title: "Tín hiệu ngoài — Đưa tín hiệu thị trường vào WolfBot Community từ bất kỳ nguồn nào"
description: "Nối các tín hiệu giao dịch bên ngoài — alert TradingView, webhook tùy chỉnh, dịch vụ tín hiệu — vào bot WolfBot Community tự lưu trữ của bạn qua một pipeline có chữ ký và được gating rủi ro."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-16"
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

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc19** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn đã nhận tín hiệu từ nguồn nào khác** — alert TradingView, dịch vụ tín hiệu trả phí, hay script của chính bạn — và muốn chúng mở lệnh trên bot của bạn thay vì thực thi thủ công.
- **Nếu bạn am hiểu kỹ thuật** — bạn sẽ thấy một pipeline mà mọi tín hiệu ngoài đều đi qua (verify → parse → chuẩn hóa → rủi ro → thực thi), để bạn cắm nguồn riêng mà không cần phát minh một đường mới.

## "Tín hiệu ngoài" ở đây nghĩa là gì

Tín hiệu ngoài là bất kỳ chỉ thị mua/bán nào đến từ **bên ngoài** WolfBot Community và cần trở thành một lệnh. Ví dụ:

- Webhook alert TradingView (xem hướng dẫn riêng [TradingView](/vi/docs/tradingview)).
- Một webhook tùy chỉnh do script hoặc dịch vụ của bạn kích hoạt.
- Một dịch vụ tín hiệu bạn tin cậy đủ để trỏ vào lớp rủi ro của mình.

Tất cả chia sẻ một điểm vào có chữ ký duy nhất thay vì mỗi nguồn một tích hợp riêng.

## Một pipeline mà mọi tín hiệu ngoài đều dùng

Bất kể nguồn nào, mọi tín hiệu đến đều đi cùng một đường:

```text
HTTP POST (có chữ ký)
   → xác minh chữ ký (HMAC với webhook secret của bạn)
   → phân tích tín hiệu (symbol, hướng, từ/đến)
   → chuẩn hóa symbol tới broker đích
   → đính kèm danh tính (nguồn, chiến lược, phân tầng)
   → xếp hàng entry qua lớp rủi ro/khớp lệnh chung
```

Vì mọi nguồn đều dồn qua cùng pipeline, bạn nhận được các đảm bảo giống nhau bất kể tín hiệu đến từ đâu:

- **Có xác thực** — chỉ request được ký bằng secret của bạn mới thực thi.
- **Gating rủi ro** — entry vẫn qua cùng kiểm soát rủi ro như lệnh thủ công hoặc lệnh chiến lược.
- **Chuẩn hóa symbol** — tên MT5/USD trong tín hiệu được map đúng cặp trên sàn đích.

## Phân tầng giữ tín hiệu phù hợp với nguồn

Tín hiệu ngoài dùng mô hình payload ba phân tầng, nên cả tín hiệu nhẹ và yêu cầu lệnh đầy đủ đều được hỗ trợ:

- `signal_only` — hướng/symbol; WolfBot lo khối lượng và bảo vệ.
- `signal_and_risk` — thêm trường notional và take-profit.
- `full_entry_request` — đầy đủ, gồm tài khoản đích.

Bắt đầu một nguồn ngoài mới ở `signal_only` và chỉ nâng cấp sau khi thấy một vòng lặp sạch trên Simulation.

## Kiểm thử mọi nguồn mới trên Simulation trước

Với bất kỳ nguồn ngoài nào:

1. Trỏ nó vào chiến lược **Simulation** với webhook URL + secret riêng.
2. Kích hoạt một tín hiệu test và xác nhận nó đáp, đã xác thực, đúng symbol dự kiến.
3. Kiểm entry được gating rủi ro hoạt động như mong đợi.
4. Chỉ khi đó mới chuyển bản sao sang Live.

## Ghi chú bảo mật

- Mỗi nguồn ngoài có **webhook secret riêng** — hãy coi từng cái như một API key. Đừng để chúng trong chart/công khai repository.
- Giữ route webhook sau host của bạn; chữ ký là thứ xác thực, không phải sự bí mật của URL.
- Dịch vụ tín hiệu bạn trỏ vào bot phải là dịch vụ bạn tin cậy — pipeline xác thực request nhưng không thể đánh giá ý tưởng tín hiệu có đúng hay không.

## Bước tiếp theo

- [Alert TradingView →](/vi/docs/tradingview) — nguồn ngoài phổ biến nhất, từng bước
- [Quy trình giao dịch tự động →](/vi/docs/automated-trading-workflow)
- [Simulation trước →](/vi/docs/simulation)

> **[Alert TradingView →](/vi/docs/tradingview)**
