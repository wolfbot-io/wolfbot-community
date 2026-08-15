---
title: "Cài đặt WolfBot Community trên Ubuntu/Linux — Từng bước"
description: "Cách cài WolfBot Community trên Ubuntu 22.04, Ubuntu 24.04, hoặc Debian 12. Tải gói .deb và bắt đầu giao dịch trên thị trường crypto và MT5 — không cần dòng lệnh."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-12"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "install/linux"
next_guide: "/vi/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "cài wolfbot linux",
  "wolfbot community ubuntu",
  "bot crypto ubuntu",
  "bot giao dịch linux",
  "nền tảng giao dịch thống nhất linux",
  "giao dịch tự host linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
---

# Cài đặt WolfBot Community trên Ubuntu/Linux

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-12 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## Hướng dẫn này dành cho ai

Bất kỳ ai muốn cài WolfBot Community trên Ubuntu hoặc Debian — **bạn không
cần biết terminal hay Docker.** Mọi thứ bên dưới dùng cùng cách cài nhấp đúp
như bất kỳ ứng dụng nào khác; một lựa chọn dòng lệnh được kèm ở phần dưới cho
ai thích dùng.

## Bạn cần gì

- Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, hoặc Debian 12 (64-bit)
- Ít nhất 4 GB RAM, 4 GB dung lượng đĩa trống
- Kết nối internet
- Mật khẩu tài khoản của bạn (bạn sẽ được hỏi một lần, để cho phép cài đặt —
  điều này hoàn toàn bình thường, mọi trình cài ứng dụng trên Linux đều hỏi)

> ℹ️ WolfBot cần Docker để chạy. Nếu chưa cài, trình cài đặt sẽ tự cài Docker
> cho bạn — không cần tự thiết lập gì.

## Bước 1: Tải về

1. Vào [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Bấm **Download for Linux**
3. Tệp `WolfBot-Setup-linux-amd64.deb` tải về thư mục **Downloads** của bạn

## Bước 2: Cài đặt (nhấp đúp, như mọi ứng dụng khác)

1. Mở thư mục **Downloads** và **nhấp đúp** `WolfBot-Setup-linux-amd64.deb`
2. Cửa sổ cài ứng dụng của hệ thống mở ra (thường gọi là "Software Install"
   hoặc "Package Installer")
3. Bấm **Install**
4. Nhập mật khẩu khi được hỏi, rồi nhấn Enter/bấm OK
5. Chờ nó hoàn tất — lần đầu có thể mất một hoặc hai phút, vì nó cũng thiết lập
   Docker ở nền

Vậy là xong — không cần terminal.

> **Không thấy cửa sổ cài đặt?** Một số phiên bản Ubuntu mở tệp `.deb` trong
> trình xem nén thay vì trình cài đặt theo mặc định. Nhấp chuột phải vào tệp →
> **Open With** → chọn **Software Install** (hoặc **GDebi Package Installer**
> nếu bạn có) → rồi bấm **Install**.

## Bước 3: Khởi chạy WolfBot

1. Mở menu **Applications** (hoặc bấm phím Windows/Super và gõ "WolfBot")
2. Bấm biểu tượng **WolfBot**
3. Trình duyệt tự động mở tới Dashboard của WolfBot

## Kết quả kỳ vọng

- Biểu tượng WolfBot xuất hiện trong menu Applications
- Bấm vào nó mở Dashboard trong trình duyệt
- Trang Capability Status của Dashboard cho thấy những broker bạn có thể kết nối — bắt đầu với một [tài khoản Demo](/docs/simulation) để giao dịch không rủi ro

## Giao dịch Forex, Vàng và Chỉ số qua MT5 — không cần Windows

WolfBot Community là một **nền tảng thống nhất**: sàn crypto và MT5 (Forex, Vàng, Chỉ số, Stocks/CFDs) trong cùng một giao diện, một risk engine, một portfolio duy nhất — kể cả trên Linux, không cần máy Windows hay VPS riêng. MT5 chạy như một terminal thật ngay bên cạnh phần còn lại của WolfBot, và bạn điều khiển nó từ chính trình duyệt của mình. Kích hoạt chỉ với một lệnh — xem [hướng dẫn kết nối MT5](/brokers/mt5) để biết các bước chính xác.

## Những sai lầm phổ biến

| Sai lầm | Cách khắc phục |
|---|---|
| Nhấp đúp mở trình xem nén thay vì cài đặt | Nhấp chuột phải vào tệp → Open With → Software Install |
| Thông báo "Authentication required" | Đây là bình thường — nhập mật khẩu đăng nhập thường của bạn |
| Không có gì xảy ra sau khi bấm Install | Chờ một phút — Docker được thiết lập ở nền trong lần đầu |
| Không tìm thấy WolfBot sau khi cài | Đăng xuất rồi đăng nhập lại một lần, hoặc tìm "WolfBot" trong menu Applications |

## Thích dùng dòng lệnh?

Nếu bạn quen với terminal, lệnh này làm cùng việc như các bước trên:

```bash
cd ~/Downloads
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Dùng `apt install ./file.deb` (thay vì `dpkg -i`) tự động giải quyết mọi
dependency bị thiếu trong một bước.

Các lệnh hữu ích sau khi cài:

```bash
wolfbot status     # kiểm tra dịch vụ
wolfbot start      # khởi động WolfBot
wolfbot open       # mở Dashboard trong trình duyệt
wolfbot logs       # xem log
```

Địa chỉ Dashboard: `http://127.0.0.1:8765`

## Khắc phục sự cố

- **Không có gì mở khi bấm biểu tượng WolfBot** — chờ một phút sau khi cài mới
  (các container Docker vẫn đang khởi động), rồi thử lại.
- **"Port in use" hoặc Dashboard không tải** — thứ gì đó khác trên máy bạn có
  thể đang dùng cổng 8765. Xem [Hướng dẫn Khắc phục sự cố](/docs/troubleshooting)
  để biết cách kiểm tra.
- Vẫn kẹt? Xem toàn bộ [Hướng dẫn Khắc phục sự cố](/docs/troubleshooting)
  hoặc hỏi trong [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Gỡ cài đặt

Mở kho ứng dụng của hệ thống (ví dụ **Ubuntu Software**), tìm "WolfBot", và bấm
**Remove** — giống cách bạn gỡ bất kỳ ứng dụng nào khác đã cài qua tệp `.deb`.

Hoặc qua terminal:

```bash
sudo apt remove wolfbot-community
rm -rf ~/.wolfbot    # tùy chọn: cũng xóa dữ liệu WolfBot cục bộ của bạn
```

## Bước tiếp theo

> **[Bắt đầu với Simulation →](/docs/simulation)**
