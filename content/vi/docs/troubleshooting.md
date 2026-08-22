---
title: "Khắc phục sự cố WolfBot Community — Vấn đề thường gặp & giải pháp"
description: "Sửa các vấn đề thường gặp của WolfBot Community. Lỗi cài đặt, vấn đề kết nối thị trường, lỗi cập nhật, và mã lỗi."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/troubleshooting"
related_guides: ["/vi/docs/error-codes", "/install/windows", "/install/linux", "/vi/docs/updates", "/vi/brokers/api-key-guide"]
keywords: ["khắc phục sự cố wolfbot", "mã lỗi wolfbot", "sửa wolfbot", "lỗi cài đặt wolfbot", "vấn đề kết nối wolfbot"]
sitemap_priority: 0.80
---

# Hướng dẫn khắc phục sự cố

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc21** · Cập nhật lần cuối: 2026-08-11

## Chẩn đoán nhanh

Chạy công cụ chẩn đoán có sẵn từ terminal (Command Prompt/PowerShell trên Windows, terminal thường trên Linux), từ thư mục cài đặt WolfBot của bạn:

```bash
wolfbot doctor
```

Nó chỉ đọc — kiểm tra tính toàn vẹn của cài đặt, trạng thái dịch vụ, mạng và kết nối broker mà không thay đổi gì.

---

## Lỗi cài đặt

### WB-WIN-001 — Không đủ dung lượng đĩa
**Triệu chứng:** Bộ cài đặt thất bại với "Not enough disk space"

**Khắc phục:** Giải phóng ít nhất 2 GB. Kiểm tra dung lượng ổ `C:`.

### WB-WIN-002 — Bị từ chối quyền
**Triệu chứng:** "Access denied" trong lúc cài đặt

**Khắc phục:** Bấm chuột phải bộ cài đặt → **Run as Administrator**

### WB-WIN-003 — Tải về bị hỏng
**Triệu chứng:** Bộ cài đặt không khởi động hoặc thất bại kiểm tra toàn vẹn

**Khắc phục:** Tải lại từ [community.wolfbot.io/download](https://community.wolfbot.io/download). Xác minh checksum SHA256.

### WB-WIN-004 — Thiếu phụ thuộc
**Triệu chứng:** "VCRUNTIME140.dll not found"

**Khắc phục:** Cài [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)

### WB-LNX-001 — Không tìm thấy Docker
**Triệu chứng:** "Docker is not installed"

**Khắc phục:** `sudo apt-get install docker.io` hoặc chạy lại bộ cài đặt (nó tự xử lý).

### WB-LNX-002 — Xung đột cổng
**Triệu chứng:** "Port 8765 already in use"

**Khắc phục:** `sudo lsof -i :8765` → dừng dịch vụ xung đột → khởi động lại WolfBot

> Chỉ cần tra mã lỗi? Dùng [Bảng tra cứu nhanh mã lỗi](/vi/docs/error-codes) — mỗi mã có cách sửa một dòng.

---

## Vấn đề kết nối

### Kết nối broker thất bại
1. Xác minh API key vẫn hợp lệ (chưa hết hạn)
2. Kiểm tra quyền API: Trade ✅, Withdrawal ❌
3. Nếu bị hạn chế IP: xác nhận IP của bạn khớp
4. Kiểm tra trang trạng thái API của sàn
5. Với MT5: đảm bảo terminal MT5 đang chạy và đã đăng nhập
6. Tạo lại key và thêm lại

### "Connection Refused"
- Kiểm tra kết nối internet
- Xác minh sàn không bị chặn theo vùng địa lý
- Thử dùng VPN nếu cần

### "Rate Limit Exceeded"
WolfBot tự xử lý. Nếu dai dẳng, giảm tần suất bot.

---

## Vấn đề cập nhật

| Vấn đề | Giải pháp |
|---|---|
| Kiểm tra cập nhật thất bại | Kiểm tra internet; tường lửa có thể chặn máy chủ cập nhật |
| Xác minh chữ ký thất bại | Tải thủ công từ [trang tải về](/download) |
| Cập nhật bị kẹt | Khởi động lại WolfBot và thử lại |
| Sau khi cập nhật, WolfBot không khởi động | Linux: `wolfbot-updater.sh rollback`. Windows: cài lại Setup.exe phiên bản trước — xem [Hướng dẫn cập nhật](/vi/docs/updates) |

---

## Vấn đề hiệu suất

### Dùng CPU cao
- Giảm số cặp giao dịch đang hoạt động
- Tăng khoảng thời gian bot (ví dụ 5min → 15min)
- Đóng các tab Dashboard không dùng

### Dùng bộ nhớ cao
- Khởi động lại WolfBot (rò rỉ bộ nhớ nếu chạy >7 ngày)
- Giảm số chiến lược đồng thời

### Dashboard chậm
- Dùng trình duyệt hiện đại (Chrome, Edge, Firefox)
- Xóa cache trình duyệt
- Giảm widget Dashboard

---

## Dữ liệu & cấu hình

### Mất cấu hình
1. Nếu bạn có bản lưu trữ sao lưu, phục hồi nó — xem [Hướng dẫn sao lưu & phục hồi](/vi/docs/backup)
2. Nếu không: cấu hình lại thủ công

### Cơ sở dữ liệu bị hỏng
```bash
wolfbot repair
```
Đây là lệnh sửa chữa chuyên dụng, fail-closed — nó không bao giờ tự sửa mà không có bạn chạy nó, và nó sẽ không chạm vào bất cứ thứ gì nó không chắc chắn.

---

## Nhật ký (Logs)

Tìm nhật ký chi tiết để gỡ lỗi:

**Windows:** `C:\Program Files\WolfBot\logs\`

**Linux:** `~/.wolfbot/logs/` hoặc `wolfbot logs`

Khi báo cáo vấn đề trên [GitHub](https://github.com/wolfbot-io/wolfbot-community/issues), đính kèm đoạn log liên quan (gỡ bỏ API key).

---

## Vẫn gặp vấn đề?

1. Tìm kiếm [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
2. Kiểm tra [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues)
3. Mở một [issue mới](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) với:
   - Phiên bản WolfBot
   - Hệ điều hành và phiên bản
   - Mã lỗi hoặc thông báo
   - Các bước tái hiện

> ⚠️ Không bao giờ chia sẻ API key, secret key, hoặc mật khẩu.
