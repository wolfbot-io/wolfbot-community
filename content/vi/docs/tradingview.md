---
title: "TradingView Webhook vào WolfBot Community - Hướng dẫn từng bước"
description: "Kết nối alert TradingView vào WolfBot Community với webhook URL thật, JSON cho buy, sell, close_long và close_short, kiểm thử Simulation, cấu hình HTTPS và bảng xử lý lỗi."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-23"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "25 minutes"
lang: "vi"
translation_of: "docs/tradingview"
next_guide: "/vi/docs/automated-trading-workflow"
related_guides: ["/vi/docs/external-signals", "/vi/docs/automated-trading-workflow", "/vi/docs/simulation", "/vi/docs/risk-controls", "/vi/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview webhook trading bot",
  "tradingview vào bot tự lưu trữ",
  "tradingview webhook crypto bot",
  "tradingview webhook mt5",
  "kết nối tradingview với wolfbot",
  "wolfbot community tradingview",
  "tradingview alert json"
]
sitemap_priority: 0.9
---

# TradingView Webhook vào WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.4** · Cập nhật lần cuối: 2026-08-23

Bài này hướng dẫn đúng luồng để gửi alert TradingView vào WolfBot Community. Hãy làm theo thứ tự: tạo nguồn TradingView trong WolfBot, mở một endpoint HTTPS an toàn, dán webhook URL và JSON message vào TradingView, rồi kiểm thử trên Simulation trước khi dùng tài khoản live.

TradingView tạo tín hiệu. WolfBot nhận tín hiệu, kiểm tra secret, tìm tài khoản đã chọn sẵn, ghi lệnh vào hàng đợi nội bộ, sau đó dispatcher và lớp risk control hiện có của WolfBot mới xử lý phần khớp lệnh.

```text
TradingView alert
   -> HTTPS POST qua port 443
   -> domain public, Cloudflare Tunnel, reverse proxy hoặc ngrok
   -> WolfBot /api/v1/tradingview-webhooks/{source_id}
   -> kiểm tra secret, validate payload và rate limit theo source
   -> EntryCommand ledger
   -> WolfBot global dispatcher
   -> Simulation, tài khoản crypto/futures hoặc MT5
```

Không bao giờ đặt exchange API key, mật khẩu MT5, private key ví hoặc credential broker trong message TradingView.

## Cần chuẩn bị gì

| Yêu cầu | Vì sao cần |
|---|---|
| WolfBot Community đang chạy trên máy cá nhân, VPS hoặc server riêng | TradingView phải gọi được webhook WolfBot qua HTTPS. |
| Một tài khoản Simulation hoặc tài khoản test nhỏ trong WolfBot | Test đầu tiên không nên đụng position thật lớn. |
| Gói TradingView có hỗ trợ webhook alert | TradingView chỉ gửi webhook nếu tài khoản có tính năng này. |
| Public HTTPS URL qua port 443 | Webhook TradingView nên đi qua HTTPS chuẩn. |
| Biết symbol của tài khoản đích | Ví dụ `BTCUSDT` cho crypto, `XAUUSD` hoặc symbol có hậu tố riêng cho MT5. |

Webhook TradingView có giới hạn thời gian phản hồi. Endpoint public nên phản hồi nhanh, còn WolfBot sẽ queue lệnh để xử lý nội bộ. Không cấu hình TradingView gọi thẳng vào exchange.

## Bước 1 - Tạo nguồn TradingView trong WolfBot

1. Mở WolfBot Community.
2. Vào **Integrations**.
3. Tạo source mới.
4. Chọn **Source type** là **TradingView simple**.
5. Đặt label dễ nhớ, ví dụ `BTC 15m TradingView test`.
6. Chọn tài khoản đích. Nên bắt đầu bằng **Simulation**.
7. Đặt TP và SL multiplier mặc định cho các lệnh entry từ source này.
8. Lưu source.
9. Copy **secret** vừa được WolfBot hiện ra. Secret chỉ hiện khi tạo hoặc rotate source.
10. Copy webhook URL mà WolfBot hiển thị.

Dạng URL là:

```text
https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID
```

Thay `YOUR_PUBLIC_HOST` bằng domain public của bạn. Giữ nguyên `SOURCE_ID` đúng như WolfBot cung cấp.

## Bước 2 - Đưa WolfBot ra HTTPS an toàn

TradingView nên gọi một HTTPS endpoint public. Có thể dùng một trong các cách sau:

| Cách | Phù hợp khi | Ghi chú |
|---|---|---|
| Cloudflare Tunnel | Chạy tại nhà, workstation local, hoặc VPS không muốn mở inbound port | Dễ dùng cho HTTPS public. |
| Reverse proxy trên VPS | Setup VPS production | Terminate TLS bằng Nginx/Caddy/Traefik và proxy đúng API route của WolfBot. |
| ngrok hoặc tunnel tương tự | Test nhanh hoặc demo ngắn | Sau demo public nên rotate secret của WolfBot source. |

Luồng khuyến nghị:

```text
TradingView
   -> https://community-api.yourdomain.com
   -> tunnel hoặc reverse proxy
   -> WolfBot backend trong máy/VPS của bạn
```

Tránh expose trực tiếp port development nội bộ ra internet. Chỉ mở bề mặt public cần thiết, dùng HTTPS, và không dùng chung một secret cho nhiều workflow alert khác nhau.

## Bước 3 - Test webhook WolfBot bằng curl

Trước khi cấu hình TradingView, test từ terminal ở một máy bất kỳ có thể truy cập public URL của bạn.

Test LONG:

```bash
curl -sS -X POST "https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
    "symbol": "BTCUSDT",
    "action": "buy",
    "notional_usd": 25,
    "signal_id": "curl-btc-long-001"
  }'
```

Response tốt sẽ giống như:

```json
{
  "status": "queued",
  "command_id": "tradingview-SOURCE_ID-curl-btc-long-001",
  "account": "your_account_alias"
}
```

Nếu gửi lại cùng `signal_id`, WolfBot có thể trả:

```json
{
  "status": "duplicate",
  "command_id": "tradingview-SOURCE_ID-curl-btc-long-001"
}
```

Đây là hành vi đúng. Nó giúp tránh trường hợp cùng một alert bị xử lý thành hai lệnh.

## Bước 4 - Tạo alert trong TradingView

1. Mở chart trong TradingView.
2. Thêm hoặc chọn indicator/strategy dùng để bắn alert.
3. Bấm **Alert**.
4. Chọn điều kiện alert.
5. Bật **Webhook URL**.
6. Dán WolfBot URL:

```text
https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID
```

7. Dán một JSON message trong các ví dụ bên dưới.
8. Lưu alert.
9. Nếu TradingView/chart setup cho phép, kích hoạt test alert thủ công.
10. Kiểm tra trong WolfBot rằng command đã `queued` hoặc đã execute trên tài khoản Simulation đã chọn.

## Bước 5 - Dùng đúng JSON payload

Route TradingView simple của WolfBot nhận payload dạng này:

```json
{
  "secret": "your WolfBot source secret",
  "symbol": "BTCUSDT",
  "action": "buy",
  "notional_usd": 100,
  "signal_id": "optional unique id"
}
```

Ý nghĩa từng field:

| Field | Bắt buộc | Ví dụ | Ý nghĩa |
|---|---:|---|---|
| `secret` | Có | `wb_tv_...` | Secret WolfBot cấp cho source này. |
| `symbol` | Có | `BTCUSDT`, `ETHUSDT`, `XAUUSD` | Symbol WolfBot sẽ trade sau khi qua mapping theo broker. |
| `action` | Có | `buy`, `sell`, `close_long`, `close_short` | `buy` mở long, `sell` mở short, close action đóng vị thế hiện có. |
| `notional_usd` | Không | `100` | Fixed notional cho entry. Bỏ qua field này nếu muốn dùng default của account/source. |
| `signal_id` | Không | `{{ticker}}-{{interval}}-{{time}}-long` | Khóa chống trùng. Nên dùng placeholder của TradingView nếu có thể. |

Các action close bỏ qua TP/SL multiplier và không cần `notional_usd`.

## Ví dụ LONG

Dùng khi điều kiện TradingView cần mở hoặc thêm long position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "{{ticker}}",
  "action": "buy",
  "notional_usd": 100,
  "signal_id": "{{ticker}}-{{interval}}-{{time}}-long"
}
```

Nếu `{{ticker}}` có prefix exchange như `BINANCE:BTCUSDT`, hãy dùng đúng format symbol mà tài khoản WolfBot của bạn đang nhận nếu mapper hiện tại chưa strip prefix đó.

## Ví dụ SHORT

Dùng khi điều kiện TradingView cần mở hoặc thêm short position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "sell",
  "notional_usd": 100,
  "signal_id": "btc-15m-short-{{time}}"
}
```

## Ví dụ CLOSE LONG

Dùng khi TradingView cần đóng long position hiện có.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "close_long",
  "signal_id": "btc-15m-close-long-{{time}}"
}
```

## Ví dụ CLOSE SHORT

Dùng khi TradingView cần đóng short position hiện có.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "close_short",
  "signal_id": "btc-15m-close-short-{{time}}"
}
```

## Ví dụ symbol cho crypto và MT5

| Market | Chart TradingView có thể hiển thị | Payload WolfBot nên bắt đầu | Ghi chú |
|---|---|---|---|
| Binance/Bybit futures BTC | `BINANCE:BTCUSDT`, `BTCUSDT.P` | `BTCUSDT` | Ưu tiên symbol mà account WolfBot đang dùng. |
| ETH perpetual | `ETHUSDT.P` | `ETHUSDT` | Giữ format thống nhất với danh sách symbol của account. |
| Gold trên MT5 | `OANDA:XAUUSD`, `XAUUSD` | `XAUUSD` | Một số broker MT5 dùng hậu tố như `XAUUSDm`; xem guide symbol mapping. |
| Silver trên MT5 | `XAGUSD` | `XAGUSD` | Kiểm tra lot size và symbol availability trước khi live. |

Nếu alert đã queue nhưng không thấy trade, symbol mapping là một trong các điểm cần kiểm tra đầu tiên.

## Bước 6 - Kiểm tra trong WolfBot

Sau mỗi test alert:

1. Kiểm tra trạng thái Integration source và thời điểm nhận gần nhất.
2. Kiểm tra account được chọn trên source.
3. Kiểm tra command/activity log có dòng `TRADINGVIEW`.
4. Xác nhận symbol đã được normalize như mong muốn.
5. Xác nhận command vẫn đang chạy trên Simulation trong giai đoạn test.
6. Xác nhận position size đúng ý bạn trước khi chuyển sang Live.

Với close test, hãy mở một position nhỏ trên Simulation trước, gửi `close_long` hoặc `close_short`, rồi xác nhận close outcome là TradingView close.

## Bước 7 - Chuyển từ Simulation sang Live cẩn thận

Chỉ làm sau khi đã có nhiều alert Simulation thành công:

1. Tạo một TradingView source riêng cho tài khoản live.
2. Dùng source secret mới.
3. Bắt đầu với `notional_usd` nhỏ hoặc bỏ qua field này để WolfBot dùng default thận trọng hơn.
4. Đặt TP/SL multiplier rõ ràng trên source.
5. Kích hoạt một live alert thủ công hoặc bằng điều kiện rủi ro thấp.
6. Kiểm tra order, TP/SL và log trước khi để alert chạy tự động.

Rollback nhanh: disable alert trong TradingView, revoke/rotate secret của WolfBot source, hoặc chuyển source về tài khoản Simulation.

## Xử lý lỗi thường gặp

| Triệu chứng | Nguyên nhân hay gặp | Cần kiểm tra |
|---|---|---|
| TradingView báo webhook failed | Public URL không truy cập được hoặc không phải HTTPS | Mở host từ mạng khác, kiểm tra tunnel/proxy log, xác nhận port 443. |
| `404 SOURCE_NOT_FOUND` | Sai `SOURCE_ID`, source đã revoke, hoặc không phải TradingView simple source | Copy lại URL trực tiếp từ WolfBot. |
| `401 INVALID_SECRET` | Sai secret | Dán lại secret hiện tại, hoặc rotate source rồi cập nhật alert. |
| `409 ACCOUNT_TARGET_UNRESOLVED` | Source trỏ tới account WolfBot không resolve được | Chọn lại account trong Integrations và xác nhận account còn tồn tại. |
| `429 RATE_LIMITED` | Quá nhiều request vào cùng một source | Kiểm tra alert bị lặp, giảm tần suất, hoặc tách strategy khác nhau thành source riêng. |
| Response là `duplicate` | `signal_id` đã được ghi trước đó | Thêm `{{time}}` hoặc placeholder TradingView khác vào `signal_id`. |
| Alert đã queue nhưng không có trade | Dispatcher chưa chạy, account disabled, risk guard chặn, hoặc sai symbol | Kiểm tra activity log, risk controls, account status và symbol mapping. |
| Close alert đã queue nhưng position còn mở | Sai side hoặc không có position tương ứng | Dùng `close_long` cho long position và `close_short` cho short position. |

## Checklist bảo mật

- Chỉ dùng HTTPS.
- Không đưa broker API key, credential MT5 hoặc wallet secret vào TradingView.
- Mỗi workflow strategy/account nên có một WolfBot source riêng.
- Rotate source secret nếu secret từng xuất hiện trong video, screenshot hoặc chat public.
- Mọi alert mới phải chạy Simulation trước.
- Giữ sizing nhỏ cho tới khi đã xác nhận đủ vòng alert -> queue -> execution -> close.
- Disable hoặc xóa alert TradingView cũ khi rotate source.

## Hướng dẫn liên quan

- [External Signals](/vi/docs/external-signals)
- [Simulation](/vi/docs/simulation)
- [Risk Controls](/vi/docs/risk-controls)
- [MT5 Symbol Mapping](/vi/docs/mt5-symbol-mapping)
- [Automated Trading Workflow](/vi/docs/automated-trading-workflow)

## Bước tiếp theo

> **[Quy trình giao dịch tự động ->](/vi/docs/automated-trading-workflow)**
