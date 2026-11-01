---
title: "Kết nối OKX với WolfBot Community — Từng bước"
description: "Kết nối OKX với WolfBot Community: tạo API key quyền Read + Trade kèm passphrase, giữ Withdraw tắt và kiểm tra kết nối an toàn."
tested_version: "0.1.0-beta.16"
last_updated: "2026-11-01"
platforms: ["windows", "linux"]
brokers: ["okx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "brokers/okx"
related_guides: ["/vi/brokers/open-okx-account", "/vi/brokers/api-key-guide", "/vi/docs/risk-controls"]
keywords: ["bot giao dịch okx", "bot api okx", "kết nối okx với wolfbot", "okx api passphrase"]
sitemap_priority: 0.80
---
# Kết nối OKX với WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.16** · Cập nhật lần cuối: 2026-11-01

**Trạng thái hỗ trợ OKX:** Phụ thuộc bản phát hành. OKX được thêm vào Account Connect từ v0.1.0-beta.16. Hãy mở **Exchange Accounts → Add Account** trong bản bạn đã cài: nếu có OKX trong danh sách thì làm theo hướng dẫn này; nếu chưa có, hãy cập nhật WolfBot trước.

> **Chưa có tài khoản OKX?** Bắt đầu với [hướng dẫn mở tài khoản OKX](/vi/brokers/open-okx-account). Bài viết chỉ cách đăng ký, xác minh danh tính và bảo mật bằng authenticator.

## Hướng dẫn này dành cho ai

Bất kỳ ai kết nối tài khoản OKX với WolfBot Community trên bản phát hành đã có OKX trong danh sách.

## Bạn cần gì

- Một tài khoản OKX đã xác minh ([đăng ký](https://okx.com/join/WOLFBOT))
- WolfBot Community có OKX trong Account Connect
- Một trình quản lý mật khẩu, vì API key của OKX gồm ba giá trị bạn phải lưu: API key, secret và passphrase

---

## Bước 1: Tạo API key trên OKX

1. Đăng nhập [okx.com](https://okx.com/join/WOLFBOT) và mở **Profile → API**.
2. Bấm **Create API key** và đặt tên "WolfBot Community".
3. Chọn một **passphrase** và lưu lại. OKX yêu cầu bạn tự đặt, WolfBot cần đến nó và nó không hiển thị lại được.
4. Đặt quyền:
   - Read: ✅ BẬT
   - Trade: ✅ BẬT
   - Withdraw: ❌ TẮT
5. (Khuyến nghị) Gắn IP của máy đang chạy WolfBot. Hãy xem quy định API hiện hành của OKX về cách xử lý key có quyền trade nhưng không gắn IP.
6. Hoàn tất xác minh, rồi lưu API key, secret và passphrase cùng nhau trong trình quản lý mật khẩu.

---

## Bước 2: Thêm tài khoản trong WolfBot

1. WolfBot → **Exchange Accounts → Add Account**.
2. Chọn **OKX**.
3. Nhập API key, secret và passphrase đúng như đã lưu. Phân biệt hoa thường.
4. Bấm **Test Connection**. WolfBot đọc quyền của key và sẽ từ chối key đang bật quyền rút tiền.

---

## Bước 3: Kiểm thử an toàn

1. Xác nhận tài khoản hiển thị trong Exchange Accounts mà không có lỗi.
2. Xem bản bạn đã cài cung cấp gì cho OKX (Demo, Terminal, Strategy) trước khi dựa vào bất kỳ tính năng nào. Nếu OKX chưa có Demo, hãy luyện tập trước trên tài khoản Demo của một sàn khác đã kết nối.
3. Đặt một lệnh limit nhỏ từ Smart Terminal, kiểm tra trên OKX rồi huỷ.
4. Bật [Risk Controls](/vi/docs/risk-controls) trước khi chạy giao dịch tự động thật.

---

## Lưu ý riêng cho OKX

- **Passphrase:** khác với đa số sàn, OKX cần một passphrase do bạn tự chọn. Sai hoặc mất passphrase thì phải tạo key mới.
- **Khu vực:** OKX quyết định điều kiện sử dụng và sản phẩm bạn dùng được.
- **Copy trading:** WolfBot không tương tác với tính năng copy trading của OKX.

---

## Sự cố thường gặp

| Sự cố | Cách xử lý |
|---|---|
| "API key doesn't exist" | Key đã bị xoá, nhập sai hoặc thuộc môi trường khác. Tạo lại và chép lại các giá trị. |
| Passphrase không hợp lệ | Nhập lại đúng từng ký tự, phân biệt hoa thường. Nếu mất thì tạo key mới. |
| Bị từ chối quyền | Bật Read và Trade cho key. |
| Lỗi giới hạn IP | Thêm IP hiện tại hoặc cập nhật lại phần gắn IP. |
| Không thấy OKX trong danh sách tài khoản | Bản bạn cài chưa hỗ trợ OKX; hãy cập nhật WolfBot. |

---

## Muốn so sánh OKX với sàn khác?

[Binance vs OKX](/vi/brokers/binance-vs-okx) · [Bybit vs OKX](/vi/brokers/bybit-vs-okx) · [BingX vs OKX](/vi/brokers/bingx-vs-okx) · [KuCoin vs OKX](/vi/brokers/kucoin-vs-okx)

## Bước tiếp theo

> **[Cấu hình Risk Controls →](/vi/docs/risk-controls)**
