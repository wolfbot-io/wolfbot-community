---
title: "Giờ đầu tiên với WolfBot Community: từ cài đặt đến chiến lược DCA chạy thử"
description: "Buổi đầu có hướng dẫn từng bước: cài đặt, nối tài khoản test, bật simulation, cấu hình DCA kèm TP/SL và xem lệnh khớp giả đầu tiên."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "60 minutes"
lang: "vi"
translation_of: "docs/first-hour-paper-trade-dca"
next_guide: "/vi/docs/dca-strategy"
previous_guide: "/vi/docs/simulation"
related_guides: ["/vi/docs/dca-strategy", "/vi/docs/take-profit-stop-loss", "/vi/docs/risk-controls", "/vi/install/windows", "/vi/install/linux"]
keywords: ["cài bot giao dịch lần đầu", "chiến lược DCA chạy thử", "hướng dẫn WolfBot Community", "cài bot DCA trong một giờ", "chiến lược bot demo đầu tiên"]
sitemap_priority: 0.8
---

# Giờ đầu tiên với WolfBot Community: từ cài đặt đến chiến lược DCA chạy thử

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn đã tải WolfBot Community và muốn một buổi được dẫn tay kết thúc bằng một
  chiến lược DCA chạy an toàn ở chế độ giấy/demo.
- Bạn muốn thấy toàn bộ vòng lặp — cài đặt, kết nối, chiến lược, rủi ro, khớp
  lệnh — trước khi đưa tiền thật vào bất cứ đâu.

## Bạn sẽ có sau 60 phút

```text
- một bản cài WolfBot Community đang chạy,
- một tài khoản sàn demo/test đã kết nối,
- simulation mode được bật và xác nhận,
- một chiến lược DCA có kế hoạch stop-loss và take-profit,
- giới hạn rủi ro có thể dừng cỗ máy,
- những lệnh khớp giấy đầu tiên hiện trong log/giao diện hiệu quả.
```

## Bước 1 — Cài đặt (10 phút)

Cài Community trên nền tảng bạn định dùng lâu dài. [Hướng dẫn Windows](/vi/install/windows)
và [Linux/VPS](/vi/install/linux) có từng bước. PC để bàn ổn cho việc test; VPS
là thứ bạn cần khi muốn chạy 24/7 sau này ([chạy 24/7 trên VPS](/vi/docs/run-24-7-on-a-vps)).

## Bước 2 — Nối tài khoản test, không phải tài khoản chính (10 phút)

Mọi kết nối sàn đều theo cùng mẫu an toàn trong [hướng dẫn API key](/vi/brokers/api-key-guide):

```text
1. Dùng tài khoản demo/testnet nếu sàn hỗ trợ.
2. Tạo key MỚI cho bot — không bao giờ dùng lại key khác.
3. Chỉ cấp quyền giao dịch/đọc; giữ quyền rút tiền tắt.
4. Key thật của tài khoản chính để ngoài thiết lập test hoàn toàn.
```

Nếu không có tài khoản demo, hãy dùng tài khoản live riêng nhỏ với key
chỉ-giao-dịch và số dư rất nhỏ — không bao giờ dùng ví giao dịch chính.

## Bước 3 — Bật simulation (5 phút)

Trước khi chiến lược đặt bất kỳ lệnh nào, hãy xác nhận nền tảng đang chạy ở chế
độ simulation/demo để lệnh khớp được mô phỏng. [Hướng dẫn simulation](/vi/docs/simulation)
giải thích simulation có thể và không thể dạy bạn gì: nó kiểm chứng *luồng*
(tín hiệu → lệnh → bản ghi khớp → cập nhật rủi ro), còn khớp live mới thêm
spread và trượt giá thật.

## Bước 4 — Tạo chiến lược DCA nhỏ (15 phút)

Dựng chiến lược đơn giản nhất để chạy đủ vòng lặp. Đọc [hướng dẫn DCA](/vi/docs/dca-strategy)
để hiểu đầy đủ; bản ngắn:

```text
Thị trường:    chọn một cặp bạn biết (ví dụ BTC/USDT trên tài khoản test)
Kiểu vào lệnh: DCA — chia vị thế dự kiến thành 3-4 lần vào nhỏ
Hướng:         một hướng duy nhất (mua) ở lần test đầu
Ngân sách:     kích thước nhỏ nhất sàn cho phép mỗi lệnh con
```

Giữ test đầu cố ý nhàm chán: một cặp, một hướng, ba lần vào. Logic phức tạp
chờ sau khi vòng cơ bản được chứng minh.

## Bước 5 — Gắn TP/SL trước khi chạy (10 phút)

Chiến lược DCA không thoát lệnh thì không phải chiến lược — nó là vị thế phình
to. Cấu hình kế hoạch stop-loss và take-profit theo [hướng dẫn TP/SL](/vi/docs/take-profit-stop-loss).
Ở test đầu, ưu tiên stop-loss bắn trước khi bất cứ điều gì kịch tính xảy ra:
bạn đang kiểm chứng nền tảng, không phải săn lời.

## Bước 6 — Đặt giới hạn rủi ro cấp danh mục (5 phút)

Ngay cả ở chế độ giấy, hãy tập thói quen đặt các guard bạn sẽ cần khi live:

```text
- giới hạn vị thế/mức tiếp xúc tối đa cho chiến lược test,
- bộ bảo vệ drawdown/danh mục có thể dừng cỗ máy,
- cooldown để các lệnh vào sai lặp lại không bắn liên tiếp.
```

Xem [risk-controls](/vi/docs/risk-controls) cho mọi guard có sẵn và
[kích thước vị thế](/vi/docs/position-sizing-explained) để chọn logic size.

## Bước 7 — Chạy và đọc các lệnh khớp đầu (5 phút)

Khởi động chiến lược, mở log và giao diện hiệu quả/lệnh khớp. Kiểm chứng bốn
điều quan trọng:

```text
1. Mỗi lệnh con DCA được đặt đúng thiết kế.
2. Lệnh khớp được ghi ở giá mô phỏng hợp lý.
3. Giới hạn rủi ro bạn đặt hiện diện trên vị thế mở.
4. Không xuất hiện lệnh trùng.
```

Nếu có gì sai, [đọc log như operator](/vi/docs/reading-bot-logs-like-an-operator)
và [troubleshooting](/vi/docs/troubleshooting) giúp bạn đọc những gì bot báo lại.

## Bước 8 — Quyết định 24 giờ tiếp theo (5 phút)

Để chiến lược giấy chạy và lên kế hoạch một lần review mỗi ngày — xem
[chạy bot không cần nhìn chart](/vi/docs/running-strategies-without-watching-charts).
Khi vòng lặp sạch sau một ngày khớp giấy, con đường tới live là
[checklist trước khi lên live](/vi/docs/pre-launch-checklist-before-going-live):
size thật nhỏ, cùng TP/SL và giới hạn rủi ro, và một tuần kết quả trung thực.

## Vì sao bắt đầu kiểu này

Cách học nền tảng giao dịch nhanh nhất là thấy một chu kỳ hoàn chỉnh, an toàn
từ đầu đến cuối. Sáu mươi phút bây giờ — với simulation, key test và một DCA
nhỏ — sẽ giúp bạn tránh được bài học đắt tiền hơn về sau.
