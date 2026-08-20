---
title: "Kết nối MT5 với WolfBot Community — Từng bước"
description: "WolfBot Community đi kèm MT5 — giao dịch Forex, Vàng, Chỉ số và Stocks/CFDs trên Windows hoặc Linux, không cần máy Windows riêng. Hướng dẫn kết nối từng bước."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
lang: "vi"
translation_of: "brokers/mt5"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["tự động hóa mt5", "bot giao dịch mt5", "bot mt5 tự host", "tự động hóa metatrader 5", "tự động giao dịch vàng", "mt5 trên linux"]
sitemap_priority: 0.80
---

# Kết nối MT5 với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc20** · Cập nhật lần cuối: 2026-08-12

**Trạng thái hỗ trợ MT5:** Ổn định · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅ · Windows ✅ · Linux ✅

## MT5 được tích hợp sẵn

Forex, Vàng, Chỉ số, Stocks/CFDs — thị trường MT5 là một phần của WolfBot Community ngay khi cài đặt, đứng cạnh các tài khoản crypto của bạn trong cùng một dashboard. Nó hoạt động giống nhau trên Windows và Linux, và bạn không bao giờ cần một máy Windows riêng để giao dịch MT5.

- **Trên Windows**, WolfBot kết nối với ứng dụng MetaTrader 5 bạn đang dùng.
- **Trên Linux**, WolfBot mở MT5 cho bạn ngay trong trình duyệt của chính bạn — không cần cài thêm gì.

## Hướng dẫn này dành cho ai

Trader MT5 muốn tự động hóa giao dịch của họ với WolfBot Community — nền tảng thống nhất cho crypto và thị trường truyền thống, trên hệ điều hành bạn đang chạy.

## Bạn cần gì

- WolfBot Community đã cài
- Một tài khoản broker MT5 (Demo hoặc Live)
- Trên Windows: [MetaTrader 5](https://www.metatrader5.com/en/download) đã cài
- 15 phút

## Kết nối MT5

1. Mở WolfBot Community
2. Vào **Exchange Accounts → Add Account → MT5**
3. Đăng nhập vào tài khoản broker của bạn (Demo hoặc Live)
   - **Windows:** việc này diễn ra trong ứng dụng MetaTrader 5 của bạn
   - **Linux:** việc này diễn ra ngay trong cửa sổ trình duyệt WolfBot — chỉ lần đầu, có một bước thiết lập nhanh một lần (xem [Cho độc giả kỹ thuật](#cho-độc-giả-kỹ-thuật) bên dưới)
4. WolfBot tự động nhận các symbol khả dụng của bạn
5. Bắt đầu giao dịch — Smart Terminal, Bots và Risk Controls đều hoạt động y hệt như với các tài khoản crypto của bạn

> ⚠️ MT5 cần được đăng nhập để WolfBot giao dịch qua nó.

## Kiểm tra kết nối

1. Trong WolfBot: Smart Terminal → chọn MT5
2. Các symbol khả dụng sẽ xuất hiện từ MT5
3. Đặt một lệnh kiểm tra nhỏ trên tài khoản Demo trước
4. Chuyển sang tài khoản MT5 Live và đặt một lệnh kích thước tối thiểu
5. Xác minh lệnh xuất hiện trong MT5
6. Hủy lệnh kiểm tra

## Bạn có thể giao dịch gì

MT5 bao phủ hầu hết mọi loại tài sản — WolfBot giao dịch bất cứ gì tài khoản MT5 của broker bạn cung cấp, không phải một danh sách cố định:

- **Forex** — EUR/USD, GBP/USD, USD/JPY, và hơn 50 cặp khác
- **Kim loại** — Vàng (XAU/USD), Bạc (XAG/USD), thường cả Platinum và Palladium
- **Năng lượng** — Dầu thô, Khí tự nhiên (tùy broker)
- **Chỉ số** — US30, NAS100, S&P 500, DAX, và hơn nữa
- **Stocks/CFDs** — cổ phiếu từng công ty, thường là hàng nghìn symbol (tùy broker)
- **Hàng hóa nông sản** — Lúa mì, Ngô, Cà phê, Đường và các loại khác (tùy broker)
- **Crypto CFDs** — nơi broker của bạn cung cấp

> Danh sách công cụ chính xác phụ thuộc vào broker MT5 của bạn, không phải WolfBot — kiểm tra **Market Watch** trong terminal MT5 để xem danh sách symbol đầy đủ tài khoản của bạn có thể giao dịch.

## MT5 cho giao dịch Vàng

Vàng (XAU/USD) là một trong những công cụ MT5 phổ biến nhất để tự động hóa:

1. Kết nối broker MT5 của bạn với XAU/USD
2. Trong WolfBot: Smart Terminal → XAU/USD
3. Cấu hình rủi ro (vàng biến động — bắt đầu với kích thước nhỏ)
4. Kiểm tra trên tài khoản Demo trước khi chuyển live

## Các vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| MT5 không kết nối | Đảm bảo bạn đã đăng nhập vào tài khoản broker trong MT5, rồi thử lại |
| "Symbol not available" | Kiểm tra các công cụ khả dụng của broker bạn |
| "Automated trading disabled" | Trong MT5: Tools → Options → Expert Advisors → Allow Automated Trading |
| "Order rejected by broker" | Kiểm tra kích thước lot tối thiểu và giờ giao dịch |

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/docs/risk-controls)** — đặc biệt quan trọng cho các công cụ MT5 biến động

---

## Cho độc giả kỹ thuật

Các chi tiết bên dưới dành cho bất kỳ ai muốn hiểu chính xác cách bridge MT5 hoạt động, hoặc thích thực hiện bước thiết lập Linux từ terminal. Không cần đọc phần này để dùng MT5 trong WolfBot — xem [Kết nối MT5](#kết-nối-mt5) ở trên cho luồng bình thường.

### Cách bridge hoạt động

**Windows** — MT5 chạy như ứng dụng native riêng; WolfBot bridge trực tiếp tới nó:

```text
WolfBot Community → MT5 Bridge (cục bộ) → MetaTrader 5 Terminal (bản cài của bạn) → Máy chủ Broker MT5
```

**Linux** — WolfBot tự chạy terminal MT5 bên trong một container, và cho bạn một cửa sổ trình duyệt vào nó (VNC):

```text
WolfBot Community → MT5 Bridge Container (Terminal + VNC + RPyC) → Cửa sổ trình duyệt → Máy chủ Broker MT5
```

Dù cách nào, bridge chỉ nói chuyện với broker của bạn *qua* MT5 — WolfBot không bao giờ kết nối trực tiếp tới broker của bạn.

### Linux: thiết lập terminal một lần

Container MT5 của WolfBot không được khởi động bởi bản cài cơ bản (không phải mọi người dùng Community đều giao dịch MT5), nên lần đầu, hãy khởi động nó bằng:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

Sau đó mở **`http://127.0.0.1:8090/mt5-vnc/`** trong trình duyệt (mật khẩu `wolfbot`, hoặc bất cứ gì bạn đặt qua `MT5_VNC_PASSWORD`) và đăng nhập vào broker của bạn ở đó — đây là cùng cửa sổ trình duyệt mà luồng MT5 của WolfBot dùng sau này. Truy cập luôn bật và không hạn chế, vì đây là máy của chính bạn, không phải một instance Cloud dùng chung.

### Windows: tham chiếu cấu hình bridge

| Thiết lập | Giá trị |
|---|---|
| Đường dẫn cài MT5 | Tự phát hiện (thường `C:\Program Files\MetaTrader 5`) |
| Loại tài khoản | Demo hoặc Live |
| Symbol Mapping | Tự cấu hình |

### Yêu cầu

- MT5 phải đang chạy khi giao dịch (native trên Windows, hoặc container bridge trên Linux)
- Automated Trading (Algo Trading) phải được bật trong MT5
- Máy của bạn phải luôn bật (hoặc dùng VPS — Windows hoặc Linux đều được)
- Chưa hỗ trợ: nhiều instance MT5 cùng lúc, một số symbol đặc thù của broker

### Khắc phục sự cố kỹ thuật

| Vấn đề | Giải pháp |
|---|---|
| "MT5 not detected" (Windows) | Kiểm tra đường dẫn cài; khởi động lại MT5 |
| Trang VNC không tải (Linux) | Xác nhận container MT5 đang chạy: `docker compose ... ps` — lần đầu có thể mất một phút |
| "Bridge connection failed" | Đảm bảo MT5 đang chạy và đã đăng nhập — native trên Windows, hoặc phiên trình duyệt trên Linux |

### Chạy MT5 24/7

- **Windows:** dùng VPS Windows, cài MT5 + WolfBot Community, bật auto-login trong MT5, cấu hình Windows tự khởi động WolfBot
- **Linux:** dùng VPS Linux chạy WolfBot Community với container MT5 được bật — nó giữ trạng thái đăng nhập và tiếp tục chạy giống mọi dịch vụ WolfBot khác, không cần script auto-login
