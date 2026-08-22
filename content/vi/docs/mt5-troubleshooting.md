---
title: "Khắc phục lỗi MT5 — Sửa các sự cố Kết nối và Thiết lập MT5 thường gặp trong WolfBot Community"
description: "MT5 không kết nối, tài khoản không provision được, hay symbol không hiển thị? Dưới đây là các lỗi kết nối và thiết lập MT5 cụ thể trong WolfBot Community và chính xác cần kiểm tra gì cho từng lỗi."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-16"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/mt5-troubleshooting"
next_guide: "/vi/brokers/mt5"
related_guides: ["/vi/brokers/mt5", "/vi/docs/mt5-without-windows-vps", "/vi/docs/mt5-symbol-mapping", "/vi/docs/risk-controls"]
keywords: [
  "khắc phục lỗi mt5",
  "mt5 không kết nối wolfbot",
  "mt5 provisioning failed",
  "lỗi thiết lập tài khoản mt5",
  "metatrader 5 khắc phục lỗi",
  "lỗi wolfbot mt5",
  "lỗi thiết lập mt5 linux"
]
sitemap_priority: 0.75
---

# Khắc phục lỗi MT5

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc21** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn gặp lỗi khi kết nối MT5 với WolfBot Community** — thử các cách sửa bên dưới theo thứ tự; mỗi cách chỉ thẳng tới log bạn có thể tự đọc thay vì đoán.
- **Nếu bạn am hiểu kỹ thuật** — phần tìm nguyên nhân cho biết chính xác thành phần nào ghi gì, để bạn tự chẩn đoán trên máy của mình.

## Trước khi bắt đầu

Hai kiểm tra nhanh giải quyết nhiều lỗi kết nối MT5 nhanh hơn mọi thứ khác:

1. **Demo vs Live.** Hãy chắc chắn bạn kết nối tài khoản MT5 **Demo (testnet)** trước, giống hướng dẫn kết nối. Tài khoản Live có thể trượt kiểm tra sẵn sàng (và rủi ro hơn khi kiểm thử).
2. **MT5 bridge chỉ nằm trong bản cài Linux.** MT5 chạy trong container trên Linux (kích hoạt bằng một lệnh) — nó không được đóng gói tương tự trong bản Windows chưa phát hành. Xác nhận nền tảng của bạn khớp với hướng dẫn đang theo.

## Các lỗi thường gặp và cần kiểm tra gì

### "Could not set up the MT5 account. Please try again." (`MT5_PROVISIONING_FAILED`)

Đây là lỗi chính được báo cáo từ các bản cài thực tế. Nó xảy ra khi **bước provisioning cho từng tài khoản** của terminal/bridge MT5 không thể hoàn tất. Đừng đổi thông tin API trước — hãy kiểm tra theo thứ tự:

1. **Đọc log control/api** của lần demand provisioning và lỗi chính xác nó trả về. Thông điệp ghi `container_provisioned=false` khi không thể tạo container terminal/bridge.
2. **Xác nhận container runtime truy cập được.** Trên bản cài Community, thiếu mount Docker socket tới bridge control nghĩa là không bao giờ tạo được container cho từng tài khoản — đây là nguyên nhân cấu trúc đằng sau nhiều lỗi `MT5_PROVISIONING_FAILED`. Nếu log của bạn hiện lỗi socket/permission, đó chính là điểm nghẽn.
3. **Xác nhận image bridge đã có.** Nếu image bridge MT5 chưa được kéo về, provisioning thất bại với lỗi image-not-found dù mọi thứ khác đều ổn.
4. **Retry sau khi kiểm log.** Đây không phải tình huống "xóa rồi thêm lại key"; trạng thái nằm ở bước provisioning và log sẽ nêu đúng lỗi thực tế.

### Tài khoản kết nối Nhưng không hiện symbol

- Nếu chiến lược của bạn tham chiếu một symbol không có mapping sang sàn, WolfBot giữ nguyên symbol đó. Xác nhận cách viết chính xác của symbol và xem [hướng dẫn ánh xạ symbol](/vi/docs/mt5-symbol-mapping).
- Nếu danh sách symbol trông trống, hãy kiểm file selected-symbols cho tài khoản MT5 và xác nhận Market Watch trong MT5 thực sự có các instrument đã nạp.

### Mất kết nối hoặc lỗi lệnh ngay sau khi khởi động

- Xác minh chiến lược đang ở chế độ **Simulation** trước, để một lỗi gõ hay instrument sai không bao giờ mở lệnh thật trong lúc bạn còn kiểm thử.
- Kiểm log MT5 bridge để xem trạng thái terminal; một terminal headless chưa đăng nhập broker sẽ từ chối lệnh cho tới khi phiên được thiết lập.

### Vẫn bị kẹt?

Cách nhanh nhất để có câu trả lời dứt khoát là tái hiện đúng lỗi với log trước mặt bạn:

- **Log control/api** — provisioning và độ sẵn sàng tài khoản (cái gì thực sự fail).
- **Log MT5 bridge** — trạng thái đăng nhập và lệnh của terminal.

Khi mở thread hỗ trợ, hãy dán dòng lỗi cụ thể (như `MT5_PROVISIONING_FAILED`) và khung log tương ứng — điều đó giúp giải quyết chỉ trong một lượt thay vì qua lại nhiều lần.

## Bắt đầu đúng hướng

- [Ánh xạ symbol MT5 →](/vi/docs/mt5-symbol-mapping) — xem chính xác symbol quy về đâu trước khi mở lệnh
- [Chạy MT5 không cần Windows VPS →](/vi/docs/mt5-without-windows-vps)
- [Kết nối MT5 →](/vi/brokers/mt5)

> **[Kết nối MT5 →](/vi/brokers/mt5)**
