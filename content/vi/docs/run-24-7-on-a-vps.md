---
title: "Chạy WolfBot Community 24/7 trên VPS — Giao dịch tự host trên máy chủ của riêng bạn"
description: "Chạy WolfBot Community liên tục 24/7 trên một VPS Ubuntu. Cài gói .deb, giữ dashboard riêng tư bằng SSH tunnel, sao lưu trên máy chủ, và giao dịch phi tập trung (non-custodial)."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-14"
platforms: ["linux"]
category: "install"
difficulty: "intermediate"
estimated_time: "15 minutes"
lang: "vi"
translation_of: "docs/run-24-7-on-a-vps"
next_guide: "/getting-started"
related_guides: ["/install/linux", "/docs/backup", "/docs/updates", "/security"]
keywords: [
  "bot giao dịch tự host",
  "bot giao dịch trên máy chủ riêng",
  "chạy bot giao dịch 24/7",
  "wolfbot vps",
  "máy chủ bot crypto",
  "bot giao dịch linux vps"
]
sitemap_priority: 0.85
---

# Chạy WolfBot Community 24/7 trên VPS

**Đã kiểm thử với WolfBot Community v0.1.0-beta.2** · Cập nhật lần cuối: 2026-08-14 · Ubuntu 22.04 / 24.04

## Hướng dẫn này dành cho ai

Có hai nhóm độc giả nhận được giá trị từ bài này:

- **Nếu bạn chỉ muốn bot chạy liên tục** — để không bao giờ bỏ lỡ một giao dịch khi
  máy tính tắt — hãy làm theo các bước bên dưới theo thứ tự. Mỗi lệnh đều copy-paste
  được, và bạn không cần hiểu bộ máy bên trong để có kết quả.
- **Nếu bạn quen với máy chủ** và muốn biết *vì sao* mỗi bước được làm như vậy
  (dashboard chỉ bind loopback, SSH tunnel), các ghi chú giải thích lý do mà không cản
  trở bạn.

Nói ngắn gọn: hướng dẫn này đưa WolfBot Community của bạn lên một máy chủ Linux nhỏ
luôn bật (một VPS) để nó tiếp tục giao dịch qua đêm — chiến lược, thiết lập và tài
khoản của bạn vẫn y nguyên như bạn để lại, và bot vẫn làm việc ngay cả khi máy tính
cá nhân của bạn tắt.

## Bạn cần gì

- Một VPS Ubuntu 22.04 LTS hoặc 24.04 LTS (bất kỳ nhà cung cấp phổ biến nào cũng được —
  Hetzner, DigitalOcean, Vultr, Linode, AWS Lightsail, v.v.)
- Ít nhất 4 GB RAM và 4 GB dung lượng đĩa
- Khả năng mở terminal và SSH vào máy chủ của bạn
- 15 phút

> ℹ️ WolfBot Community chạy trong Docker. Trình cài đặt tự thiết lập Docker cho bạn,
> y hệt như khi cài trên máy Linux để bàn.

## Bước 1: Tạo VPS và kết nối

1. Tạo một máy chủ Ubuntu 22.04/24.04 với ít nhất 4 GB RAM
2. Kết nối qua SSH (hầu hết nhà cung cấp đưa bạn lệnh này trên trang của họ):

```bash
ssh your-user@your-server-ip
```

## Bước 2: Cài WolfBot Community (giống hệt máy để bàn)

Làm theo đúng [hướng dẫn cài đặt Linux](/install/linux) — các bước y hệt trên máy chủ:

1. Tải gói `.deb` từ [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Cài nó (trên máy chủ không giao diện, bạn dùng dạng terminal):

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

3. Khởi động WolfBot và kiểm tra nó khỏe mạnh:

```bash
wolfbot start
wolfbot status
```

## Bước 3: Truy cập dashboard an toàn (SSH tunnel)

WolfBot Community chỉ bind dashboard vào **địa chỉ loopback (127.0.0.1)** của máy
chủ — đây là có chủ đích: nghĩa là dashboard giao dịch không bao giờ bị lộ ra
internet công cộng theo mặc định. Trên máy tính của bạn ở nhà, trình duyệt mở trực
tiếp. Trên VPS, bạn truy cập nó qua một SSH tunnel mã hóa:

```bash
ssh -L 8080:127.0.0.1:8080 your-user@your-server-ip
```

Sau đó mở **http://localhost:8080** trong trình duyệt. Tunnel chuyển tiếp cổng 8080
cục bộ của bạn tới dashboard trên máy chủ, qua SSH — không cổng mở, không URL công
cộng, không cần cấu hình firewall.

> 🔎 **Cho độc giả kỹ thuật:** các dịch vụ của WolfBot Community bind vào `127.0.0.1`
> (loopback) theo thiết kế — control-api ở `8765`, gateway ở `8766`, và dashboard ở
> `8080`. Chỉ bind loopback nghĩa là bề mặt giao dịch không bao giờ có thể truy cập từ
> internet, nên một SSH tunnel là cách đúng (và đơn giản nhất) để truy cập từ xa thay
> vì mở một cổng công cộng.

> ⚠️ **Đừng** mở dashboard ra internet công cộng. Giữ nó ở loopback và dùng SSH
> tunnel. Dashboard điều khiển giao dịch thật, nên nó phải được giữ riêng tư.

## Bước 4: Sao lưu trên máy chủ

VPS giờ là nơi cấu hình của bạn sống, nên hãy sao lưu nó ở đó:

```bash
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Sau đó copy bản lưu ra khỏi máy chủ để cất giữ an toàn. Xem
[hướng dẫn Backup & Restore](/docs/backup) để có toàn bộ quy trình.

## Bước 5: Giữ nó cập nhật

Trên máy chủ, các bản cập nhật chạy qua trình cập nhật đã ký:

```bash
/opt/wolfbot/launcher/wolfbot-updater.sh check
```

Xem [hướng dẫn Update](/docs/updates) để biết các bước áp dụng/rollback.

## Kết quả kỳ vọng

- WolfBot Community chạy trong Docker trên VPS của bạn, độc lập với PC
- Bạn truy cập dashboard qua SSH tunnel (chỉ loopback, không cổng công cộng)
- Bot tiếp tục giao dịch và chiến lược tiếp tục chạy khi máy tính của bạn tắt

![Dashboard WolfBot Community truy cập qua SSH tunnel từ VPS — danh mục thống nhất và các tài khoản đã kết nối](/screenshots/wolfbot-community-dashboard.webp)

## Những sai lầm phổ biến

| Sai lầm | Cách khắc phục |
|---|---|
| Mở dashboard ra internet công cộng | Đừng — dùng SSH tunnel, giữ nó chỉ ở loopback |
| Quên sao lưu trên máy chủ | `wolfbot backup ... --execute`, rồi copy bản lưu ra khỏi máy |
| Máy chủ khởi động lại và WolfBot không chạy | `wolfbot status` để xác nhận; `wolfbot start` nếu cần |
| Tunnel rớt khi laptop ngủ | Chạy lại lệnh `ssh -L ...`; đó là reconnect bình thường |

## Khắc phục sự cố

- **Không truy cập được localhost:8080 qua tunnel** — xác nhận lệnh tunnel vẫn đang
  chạy và `wolfbot status` cho thấy các dịch vụ khỏe mạnh.
- **SSH bị từ chối kết nối** — kiểm tra firewall VPS cho phép SSH (cổng 22) và bạn
  đang dùng đúng user/IP.
- Các vấn đề khác — xem toàn bộ [hướng dẫn Khắc phục sự cố](/docs/troubleshooting).

## Bước tiếp theo

> **[Getting Started →](/getting-started)** — kết nối tài khoản Demo trước và giao dịch không rủi ro trước khi chuyển sang live.
