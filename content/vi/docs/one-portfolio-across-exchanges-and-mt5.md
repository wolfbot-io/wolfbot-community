---
title: "Một danh mục xuyên các sàn và MT5 — Thấy mọi vị thế trong một góc nhìn duy nhất"
description: "Thay vì đăng nhập từng sàn, toàn bộ danh mục của bạn — crypto và MT5 cùng nhau — hiển thị trong một góc nhìn tự lưu trữ duy nhất. Đây là thứ khả năng hiển thị danh mục thống nhất làm được và vì sao nó thay đổi cách bạn quản lý rủi ro."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
lang: "vi"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
next_guide: "/vi/docs/risk-controls"
related_guides: ["/vi/docs/risk-controls", "/vi/docs/crypto-and-mt5-one-platform", "/vi/docs/how-unified-risk-differs-from-per-bot-risk", "/vi/brokers/mt5"]
keywords: [
  "danh mục thống nhất giao dịch",
  "một danh mục nhiều sàn",
  "góc nhìn danh mục crypto mt5",
  "danh mục xuyên các sàn",
  "góc nhìn danh mục duy nhất bot",
  "wolfbot dashboard danh mục"
]
sitemap_priority: 0.8
---

# Một danh mục xuyên các sàn và MT5

**Đã kiểm thử với WolfBot Community v0.1.0-beta.9** · Cập nhật lần cuối: 2026-08-16

## Hướng dẫn này dành cho ai

- **Nếu bạn giữ vị thế trên nhiều hơn một sàn và trong MT5, và mệt mỏi với việc cộng nhẩm chúng trong đầu hoặc trên bảng tính.**
- **Nếu bạn am hiểu kỹ thuật** — bài này giải thích cách các vị thế từ những sàn hoàn toàn khác nhau được dung hòa thành một danh mục có thể đọc được.

## Vấn đề danh mục phân tán

Càng giao dịch nhiều thị trường, "danh mục" của bạn càng trải rộng qua nhiều màn hình đăng nhập: một vị thế futures trên một sàn, spot trên sàn khác, vàng và FX ở bên MT5. Không gì cộng lại trừ khi bạn làm tay, và khi bạn làm xong thì các con số đã di chuyển.

WolfBot Community hiển thị cho bạn **một danh mục** — mọi tài khoản đã kết nối, crypto và MT5, trong một dashboard tự lưu trữ duy nhất.

## Khả năng hiển thị thống nhất mang lại gì

- **Tổng exposure nhìn thấy ngay.** Thấy toàn bộ rủi ro thay vì rải rác qua các tab.
- **Symbol nhất quán.** Cùng một instrument hiện thành một dòng dù nó đến từ MT5 (`XAUUSD`) hay một cặp crypto — [ánh xạ symbol](/vi/docs/mt5-symbol-mapping) dung hòa tên.
- **Một con số cấp danh mục.** Margin, drawdown và exposure được tính cùng nhau, nuôi [bộ máy rủi ro thống nhất](/vi/docs/how-unified-risk-differs-from-per-bot-risk) thay vì một tập rời rạc các con số theo bot.

## Cách nó hoạt động

Bên dưới, Binance và MT5 là những hệ thống không liên quan — một REST API futures và một trading terminal Windows. WolfBot kết nối cả hai và trình bày chúng qua một góc nhìn danh mục, phân giải khác biệt symbol/sàn ở giữa. Bạn có một bức tranh gắn kết mà không phải bỏ bất kỳ broker nào.

## Bắt đầu nhỏ

Kết nối một Crypto Demo và một MT5 Demo, mở một vị thế nhỏ trên mỗi cái, và nhìn góc nhìn danh mục — cả hai xuất hiện trong cùng danh sách. Đó là nền tảng để tin vào các con số thống nhất trước khi bạn chạy khối lượng lớn hơn.

## Bước tiếp theo

- [Kiểm soát rủi ro →](/vi/docs/risk-controls)
- [Cách rủi ro thống nhất khác biệt →](/vi/docs/how-unified-risk-differs-from-per-bot-risk)
- [Crypto và MT5 trên một nền tảng →](/vi/docs/crypto-and-mt5-one-platform)

> **[Đọc hướng dẫn Kiểm soát rủi ro →](/vi/docs/risk-controls)**
