---
title: "Trước khi giao dịch thật: checklist ra mắt chiến lược tự động đầu tiên"
description: "Checklist thực tế để chuyển từ chạy thử sang giao dịch thật bằng bot tự lưu trữ: quyền API, giới hạn rủi ro, kích thước lệnh và theo dõi."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "live-trading"
difficulty: "beginner"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/pre-launch-checklist-before-going-live"
next_guide: "/vi/docs/risk-controls"
previous_guide: "/vi/docs/simulation"
related_guides: ["/vi/docs/simulation", "/vi/docs/risk-controls", "/vi/brokers/api-key-guide"]
keywords: [
  "checklist trước khi giao dịch thật bằng bot",
  "từ chạy thử sang giao dịch thật",
  "chiến lược tự động đầu tiên",
  "bot giao dịch tự lưu trữ an toàn",
  "cách bật bot giao dịch an toàn"
]
sitemap_priority: 0.7
---

# Trước khi giao dịch thật: checklist ra mắt chiến lược tự động đầu tiên

**Đã kiểm thử với WolfBot Community v0.1.0-beta.10** · Cập nhật lần cuối: 2026-09-06

## Hướng dẫn này dành cho ai

- Bạn đã hoàn tất [hướng dẫn chạy thử](/vi/docs/simulation), chiến lược hoạt
  động đúng ở chế độ demo, và giờ muốn để nó giao dịch một tài khoản thật nhỏ.
- Bạn muốn một checklist lặp lại được để "lên sàn thật" là một bước kiểm soát,
  không phải một cú nhảy vào bóng tối.

## Bản 30 giây

Một lần ra mắt an toàn có năm phần:

```text
1. Thu hẹp quyền        -> API key chỉ giao dịch, tắt quyền rút tiền
2. Bắt đầu thật nhỏ     -> kích thước nhỏ nhất sàn và bot cho phép
3. Đặt giới hạn rủi ro  -> stop-loss toàn cục / bộ bảo vệ drawdown
4. Giới hạn rủi ro phát sinh -> bật cooldown và chống lệnh trùng
5. Theo dõi vòng đầu tiên   -> kiểm tra log và lệnh khớp trong 24-48h
```

## 1. Kiểm tra quyền của API key

Kết nối sàn bằng **key chỉ cho phép giao dịch**: bot đặt và quản lý lệnh được
nhưng không bao giờ rút được tiền. [Hướng dẫn API key](/vi/brokers/api-key-guide)
chỉ rõ từng bước theo từng sàn. Sau khi kết nối, kiểm tra lại quyền rút tiền
đã thật sự tắt — xem
[vì sao nên tắt quyền rút tiền](/vi/docs/why-withdrawal-permissions-should-stay-disabled).

## 2. Bắt đầu nhỏ hơn bạn nghĩ

Lệnh thật đầu tiên không phải để kiếm lời; nó để xác nhận toàn bộ đường đi
chạy đúng: tín hiệu → bot → sàn → lệnh khớp → ghi nhận. Hãy dùng kích thước
nhỏ nhất còn có ý nghĩa với thị trường của bạn. Nếu lệnh khớp hoặc giá khác
với lúc chạy thử, vị thế nhỏ sẽ giúp bài học rẻ tiền.

## 3. Đặt giới hạn rủi ro trước khi bật chiến lược

Cấu hình các kiểm soát rủi ro thuộc chiến lược này *trước khi* nó được đặt
lệnh thật:

- kế hoạch **stop-loss / take-profit** khớp với lúc chạy thử,
- **bộ bảo vệ drawdown** dừng bot khi mọi thứ đi sai,
- **cooldown** hợp lý để một tín hiệu xấu lặp lại không bắn liên tục.

Đọc [risk-controls](/vi/docs/risk-controls) và
[khác biệt giữa rủi ro hợp nhất và rủi ro từng bot](/vi/docs/how-unified-risk-differs-from-per-bot-risk)
nếu bạn dự định chạy nhiều chiến lược sau này.

## 4. Quyết định bot được làm gì khi có gì đó sai

Một quy trình tự động tốt cũng là quy trình *xử lý lỗi*. Trước khi lên sàn
thật, hãy trả lời:

- Nếu API sàn tạm ngừng thì sao?
- Nếu một webhook hoặc tín hiệu ngoài được gửi hai lần thì sao?
- Nếu một vị thế không đóng được ở mức giá mong đợi thì sao?

Nếu dùng TradingView hoặc tín hiệu ngoài, hãy rà soát cài đặt chống trùng trong
[hướng dẫn TradingView](/vi/docs/tradingview) và
[tín hiệu ngoài](/vi/docs/external-signals) để một cảnh báo không thành hai lệnh.

## 5. Theo dõi các chu kỳ thật đầu tiên

Lên kế hoạch xem log, lệnh mở và màn hình hiệu quả trong một hai ngày đầu. Bạn
đang kiểm chứng bốn điều:

```text
- tín hiệu đến và tạo lệnh đúng một lần,
- lệnh khớp và phí khớp với bản ghi trên sàn,
- stop-loss / TP hoạt động như lúc chạy thử,
- bot phục hồi sạch sau khi restart hoặc lỗi API.
```

Khi cả bốn điều ổn định, bạn có thể tăng kích thước từ từ và thêm chiến lược
mới — mỗi lần đều lặp lại checklist này thay vì bỏ qua nó.
