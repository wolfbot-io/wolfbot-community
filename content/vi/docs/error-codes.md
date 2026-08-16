---
title: "Mã lỗi WolfBot Community — Tra cứu nhanh cách sửa"
description: "Toàn bộ mã lỗi WolfBot Community được giải thích: WB-WIN-001 đến WB-WIN-004 và WB-LNX-001 đến WB-LNX-002. Tìm chính xác cách sửa lỗi cài đặt hoặc khởi động."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
lang: "vi"
translation_of: "docs/error-codes"
related_guides: ["/vi/docs/troubleshooting", "/install/windows", "/install/linux", "/vi/docs/updates"]
keywords: [
  "ma loi wolfbot community",
  "mã lỗi wolfbot",
  "WB-WIN-001",
  "WB-LNX-002",
  "cách sửa lỗi cài đặt bot giao dịch",
  "tra cứu mã lỗi wolfbot"
]
sitemap_priority: 0.80
---

# Mã lỗi WolfBot Community

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-16

Một mã lỗi — một cách sửa. Mã lỗi cho biết chính xác việc hỏng, nên bạn không
phải đoán. Tìm mã lỗi của bạn dưới đây, áp dụng cách sửa, rồi tiếp tục với
[Hướng dẫn xử lý sự cố đầy đủ](/vi/docs/troubleshooting) nếu vấn đề vẫn kéo dài.

---

## Bảng tra cứu nhanh

| Mã lỗi | Xảy ra ở đâu | Cách sửa trong một dòng |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--không-đủ-dung-lượng-đĩa) | Trình cài Windows | Giải phóng 2 GB dung lượng đĩa |
| [WB-WIN-002](#wb-win-002--từ-chối-quyền) | Trình cài Windows | Chạy trình cài với quyền Administrator |
| [WB-WIN-003](#wb-win-003--tải-tệp-hỏng) | Trình cài Windows | Tải lại và kiểm tra checksum SHA256 |
| [WB-WIN-004](#wb-win-004--thiếu-phụ-thuộc) | Lần đầu chạy Windows | Cài Visual C++ Redistributable |
| [WB-LNX-001](#wb-lnx-001--không-tìm-thấy-docker) | Trình cài Linux | Cài Docker, hoặc chạy lại trình cài |
| [WB-LNX-002](#wb-lnx-002--xung-đột-cổng) | Lần đầu chạy Linux | Dừng tiến trình đang dùng cổng 8765 |

---

## Mã lỗi Windows

### WB-WIN-001 — Không đủ dung lượng đĩa
**Triệu chứng:** Trình cài báo "Not enough disk space".

**Cách sửa:** Giải phóng ít nhất 2 GB rồi thử lại. Kiểm tra dung lượng trống trên ổ `C:` trước.

### WB-WIN-002 — Từ chối quyền
**Triệu chứng:** "Access denied" trong quá trình cài đặt.

**Cách sửa:** Nhấp chuột phải vào trình cài và chọn **Run as Administrator**.

### WB-WIN-003 — Tải tệp hỏng
**Triệu chứng:** Trình cài không khởi động, hoặc kiểm tra toàn vẹn thất bại.

**Cách sửa:** Tải lại từ [community.wolfbot.io/download](https://community.wolfbot.io/download), rồi kiểm tra checksum SHA256 với giá trị chính thức trước khi chạy. Xem [Cách xác minh bot giao dịch đã tải](/docs/how-to-verify-a-downloaded-trading-bot).

### WB-WIN-004 — Thiếu phụ thuộc
**Triệu chứng:** "VCRUNTIME140.dll not found" khi WolfBot khởi động.

**Cách sửa:** Cài [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe), rồi khởi động lại WolfBot.

---

## Mã lỗi Linux

### WB-LNX-001 — Không tìm thấy Docker
**Triệu chứng:** "Docker is not installed".

**Cách sửa:** `sudo apt-get install docker.io`, hoặc đơn giản chạy lại trình cài — nó tự cài và chạy Docker cho bạn.

### WB-LNX-002 — Xung đột cổng
**Triệu chứng:** "Port 8765 already in use".

**Cách sửa:** Tìm tiến trình giữ cổng bằng `sudo lsof -i :8765`, dừng dịch vụ đó, rồi khởi động lại WolfBot.

---

## Liên quan

- [Hướng dẫn xử lý sự cố đầy đủ](/vi/docs/troubleshooting) — lỗi mạng, cập nhật, hiệu năng và dữ liệu.
- [Cài WolfBot trên Windows](/install/windows) — quy trình cài đặt Windows chính xác.
- [Cài WolfBot trên Linux](/install/linux) — cài đặt Ubuntu/Debian và trạng thái dịch vụ.
- [Cập nhật & Khôi phục](/vi/docs/updates) — xử lý khi cập nhật thất bại.
- Không thấy mã lỗi của mình? [Tìm trên GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) hoặc [mở issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose).
