---
title: "Vì sao quyền Rút tiền nên được tắt — Bảo vệ tiền của bạn khỏi một key bị xâm phạm"
description: "API key chỉ để giao dịch được thiết kế để tắt quyền rút tiền. Đây là lý do một key có quyền rút tiền là con đường chính biến một key sàn bị xâm phạm thành số dư bị đánh cắp, và cách kiểm tra key của bạn."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
next_guide: "/vi/docs/trade-only-api-keys-explained"
related_guides: ["/vi/docs/trade-only-api-keys-explained", "/security", "/vi/docs/risk-controls"]
keywords: [
  "quyền rút tiền api key",
  "api key chỉ giao dịch",
  "tắt quyền rút tiền bot giao dịch",
  "bảo mật api key",
  "key sàn không quyền rút tiền",
  "thông tin api bot an toàn"
]
sitemap_priority: 0.7
---

# Vì sao quyền Rút tiền nên được tắt

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc17** · Cập nhật lần cuối: 2026-08-16

## Câu trả lời một dòng

Một bot giao dịch chỉ cần đặt và quản lý lệnh. Nó không bao giờ cần chuyển tiền của bạn ra ngoài. Vậy API key an toàn nhất cho bất kỳ bot tự lưu trữ nào — gồm cả WolfBot Community — là **key chỉ giao dịch với quyền rút tiền bị tắt.**

## Một API key có thể mang những quyền gì

Khi tạo API key trên một sàn, bạn thường chọn những hành động nó được phép thực hiện. Khác biệt có ý nghĩa cho bot giao dịch:

- **Giao dịch:** đọc số dư, đặt lệnh, quản lý vị thế — chính xác những gì bot làm.
- **Rút tiền:** chuyển tiền ra khỏi tài khoản.

Thứ hai chính là điều biến một key bị rò rỉ hay đánh cắp từ "ai đó có thể gây rối lệnh của tôi" thành "ai đó có thể lấy tiền của tôi."

## Vì sao nó quan trọng với tiền của bạn

Nếu quyền **rút tiền** của key bạn **tắt**, dù key bị xâm phạm hoàn toàn cũng không thể gửi số dư đi đâu — sàn chỉ đơn giản từ chối mọi yêu cầu rút từ key đó. Đó là một điểm dừng cứng cho thiệt hại mà một thông tin xác thực bị đánh cắp có thể gây ra cho tiền thật của bạn.

Nếu nó **bật**, ngay khi key đó rò rỉ (một lần dán, máy bị xâm phạm, một dependency độc hại bạn chạy), kẻ tấn công có thể rút sạch tài khoản trực tiếp, không cần thêm bước nào.

## Cách kiểm tra key của bạn

1. Đăng nhập sàn và mở **API Management**.
2. Tìm key kết nối với bot của bạn.
3. Xác nhận chỉ **Giao dịch / Đọc** được bật và **Rút tiền bị tắt.**
4. Nếu rút tiền đang bật, hãy tắt nó rồi kết nối lại bot. WolfBot không bao giờ cần nó.

## Key chỉ giao dịch, tóm lại

- Một key chỉ giao dịch đáp ứng mọi thứ bot làm: đọc, đặt, quản lý.
- Tắt rút tiền là cách bảo vệ tiền rẻ nhất và hiệu quả nhất mà mỗi người kiểm soát được.

## Bước tiếp theo

- [Khái niệm API Key chỉ-giao-dịch →](/vi/docs/trade-only-api-keys-explained)
- [Bảo mật →](/security)
- [Kiểm soát rủi ro →](/vi/docs/risk-controls)

> **[Khái niệm API Key chỉ-giao-dịch →](/vi/docs/trade-only-api-keys-explained)**
