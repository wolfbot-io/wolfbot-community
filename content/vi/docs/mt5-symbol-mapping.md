---
title: "Ánh xạ symbol MT5 — Cách WolfBot Community định tuyến symbol giữa MT5 và sàn Crypto"
description: "MT5 dùng symbol định giá theo USD (như BTCUSD hay XAUUSD) trong khi sàn crypto dùng cặp USDT (BTCUSDT). Đây là cách chính xác WolfBot Community ánh xạ chúng để một tín hiệu chạy xuyên suốt MT5, Binance, Bybit và BingX mà không cần đổi tay symbol."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-16"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "docs/mt5-symbol-mapping"
next_guide: "/vi/docs/mt5-troubleshooting"
related_guides: ["/vi/brokers/mt5", "/vi/docs/mt5-without-windows-vps", "/vi/docs/smart-terminal", "/vi/docs/risk-controls"]
keywords: [
  "ánh xạ symbol mt5",
  "mt5 sang crypto symbol",
  "xauusd sang paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 crypto futures",
  "wolfbot ánh xạ symbol",
  "symbol giao dịch đa thị trường"
]
sitemap_priority: 0.75
---

# Ánh xạ symbol MT5

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc21** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn giao dịch cùng một thị trường trên cả sàn crypto và MT5** — ví dụ chạy chiến lược vàng hoặc BTC và muốn gom vào một dashboard — bài này giải thích vì sao tên symbol khác nhau và WolfBot Community dung hòa chúng như thế nào.
- **Nếu bạn am hiểu kỹ thuật** — bạn sẽ thấy bảng ánh xạ thực tế chạy bên trong WolfBot, để biết chính xác một symbol sẽ quy thành gì trước khi bạn mở lệnh.

## Vì sao MT5 và sàn crypto đặt tên symbol khác nhau

Mỗi sàn định giá theo định dạng riêng:

- **MT5 (Forex, Vàng, Chỉ số, Cổ phiếu/CFD)** định giá theo dạng USD: `BTCUSD`, `XAUUSD`, `XAGUSD`, `ETHUSD`.
- **Sàn crypto spot/futures** như Binance, Bybit hay BingX dùng cặp **USDT**: `BTCUSDT`, `XAUUSDT`, `ETHUSDT`.
- Vàng đặc biệt khác: hầu hết sàn crypto không có cặp "XAU/USDT" — WolfBot ánh xạ vàng sang token `PAXG` (`PAXGUSDT`), một quỹ ETF vàng dạng token.

Nếu bạn kết nối broker MT5 và một sàn crypto mà không có sự dung hòa nào, cùng một chiến lược sẽ nhìn hai symbol khác tên như hai thị trường riêng biệt. WolfBot Community thu gọn việc đó để MỘT góc nhìn danh mục hiển thị được cả hai.

## Cách WolfBot Community ánh xạ symbol

WolfBot Community duy trì một bản đồ symbol là nguồn sự thật duy nhất. Khi một tín hiệu hoặc chiến lược tham chiếu một symbol, nó được dịch sang tên gốc của từng sàn trước khi dựng lệnh. Quy tắc chung:

- `BTCUSD` → `BTCUSDT`, `ETHUSD` → `ETHUSDT`, v.v. — các symbol crypto định giá USD ở MT5 ánh xạ sang cặp `USDT` tương ứng.
- `XAUUSD` / `GOLD` → `PAXGUSDT` — vàng ánh xạ sang cặp tokenised-gold trên Binance.
- `XAGUSD` / `SILVER` → `XAGUSDT` — bạc có cặp USDT gốc.
- Bạc cũng ánh xạ sang instrument silver perpetual TradFi của BingX bằng id swap nội bộ của nó.
- Symbol **không có** mapping sẽ được giữ nguyên — một instrument tùy chỉnh không bao giờ bị viết lại nhầm.

Bảng này nằm trong code dưới dạng ánh xạ symbol sàn (`map_symbol(source, target_exchange)`); nó trả về tên dùng được tại sàn đích, hoặc nguyên symbol nếu không có mục nào.

## Điều này nghĩa là gì cho thiết lập của bạn

- **Bạn viết chiến lược một lần.** Một tín hiệu vàng trên MT5 và một vị thế vàng trên crypto đều hiển thị dưới một instrument trong góc nhìn rủi ro và danh mục hợp nhất của WolfBot.
- **Không cần đổi tên thủ công.** Bạn không phải sửa từng bot khi thêm một sàn mới.
- **Xác định.** Bản đồ được cố định trong nền tảng, nên cùng một tín hiệu luôn quy về cùng một symbol đích — không bất ngờ giữa chạy Demo và chạy Live.

## Ví dụ thực tế

Lấy một chiến lược bạc. Trên broker MT5 của bạn symbol hiển thị là `XAGUSD`; trên Binance là `XAGUSDT`. Khi WolfBot định tuyến chiến lược đó, nó phân giải symbol nguồn sang đúng tên của từng sàn để lệnh đi đúng cặp trên mỗi sàn, và góc nhìn danh mục của bạn vẫn là một instrument "Bạc" thay vì hai thị trường rời rạc.

## Bước tiếp theo

- [Kiểm thử an toàn trước →](/vi/docs/simulation) — ánh xạ và xác minh symbol trên tài khoản Demo trước khi Live
- [Các lỗi MT5 thường gặp →](/vi/docs/mt5-troubleshooting)
- [Kết nối MT5 →](/vi/brokers/mt5)

> **[Khắc phục lỗi MT5 →](/vi/docs/mt5-troubleshooting)**
