---
title: "TradingView đến Bot tự lưu trữ — Kết nối Alert TradingView với WolfBot Community"
description: "Gửi alert TradingView qua webhook thẳng tới bot WolfBot Community tự lưu trữ của bạn. Webhook URL, chữ ký HMAC và các template alert phân tầng hoạt động thế nào, và cách kiểm thử an toàn trên Simulation trước."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
lang: "vi"
translation_of: "docs/tradingview"
next_guide: "/vi/docs/automated-trading-workflow"
related_guides: ["/vi/docs/automated-trading-workflow", "/vi/docs/simulation", "/vi/docs/risk-controls", "/vi/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview đến bot giao dịch",
  "tradingview webhook bot",
  "tradingview đến bot tự lưu trữ",
  "tự động hóa alert tradingview",
  "kết nối tradingview với wolfbot",
  "tradingview webhook tự lưu trữ"
]
sitemap_priority: 0.8
---

# TradingView đến Bot tự lưu trữ

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc21** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn viết alert TradingView và muốn chúng hành động trên bot của chính bạn, không phải cuốn sổ tay** — bài này cung cấp đúng một URL và một template alert để nối với nhau, cùng cách kiểm thử an toàn trước khi chạm tiền thật.
- **Nếu bạn am hiểu kỹ thuật** — bạn sẽ thấy webhook được xác thực thế nào (HMAC), payload alert được cấu trúc ra sao, và symbol được chuẩn hóa tới broker thế nào trước khi có bất kỳ lệnh nào.

## Cách TradingView kết nối với WolfBot Community

Alert TradingView có thể gửi một **HTTP webhook**. WolfBot Community phơi bày một endpoint webhook cho alert đó, xác minh nó thực sự đến từ bạn, rồi biến nó thành một tín hiệu chiến lược đi qua cùng một pipeline rủi ro và khớp lệnh như mọi entry khác.

Luồng hoạt động:

```text
Alert TradingView
   → POST HTTP tới webhook URL của bạn
   → WolfBot xác minh chữ ký HMAC
   → phân tích alert (symbol, hướng, từ/đến)
   → chuẩn hóa symbol tới broker đích
   → xếp hàng entry qua lớp rủi ro/khớp lệnh chung
```

## 1. Lấy Webhook URL và secret

Mỗi nguồn TradingView có một endpoint riêng. Dạng đường dẫn:

```text
/api/v1/strategy-webhooks/{source_id}
```

Bạn URL-encode đường dẫn này theo host WolfBot Community của chính mình (cùng host bạn đăng nhập hằng ngày), và ghép với một webhook secret riêng cho nguồn đó. Secret đó chính là thứ WolfBot dùng để xác minh mỗi request thực sự là của bạn.

## 2. Dùng template alert (ba phân tầng)

WolfBot cung cấp template alert ở ba phân tầng, để bạn chỉ gửi đúng thứ từng tình huống cần:

- **`signal_only`** — chỉ hướng và symbol; không có thông tin rủi ro hay tài khoản. WolfBot quyết định khối lượng và bảo vệ.
- **`signal_and_risk`** — thêm các trường rủi ro như requested notional và take-profit, nhưng không chọn tài khoản.
- **`full_entry_request`** — payload đầy đủ gồm cả `account_id` đích, khi bạn muốn một alert điều khiển một tài khoản cụ thể.

Mỗi phân tầng đều mang các trường danh tính — `tenant_id`, `source_id`, chiến lược instance/version, và `definition_hash` — để tín hiệu luôn được gán đúng chiến lược bạn muốn kích hoạt.

## 3. Chữ ký HMAC

Để ngăn kẻ khác kích hoạt bot của bạn, webhook được ký. Request HTTP bạn gửi từ TradingView bao gồm một chữ ký tính trên body bằng webhook secret của bạn (ví dụ curl có sẵn kèm đúng công thức HMAC). WolfBot tính lại chữ ký ở phía server và chỉ chấp nhận request khớp. Chữ ký không khớp bị từ chối — không có gì được thực thi.

## 4. Symbol được chuẩn hóa cho bạn

`symbol` trong alert của bạn có thể ở dạng MT5/USD (`XAGUSD`) trong khi lệnh đích là Binance (`XAGUSDT`). WolfBot chạy symbol của alert qua đúng bộ ánh xạ symbol theo broker dùng ở mọi nơi khác, nên alert đáp đúng cặp. Nếu không có mapping, symbol được giữ nguyên thay vì bị viết lại thầm lặng. Xem [hướng dẫn ánh xạ symbol](/vi/docs/mt5-symbol-mapping) để có bảng đầy đủ.

## 5. Kiểm thử trên Simulation trước mọi thứ thật

Trước khi trỏ alert vào chiến lược Live:

1. Tạo một chiến lược trên tài khoản **Simulation** và cấp cho nó webhook URL + một alert test.
2. Kích hoạt một alert test từ TradingView (hoặc dùng ví dụ curl) và theo dõi tín hiệu đáp trong WolfBot.
3. Xác nhận symbol được quy về đúng cặp như bạn mong đợi và các trường phân tầng đúng.
4. Chỉ khi đó mới chuyển chiến lược sang Live.

## Ghi chú bảo mật

- Giữ webhook secret riêng tư — nó là thứ duy nhất khiến request được tin cậy. Hãy coi nó như một API key.
- Chạy instance Community trên host/port của riêng bạn, đừng phơi route webhook ra internet mở mà không có chữ ký được xác minh.
- Bắt đầu với `signal_only`, chỉ thêm trường rủi ro/take-profit sau khi bạn thấy một vòng lặp hoàn chỉnh hoạt động trên Simulation.

## Bước tiếp theo

- [Quy trình giao dịch tự động →](/vi/docs/automated-trading-workflow) — vòng lặp rộng hơn mà alert của bạn cắm vào
- [Simulation trước →](/vi/docs/simulation)
- [Kiểm soát rủi ro →](/vi/docs/risk-controls)

> **[Quy trình giao dịch tự động →](/vi/docs/automated-trading-workflow)**
