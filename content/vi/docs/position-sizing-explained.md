---
title: "Kích thước vị thế: mỗi lệnh tự động nên rủi ro bao nhiêu"
description: "Kích thước vị thế là nửa thầm lặng của quản lý rủi ro. Tìm hiểu sizing cố định và theo phần trăm, và cách risk engine hợp nhất áp dụng chúng."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "7 minutes"
lang: "vi"
translation_of: "docs/position-sizing-explained"
next_guide: "/vi/docs/how-unified-risk-differs-from-per-bot-risk"
previous_guide: "/vi/docs/risk-controls"
related_guides: ["/vi/docs/risk-controls", "/vi/docs/how-to-reduce-drawdown", "/vi/docs/how-to-read-trading-performance"]
keywords: [
  "kích thước vị thế bot giao dịch",
  "mỗi lệnh nên rủi ro bao nhiêu",
  "rủi ro mỗi lệnh phần trăm",
  "quản lý rủi ro giao dịch tự động",
  "wolfbot kích thước vị thế"
]
sitemap_priority: 0.7
---

# Kích thước vị thế: mỗi lệnh tự động nên rủi ro bao nhiêu

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn đã đọc [risk-controls](/vi/docs/risk-controls) và muốn hiểu phần sizing:
  mỗi lệnh tự động được phép dùng *bao nhiêu* tài khoản.
- Bạn định chạy nhiều chiến lược và muốn một quy tắc nhất quán thay vì đoán
  từng bot.

## Vì sao sizing quan trọng hơn tín hiệu vào lệnh

Tín hiệu quyết định *vào ở đâu*; kích thước quyết định *bạn có thể mất bao
nhiêu trong lúc chờ chiến lược đúng về dài hạn*. Hai chiến lược y hệt nhau với
size khác nhau sẽ cho trải nghiệm ngược nhau:

```text
Chiến lược rủi ro 2% mỗi lệnh    -> chuỗi thua chỉ khó chịu
Chiến lược rủi ro 20% mỗi lệnh   -> chuỗi thua đó kết liễu tài khoản
```

Mục tiêu của sizing là sống sót qua những chuỗi thua mà chiến lược nào cũng
có, để quy tắc thắng vẫn có cơ hội phát huy.

## Hai kiểu sizing thường gặp

### Kích thước cố định

Mỗi lệnh dùng cùng một số tiền (ví dụ 20 USDT/lệnh). Dễ hiểu, nhưng không tự
tăng theo tài khoản và có thể chiếm tỷ lệ lớn của một tài khoản nhỏ.

### Theo phần trăm / theo rủi ro

Bot tính mỗi lệnh từ một phần trăm tài khoản hoặc ngân sách rủi ro. Đây là lựa
chọn phổ biến của người dùng dài hạn vì size tự thu nhỏ sau thua và tăng sau
thắng — không cần tinh chỉnh tay liên tục.

## Nơi sizing gặp giới hạn rủi ro

Chỉ riêng size không phải là kế hoạch rủi ro. Nó thành kế hoạch khi được kết
hợp với giới hạn:

- **stop-loss** định nghĩa một lệnh thua có thể tốn bao nhiêu,
- **bộ bảo vệ drawdown** định nghĩa tổng thiệt hại chấp nhận được trước khi
  bot dừng,
- **cooldown** ngăn một ý tưởng thua lặp lại bắn ngay lập tức.

WolfBot áp dụng các quy tắc này quanh mọi lệnh — gồm cả lệnh DCA, thoát
TP/SL và tín hiệu ngoài — để sizing không bị bỏ mặc cho từng lệnh riêng lẻ.

## Một quy tắc khởi đầu đơn giản

Bắt đầu thận trọng và giữ phép tính nhàm chán:

```text
1. Chọn mức lỗ tối đa chấp nhận được cho một tuần xấu (ví dụ 5-10%).
2. Chia mức đó cho số lệnh chiến lược có thể mở.
3. Đặt size sao cho một lần stop-loss đầy đủ chỉ chiếm phần nhỏ ngân sách.
4. Chạy cùng con số đó ở chế độ chạy thử và đọc kết quả một cách trung thực.
```

Nếu lúc chạy thử đã chạm drawdown guard với size đã định thì size quá lớn cho
chiến lược đó — hãy giảm size hoặc cải thiện quy tắc trước. Xem tiếp
[cách giảm drawdown](/vi/docs/how-to-reduce-drawdown).

## Một điều nữa: đọc kết quả, đừng đọc cảm xúc

Sizing chỉ hữu ích nếu bạn đo lường kết quả. Sau vài tuần, so sánh kết quả
thật với lúc chạy thử: win rate, lỗ trung bình, drawdown tối đa.
[Hướng dẫn đọc hiệu quả](/vi/docs/how-to-read-trading-performance) giải thích
số nào quan trọng và cách đọc mà không tự lừa mình.
