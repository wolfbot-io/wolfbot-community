---
title: "Cài đặt WolfBot Community trên Windows — Từng bước"
description: "Cách cài WolfBot Community trên Windows 10 hoặc Windows 11. Tải một file cài, bấm Cài đặt, WolfBot tự chuẩn bị mọi thứ rồi mở như một ứng dụng bình thường."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-14"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "30-60 minutes"
lang: "vi"
translation_of: "install/windows"
next_guide: "/vi/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting", "/docs/error-codes"]
keywords: [
  "cài wolfbot windows",
  "cài đặt wolfbot community windows",
  "bot giao dịch crypto windows",
  "bot giao dịch windows 11",
  "nền tảng giao dịch windows"
]
os_tested: ["Windows 11 Home"]
sitemap_priority: 0.9
---

# Cài đặt WolfBot Community trên Windows

**Đã kiểm thử với WolfBot Community v0.1.0-beta.20** · Cập nhật lần cuối: 2026-11-14

> ⚠️ **Bản beta công khai — chưa được ký số.** Windows SmartScreen sẽ hiện
> "Windows protected your PC" vì file cài chưa được ký bởi tổ chức cấp chứng thư.
> Riêng cảnh báo này không có nghĩa file không an toàn. Chỉ tải từ trang chính thức
> [community.wolfbot.io/download](https://community.wolfbot.io/download) hoặc trang
> GitHub Releases của wolfbot-io, so sánh mã SHA256 (xem "Kiểm tra file tải về" bên
> dưới), rồi chọn **More info → Run anyway**.
>
> **Đã và chưa được kiểm thử:** bản beta này đã được thử trọn vẹn trên Windows 11 Home.
> Luồng khởi động lại rồi tự chạy tiếp trên máy mới tinh, Windows 10, cập nhật tại chỗ và
> thông báo cập nhật ở khay **chưa** được thử trên máy sạch, vì vậy nếu thấy điều gì bất
> thường, xin báo trên [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Hướng dẫn này dành cho ai

Dành cho bất kỳ ai muốn chạy WolfBot Community trên máy Windows 10 hoặc Windows 11.
Không cần biết lập trình, Docker hay Linux: bạn bấm **Cài đặt**, chờ, rồi WolfBot mở
như một ứng dụng bình thường. Bản Windows dùng **cùng WolfBot với Linux** (cùng các
thành phần đã ký, cùng tính năng).

## Bạn cần gì

- Windows 11 (đã thử) hoặc Windows 10 22H2 trở lên (dự kiến chạy được, chưa thử), 64-bit
- **Đã bật tính năng ảo hoá** trong BIOS/UEFI của máy (hầu hết máy đã bật sẵn; xem "Vấn đề thường gặp")
- Ít nhất **8 GB RAM** (khuyến nghị 16 GB)
- **Ít nhất 50 GB ổ đĩa trống** trên ổ bạn chọn. WolfBot lưu một môi trường riêng tại đó; bản beta này tải mọi tier dịch thuật, bản sau sẽ cần ít hơn nhiều
- Kết nối internet (lần cài đầu tải khoảng 30–35 GB trong bản beta này)
- Quyền quản trị để cài đặt

Bạn **không** cần tự cài Docker, WSL hay Ollama. Bộ cài chuẩn bị chúng trong một môi
trường riêng của nó và không đụng tới các chương trình hay máy ảo bạn đang dùng.

## Quan trọng: WolfBot chỉ giao dịch khi máy của bạn đang bật

WolfBot chạy ngay trên máy của bạn, nên chỉ hoạt động khi máy **đang bật và không ngủ**.
WolfBot tạm dừng khi Windows vào chế độ **Sleep hoặc Hibernate**, khi bạn **tắt máy** hoặc
**đăng xuất**, và sau khi Windows khởi động lại cho đến khi có người đăng nhập. Khi tạm
dừng, WolfBot không thể mở lệnh mới, chỉnh trailing stop hay theo dõi vị thế. Các lệnh và
TP/SL đã đặt sẵn trên sàn của bạn vẫn nằm đó.

Bạn có thể làm gì (do bạn quyết định — WolfBot không bao giờ tự đổi cài đặt của bạn): trong
**Settings → System → Power & battery → Screen and sleep**, đặt **Sleep** là **Never** khi
cắm điện. Với laptop, hãy kiểm tra thêm hành động khi gập nắp máy. Nên dùng máy luôn bật,
hoặc bật tự đăng nhập để WolfBot chạy lại sau khi khởi động lại.

## Bước 1: Tải về

1. Vào [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Bấm **Download for Windows**
3. File `WolfBot-Setup-{version}-windows-amd64.exe` được tải về (khoảng 87 MB)

## Bước 2: Cài đặt

1. Bấm đúp vào file vừa tải.
2. Nếu SmartScreen hiện "Windows protected your PC", hãy xác nhận bạn đã tải từ nguồn
   chính thức và mã checksum khớp, rồi bấm **More info → Run anyway**.
3. Bấm **Yes** khi Windows hỏi quyền quản trị.
4. Đọc trang chào, rồi chọn nơi cài đặt. WolfBot gợi ý ổ đĩa còn đủ chỗ. Bấm **Cài đặt**.
5. Chờ thanh tiến độ chạy. Bước lâu nhất là tải các thành phần WolfBot (khoảng 15–40 phút
   tuỳ tốc độ mạng). Bạn vẫn có thể dùng máy bình thường.
6. Nếu Windows yêu cầu **khởi động lại một lần**, hãy đồng ý. **Bộ cài tự chạy tiếp** sau
   khi bạn đăng nhập lại — bạn không cần làm gì thêm.
7. Khi thấy "WolfBot đã sẵn sàng", bấm **Mở WolfBot ngay** (hoặc **Finish**).

### Nếu máy bạn không chạy được bản khuyên dùng

Bộ cài khuyên dùng chạy WolfBot trong một môi trường Linux riêng (WSL2 + Docker), cùng các thành phần
đã ký như bản Linux. Một số máy không chạy được — ví dụ ảo hóa bị tắt trong BIOS hoặc bị chính sách
công ty chặn, hoặc ổ đĩa còn quá ít chỗ trống. Khi đó bộ cài **không** dừng với lỗi: nó tự tải và cài
bản **Windows "Native"** cũ hơn (khoảng 590 MB, được kiểm tra SHA256 cố định trước khi chạy), và báo ở
cuối rằng đã cài ở chế độ tương thích.

- Bạn không cần chọn và không cần tự tải file Native — xin đừng tự chọn
  `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe` trên trang release trừ khi bộ cài yêu cầu.
- Bộ cài chỉ làm vậy khi lỗi do phần cứng hoặc chính sách. Nếu lỗi bạn tự sửa được (cổng bị chiếm,
  không có mạng, ổ không phải NTFS), bộ cài sẽ cho biết cần đổi gì.
- Bản Native cũ hơn (thiếu một số bản sửa của các bản mới) và chưa thể tự nâng lên bản khuyên dùng.
  Nếu sau này bạn khắc phục nguyên nhân (ví dụ bật ảo hóa), hãy gỡ WolfBot rồi chạy lại bộ cài.
- Gỡ cài đặt vẫn làm như bình thường trong "Installed apps" của Windows.

## Bước 3: Sử dụng WolfBot

- Mở **WolfBot** từ Desktop hoặc Start Menu. Nó mở trong cửa sổ riêng — bạn không bao giờ phải
  gõ địa chỉ web.
- **Biểu tượng ở khay hệ thống** (cạnh đồng hồ) cho biết trạng thái: xanh = đang chạy, vàng =
  đang khởi động, đỏ = đã dừng. Bấm chuột phải để Mở, Khởi động, Khởi động lại hoặc Dừng
  WolfBot, hoặc đọc khi nào WolfBot tạm dừng.
- Lần chạy đầu, Dashboard sẽ hướng dẫn thiết lập; chưa có tài khoản sàn nào được kết nối nên
  bạn khám phá mà không có rủi ro.

## Cập nhật

Khi có phiên bản mới, biểu tượng ở khay sẽ hiện thông báo. Chọn mục cập nhật, bộ cài sẽ nâng
cấp WolfBot tại chỗ và giữ nguyên dữ liệu của bạn. Trong lúc cập nhật, WolfBot không dùng được
trong vài phút.

## Gỡ cài đặt

**Settings → Apps → WolfBot → Uninstall.** Mặc định dữ liệu của bạn (tài khoản, khoá API, cài
đặt, lịch sử) được **giữ lại** để sau này cài lại là tiếp tục như cũ. Bạn chỉ được hỏi về việc
xoá vĩnh viễn nếu chọn không giữ, và khi đó có thể lưu một bản sao vào Documents trước.

## Vấn đề thường gặp

| Vấn đề | Cách xử lý |
|---|---|
| "Tính năng ảo hoá đang tắt" | Khởi động lại, vào BIOS/UEFI (thường nhấn F2 hoặc Del), bật **Intel VT-x** hoặc **AMD-V / SVM**, rồi chạy lại bộ cài. Chưa có gì trên máy bị thay đổi. |
| "WolfBot đã được cài hoặc đang chạy… dùng cùng cổng mạng" | Đóng hoặc gỡ chương trình kia hoặc bản WolfBot cũ (bản "Native" trước đây của Windows không chạy cùng lúc với bản này), rồi chạy lại bộ cài. |
| Không đủ RAM hoặc ổ đĩa | Giải phóng chỗ hoặc chọn ổ khác ở trang chọn nơi cài (cần 8 GB RAM và 45 GB trống; khuyến nghị từ 50 GB). |
| Tổ chức của bạn chặn "Windows Subsystem for Linux" | Nhờ quản trị IT cho phép tính năng này. |
| Bộ cài dừng với lỗi | Chạy lại bộ cài — nó tiếp tục từ chỗ đã dừng. Chi tiết lưu tại `C:\ProgramData\WolfBot\wsl\install.log`. |
| Cảnh báo Windows SmartScreen | Bình thường với bản beta chưa ký này. Kiểm tra checksum rồi **More info → Run anyway**. |
| WolfBot dừng sau khi máy ngủ hoặc khởi động lại | Mở WolfBot từ Start Menu, nó tự chạy lại. Xem lưu ý về chế độ ngủ ở trên. |

## Xử lý sự cố

- **WB-WIN-001:** Thiếu dung lượng ổ đĩa → giải phóng ít nhất 45 GB hoặc chọn ổ khác
- **WB-WIN-002:** Bị từ chối quyền → đồng ý hộp thoại quyền quản trị
- **WB-WIN-003:** File tải lỗi → tải lại và kiểm tra checksum
- **WB-WIN-004:** Ảo hoá đang tắt hoặc tính năng Windows bị chặn → xem "Vấn đề thường gặp"

Xem [Hướng dẫn xử lý sự cố](/docs/troubleshooting).

## Kiểm tra file tải về

Mở PowerShell và chạy:

```powershell
Get-FileHash .\WolfBot-Setup-*-windows-amd64.exe -Algorithm SHA256
```

So sánh kết quả với mã SHA256 trên [trang download](https://community.wolfbot.io/download).
Nếu khác, đừng chạy file và hãy tải lại từ trang chính thức.

## Bước tiếp theo

> **[Bắt đầu với Mô phỏng →](/docs/simulation)**
