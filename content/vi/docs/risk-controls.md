---
title: "Kiểm soát rủi ro WolfBot Community — Hướng dẫn đầy đủ"
description: "Cấu hình kiểm soát rủi ro thống nhất trong WolfBot Community — giới hạn vị thế, bảo vệ drawdown, cooldown, và giới hạn lệnh hàng ngày áp dụng trên tất cả sàn crypto và broker MT5 đã kết nối."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "10 minutes"
lang: "vi"
translation_of: "docs/risk-controls"
next_guide: "/vi/brokers/bybit"
previous_guide: "/vi/docs/smart-terminal"
related_guides: ["/vi/docs/smart-terminal", "/security"]
keywords: ["kiểm soát rủi ro wolfbot", "quản trị rủi ro bot giao dịch", "rủi ro giao dịch crypto", "giới hạn vị thế", "bảo vệ drawdown"]
sitemap_priority: 0.85
---

# Hướng dẫn kiểm soát rủi ro

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc19** · Cập nhật lần cuối: 2026-08-11

## Vì sao kiểm soát rủi ro quan trọng

Kiểm soát rủi ro hoạt động như một tấm lưới an toàn trên toàn bộ môi trường giao dịch của bạn — chúng ngăn giao dịch quá mức, giới hạn thua lỗ, và bảo vệ tài khoản của bạn dù bạn giao dịch crypto trên Binance, futures trên Bybit, hay vàng qua MT5. Cùng các quy tắc rủi ro áp dụng nhất quán dù bạn giao dịch thị trường nào.

> 🛡️ Kiểm soát rủi ro hoạt động giống hệt trên tài khoản Demo và Live. Hãy cấu hình chúng trước khi bạn bắt đầu giao dịch.

## Các lớp kiểm soát rủi ro

WolfBot có bốn lớp bảo vệ rủi ro — chúng áp dụng giống hệt cho mọi thị trường đã kết nối:

| Lớp | Nó làm gì | Ví dụ |
|---|---|---|
| **Kích thước vị thế** | Giới hạn kích thước từng lệnh | Tối đa 5% số dư mỗi lệnh |
| **Bảo vệ drawdown** | Dừng giao dịch sau ngưỡng thua | Tạm dừng nếu lỗ hàng ngày vượt 10% |
| **Cooldown Timer** | Thời gian tối thiểu giữa các lệnh | Ít nhất 60 giây giữa các lệnh |
| **Giới hạn hàng ngày** | Số lệnh tối đa mỗi ngày | Tối đa 20 lệnh mỗi 24 giờ |

---

## 1. Giới hạn kích thước vị thế

Ngăn bất kỳ lệnh đơn lẻ nào rủi ro quá nhiều vốn — áp dụng đều cho các cặp crypto và công cụ MT5.

### Thiết lập

1. Vào **Risk** trong sidebar
2. Tìm **Position Sizing**
3. Cấu hình:

| Thiết lập | Khuyến nghị (Người mới) | Mô tả |
|---|---|---|
| **Max position % of balance** | 2–5% | Kích thước tối đa của một lệnh |
| **Total exposure %** | 20–30% | Tổng của tất cả vị thế |
| **Max leverage** | 1x–3x | Trần đòn bẩy mỗi vị thế |

### Ví dụ

Nếu số dư của bạn là $10,000 và vị thế tối đa là 5%:
- Lệnh đơn tối đa: **$500**
- Tổng tất cả vị thế: **$2,000–$3,000**

---

## 2. Bảo vệ drawdown

Dừng toàn bộ giao dịch khi thua lỗ vượt ngưỡng của bạn.

### Thiết lập

| Thiết lập | Khuyến nghị | Mô tả |
|---|---|---|
| **Daily loss limit** | 5–10% | Dừng giao dịch trong ngày |
| **Weekly loss limit** | 15–20% | Dừng giao dịch trong tuần |
| **Total drawdown limit** | 25–30% | Yêu cầu bật lại thủ công |

### Hành vi

Khi được kích hoạt:
1. Tất cả bot đang hoạt động tạm dừng
2. Lệnh mới bị từ chối
3. Vị thế hiện có vẫn có thể quản lý/đóng
4. Thông báo xuất hiện trong Dashboard

> ℹ️ Bạn có thể đóng vị thế thủ công trong lúc khóa drawdown — chỉ các lệnh mới bị chặn.

---

## 3. Cooldown Timer

Ngăn giao dịch bắn liên tục và các quyết định cảm xúc.

### Thiết lập

| Thiết lập | Khuyến nghị | Mô tả |
|---|---|---|
| **Minimum interval** | 30–120 giây | Thời gian giữa các lần đặt lệnh |
| **After loss cooldown** | 5–15 phút | Chờ thêm sau một lệnh thua |
| **Per-symbol cooldown** | 60 giây | Trì hoãn vào lại cùng symbol |

---

## 4. Giới hạn lệnh hàng ngày

Giới hạn số lệnh mỗi ngày.

| Thiết lập | Khuyến nghị | Mô tả |
|---|---|---|
| **Max trades per day** | 10–20 | Tổng lệnh (tất cả symbol) |
| **Max trades per symbol** | 5 | Lệnh mỗi cặp giao dịch |

Đặt lại lúc nửa đêm UTC.

---

## Bắt đầu nhanh: Hồ sơ rủi ro khuyến nghị

### Người mới (Demo / Live đầu tiên)

```
Vị thế tối đa: 2% số dư
Tổng phơi bày: 20%
Đòn bẩy tối đa: 1x
Giới hạn lỗ/ngày: 5%
Cooldown: 120 giây
Số lệnh tối đa/ngày: 10
```

### Live thận trọng

```
Vị thế tối đa: 3% số dư
Tổng phơi bày: 25%
Đòn bẩy tối đa: 2x
Giới hạn lỗ/ngày: 8%
Cooldown: 60 giây
Số lệnh tối đa/ngày: 15
```

### Có kinh nghiệm

```
Vị thế tối đa: 5% số dư
Tổng phơi bày: 40%
Đòn bẩy tối đa: 5x
Giới hạn lỗ/ngày: 12%
Cooldown: 30 giây
Số lệnh tối đa/ngày: 30
```

---

## Khẩn cấp: Dừng toàn cục

Nếu bạn cần dừng mọi thứ ngay lập tức:

1. Vào **Risk** trong sidebar
2. Bấm **Emergency Stop**
3. Việc này:
   - Tạm dừng tất cả bot
   - Hủy tất cả lệnh đang chờ
   - Từ chối lệnh mới
   - KHÔNG đóng vị thế hiện có (bạn quyết định)

---

## Giám sát

Dashboard hiển thị trạng thái rủi ro của bạn trong nháy mắt:

- **Xanh lá** — Tất cả trong giới hạn
- **Vàng** — Sắp chạm giới hạn
- **Đỏ** — Một giới hạn đã bị kích hoạt

---

## Câu hỏi thường gặp

**Q: Tôi có thể ghi đè kiểm soát rủi ro cho một lệnh cụ thể không?**
Kiểm soát rủi ro được thực thi toàn cục. Bạn có thể điều chỉnh tham số trên trang Risk trước khi giao dịch.

**Q: Điều gì xảy ra nếu số dư của tôi thay đổi?**
Giới hạn kích thước vị thế tự điều chỉnh theo số dư hiện tại của bạn.

**Q: Kiểm soát rủi ro có hoạt động với bot tự động không?**
Có — cả bốn lớp áp dụng cho cả giao dịch thủ công và tự động, trên mọi thị trường đã kết nối.

**Q: Tôi có thể tắt kiểm soát rủi ro không?**
Kiểm soát rủi ro có thể điều chỉnh nhưng chúng tôi khuyến nghị mạnh giữ chúng hoạt động. Chúng là tấm lưới an toàn chính của bạn.

---

## Đọc thêm

- [Vì sao hầu hết bot giao dịch thất bại trong quản trị rủi ro →](/vi/docs/why-bots-fail-risk-management) — bốn cách bot mất tiền, và cách từng cái được ngăn chặn
- [Cách giảm Drawdown trong giao dịch →](/vi/docs/how-to-reduce-drawdown) — hướng dẫn thực tế về các thiết lập chính xác ở trên
- [Cách đọc hiệu suất giao dịch một cách có trách nhiệm →](/vi/docs/how-to-read-trading-performance) — đánh giá kết quả bằng drawdown, không phải lợi nhuận giật tít

---

## Bước tiếp theo

> **[Kết nối một broker →](/vi/brokers/bybit)**
