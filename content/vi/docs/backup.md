---
title: "Sao lưu & Phục hồi WolfBot Community — Hướng dẫn bảo vệ dữ liệu"
description: "Cách sao lưu và phục hồi WolfBot Community — bảo vệ cấu hình nền tảng thống nhất và dữ liệu giao dịch của bạn."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/backup"
next_guide: "/vi/docs/troubleshooting"
previous_guide: "/vi/docs/updates"
related_guides: ["/vi/docs/updates", "/vi/docs/troubleshooting"]
keywords: ["sao lưu wolfbot", "phục hồi wolfbot", "sao lưu bot giao dịch", "bảo vệ dữ liệu bot giao dịch", "sao lưu nền tảng thống nhất wolfbot"]
sitemap_priority: 0.80
---

# Hướng dẫn sao lưu & phục hồi

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc19** · Cập nhật lần cuối: 2026-08-12

## Vì sao sao lưu?

WolfBot lưu cấu hình của bạn cục bộ: kết nối API broker, thiết lập chiến lược, tham số rủi ro, cấu hình bot, và tùy chọn giao dịch. Một bản sao lưu bảo vệ nhiều ngày hoặc nhiều tuần công sức thiết lập.

---

## Sao lưu (Linux)

Sao lưu chạy từ terminal, và mặc định là **dry run** — chúng cho bạn thấy cái gì sẽ được sao lưu mà không ghi gì, cho đến khi bạn thêm `--execute`:

```bash
# Xem bản sao lưu sẽ bao gồm gì, mà không ghi gì
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot

# Thực sự ghi bản lưu trữ sao lưu
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Thêm `--label "before-weekend"` để gắn nhãn bản sao lưu bằng một tên bạn nhận ra sau này. Bản lưu trữ kết quả được ghi với quyền tệp hạn chế (chỉ đọc được bởi tài khoản người dùng của chính bạn) cùng một biên nhận mô tả nội dung của nó.

> Chạy `wolfbot backup --help` để xem danh sách tùy chọn đầy đủ, hiện tại — các cờ có thể thay đổi giữa các bản phát hành.

### Windows

Lệnh sao lưu chuyên dụng chưa khả dụng trên Windows — hiện tại, lựa chọn an toàn nhất là sao chép thư mục dữ liệu WolfBot của bạn tới nơi an toàn trước một thay đổi lớn (xem [Khắc phục sự cố](/vi/docs/troubleshooting) nếu bạn không chắc nó ở đâu).

---

## Phục hồi từ bản sao lưu

```bash
wolfbot restore-backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --backup <path-to-archive>
```

Giống sao lưu, lệnh này mặc định là dry run để bạn thấy cái gì sẽ thay đổi trước khi cam kết với `--execute`. Dùng `wolfbot inspect-backup <path-to-archive>` trước nếu bạn chỉ muốn kiểm tra bên trong một bản lưu trữ mà không phục hồi gì.

---

## Cái gì được sao lưu

Cấu hình, thiết lập chiến lược, tham số rủi ro và lịch sử giao dịch của bạn nằm trong thư mục dữ liệu của WolfBot và được bao gồm trong bản sao lưu. API secret của broker được xử lý cẩn thận — kiểm tra đầu ra của `wolfbot backup` (ngay cả ở dry-run) nếu bạn cần xác nhận chính xác một bản phát hành bao gồm gì trước khi dựa vào nó để di chuyển máy.

---

## Di chuyển sang máy mới

1. Tạo bản sao lưu trên máy cũ (`wolfbot backup ... --execute`)
2. Sao chép bản lưu trữ kết quả sang máy mới
3. Cài WolfBot Community trên máy mới
4. Phục hồi bản lưu trữ (`wolfbot restore-backup ...`), rồi xác minh tài khoản và thiết lập của bạn — nhập lại bất kỳ API key nào không chuyển sang được

---

## Khắc phục sự cố

| Vấn đề | Giải pháp |
|---|---|
| "Backup creation failed" | Kiểm tra dung lượng đĩa và rằng `--install-root`/`--data-root` trỏ đúng đường dẫn WolfBot thật của bạn |
| Phục hồi trông sai sau khi đổi phiên bản | Cập nhật WolfBot về cùng phiên bản bản sao lưu được tạo trước, rồi thử lại |
| Không chắc bản sao lưu thành công | Chạy `wolfbot inspect-backup <path>` để kiểm tra nội dung trước khi bạn cần nó |

---

## Bước tiếp theo

> **[Hướng dẫn khắc phục sự cố →](/vi/docs/troubleshooting)**
