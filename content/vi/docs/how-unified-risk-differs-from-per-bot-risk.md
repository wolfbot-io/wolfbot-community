---
title: "Rủi ro thống nhất vs Rủi ro theo bot — Vì sao một bộ máy rủi ro an toàn hơn cho giao dịch đa thị trường"
description: "Chạy các quy tắc rủi ro riêng cho mỗi bot để lại khoảng trống giữa chúng. Bài này giải thích cách một bộ máy rủi ro thống nhất duy nhất của WolfBot Community coi crypto và MT5 là một danh mục, và vì sao nó chặn drawdown bị phân tán."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "docs/how-unified-risk-differs-from-per-bot-risk"
next_guide: "/vi/docs/risk-controls"
related_guides: ["/vi/docs/risk-controls", "/vi/docs/why-bots-fail-risk-management", "/vi/docs/how-to-reduce-drawdown"]
keywords: [
  "quản lý rủi ro thống nhất",
  "rủi ro theo bot",
  "rủi ro cấp danh mục giao dịch",
  "rủi ro thống nhất crypto mt5",
  "kiểm soát drawdown giữa các bot",
  "wolfbot quản lý rủi ro"
]
sitemap_priority: 0.8
---

# Rủi ro thống nhất vs Rủi ro theo bot

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn chạy nhiều hơn một chiến lược và muốn chúng hoạt động như một danh mục, không phải những người xa lạ** — bài này giải thích khác biệt giữa rủi ro cho từng bot và rủi ro cho mọi thứ.
- **Nếu bạn am hiểu kỹ thuật** — bạn sẽ thấy cách một bộ máy rủi ro duy nhất nhìn toàn bộ exposure của bạn thay vì phân mảnh theo từng chiến lược.

## Cái bẫy theo bot

Nhiều thiết lập cho **mỗi bot các quy tắc rủi ro riêng**: chiến lược này có giới hạn drawdown 10%, chiến lược kia một giới hạn khác. Vấn đề là các giới hạn này không nói chuyện với nhau. Nếu mỗi bot đều được phép drawdown một chút, và tất cả cùng drawdown một lúc — điều thường xảy ra khi thị trường di chuyển cùng nhau — thì mỗi cái riêng lẻ "tuân thủ giới hạn" trong khi tổng tài khoản của bạn đang chảy máu trên tất cả chúng.

Rủi ro theo bot giống như mỗi phòng trong một ngôi nhà có vòi phun chữa cháy riêng nhưng không ai canh cả tòa nhà.

## Rủi ro thống nhất nghĩa là gì

Một bộ máy rủi ro thống nhất nhìn **tổng vị thế của bạn trên mọi tài khoản đã kết nối** — gồm cả crypto futures và MT5 — trước và trong mỗi lệnh. Các quy tắc như giới hạn drawdown, cap exposure và guard được đánh giá ở cấp danh mục, không phải từng chiến lược riêng lẻ.

Nên "không vượt quá X% drawdown" nghĩa là X% của **toàn bộ danh mục** của bạn, bất kể bao nhiêu bot và broker tạo ra các vị thế bên dưới.

## Kết quả thực tế

- **Một điểm dừng là điểm dừng thật.** Chạm giới hạn drawdown danh mục làm tạm dừng hoạt động trên mọi chiến lược, không chỉ chiến lược đã vượt.
- **Không có tương quan ẩn.** Nếu mười chiến lược cùng phụ thuộc vào một biến động giá, bộ máy thống nhất thấy exposure đó một lần.
- **Crypto và MT5, cùng một quy tắc.** Một vị thế vàng trên MT5 và một vị thế crypto đều là một phần của bức tranh rủi ro chung.

## So sánh hai cách

| | Rủi ro theo bot | Rủi ro thống nhất |
|---|---|---|
| Đọc drawdown | theo chiến lược | toàn danh mục |
| Vị thế tương quan | vô hình | được gộp |
| Hành động dừng | chỉ bot đó | mọi hoạt động |
| Crypto + MT5 | riêng biệt | cùng nhau |

## Bắt đầu an toàn

- [Thiết lập Kiểm soát rủi ro →](/vi/docs/risk-controls)
- [Vì sao bot thất bại →](/vi/docs/why-bots-fail-risk-management)
- [Cách giảm drawdown →](/vi/docs/how-to-reduce-drawdown)

> **[Đọc hướng dẫn Kiểm soát rủi ro →](/vi/docs/risk-controls)**
