---
title: "Hướng dẫn cập nhật WolfBot Community — Tự cập nhật & kênh phát hành"
description: "Cách cập nhật WolfBot Community hoạt động. Kênh Stable, Beta, và Dev Preview. Giữ nền tảng thống nhất của bạn luôn mới."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/updates"
next_guide: "/vi/docs/backup"
related_guides: ["/vi/docs/backup", "/releases/channels", "/vi/docs/troubleshooting"]
keywords: ["cập nhật wolfbot", "tự cập nhật wolfbot", "kênh phát hành wolfbot", "cập nhật bot giao dịch", "kênh cập nhật wolfbot"]
sitemap_priority: 0.80
---

# Cập nhật WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-12

## Cách cập nhật hoạt động

WolfBot Community phát hành theo kênh — bản phát hành nào bạn tải về quyết định bản build của bạn mới (và được kiểm thử) đến đâu.

| Kênh | Mô tả | Tần suất cập nhật | Mức rủi ro |
|---|---|---|---|
| **Stable** | Sẵn sàng sản xuất | Các mốc hàng tháng | Thấp nhất |
| **Beta** | Kiểm thử rộng | Mỗi 1–2 tuần | Thấp |
| **Dev Preview** | Tính năng mới nhất | Vài lần mỗi tuần | Trung bình |

Xem [Giải thích kênh phát hành →](/releases/channels)

---

## Cập nhật

### Windows

1. Vào [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Tải Setup.exe mới nhất
3. Chạy bộ cài đặt — nó nâng cấp tại chỗ và giữ dữ liệu, tài khoản và thiết lập của bạn

### Linux

Mỗi lần cài đặt bao gồm một trình cập nhật có ký, chạy từ terminal:

```bash
# Kiểm tra cái gì đang được cài
/opt/wolfbot/launcher/wolfbot-updater.sh check

# Áp dụng một bản phát hành cụ thể (xem community.wolfbot.io/releases để lấy liên kết manifest)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

Trình cập nhật xác minh chữ ký của bản phát hành mới trước khi kéo bất cứ thứ gì, và chỉ dừng stack hiện tại của bạn sau khi bản mới đã được staged.

> ℹ️ Hiện chưa có popup "update available" trong ứng dụng — kiểm tra [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) hoặc chạy lệnh check ở trên để xem cái gì mới nhất.

---

## Trước khi cập nhật

1. **Sao lưu cấu hình của bạn** — Xem [Hướng dẫn sao lưu →](/vi/docs/backup)
2. **Đọc ghi chú phát hành** — [community.wolfbot.io/releases](/releases)
3. **Kiểm tra vấn đề đã biết** — Được liệt kê trong từng bản phát hành

### Cái gì được giữ
- ✅ API key và kết nối broker
- ✅ Cấu hình chiến lược và thiết lập rủi ro
- ✅ Lịch sử giao dịch và cấu hình bot

---

## Chọn kênh

Không có chuyển kênh trong ứng dụng — bạn chọn kênh bằng bản phát hành bạn tải về. Lấy bản build Beta hoặc Dev Preview trực tiếp từ [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) thay vì liên kết Stable trên trang tải về khi bạn muốn thử các tính năng mới hơn.

> ⚠️ Bản build Dev Preview có thể chứa tính năng chưa hoàn thiện — hãy dự kiến cạnh thô hơn Stable.

---

## Rollback

Nếu một bản cập nhật gây vấn đề:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
Lệnh này khôi phục manifest của bản phát hành trước và khởi động lại stack trên đó.

**Windows:** tải và cài lại Setup.exe của phiên bản trước từ [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) — cài đè lên phiên bản hiện tại sẽ nâng cấp hoặc hạ cấp tại chỗ theo cả hai cách.

---

## Bảo mật cập nhật

- Tất cả bản cập nhật đều được ký mật mã
- WolfBot xác minh chữ ký trước khi áp dụng
- Checksum được công bố để xác minh thủ công

---

## Vấn đề thường gặp

| Vấn đề | Giải pháp |
|---|---|
| "Update check failed" | Kiểm tra kết nối internet |
| "Signature verification failed" | Tải thủ công từ website |
| Cập nhật kẹt giữa chừng | Chạy lại lệnh updater, hoặc cài lại từ bản tải mới |

---

## Bước tiếp theo

> **[Hướng dẫn sao lưu & phục hồi →](/vi/docs/backup)**
