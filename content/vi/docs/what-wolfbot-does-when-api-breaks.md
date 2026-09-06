---
title: "WolfBot làm gì khi API sàn gặp sự cố"
description: "API ngừng, webhook thử lại và rate limit siết. Một tour dễ hiểu về hành vi fail-safe của WolfBot và cách bạn tự kiểm chứng."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "intermediate"
estimated_time: "7 minutes"
lang: "vi"
translation_of: "docs/what-wolfbot-does-when-api-breaks"
next_guide: "/vi/docs/error-codes"
previous_guide: "/vi/docs/rate-limits-retries-duplicate-orders"
related_guides: ["/vi/docs/error-codes", "/vi/docs/smart-execution-explained", "/vi/docs/troubleshooting", "/vi/docs/reading-bot-logs-like-an-operator"]
keywords: ["sàn api down bot giao dịch", "bot fail safe", "webhook mất kết nối", "xử lý lỗi api bot", "WolfBot độ tin cậy"]
sitemap_priority: 0.7
---

# WolfBot làm gì khi API sàn gặp sự cố

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn lo ngày API sàn chậm hoặc ngừng trong lúc bot live.
- Bạn muốn biết một nền tảng xây tốt làm gì trong khoảnh khắc đó — và tự kiểm
  chứng trên máy mình trước khi tin nó với tiền thật.

## Sự cố là vấn đề "khi nào", không phải "nếu"

API sàn throttle, timeout và đôi khi ngừng để bảo trì. Webhook thử lại. Máy bạn
mất mạng một phút. Bot giao dịch giả định kết nối hoàn hảo không phải là bot;
nó là tai nạn đang chờ xảy ra.

## Checklist fail-safe

Một nền tảng đáng tin cậy hành xử dự đoán được trong từng tình huống:

```text
1. Request timeout      -> ghi lại, kiểm trạng thái sàn, không mù quáng gửi lại.
2. Chạm rate limit      -> back off và xếp hàng, coi là lưu lượng bình thường.
3. Webhook gửi hai lần  -> chống trùng -> đúng một lệnh.
4. Không đặt được lệnh  -> hiện lỗi rõ ràng; không bao giờ bịa ra lệnh khớp.
5. Vị thế không đóng được -> giữ ý định TP/SL hiện hữu và thử lại an toàn.
6. Kết nối phục hồi     -> đối soát trạng thái, rồi tiếp tục chu kỳ bình thường.
```

Đường thực thi WolfBot theo hình dạng này: broker adapter nói chuyện với từng
sàn qua một đường chung nhận biết rate limit; retry kiểm chứng trạng thái trước
khi gửi lại; và guard rủi ro vẫn nằm trên đó nên trục trặc kết nối không thể âm
thầm bỏ qua cooldown hay quy tắc drawdown.

## Điều KHÔNG được xảy ra

Điều quan trọng tương đương là những gì nền tảng tốt từ chối làm:

```text
- không bịa lệnh khớp không có thật,
- không gửi đúp vì lần gọi đầu chậm,
- không để chu kỳ chiến lược "quên" một vị thế đang mở,
- không bỏ mặc stop-loss trong lúc reconnect.
```

Nếu thấy nền tảng đoán thay vì kiểm tra, đó là cờ đỏ — xem
[rate limit, retry và lệnh trùng](/vi/docs/rate-limits-retries-duplicate-orders)
để hiểu vì sao "kiểm trước khi thử lại" quan trọng vậy.

## Cách tự test (không cần tiền thật)

Độ tin cậy thì test được. Trước khi live, chạy ba bài tập trong simulation/demo:

```text
1. Gửi cùng webhook hai lần -> kỳ vọng đúng một lệnh.
2. Ngắt kết nối máy giữa hành động -> kết nối lại, xác nhận bot đối soát mà
   không tạo lệnh trùng.
3. Chặn endpoint sàn (hoặc dùng quyền sai) -> xác nhận lỗi rõ và chiến lược
   dừng sạch, không âm thầm.
```

Mỗi bài tập đều nằm trong [checklist trước khi lên live](/vi/docs/pre-launch-checklist-before-going-live).
Nếu bài nào tạo hai lệnh, lệnh khớp ma hay khoảng lặng, hãy sửa trước khi có
tiền tham gia.

## Khi API ngừng, quy tắc rủi ro là người phản ứng đầu tiên

Mất kết nối là lúc *rủi ro* quan trọng hơn *lệnh vào*. Một nền tảng giữ guard
danh mục và ý định TP/SL hoạt động trong lúc reconnect đang bảo vệ bạn đúng khi
thị trường làm điều bạn không thấy được. Đó là tính chất nên tìm ở mọi bot — và
là lý do guard WolfBot nằm ở cấp nền tảng, không bên trong một lời gọi lệnh.

## Kết luận

Hỏi mọi nền tảng bot: "Khi API chậm thì sao?" Nếu câu trả lời chỉ là "chúng tôi
thử lại", hãy hỏi tiếp. Câu trả lời đúng là một chuỗi — ghi lại, kiểm tra, chống
trùng, đối soát, bảo vệ — và nó phải thấy được trong log để bạn tự kiểm chứng.
WolfBot được thiết kế để chuỗi đó tồn tại, được log, và test được trước lệnh
thật đầu tiên của bạn.
