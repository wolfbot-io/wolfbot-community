---
title: "Trung bình giá (DCA) trong WolfBot Community"
description: "Trung bình giá (DCA) chia một vị thế thành nhiều lần mua nhỏ thay vì một cú mua lớn. Đây là cách WolfBot Community hỗ trợ DCA và cách nó nằm trong cùng bộ máy rủi ro như mọi lệnh khác."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "6 minutes"
lang: "vi"
translation_of: "docs/dca-strategy"
next_guide: "/docs/risk-controls"
previous_guide: "/vi/docs/take-profit-stop-loss"
related_guides: ["/vi/docs/take-profit-stop-loss", "/docs/risk-controls", "/brokers/bybit"]
keywords: [
  "trung bình giá",
  "dca bot giao dịch",
  "dca bot crypto",
  "wolfbot dca",
  "bot bình quân giá xuống"
]
sitemap_priority: 0.75
---

# Trung bình giá (DCA)

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-14

## Hướng dẫn này dành cho ai

- **Nếu bạn muốn một cách vào lệnh nhẹ nhàng hơn** — bài này giải thích DCA bằng
  ngôn ngữ đơn giản: nó là gì, khi nào nó giúp ích, và WolfBot chạy nó như thế nào.
- **Nếu bạn có chút am hiểu kỹ thuật** — bạn sẽ thấy một lệnh vào theo DCA được
  mô hình hóa như một chuỗi các lệnh con (mỗi lệnh có chỉ số riêng) bên trong cùng
  một luồng khớp lệnh, nên giới hạn rủi ro vẫn áp dụng cho *toàn bộ* vị thế, chứ
  không chỉ lát đầu tiên.

## DCA là gì

Trung bình giá nghĩa là mua một vị thế thành **nhiều phần nhỏ theo thời gian
hoặc theo các mức giá**, thay vì một cục lớn tại một mức giá duy nhất.

```text
Vào lệnh một lần:     mua 100% ngay lập tức  →  một mức giá quyết định tất cả
Vào lệnh theo DCA:    mua 25% × 4            →  bình quân của nhiều mức giá
```

Nếu giá tiếp tục giảm sau lát đầu tiên, các lát sau mua ở mức thấp hơn, kéo giá
vào trung bình của bạn xuống. Bạn từ bỏ một phần lợi nhuận nếu giá không bao giờ
giảm, nhưng bạn loại bỏ được bài toán "tôi đã căn đúng đỉnh chưa?".

## WolfBot Community hỗ trợ DCA như thế nào

DCA là một trong các loại lệnh WolfBot hỗ trợ, bên cạnh lệnh thị trường, lệnh giới
hạn và lệnh TP/SL. Một lệnh vào theo DCA được xử lý như một tập hợp các lệnh con
nhỏ thay vì một lần khớp lớn — mỗi lát được theo dõi riêng trong lớp khớp lệnh.

> 🔎 **Cho độc giả kỹ thuật:** mỗi lệnh con DCA mang `dca_index` riêng (`1` cho lát
> đầu tiên, tăng dần từ đó), nên trình quản lý khớp lệnh biết nó đang khớp lát nào
> và có thể coi cả chuỗi là một vị thế logic duy nhất cho mục đích rủi ro.

## Vì sao nó vẫn tôn trọng giới hạn rủi ro của bạn

DCA **không** có nghĩa là "cứ mua thêm không trần". Toàn bộ chuỗi DCA vẫn chịu
cùng các [kiểm soát rủi ro](/docs/risk-controls) như bất kỳ vị thế nào khác:

- **Tổng kích thước vị thế** trên tất cả các lát vẫn nằm trong giới hạn phơi bày của bạn
- **Bảo vệ drawdown** vẫn tạm dừng giao dịch nếu vị thế kết hợp thua quá nhiều
- **TP/SL** vẫn áp dụng cho vị thế tổng thể, chứ không phải từng lát riêng lẻ

Đây là phần quan trọng: DCA chia nhỏ *khi nào* bạn mua, chứ không phải *tổng rủi
ro* bạn chấp nhận.

## Khi nào DCA hợp lý

- Bạn tin vào hướng đi dài hạn nhưng không chắc về thời điểm ngắn hạn
- Bạn đang vào một thị trường biến động mạnh, khó gọi đúng giá vào lệnh
- Bạn muốn giảm sự tiếc nuối của một lần vào lệnh sai thời điểm

## Những sai lầm phổ biến

| Sai lầm | Cách khắc phục |
|---|---|
| Coi DCA là "mua đáy không giới hạn" | Tổng vị thế vẫn bị giới hạn phơi bày chặn lại — hãy đặt nó trước |
| Không có stop-loss cho vị thế DCA | Toàn bộ vị thế vẫn cần stop-loss, như bất kỳ giao dịch nào khác |
| Thêm lát mà không xem tổng phơi bày | Mỗi lát cộng thêm vào cùng một vị thế; hãy kiểm tra kích thước kết hợp |

## Bước tiếp theo

> **[Cấu hình các kiểm soát rủi ro giữ DCA (và mọi thứ khác) an toàn →](/docs/risk-controls)**
