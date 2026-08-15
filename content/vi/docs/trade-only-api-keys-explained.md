---
title: "Giải thích API key chỉ cho phép giao dịch — Vì sao bot của bạn không bao giờ nên có thể rút tiền"
description: "Thiết lập quan trọng nhất khi kết nối bất kỳ sàn nào với bot giao dịch: tắt quyền rút tiền. Đây là chính xác những gì một API key chỉ cho phép giao dịch có thể và không thể làm, và vì sao nó quan trọng."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
lang: "vi"
translation_of: "docs/trade-only-api-keys-explained"
next_guide: "/vi/brokers/api-key-guide"
related_guides: ["/vi/brokers/api-key-guide", "/security", "/vi/docs/self-hosted-explained"]
keywords: [
  "api key chỉ cho phép giao dịch",
  "api key tắt rút tiền",
  "kết nối api sàn vào bot có an toàn không",
  "bot giao dịch phi lưu ký",
  "bảo mật api key bot giao dịch"
]
sitemap_priority: 0.75
---

# Giải thích API key chỉ cho phép giao dịch

**Đã kiểm thử với WolfBot Community v0.1.0-p12-ghcr-rc8** · Cập nhật lần cuối: 2026-08-14

## Hướng dẫn này dành cho ai

- **Nếu bạn muốn kết nối một sàn mà không đặt tiền của mình vào rủi ro** —
  phần này chỉ cho bạn quyền duy nhất luôn phải tắt, bằng ngôn ngữ đơn giản,
  để một key bị rò rỉ không bao giờ có thể rút sạch tài khoản của bạn.
- **Nếu bạn rành kỹ thuật** — bạn sẽ có mô hình quyền chính xác (Read/Trade so
  với Withdraw/Transfer) và lớp thứ hai là hạn chế IP.

## Thiết lập quan trọng nhất

Mỗi sàn cho phép bạn tạo một API key với một tập quyền cụ thể gắn vào nó — không phải "toàn bộ tài khoản của bạn," mà một phần hẹp hơn của nó. Khi bạn kết nối một sàn với bất kỳ bot giao dịch nào, kể cả WolfBot, quyết định quan trọng nhất bạn đưa ra là key đó có những quyền gì.

WolfBot chỉ từng cần hai:

- **Read** — xem số dư, lệnh đang mở và vị thế của bạn
- **Trade** — đặt và hủy lệnh

Nó không bao giờ cần, và không bao giờ nên được cấp:

- ❌ **Withdraw** — chuyển tiền ra khỏi sàn
- ❌ **Transfer** — chuyển tiền giữa các tài khoản phụ của sàn hoặc cho người dùng khác

## Điều gì xảy ra nếu bạn vẫn để bật quyền rút tiền

Thường thì không có gì — cho đến lần duy nhất nó quan trọng. Nếu API key hoặc máy lưu trữ nó từng bị xâm phạm, phạm vi thiệt hại được định nghĩa hoàn toàn bởi những gì key đó *được phép* làm, không phải bởi những gì bot của bạn thực sự dùng. Một key chỉ cho phép giao dịch rơi vào tay kẻ xấu có thể đặt những lệnh không mong muốn — phiền phức, và là thứ bạn sẽ nhận ra và có thể hoàn tác. Một key bật quyền rút rơi vào tay kẻ xấu có thể rút sạch tài khoản.

Đây là vì sao các sàn để lộ quyền đó thành checkbox riêng, tách khỏi giao dịch: nó có nghĩa là phải tắt cho đúng trường hợp sử dụng này.

## Vì sao điều này quan trọng hơn với công cụ tự lưu trữ

WolfBot Community chạy trên máy của chính bạn — đó là một lợi thế bảo mật thật (xem [Giải thích tự lưu trữ](/vi/docs/self-hosted-explained)), nhưng nó cũng nghĩa là API key nằm trong môi trường của bạn, không phải sau hạ tầng đã được làm cứng của một nhà cung cấp. Quyền chỉ cho phép giao dịch là thứ làm cho sự đánh đổi đó trở thành không-vấn-đề: ngay cả khi máy của bạn bị xâm phạm, kẻ tấn công nắm API key của bạn vẫn không thể chuyển tiền của bạn đi đâu, vì chính sàn từ chối yêu cầu rút từ key đó.

Đây cũng là vì sao WolfBot là **phi lưu ký** — không lúc nào WolfBot, hay bất kỳ ai khác, nắm giữ tiền của bạn. Chúng ở lại trên sàn, dưới các quyền bạn kiểm soát, và bạn có thể thu hồi key ngay lập tức từ tài khoản sàn bất cứ lúc nào.

## Hạn chế IP — lớp thứ hai

Hầu hết các sàn cũng cho phép bạn khóa một API key vào một địa chỉ IP cụ thể. Nếu bạn chạy WolfBot trên một kết nối nhà cố định hoặc một VPS, điều này thêm một rào cản độc lập thứ hai: ngay cả một key bị rò rỉ với quyền chỉ cho phép giao dịch cũng trở nên vô dụng từ bất kỳ nơi nào khác. Không phải sàn nào cũng hỗ trợ điều này cho mọi cấp tài khoản, nhưng đáng bật ở bất cứ nơi nào nó được cung cấp.

## Checklist cho mỗi broker bạn kết nối

- [ ] Quyền Trade: **bật**
- [ ] Quyền Read: **bật**
- [ ] Quyền Withdrawal: **tắt**
- [ ] Quyền Transfer: **tắt**
- [ ] Hạn chế IP: **bật nơi được hỗ trợ**

Mỗi hướng dẫn broker trong [Academy](/academy) đều đi qua chính xác nơi tìm các checkbox này cho sàn cụ thể đó.

## Bước tiếp theo

> **[Hướng dẫn thiết lập API key đầy đủ →](/vi/brokers/api-key-guide)**
