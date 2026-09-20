---
title: "Rate limit, thử lại và lệnh trùng: bên trong lớp thực thi, giải thích dễ hiểu"
description: "Sàn giới hạn tốc độ và kết nối rớt. Hiểu cách WolfBot xử lý rate limit, retry và chống trùng để một cảnh báo không thành hai lệnh."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "intermediate"
estimated_time: "7 minutes"
lang: "vi"
translation_of: "docs/rate-limits-retries-duplicate-orders"
next_guide: "/vi/docs/smart-execution-explained"
previous_guide: "/vi/docs/fast-markets-and-fills"
related_guides: ["/vi/docs/smart-execution-explained", "/vi/docs/error-codes", "/vi/docs/tradingview"]
keywords: ["rate limit sàn bot giao dịch", "logic retry lệnh", "chống lệnh trùng", "webhook lệnh trùng", "WolfBot bên trong thực thi"]
sitemap_priority: 0.7
---

# Rate limit, thử lại và lệnh trùng: bên trong lớp thực thi

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn thấy dòng "order rejected" hoặc "timeout" trong log và muốn biết điều gì
  xảy ra tiếp theo.
- Bạn muốn hiểu vì sao lệnh trùng là rủi ro thật trong tự động hoá và một lớp
  thực thi tốt ngăn nó thế nào.

## Ba vấn đề nhàm chán quyết định độ tin cậy

Độ tin cậy của bot giao dịch được quyết định bởi cách nó xử lý ba thứ không hào
nhoáng:

```text
1. Rate limit   -> sàn giới hạn bạn được gửi bao nhiêu request.
2. Retry        -> kết nối rớt hoặc timeout phải được xử lý an toàn.
3. Lệnh trùng   -> cùng một ý định không bao giờ tạo ra hai lệnh.
```

Mỗi thứ vô hình khi hoạt động đúng và đau đầu khi không.

## Rate limit: sàn bảo "chậm lại"

Mọi sàn giới hạn số API call mỗi giây/phút. Bot bắn quá nhiều request sẽ bị
throttle — rồi "không có gì xảy ra" dù chiến lược muốn hành động.

Một lớp thực thi tốt:

- biết giới hạn của từng sàn,
- xếp hàng hoặc giãn các lần gọi,
- coi phản hồi rate-limit là sự kiện bình thường, không phải điều bí ẩn.

Lõi WolfBot có đường nhận biết rate limit dùng chung cho mọi kết nối broker, để
một lần gọi bị throttle không âm thầm làm hỏng chu kỳ chiến lược.

## Retry: "lệnh đó thật sự đi qua chưa?"

Timeout thì mơ hồ: request có thể thất bại *trước khi* tới sàn, hoặc sàn nhận
rồi trả lời quá trễ. Mù quáng thử lại trong trường hợp thứ hai là cách sinh ra
lệnh trùng.

Mẫu an toàn là:

```text
1. Ghi lại lần thử.
2. Kiểm trạng thái sàn trước khi thử lại (lệnh đã xuất hiện chưa?).
3. Chỉ thử lại khi bạn biết lần đầu chưa thành công.
4. Không bao giờ gửi lại cả một hành động chiến lược chỉ vì một call timeout.
```

Kỷ luật "kiểm chứng trước khi thử lại" này chính là điều mô hình
[smart execution](/vi/docs/smart-execution-explained) mô tả cho WolfBot.

## Lệnh trùng: vì sao "gửi hai lần" là câu chuyện thật

Lệnh trùng thường đến từ *đầu vào trùng*, không phải code hỏng:

- một cảnh báo TradingView gửi hai lần,
- webhook được sender thử lại,
- cùng tín hiệu tới bot qua hai đường.

WolfBot xử lý ở hai tầng: chống trùng tín hiệu đến (xem [hướng dẫn TradingView](/vi/docs/tradingview)
và [tín hiệu ngoài](/vi/docs/external-signals)) và đường thực thi không bao giờ
gửi lại lệnh đã đặt. DCA guard và trade guard nằm trên đó nên logic trung bình
giá cũng không thể bắn đúp.

## Điều bạn nên tự kiểm chứng

Trước khi tin bất kỳ bot nào, chạy một thí nghiệm có kiểm soát:

```text
1. Gửi cùng webhook hai lần liên tiếp.
2. Xác nhận chỉ một lệnh được tạo.
3. Mô phỏng timeout bằng cách ngắt kết nối máy giữa hành động.
4. Xác nhận bot phục hồi mà không tạo lệnh thứ hai.
```

Nếu cả hai test tạo đúng một lệnh, lớp chống trùng đang làm việc. Nếu không, đó
là bug cần sửa *trước* tiền thật — xem
[checklist trước khi lên live](/vi/docs/pre-launch-checklist-before-going-live).

## Kết luận

Rate limit, retry và lệnh trùng không phải ca biên kỳ lạ; chúng là thời tiết
bình thường của giao dịch tự động. Hãy chọn (hoặc cấu hình) nền tảng coi chúng
là bài toán kỹ thuật hạng nhất — vì vào cái ngày webhook của bạn được gửi hai
lần, thứ kỹ thuật đó là thứ duy nhất đứng giữa một lệnh và hai lệnh.
