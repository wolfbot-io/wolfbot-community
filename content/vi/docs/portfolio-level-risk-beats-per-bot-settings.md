---
title: "Vì sao rủi ro cấp danh mục tốt hơn cài đặt từng bot"
description: "Mười bot tự có stop-loss riêng vẫn có thể làm chìm tài khoản cùng lúc. Xem vì sao WolfBot đánh giá rủi ro toàn danh mục và điều đó đổi kết quả thế nào."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "docs/portfolio-level-risk-beats-per-bot-settings"
next_guide: "/vi/docs/how-unified-risk-differs-from-per-bot-risk"
previous_guide: "/vi/docs/position-sizing-explained"
related_guides: ["/vi/docs/risk-controls", "/vi/docs/how-to-reduce-drawdown", "/vi/docs/position-sizing-explained"]
keywords: ["rủi ro cấp danh mục bot", "risk engine hợp nhất", "vì sao rủi ro từng bot thất bại", "bảo vệ drawdown tài khoản", "kiến trúc rủi ro WolfBot"]
sitemap_priority: 0.8
---

# Vì sao rủi ro cấp danh mục tốt hơn cài đặt từng bot

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn đang chạy (hoặc định chạy) nhiều hơn một chiến lược tự động.
- Bạn muốn hiểu vì sao WolfBot đánh giá rủi ro ở mức danh mục thay vì để mỗi
  bot tự trông mình.

## Điểm mù kinh điển: ai cũng an toàn, gộp lại thì không

Tưởng tượng mười chiến lược, mỗi cái tự có stop-loss 2%. Nhìn riêng chúng rất
kỷ luật. Rồi một đợt biến động tương quan đánh trúng cả mười cùng lúc: mười
lệnh đóng ở "-2%" trong cùng một giờ. Tài khoản vừa mất ~20%, mà không bot nào
từng vi phạm quy tắc của chính nó.

Đó là điểm yếu cơ bản của tư duy rủi ro *từng bot*: nó kiểm quy tắc trong sự cô
lập trong khi thiệt hại xảy ra ở tổng thể.

```text
Rủi ro từng bot    -> "mỗi chiến lược lỗ dưới giới hạn của nó." (trông ổn)
Rủi ro danh mục    -> "tài khoản đang lỗ X%, nền tảng hành động ngay." (thật)
```

## Rủi ro danh mục thấy gì mà rủi ro từng bot không thể

Một nền tảng đánh giá toàn tài khoản có thể áp các quy tắc mà không bot nào tự
diễn đạt được:

```text
- drawdown tối đa của tài khoản, không phải từng chiến lược,
- trần mức tiếp xúc tổng trên mọi vị thế mở,
- hành động "dừng tất cả" khi guard danh mục chạm,
- cooldown áp chéo bot, không chỉ trong một bot,
- tầm nhìn tổng lỗ đã thực hiện trong một khoảng thời gian.
```

Đó là khác biệt WolfBot mô tả trong
[rủi ro hợp nhất vs rủi ro từng bot](/vi/docs/how-unified-risk-differs-from-per-bot-risk)
và phơi bày qua [risk controls](/vi/docs/risk-controls).

## Một ví dụ cụ thể

```text
Tài khoản: 10.000 USDT
Ba chiến lược, mỗi cái rủi ro 3%/lệnh độc lập
Một đợt crypto tương quan đánh trúng cả ba cùng lúc

Nhìn từng bot:  ba lệnh đóng "-3%" — mỗi cái trong giới hạn riêng
Nhìn danh mục:  tài khoản lỗ ~9% trong một giờ và vẫn đang tiếp xúc
Với guard danh mục ở -8%: nền tảng dừng phần tiếp xúc còn lại sớm
```

Con số chỉ để minh hoạ; vấn đề mang tính cấu trúc. Khi cài đặt từng bot nhận ra
vấn đề thì danh mục đã là vấn đề.

## Vì sao WolfBot làm được điều này còn "bộ sưu tập bot" thường không

Một nền tảng chỉ là danh sách bot độc lập thì chỉ kiểm được từng bot. Lõi
WolfBot coi tài khoản crypto, futures và MT5 là các phần của một lớp vận hành —
với broker adapter, một orchestrator thực thi và các module guard (drawdown,
DCA guard, trade guard) quanh cả cỗ máy. Đó là điều khiến "cấp danh mục" là hành
vi thật, không phải từ marketing.

## Cách áp dụng ngay hôm nay

```text
1. Đặt guard drawdown tài khoản/danh mục trước — trước khi thêm chiến lược.
2. Size mỗi chiến lược sao cho tổng kịch bản xấu vẫn tôn trọng guard đó.
3. Review tổng tiếp xúc mỗi ngày, không chỉ PnL từng bot.
4. Khi guard chạm, điều tra sự kết hợp, không chỉ bot cuối.
```

Xem [kích thước vị thế](/vi/docs/position-sizing-explained) để size từng phần
và [cách giảm drawdown](/vi/docs/how-to-reduce-drawdown) cho thói quen phục hồi.

## Kết luận

Thị trường không quan tâm quy tắc của bạn được tổ chức thế nào. Nếu mười chiến
lược có thể tương quan thành một lỗ lớn, hệ thống rủi ro của bạn phải thấy lỗ
đó như một sự kiện duy nhất. Guard cấp danh mục của WolfBot được xây cho chính
góc nhìn đó.
