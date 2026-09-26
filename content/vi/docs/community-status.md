---
title: "Trạng thái WolfBot Community"
description: "Trạng thái hiện tại của WolfBot Community — thị trường được hỗ trợ, khả dụng nền tảng, vấn đề đã biết, và lộ trình."
tested_version: "0.1.0-beta.11"
last_updated: "2026-09-25"
category: "status"
difficulty: "beginner"
lang: "vi"
translation_of: "docs/community-status"
sitemap_priority: 0.60
---

# Trạng thái Community

**Cập nhật lần cuối:** 2026-09-25

## Trạng thái nền tảng

| Thành phần | Trạng thái | Chi tiết |
|---|---|---|
| Website (community.wolfbot.io) | 🟢 Trực tuyến | Next.js 14, Cloudflare Pages |
| Kho GitHub | 🟢 Hoạt động | github.com/wolfbot-io/wolfbot-community |
| Bộ cài Linux | 🟢 Ổn định | Ubuntu 22.04+, Debian 12, .deb, v0.1.0-beta.11 |
| Bộ cài Windows | 🟡 Bản build ban đầu (v0.1.0-beta.10) | v0.1.0-beta.11 không có bản Windows mới; lỗi kết nối lại đã biết vẫn còn, đang chờ một bản phát hành trong tương lai (chưa ký code) |
| MT5 Bridge (Linux) | 🟢 Ổn định | Container terminal tích hợp, truy cập VNC qua trình duyệt |

## Thị trường được hỗ trợ

### Sàn crypto
| Sàn | Trạng thái | Spot | Futures | Demo |
|---|---|---|---|---|
| Binance | 🟢 Ổn định | ✅ | ✅ | ✅ |
| Bybit | 🟢 Ổn định | ✅ | ✅ | ✅ |
| BingX | 🟢 Ổn định | ✅ | ✅ | ✅ |
| KuCoin | 🟢 Ổn định | ✅ | ✅ | ✅ |
| Bitget | 🟢 Ổn định | ✅ | ✅ | ✅ |

### Thị trường truyền thống qua MT5
| Thị trường | Trạng thái | Công cụ |
|---|---|---|
| Forex | 🟢 Ổn định | EUR/USD, GBP/USD, USD/JPY, v.v. |
| Kim loại | 🟢 Ổn định | Vàng XAU/USD, Bạc XAG/USD, và hơn nữa |
| Chỉ số | 🟢 Ổn định | US30, NAS100, S&P 500 |
| Cổ phiếu/CFD | 🟢 Ổn định | Tùy broker |

> MT5 bridge khả dụng trên **cả Windows và Linux** — chạy native trên Windows, hoặc qua container terminal MT5 tích hợp của WolfBot (truy cập VNC qua trình duyệt) trên Linux.

## Tính năng

| Tính năng | Trạng thái |
|---|---|
| Tài khoản Demo | 🟢 Ổn định |
| Smart Terminal | 🟢 Ổn định |
| Chiến lược tự động | 🟢 Ổn định |
| Kiểm soát rủi ro | 🟢 Ổn định |
| Quản lý danh mục | 🟢 Ổn định |
| Tự cập nhật | 🟢 Ổn định |
| Sao lưu & phục hồi | 🟢 Ổn định |
| Tín hiệu TradingView | 🟢 Ổn định |

## Phiên bản hiện tại

- **Bản phát hành công khai mới nhất:** v0.1.0-beta.11 (Linux)
- **Kênh:** phát hành công khai
- **Ngày phát hành:** 2026-09-25
- **Ghi chú phát hành:** [v0.1.0-beta.11](/vi/releases/0.1.0-beta.11)
- **Windows:** v0.1.0-beta.10 vẫn là trình cài Windows hiện hành — xem [ghi chú phát hành v0.1.0-beta.10](/vi/releases/0.1.0-beta.10)

## Vấn đề đã biết

| Vấn đề | Trạng thái | Cách thay thế |
|---|---|---|
| Bản Windows (v0.1.0-beta.10): kết nối dữ liệu thị trường có thể không kết nối lại được | 🟡 Đã sửa xong, chờ một bản phát hành Windows trong tương lai | Đặt lệnh, TP/SL và risk guard không bị ảnh hưởng; bản build đã sửa sẽ thay thế file này trong một bản phát hành tương lai |
| Chưa có ứng dụng di động | ℹ️ Không có kế hoạch | Dùng trình duyệt trên di động |

## Lộ trình

| Mốc | Mục tiêu |
|---|---|
| v0.9.0 — Release Candidate đầu tiên | Q3 2026 |
| v1.0.0 — Phát hành ổn định | Q4 2026 |
| Hỗ trợ thêm broker | Đang tiếp tục |

## Lịch sử sự cố

Chưa có sự cố nào được báo cáo. Trang này sẽ được cập nhật nếu có gián đoạn dịch vụ.

---

*Trang trạng thái cập nhật lần cuối: 2026-09-25*
