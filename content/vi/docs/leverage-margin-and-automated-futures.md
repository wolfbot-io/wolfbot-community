---
title: "Đòn bẩy, ký quỹ và futures tự động: bài học rủi ro cơ bản"
description: "Giao dịch futures tự động đổi phép tính rủi ro. Hiểu đòn bẩy và ký quỹ nghĩa gì với bot, và nên đặt giới hạn thế nào trước khi lên sàn thật."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "docs/leverage-margin-and-automated-futures"
next_guide: "/vi/docs/position-sizing-explained"
related_guides: ["/vi/docs/position-sizing-explained", "/vi/docs/risk-controls", "/vi/docs/take-profit-stop-loss", "/vi/brokers/binance"]
keywords: [
  "rủi ro giao dịch futures tự động",
  "đòn bẩy cho bot giao dịch",
  "ký quỹ hợp đồng tương lai",
  "quản lý rủi ro bot futures",
  "wolfbot tự động hoá futures"
]
sitemap_priority: 0.7
---

# Đòn bẩy, ký quỹ và futures tự động: bài học rủi ro cơ bản

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn đang cân nhắc tự động hoá giao dịch **futures/hợp đồng vĩnh cửu** thay vì
  chỉ spot.
- Bạn hiểu spot rồi và muốn biết *khác biệt* quan trọng với rủi ro — chứ không
  phải một khoá học futures đầy đủ.

## Một khác biệt thay đổi mọi thứ

Ở spot, vị thế giảm giá vẫn là tài sản của bạn. Ở futures, vị thế của bạn được
**đòn bẩy**: sàn cho vay mức tiếp xúc và yêu cầu ký quỹ làm tài sản thế chấp.
Nếu giá đi ngược đủ xa, vị thế có thể bị thanh lý trước khi giá kịp phục hồi.

```text
Spot    -> bạn sở hữu tài sản; tệ nhất là "giá giảm".
Futures -> bạn kiểm soát ký quỹ; tệ nhất là "sàn đóng lệnh đúng lúc tệ nhất"
           (thanh lý).
```

Bot giúp bạn khỏi phải bấm nút — nhưng **không** loại bỏ rủi ro thanh lý. Mọi
thứ dưới đây giúp rủi ro đó luôn thấy được và có giới hạn.

## Đòn bẩy nhân cả hai chiều

Đòn bẩy 5× nghĩa là giá biến động 1% làm giá trị vị thế đổi 5%. Điều đó có lợi
và cũng chống lại bạn. Phần nguy hiểm với tự động hoá là đòn bẩy thường đặt
*từng lệnh* trong khi lỗ tích luỹ qua nhiều lệnh — nên tổng rủi ro có thể tăng
mà không ai để ý.

Quy tắc thực dụng: **bắt đầu đòn bẩy thấp (1–3×) với tài khoản nhỏ**, chỉ tăng
sau nhiều chu kỳ live hoạt động đúng như mong đợi.

## Ký quỹ cho bạn biết điều gì trước mỗi lệnh

Ký quỹ là tài sản thế chấp cần để mở và giữ vị thế. Trước khi để bot mở lệnh
đòn bẩy, hãy biết:

```text
- một vị thế cần bao nhiêu ký quỹ,
- còn bao nhiêu ký quỹ khả dụng sau vị thế,
- sàn sẽ thanh lý ở mức giá nào,
- stop-loss của bạn có bắn *trước* mức đó không.
```

Stop-loss phải nằm gọn bên trong khoảng cách thanh lý — xem
[hướng dẫn take-profit và stop-loss](/vi/docs/take-profit-stop-loss) để biết
WolfBot gắn chúng vào vị thế thế nào.

## Đặt giới hạn như spot — rồi thêm kiểm tra ký quỹ

Các giới hạn bạn biết vẫn áp dụng:

- stop-loss và take-profit cho mọi vị thế,
- cooldown sau các lỗi lặp lại,
- bộ bảo vệ drawdown có thể dừng hẳn bot.

Với futures, thêm một thói quen: **kiểm tra ký quỹ khả dụng và rủi ro đang mở**
trong review hằng ngày, chứ không chỉ PnL. [risk-controls](/vi/docs/risk-controls)
liệt kê mọi bộ bảo vệ; [kích thước vị thế](/vi/docs/position-sizing-explained)
hướng dẫn chọn size mỗi lệnh.

## Khi nghi ngờ, quay lại chạy thử

Hành vi futures nên được học trước khi dùng tiền thật. Chạy chiến lược ở chế độ
demo với đúng đòn bẩy định dùng live, rồi so rủi ro thanh lý giữa hai bên. Nếu
demo đã chạm mức thanh lý trong biến động bình thường, hãy giảm đòn bẩy — bot
sẽ giao dịch cùng quy tắc vào ngày mai, và thị trường vẫn còn đó.
