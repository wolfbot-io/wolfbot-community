---
title: "Giải thích kênh phát hành WolfBot Community"
description: "Hiểu các kênh phát hành WolfBot Community: Stable, Beta, RC, Alpha, và Dev Preview. Chọn đúng kênh."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
lang: "vi"
translation_of: "releases/channels"
next_guide: "/vi/docs/updates"
related_guides: ["/vi/docs/updates", "/download"]
keywords: ["kênh phát hành wolfbot", "wolfbot stable beta", "wolfbot dev preview", "phiên bản wolfbot", "phiên bản bot giao dịch"]
sitemap_priority: 0.80
---

# Giải thích kênh phát hành

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc17** · Cập nhật lần cuối: 2026-08-11

## Các kênh khả dụng

| Kênh | Trạng thái | Ai nên dùng | Tự cập nhật |
|---|---|---|---|
| **Stable** | Sẵn sàng sản xuất | Trader live | ✅ |
| **RC** (Release Candidate) | Kiểm thử cuối | Người dùng sớm thận trọng | Tùy chọn |
| **Beta** | Xem trước tính năng | Người kiểm thử, người đam mê | ✅ |
| **Alpha** | Kiểm thử tính năng sớm | Người kiểm thử kỹ thuật | Tùy chọn |
| **Dev Preview** | Bản build mới nhất | Nhà phát triển, phản hồi | Thủ công |

---

## Stable

Bản phát hành sẵn sàng sản xuất đã qua mọi cổng chất lượng.

- **Tần suất cập nhật:** Mỗi 1–2 tháng
- **Rủi ro:** Thấp nhất
- **Tốt nhất cho:** Giao dịch live, sử dụng sản xuất
- **Hỗ trợ:** Hỗ trợ cộng đồng đầy đủ

> ✅ Khuyến nghị cho mọi giao dịch live.

---

## Beta

Bản build hoàn thiện tính năng đang trải qua kiểm thử rộng hơn.

- **Tần suất cập nhật:** Mỗi 1–2 tuần
- **Rủi ro:** Thấp — tính năng hoạt động nhưng có thể có trường hợp biên
- **Tốt nhất cho:** Kiểm thử tính năng mới trước Stable
- **Hỗ trợ:** Hoan nghênh phản hồi cộng đồng

---

## Dev Preview

Bản build phát triển mới nhất — tính năng mới nhất, ít được kiểm thử nhất.

- **Tần suất cập nhật:** Vài lần mỗi tuần
- **Rủi ro:** Trung bình — tính năng có thể chưa hoàn thiện
- **Tốt nhất cho:** Nhà phát triển, phản hồi sớm, người đam mê
- **Hỗ trợ:** Cố gắng hết sức

> ⚠️ Dev Preview có thể chứa tính năng chưa hoàn thiện. Chế độ mặc định là Simulation.

---

## Cách các kênh hoạt động

```text
Dev Preview (thường xuyên)
    ↓
Alpha (kiểm thử tính năng)
    ↓
Beta (kiểm thử rộng hơn)
    ↓
RC (release candidate)
    ↓
Stable (sản xuất)
```

Mỗi bản build là bất biến — chúng tôi không bao giờ sửa một bản phát hành đã công bố. Nếu phát hiện lỗi, một phiên bản mới được phát hành.

---

## Trạng thái hiện tại

WolfBot Community hiện đang ở **Public Preview** (giai đoạn Beta).

```text
Stable: Chưa phát hành
Public hiện tại: v0.1.0-p12-ghcr-rc17
```

Điều này nghĩa là:
- Phần mềm hoạt động và có thể cài đặt
- Tính năng đang được kiểm thử rộng
- Có thể có thay đổi phá vỡ giữa các phiên bản
- Khuyến nghị dùng tài khoản Demo khi kiểm thử

---

## Đổi kênh của bạn

Không có chuyển kênh trong ứng dụng — kênh của bạn đơn giản là bản phát hành bạn tải và cài. Lấy bản build Beta hoặc Dev Preview từ [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) thay vì liên kết Stable trên trang tải về khi bạn muốn thử tính năng mới hơn; bộ cài nâng cấp bản cài hiện có của bạn tại chỗ theo cả hai cách.

Khi thử một kênh thử nghiệm hơn, khuyến nghị kiểm thử trên tài khoản Demo trước.

---

## Đánh số phiên bản

```text
MAJOR.MINOR.PATCH-channel.NUMBER

0.1.0-p12-ghcr-rc17
│   │  │
│   │  └── Kênh: beta, build 2
│   └───── Phiên bản minor (phát hành tính năng)
└───────── Phiên bản major (0 = trước stable)
```

Các phiên bản Stable sẽ dùng: `1.0.0`, `1.1.0`, v.v.

---

## GitHub Releases

Tất cả bản phát hành được công bố trên [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases):

- **Pre-release:** Dev Preview, Alpha, Beta, RC
- **Full Release:** Chỉ Stable
- Mỗi bản phát hành bao gồm: tệp cài đặt, checksum, ghi chú phát hành

---

## Bước tiếp theo

> **[Hướng dẫn cập nhật →](/vi/docs/updates)**
