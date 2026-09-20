---
title: "MT5 Demo so với Live: điều gì đổi khi tự động hoá bằng tiền thật"
description: "Chiến lược chạy tốt trên MT5 demo có thể hành xử khác khi live. Biết khác biệt về khớp lệnh, symbol, phiên giao dịch và quy tắc broker."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "live-trading"
difficulty: "intermediate"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "docs/mt5-demo-vs-live-what-changes"
next_guide: "/vi/docs/mt5-symbol-mapping"
previous_guide: "/vi/docs/mt5-self-hosted-trading"
related_guides: ["/vi/docs/mt5-self-hosted-trading", "/vi/docs/mt5-symbol-mapping", "/vi/brokers/mt5", "/vi/docs/pre-launch-checklist-before-going-live"]
keywords: [
  "mt5 demo so với live",
  "tự động hoá tài khoản mt5 live",
  "khác biệt tài khoản demo mt5",
  "bot forex từ demo lên live",
  "wolfbot tự động hoá mt5"
]
sitemap_priority: 0.7
---

# MT5 Demo so với Live: điều gì đổi khi tự động hoá bằng tiền thật

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Chiến lược của bạn đang chạy tốt trên tài khoản MT5 demo và bạn sắp trỏ bot
  vào tài khoản live.
- Bạn muốn checklist các khác biệt để tuần live đầu tiên không gây bất ngờ.

## Demo và live không phải cùng một thị trường

Nguồn demo trông giống hệt và khớp lệnh tức thì. Nguồn live có spread thật,
độ sâu thật và quy tắc broker thật. Các khác biệt dưới đây là bình thường —
mục tiêu là biết trước, không phải bị bất ngờ.

## Điều thường đổi

### Khớp lệnh và spread

Spread live nới rộng quanh tin tức và giờ ít thanh khoản (kể cả giờ rollover).
Lệnh khớp tức thì trên demo có thể trượt hoặc lâu hơn khi live. Hãy giữ ngân
sách trượt giá thực tế và kiểm lại trong tuần đầu.

### Symbol và tên symbol

Tên symbol giữa các broker khác nhau: broker này gọi vàng `XAUUSD`, broker kia
thêm hậu tố. Bot cần đúng tên symbol broker live của bạn dùng.
[Hướng dẫn symbol mapping](/vi/docs/mt5-symbol-mapping) giải thích cách WolfBot
ánh xạ symbol nội bộ với symbol thật — hãy làm đúng *trước khi* lên live.

### Phiên giao dịch và cuối tuần

Demo thường mở 24/7 cho tiện; forex và kim loại live có giờ mở/đóng phiên rõ
ràng và nghỉ cuối tuần. Chiến lược bắn lúc phiên đóng trên demo có thể đơn giản
không khớp khi live. Hãy lên kế hoạch quanh lịch phiên của công cụ bạn tự động
hoá.

### Quy tắc margin và đòn bẩy của broker

Đòn bẩy demo không đảm bảo bằng live. Nếu tài khoản live đòn bẩy thấp hơn, cùng
size vị thế sẽ dùng nhiều ký quỹ hơn — có thể gây margin call mà demo chưa từng
cho thấy. Kiểm lại yêu cầu ký quỹ với cài đặt tài khoản thật trước lệnh đầu.

### Thực thi và requote

Một số tài khoản live dùng requote/manual quote cho vài loại lệnh. Bot tự động
cần định tuyến lệnh đáng tin cậy; nếu broker requote nhiều, hãy test demo trước
và nếu cần, ưu tiên loại lệnh broker thực thi không requote.

## Kế hoạch live đầu an toàn

```text
1. Xác nhận tên symbol và phiên live (không phải của demo).
2. Xác nhận đòn bẩy và quy tắc margin live.
3. Chạy size live nhỏ nhất trọn một tuần.
4. So khớp lệnh, spread và margin dùng với kế hoạch mỗi ngày.
5. Chỉ tăng size sau khi con số — không phải sự phấn khích — bảo bạn tăng.
```

[Checklist trước khi lên live](/vi/docs/pre-launch-checklist-before-going-live)
và [hướng dẫn MT5 tự lưu trữ](/vi/docs/mt5-self-hosted-trading) bao quát phần
còn lại. Hãy coi bước demo-to-live như một thí nghiệm có kiểm soát với size
nhỏ — chuyên gia cũng làm vậy.
