---
title: "Cách giảm Drawdown trong giao dịch"
description: "Drawdown là không thể tránh — nhưng độ sâu của nó nằm trong tầm kiểm soát của bạn. Hướng dẫn thực tế để hạn chế drawdown bằng giới hạn kích thước vị thế, giới hạn thua lỗ và cooldown trong WolfBot Community."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "beginner"
estimated_time: "7 minutes"
lang: "vi"
translation_of: "docs/how-to-reduce-drawdown"
next_guide: "/docs/why-verifiable-results-matter"
previous_guide: "/vi/docs/why-bots-fail-risk-management"
related_guides: ["/docs/risk-controls", "/vi/docs/why-bots-fail-risk-management", "/docs/simulation"]
keywords: [
  "cách giảm drawdown",
  "giảm drawdown giao dịch",
  "bảo vệ drawdown",
  "drawdown crypto",
  "drawdown bot giao dịch"
]
sitemap_priority: 0.75
---

# Cách giảm Drawdown trong giao dịch

**Đã kiểm thử với WolfBot Community v0.1.0-beta.2** · Cập nhật lần cuối: 2026-08-14

## Hướng dẫn này dành cho ai

- **Nếu bạn muốn tài khoản sống sót qua các chuỗi thua** — bài này cho bạn một bộ
  số copy-paste giữ drawdown nông, không cần lý thuyết gì.
- **Nếu bạn thích biết *vì sao*** — mỗi phần giải thích cơ chế (vì sao vị thế nhỏ
  hơn, một ngưỡng tạm dừng, và một cooldown mỗi thứ làm một việc khác nhau) để bạn
  có thể tự chỉnh các giá trị thay vì chỉ copy.

## Drawdown không phải kẻ thù — drawdown mất kiểm soát mới là

Mọi tài khoản giao dịch đều có drawdown. Thị trường đi ngược lại vị thế; đó là bình
thường. Thứ phân biệt một tài khoản sống sót với một tài khoản "cháy" không phải là
drawdown có xảy ra hay không, mà là nó được phép đi sâu bao nhiêu trước khi có thứ
gì đó chặn nó lại.

Bạn không thể loại bỏ drawdown. Bạn *có thể* đặt một cái sàn bên dưới nó. Đây là
cách, dùng chính các đòn bẩy có sẵn trong [Risk Controls](/docs/risk-controls) của
WolfBot Community.

## 1. Thu nhỏ vị thế, không thu nhỏ tham vọng

Yếu tố lớn nhất quyết định độ sâu drawdown là kích thước vị thế. Nếu một lệnh có
thể khiến bạn mất 20% tài khoản, thì drawdown 20% luôn chỉ cách bạn một lệnh tệ.

Vị thế tối đa 2–5% số dư nghĩa là ngay cả lệnh xấu nhất cũng sống sót được, và một
chuỗi thua vài lệnh liên tiếp vẫn để lại cho bạn phần lớn vốn nguyên vẹn.

**Trong WolfBot Community:** đặt **Max position % of balance** và **Total exposure
%** trên trang Risk. Các trần này áp dụng chung cho cả vị thế crypto và MT5, nên bạn
không thể đòn bẩy quá mức ở thị trường này để lách giới hạn ở thị trường khác.

## 2. Đặt giới hạn thua lỗ cứng — và để nó tạm dừng giao dịch

Thiết lập rủi ro giá trị nhất bạn từng cấu hình là một bộ bảo vệ drawdown: một
ngưỡng mà tại đó giao dịch tự động tạm dừng. Nó biến "tôi hi vọng nó ngừng thua"
thành "nó đã ngừng thua, và giờ tôi quyết định."

- **Giới hạn thua lỗ hàng ngày** — dừng giao dịch trong ngày sau một mức lỗ định sẵn
  (5–10% là phổ biến)
- **Giới hạn drawdown tổng** — yêu cầu bật lại thủ công sau một mức lỗ sâu hơn

Ý nghĩa của việc tạm dừng không phải là trừng phạt. Nó để phá vòng lặp nhồi lỗ: khi
giao dịch dừng, lỗ ngừng chồng chất, và bạn lấy lại quyền quyết định thay vì ngồi
nhìn một con bot "đào hố".

## 3. Thêm cooldown sau khi thua

Một lệnh thua là một tín hiệu, không phải lệnh vào lại ngay lập tức. Một bộ đếm
cooldown chờ lâu hơn sau một lệnh thua ngăn bot đuổi theo một chuyển động đã đi qua.
Đó là phiên bản thuật toán của việc rời mắt khỏi màn hình.

**Trong WolfBot Community:** các thiết lập cooldown cho phép bạn đặt khoảng nghỉ tối
thiểu giữa các lệnh *và* một khoảng chờ dài hơn, riêng biệt sau một lệnh thua.

## 4. Giới hạn số lượng giao dịch

Nhiều lệnh hơn không có nghĩa là nhiều lợi nhuận hơn — thường là nhiều phí hơn và
nhiều cơ hội sai hơn. Một giới hạn lệnh hàng ngày giữ khối lượng trong phạm vi mà
chiến lược của bạn đã thực sự được kiểm thử, giữ drawdown có thể dự đoán được.

## Một mục tiêu thực tế trông như thế nào

Nếu bạn mới bắt đầu, hãy thử bộ số này làm đường cơ sở trên tài khoản Demo trước:

```
Vị thế tối đa:     2% số dư
Tổng phơi bày:     20%
Giới hạn lỗ/ngày:  5%
Cooldown:          120 giây
Số lệnh tối đa/ngày: 10
```

Chạy nó trong [Simulation](/docs/simulation) — dữ liệu thị trường thật, tiền ảo — và
quan sát cách cùng một chiến lược hành xử khi có vòng bảo vệ so với khi không có. Bạn
thường sẽ thấy cùng những lệnh thắng và những cú sụt nông hơn nhiều.

## Điểm mấu chốt

Kiểm soát drawdown không phải một thiết lập đơn lẻ; nó là một chồng nhỏ các thiết
lập phối hợp với nhau: vị thế nhỏ hơn, một giới hạn lỗ cứng tạm dừng giao dịch, một
cooldown sau khi thua, và một trần khối lượng. WolfBot Community gộp cả bốn vào một
trang Risk để chúng áp dụng cùng nhau, trên mọi thị trường bạn giao dịch.

## Bước tiếp theo

> **[Vì sao kết quả có thể kiểm chứng lại quan trọng →](/docs/why-verifiable-results-matter)**
