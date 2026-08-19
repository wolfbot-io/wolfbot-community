---
title: "Take-Profit và Stop-Loss — Hai lệnh bảo vệ mọi giao dịch"
description: "Take-profit (TP) và stop-loss (SL) là hai lệnh quyết định bạn thắng bao nhiêu và có thể thua bao nhiêu. Đây là cách WolfBot Community đặt chúng tự động và cách chỉnh chúng."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "beginner"
estimated_time: "6 minutes"
lang: "vi"
translation_of: "docs/take-profit-stop-loss"
next_guide: "/vi/docs/dca-strategy"
previous_guide: "/vi/docs/automated-trading-workflow"
related_guides: ["/docs/risk-controls", "/docs/smart-terminal", "/vi/docs/automated-trading-workflow"]
keywords: [
  "take profit stop loss",
  "lệnh dừng lỗ bot giao dịch",
  "lệnh chốt lời",
  "tp sl trading bot",
  "stop loss bot giao dịch"
]
sitemap_priority: 0.80
---

# Take-Profit và Stop-Loss

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc19** · Cập nhật lần cuối: 2026-08-14

## Hướng dẫn này dành cho ai

- **Nếu bạn muốn bảo vệ mọi giao dịch mà không phải dán mắt vào màn hình** — bài
  này giải thích hai lệnh làm nhiệm vụ bảo vệ đó, và cách WolfBot gắn chúng vào
  giao dịch của bạn.
- **Nếu bạn có chút am hiểu kỹ thuật** — bạn sẽ thấy TP/SL được suy ra từ các
  thiết lập rủi ro của bạn (phần trăm lợi nhuận và thua lỗ) và chỗ để ghi đè chúng.

## Hai lệnh, bằng ngôn ngữ đơn giản

Bản thân một giao dịch không có kế hoạch thoát lệnh. Hai lệnh này tạo ra kế hoạch đó:

| Lệnh | Nó làm gì | Vì sao nó quan trọng |
|---|---|---|
| **Stop-loss (SL)** | Tự động đóng vị thế nếu giá đi ngược lại bạn một mức định sẵn | Giới hạn số tiền bạn có thể mất trong bất kỳ giao dịch đơn lẻ nào |
| **Take-profit (TP)** | Tự động đóng vị thế khi giá chạm mục tiêu của bạn | Chốt lời thay vì hi vọng thêm rồi trả lại lợi nhuận |

Thiếu chúng, "ngồi canh vị thế" là chiến lược thoát lệnh duy nhất — và không ai
canh từng giây, nhất là khi cùng lúc phải trông chừng cả thị trường crypto lẫn MT5.

## WolfBot Community xử lý TP/SL như thế nào

WolfBot gắn TP/SL **tự động** vào mọi giao dịch bạn đặt qua
[Smart Terminal](/docs/smart-terminal), và nó suy ra các mức giá từ thiết lập rủi ro của bạn:

- **Stop-loss** — được đặt từ mức chấp nhận thua lỗ bạn cấu hình, nên một giao
  dịch chỉ có thể mất một khoản có giới hạn
- **Take-profit** — được đặt từ tỷ lệ lợi nhuận của bạn, nên lệnh thắng được chốt
  tại mục tiêu thay vì để ngỏ

Bạn vẫn có thể chỉnh từng mức từ bảng vị thế sau đó, nhưng mặc định là "đã có
stop-loss" — chứ không phải "bạn quên thêm nó".

> 🛡️ Bộ máy rủi ro của WolfBot coi một vị thế thiếu stop-loss là một vấn đề,
> không phải một lựa chọn: terminal đảm bảo mọi vị thế đều có stop-loss (có thể
> cấu hình, nhưng mặc định là bật).

## Cách nghĩ về các con số

Hai phần trăm quan trọng là **mức lỗ trên mỗi giao dịch** và **mức lời trên mỗi
giao dịch**:

```text
Rủi ro 1.5% để kiếm 3%   →   tỷ lệ rủi ro/lợi nhuận 1:2
```

Tỷ lệ 1:2 nghĩa là bạn chỉ cần đúng hơn một phần ba số lần là hòa vốn, vì lệnh
thắng lớn gấp đôi lệnh thua. Đây là lý do TP/SL không chỉ là sự an toàn — chúng
là nền tảng của bất kỳ chiến lược ổn định nào.

## Chỉnh TP/SL trong WolfBot

1. Đặt mức chấp nhận thua lỗ cơ bản trên trang **Risk** (cái này nuôi stop-loss)
2. Đặt mục tiêu lợi nhuận (cái này nuôi take-profit)
3. Đặt một lệnh trong **Smart Terminal** — TP/SL được gắn tự động
4. Tinh chỉnh một vị thế cụ thể từ bảng vị thế nếu cần

> Với bot tự động, logic TP/SL vẫn áp dụng y hệt: một bot không thể vào một lệnh
> vi phạm giới hạn bạn đã cấu hình, và các lệnh thoát của nó tôn trọng cùng hành
> vi take-profit/stop-loss đó.

## Những sai lầm phổ biến

| Sai lầm | Cách khắc phục |
|---|---|
| Dời stop-loss ra xa hơn "để chừa chỗ cho nó" | Điều đó làm tăng rủi ro giữa chừng — hãy quyết định rủi ro *trước* khi vào lệnh, rồi để nguyên |
| Không đặt take-profit, hi vọng một cú thắng lớn | Hãy chốt lời tại mục tiêu; bạn luôn có thể vào lại |
| Mỗi thị trường một quy tắc TP/SL khác nhau | Dùng một bộ máy rủi ro để crypto và MT5 hành xử giống nhau |
| Tắt stop-loss bắt buộc | Giữ nó bật — đó là vòng bảo vệ quan trọng nhất |

## Bước tiếp theo

> **[Trung bình giá (DCA) — một cách khác để vào một vị thế →](/vi/docs/dca-strategy)**
