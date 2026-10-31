---
title: "Trạng thái WolfBot Community"
description: "Trạng thái hiện tại của WolfBot Community — thị trường được hỗ trợ, khả dụng nền tảng, vấn đề đã biết, và lộ trình."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-28"
category: "status"
difficulty: "beginner"
lang: "vi"
translation_of: "docs/community-status"
sitemap_priority: 0.60
---

# Trạng thái Community

**Cập nhật lần cuối:** 2026-10-28

## Trạng thái nền tảng

| Thành phần | Trạng thái | Chi tiết |
|---|---|---|
| Website (community.wolfbot.io) | 🟢 Trực tuyến | Next.js 14, Cloudflare Pages |
| Kho GitHub | 🟢 Hoạt động | github.com/wolfbot-io/wolfbot-community |
| Bộ cài Linux | 🟢 Ổn định | Ubuntu 22.04+, Debian 12, .deb, v0.1.0-beta.16 |
| Bộ cài Windows | 🟡 Khả dụng (v0.1.0-beta.15) | `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe`; chưa ký code nên Windows SmartScreen hiện cảnh báo nhà phát hành không xác định |
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

- **Bản phát hành công khai mới nhất:** v0.1.0-beta.16 (Linux)
- **Kênh:** phát hành công khai
- **Ngày phát hành:** 2026-10-28
- **Ghi chú phát hành:** [v0.1.0-beta.16](/vi/releases/0.1.0-beta.16)
- **Windows:** v0.1.0-beta.15 là trình cài Windows hiện hành (cũng đính kèm trong v0.1.0-beta.16) — xem [ghi chú phát hành v0.1.0-beta.15](/vi/releases/0.1.0-beta.15)

## Vấn đề đã biết

| Vấn đề | Trạng thái | Cách thay thế |
|---|---|---|
| Windows: kết nối dữ liệu thị trường không kết nối lại được (ghi nhận trên v0.1.0-beta.10) | 🟡 Chưa kiểm chứng lại trên v0.1.0-beta.15 | Đặt lệnh, TP/SL và risk guard không bị ảnh hưởng; nếu thấy cảnh báo kết nối lại lặp lại trong log, hãy báo qua GitHub Issues |
| Chưa có ứng dụng di động | ℹ️ Không có kế hoạch | Dùng trình duyệt trên di động |

Lỗi đã biết của v0.1.0-beta.13 về việc hỏng dữ liệu khi cài đè MT5 đã được sửa kể từ v0.1.0-beta.14, v0.1.0-beta.15 đã sửa lỗi mất lịch sử đường cong lợi nhuận khi đổi tên tài khoản, và v0.1.0-beta.16 sửa lỗi KuCoin UTA có thể hiện thiếu TP/SL cùng cải thiện độ ổn định báo cáo ROI hằng ngày của Bitget; không mục nào trong số này còn nằm trong danh sách trên.

## Lộ trình

| Mốc | Mục tiêu |
|---|---|
| v0.9.0 — Release Candidate đầu tiên | Q3 2026 |
| v1.0.0 — Phát hành ổn định | Q4 2026 |
| Hỗ trợ thêm broker | Đang tiếp tục |

## Lịch sử sự cố

Chưa có sự cố nào được báo cáo. Trang này sẽ được cập nhật nếu có gián đoạn dịch vụ.

---

*Trang trạng thái cập nhật lần cuối: 2026-10-28*
