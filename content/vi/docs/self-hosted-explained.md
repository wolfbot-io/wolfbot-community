---
title: "Giải thích nền tảng giao dịch tự lưu trữ — Vì sao chạy WolfBot trên máy của bạn"
description: "Nền tảng giao dịch thống nhất tự lưu trữ là gì? Lợi ích của việc chạy WolfBot Community trên máy của chính bạn: kiểm soát toàn phần, riêng tư tối đa, không tốn phí — trên crypto và MT5."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/self-hosted-explained"
next_guide: "/vi/getting-started"
related_guides: ["/vi/community-vs-cloud", "/vi/getting-started", "/security"]
keywords: ["bot giao dịch tự lưu trữ", "bot crypto tự lưu trữ", "tự lưu trữ giao dịch là gì", "bot giao dịch trên máy chủ riêng", "bot giao dịch cục bộ", "nền tảng giao dịch thống nhất tự lưu trữ"]
sitemap_priority: 0.80
---

# Giải thích nền tảng giao dịch tự lưu trữ

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc20** · Cập nhật lần cuối: 2026-08-11

## "Tự lưu trữ" nghĩa là gì?

Nền tảng giao dịch tự lưu trữ chạy trên **máy của bạn** — PC Windows, máy Linux, hoặc VPS của bạn. Bạn cài nó, bạn cấu hình nó, bạn kiểm soát nó. Tất cả thị trường, tất cả chiến lược, tất cả dữ liệu của bạn — dưới sự kiểm soát của bạn.

```text
Cloud-hosted:
Trình duyệt của bạn → Máy chủ của người khác → Sàn

Self-hosted (WolfBot Community):
Máy của bạn → Sàn (trực tiếp)
```

---

## Vì sao tự lưu trữ?

### 1. Kiểm soát toàn phần
- Máy của bạn, quy tắc của bạn
- Không bên thứ ba nào có thể tạm dừng giao dịch của bạn
- Bạn quyết định khi nào cập nhật
- Không dịch vụ nào có thể ngừng hoạt động với bạn

### 2. Riêng tư
- API key ở lại trên máy của bạn
- Dữ liệu giao dịch ở lại cục bộ
- Không cơ sở dữ liệu đám mây lưu chiến lược của bạn
- Không bên thứ ba nào thấy vị thế của bạn — trên bất kỳ thị trường nào

### 3. Không tốn phí
- WolfBot Community hoàn toàn miễn phí
- Không phí đăng ký
- Không phí theo lệnh
- Chi phí duy nhất là điện/internet của chính bạn
- Một nền tảng bao phủ mọi thị trường của bạn — crypto, futures, và MT5

### 4. Bảo mật
- Phi lưu ký (non-custodial): không bên thứ ba nắm giữ tiền của bạn
- API key chỉ cho phép giao dịch: không thể rút tiền
- Tường lửa của bạn, quy tắc bảo mật của bạn
- Không bề mặt tấn công hạ tầng chia sẻ

### 5. Khả năng tùy chỉnh
- Truy cập đầy đủ mọi tính năng
- Chạy chiến lược tùy chỉnh trên mọi thị trường đã kết nối
- Tích hợp với công cụ của riêng bạn
- Điều chỉnh theo quy trình làm việc của bạn

---

## Những gì bạn cần

| Yêu cầu | Tối thiểu |
|---|---|
| Máy tính | Bất kỳ PC Windows 10/11 hoặc Ubuntu |
| RAM | 4 GB |
| Đĩa | 2 GB trống |
| Internet | Kết nối ổn định |
| Uptime (tùy chọn) | VPS để chạy 24/7 |

---

## So sánh nhanh: Tự lưu trữ vs Cloud

| | Tự lưu trữ | Cloud |
|---|---|---|
| Chi phí | Miễn phí | Đăng ký trả phí |
| Kiểm soát | Toàn phần | Hạn chế |
| Riêng tư | Tối đa | Hạ tầng chia sẻ |
| Thiết lập | Bạn cài | Sẵn sàng dùng |
| Bảo trì | Bạn quản lý | Nhà cung cấp quản lý |
| Uptime | Trách nhiệm của bạn | SLA của nhà cung cấp |

[So sánh đầy đủ →](/vi/community-vs-cloud)

---

## Các lo ngại thường gặp

### "Tôi có cần máy chủ không?"
Không. WolfBot Community chạy tốt trên PC Windows hoặc Linux thông thường. [VPS chỉ cần nếu bạn muốn giao dịch 24/7](/vi/docs/run-24-7-on-a-vps) mà không phải bật PC liên tục. Nó xử lý sàn crypto và broker MT5 tốt như nhau từ bất kỳ môi trường nào.

### "Nếu PC của tôi sập thì sao?"
Vị thế của bạn nằm trên sàn, không phải trên PC. WolfBot Community là phi lưu ký. Khi bạn khởi động lại, nó tự phục hồi vị thế của bạn — dù là cặp crypto hay công cụ MT5.

### "Nó có an toàn không?"
Có — an toàn hơn giải pháp đám mây theo nhiều cách. API key của bạn không bao giờ rời khỏi máy. Bạn kiểm soát truy cập mạng. API key chỉ cho phép giao dịch ngăn rút tiền ngay cả khi ai đó giành được quyền truy cập.

### "Tôi có thể dùng nó nếu không rành kỹ thuật không?"
Có. Bộ cài Windows là wizard thiết lập chuẩn — nhấp đúp, cài, mở. Linux dùng gói .deb chuẩn. Không cần kinh nghiệm code hay Docker.

---

## Tự lưu trữ có phù hợp với bạn không?

### ✅ Tự lưu trữ tốt nếu bạn:
- Muốn giữ chi phí bằng không
- Thích kiểm soát hạ tầng của chính mình
- Coi trọng riêng tư và quyền sở hữu dữ liệu
- Có máy tính có thể bật liên tục (hoặc VPS)
- Thoải mái với thiết lập máy tính cơ bản

### ❌ Cloud có thể tốt hơn nếu bạn:
- Không muốn quản lý bất kỳ hạ tầng nào
- Cần uptime 24/7 đảm bảo
- Thích hỗ trợ trực tiếp
- Muốn trải nghiệm được quản lý toàn phần

[So sánh Community vs Cloud →](/vi/community-vs-cloud)

---

## Bắt đầu

1. [Tải WolfBot Community](/download)
2. [Cài trên Windows](/vi/install/windows) hoặc [Linux](/vi/install/linux)
3. [Đọc Bắt đầu](/vi/getting-started)
4. Kết nối tài khoản Demo — không rủi ro, kiểm thử trên mọi thị trường

---

## Bước tiếp theo

> **[Bắt đầu →](/vi/getting-started)**
