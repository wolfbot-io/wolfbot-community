---
title: "Grid, DCA, Martingale và TP/SL: các chiến lược phổ thông (và cách chọn)"
description: "Grid, DCA, martingale và take-profit/stop-loss thật sự làm gì, hình dạng rủi ro ra sao, và vì sao WolfBot đang làm chúng thành template chọn sẵn."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "beginner"
estimated_time: "8 minutes"
lang: "vi"
translation_of: "academy/popular-strategies-explained"
related_guides: ["/vi/docs/dca-strategy", "/vi/docs/take-profit-stop-loss", "/vi/docs/risk-controls", "/vi/docs/how-unified-risk-differs-from-per-bot-risk"]
keywords: ["grid trading giải thích", "so sánh DCA martingale grid", "chiến lược bot phổ thông", "chọn chiến lược giao dịch", "WolfBot template chiến lược"]
sitemap_priority: 0.8
---

# Grid, DCA, Martingale và TP/SL: các chiến lược phổ thông

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn cứ nghe "grid bot", "DCA", "martingale" và muốn một bản đồ ngôn ngữ thường
  trước khi chọn bất cứ điều gì.
- Bạn muốn biết WolfBot đang làm các chiến lược này dễ bắt đầu hơn thế nào —
  như template làm sẵn bạn chọn, thay vì logic bạn tự dựng.

## Bốn nhóm bạn sẽ gặp

### 1. Take-profit / stop-loss (lớp nền)

Không hẳn là một "chiến lược" độc lập — nó là kỷ luật thoát lệnh mà mọi chiến
lược khác đều cần. Take-profit chốt mức lời kế hoạch; stop-loss chặn mức lỗ kế
hoạch. WolfBot coi chúng là phần của lớp rủi ro quanh mọi vị thế. Xem
[take-profit và stop-loss](/vi/docs/take-profit-stop-loss).

### 2. DCA — trung bình giá

Vào một vị thế bằng nhiều phần nhỏ thay vì một cục, thường thêm khi giá giảm.
Nó làm mềm giá vào trung bình nhưng **tăng tiếp xúc khi giá đang rơi** — nên
luôn phải đi kèm trần lỗ tổng. Xem [hướng dẫn DCA](/vi/docs/dca-strategy).

### 3. Grid trading

Đặt lệnh mua/bán theo một thang mức giá quanh một vùng, chốt lời nhỏ khi giá dao
động giữa các mức. Grid hợp thị trường đi ngang và chịu đựng kém khi giá đi xuyên
toàn bộ lưới một hướng. Rủi ro là hàng tồn: một cú đi một chiều để bạn ôm vị thế
phình to.

### 4. Kiểu martingale

Gấp đôi (hoặc nhân) size sau mỗi lần thua, giả định cú hồi sẽ xoá lỗ trước. Nó
trông tuyệt trong giai đoạn yên ả và là một trong những cách nhanh nhất chạm vị
thế nguy hiểm trong thị trường thật — vì size tăng theo cấp số nhân và thị
trường không nợ bạn gì.

## Hình dạng rủi ro mới là khác biệt thật

Mọi chiến lược là tổ hợp của cùng ba núm:

```text
Cách vào lệnh   (một phát, thang giá, mức lưới, theo tín hiệu)
Cách định size  (cố định, phần trăm, nhân lên)
Cách thoát      (chỉ TP/SL, theo mức, theo thời gian)
```

DCA và martingale đều "trung bình vào" — khác ở *sizing*. Grid là DCA cộng tự
chốt lời ở mỗi mức. Cái tên bạn bấm ít quan trọng hơn hình dạng rủi ro bạn chấp
nhận. Nếu bạn không biết kịch bản tệ nhất của một họ chiến lược, đừng chạy nó
live.

## Vì sao WolfBot tiến tới "chọn chiến lược"

Tự dựng logic chiến lược là rào cản với đa số trader. Định hướng WolfBot là cung
cấp các họ phổ thông — grid, DCA, TP/SL và hơn nữa — như **template làm sẵn bạn
chọn bằng một click**, rồi cấu hình cặp, ngân sách và giới hạn rủi ro thay vì
viết logic. Các template vẫn chạy qua cùng risk engine, nên dù chọn gì, guard
drawdown, cooldown và bảo vệ cấp danh mục vẫn áp dụng cho cả cỗ máy.

## Cách chọn cái đầu tiên

```text
Hành vi thị trường -> đi ngang? ý grid hợp. theo xu hướng? ý DCA/mua đáy hợp.
Tính khí của bạn   -> xem được vị thế phình to khi giá giảm không?
Kịch bản tệ nhất  -> đã viết lỗ tối đa ra trước khi bấm chưa?
Thói quen review  -> sẽ kiểm kết quả hằng tuần chứ? (xem bài review tháng đầu)
```

Bắt đầu với họ chiến lược có *hình dạng rủi ro* bạn sống nổi và giải thích được
trong một câu. Chạy [simulation](/vi/docs/simulation), thêm
[risk controls](/vi/docs/risk-controls), rồi lên live size nhỏ. Khi WolfBot thêm
nhiều template hơn, thói quen quan trọng vẫn vậy: biết bạn đã bấm gì, biết nó có
thể lỗ bao nhiêu, và review trung thực.
