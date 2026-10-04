---
title: "Thông báo Telegram của WolfBot — Hướng dẫn vận hành và bảo mật"
description: "Hiểu luồng cảnh báo Telegram của WolfBot, duy trì kết nối self-hosted, đổi bot token an toàn và bảo vệ bot riêng của bạn."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "integrations"
difficulty: "beginner"
estimated_time: "8 phút"
lang: "vi"
translation_of: "docs/telegram-notifications-guide"
next_guide: "/vi/docs/telegram-troubleshooting"
previous_guide: "/vi/docs/connect-telegram-notifications"
related_guides: ["/vi/docs/connect-telegram-notifications", "/vi/docs/telegram-troubleshooting", "/vi/docs/risk-controls", "/vi/docs/backup", "/vi/docs/run-24-7-on-a-vps"]
keywords: ["cảnh báo telegram wolfbot", "thông báo giao dịch telegram", "bảo mật telegram bot token", "đổi telegram bot token", "thông báo bot giao dịch self hosted"]
sitemap_priority: 0.80
---

# Vận hành và bảo mật thông báo Telegram của WolfBot

Sau khi Telegram hiển thị **Linked**, việc quan trọng tiếp theo là duy trì đường gửi thông báo và giữ kín bot token. Bài này giải thích chức năng của từng thành phần, giới hạn của một kết nối thành công và cách bảo trì mà không làm giảm an toàn giao dịch.

Nếu chưa thiết lập, hãy hoàn thành bài [Kết nối Telegram với WolfBot Community](/vi/docs/connect-telegram-notifications) trước.

## Ba thành phần của kết nối

| Thành phần | Mục đích | Nơi lưu |
|---|---|---|
| **Telegram bot token** | Cho phép WolfBot vận hành bot do bạn tạo | Được mã hóa trong Vault local của WolfBot |
| **Cuộc trò chuyện Telegram đã liên kết** | Xác định private chat nhận thông báo | Bản ghi định tuyến local; UI chỉ hiện ID đã che |
| **Dịch vụ lắng nghe lệnh Telegram** | Nhận lệnh `/link` từ Telegram | Chạy cùng dịch vụ web local của WolfBot |

Ba thành phần này độc lập. Đã lưu token không có nghĩa là đã liên kết chat; đã có nhãn Linked cũng không chứng minh token hiện tại vẫn gửi tin nhắn được. Nút **Send test** kiểm tra toàn bộ đường truyền.

![Khung trạng thái Telegram của WolfBot Community với cuộc trò chuyện đã liên kết và nút Send test](/images/guides/telegram/wolfbot-community-telegram-linked.png "Dùng trạng thái Linked cùng một lần Send test thành công để kiểm tra vận hành.")

## Những thông báo có thể nhận

Màn hình Connect Telegram hiện liệt kê các nhóm thông báo:

- Hoạt động ENTRY mới
- Thay đổi trạng thái lệnh
- Hoạt động take-profit và stop-loss
- Cập nhật trailing protection
- Cảnh báo an toàn

Nội dung cụ thể phụ thuộc tài khoản, chiến lược, phản hồi của broker và phiên bản WolfBot. Thông báo Telegram xác nhận sự kiện đã tới kênh thông báo; nó không tự chứng minh lệnh trên sàn đã fill hoặc vị thế đã đóng. Với sự kiện quan trọng, hãy kiểm tra **Activity**, **Live Monitor** hoặc trực tiếp tại broker.

## Điều kiện hoạt động của bản self-hosted

Thông báo được gửi từ bản cài WolfBot Community của bạn. Để nhận liên tục:

1. Giữ máy chạy WolfBot luôn bật.
2. Không để máy sleep trong thời gian cần giám sát.
3. Giữ các dịch vụ WolfBot hoạt động.
4. Cho phép kết nối HTTPS đi ra Telegram.
5. Giữ ngày giờ hệ thống chính xác.

Nếu chỉ chạy WolfBot trong phiên giao dịch, hãy test Telegram vào đầu mỗi phiên. Nếu cần 24/7, dùng máy luôn bật ổn định hoặc làm theo [hướng dẫn VPS 24/7](/vi/docs/run-24-7-on-a-vps).

## Kiểm tra nhanh trong 60 giây

Thực hiện sau khi update, restart, đổi mạng hoặc đổi token:

1. Mở **Integrations → Manage Telegram**.
2. Xác nhận ô token hiển thị **saved**.
3. Xác nhận không có cảnh báo vàng **Enable Telegram commands**.
4. Xác nhận nhãn xanh **Linked**.
5. Chọn **Send test**.
6. Xác nhận tin nhắn tới đúng private chat.

Không chỉ dựa vào nhãn xanh. Nhãn đó xác nhận bản ghi liên kết; tin nhắn test mới xác nhận mạng và quyền của bot ở thời điểm hiện tại.

## Bảo vệ bot token

Bot token không phải mật khẩu tài khoản Telegram, nhưng người giữ token có thể kiểm soát bot. Hãy bảo vệ nó tương tự API secret của sàn:

- Chỉ lưu trong ô token của WolfBot và cuộc trò chuyện BotFather của Telegram.
- Không để token xuất hiện trong ảnh chụp hoặc video màn hình.
- Không commit token vào Git, file `.env` mẫu, script hoặc tài liệu.
- Xóa token khỏi log trước khi chia sẻ.
- Không chạy ứng dụng polling khác bằng cùng token khi WolfBot đang sử dụng.
- Đổi token ngay khi nghi ngờ bị lộ.

Sau khi lưu, WolfBot chỉ trả về giá trị đã che. Chuỗi như `1234…ABCD` chỉ xác nhận token tồn tại và không thể dùng để khôi phục secret.

## Đổi token an toàn

Hãy đổi token nếu nó từng bị công khai, bị sao chép sang nhầm máy, xuất hiện trong gói hỗ trợ hoặc người không còn được phép đã truy cập token.

### Đổi token của cùng một bot

1. Mở tài khoản `@BotFather` có xác minh.
2. Dùng `/mybots`, chọn bot cảnh báo và mở phần API token. Telegram cũng có lệnh `/token` để tạo token thay thế.
3. Tạo và sao chép token mới; coi token cũ là không còn sử dụng được.
4. Trong WolfBot, mở **Integrations → Manage Telegram**.
5. Dán token mới vào **Platform bot token**.
6. Chọn **Update token**.
7. Chọn **Refresh status**, sau đó **Send test**.

WolfBot dừng dịch vụ lắng nghe hiện tại trước khi kết nối token mới để tránh hai tiến trình local cạnh tranh cùng một bot. Đổi token của cùng bot không cần restart WolfBot.

### Chuyển sang một bot hoàn toàn mới

Nếu bạn tạo bot khác thay vì chỉ đổi token của bot cũ:

1. Lưu token bot mới bằng **Update token**.
2. Mở bot mới trong Telegram và chọn **Start**.
3. Tạo mã liên kết WolfBot mới.
4. Gửi lệnh `/link` cho bot mới.
5. Xác nhận **Linked** và chạy **Send test**.
6. Chỉ xóa hoặc thu hồi bot cũ trong BotFather sau khi đường truyền mới hoạt động.

Thứ tự này quan trọng vì bot mới không thể giả định rằng bạn đã bắt đầu private chat với nó.

## Những gì liên kết Telegram không thay đổi

Liên kết hoặc thay bot Telegram không:

- Thêm, bật, tắt hoặc xóa tài khoản sàn
- Thay đổi quyền API
- Khởi động hoặc dừng chiến lược
- Sửa leverage, position size, TP/SL hoặc drawdown control
- Cấp cho người dùng Telegram quyền truy cập dashboard WolfBot
- Cấp cho bot quyền rút tiền

API key sàn luôn phải ở chế độ trade-only và tắt withdrawal. Đọc riêng [Hướng dẫn bảo mật API key](/vi/brokers/api-key-guide) và [Risk Controls](/vi/docs/risk-controls).

## Lưu ý khi backup và chuyển máy

Bot token và thông tin liên kết chat là dữ liệu local nhạy cảm. Trước khi chuyển WolfBot sang máy khác:

1. Tạo và kiểm tra một [bản backup WolfBot](/vi/docs/backup) được hỗ trợ.
2. Sau khi restore, mở **Connect Telegram**.
3. Kiểm tra token đã che và trạng thái **Linked** còn hay không.
4. Chạy **Send test** trước khi dựa vào cảnh báo.
5. Nếu thiếu một trong hai, lưu lại token và tạo mã liên kết mới.

Không giả định bản backup đã khôi phục đường gửi Telegram cho đến khi tin nhắn test thực sự tới.

## Checklist bảo trì hàng tháng

- [ ] Gửi một tin nhắn test
- [ ] Xác nhận tin nhắn tới đúng private chat
- [ ] Xác nhận máy WolfBot online trong thời gian cần giám sát
- [ ] Kiểm tra ai có quyền truy cập máy và backup
- [ ] Xác nhận không có ứng dụng thứ hai polling cùng bot Telegram
- [ ] Đổi token nếu có bất kỳ nghi ngờ lộ thông tin
- [ ] Đọc release notes để biết thay đổi liên quan thông báo

## Bước tiếp theo

Hãy lưu [Hướng dẫn xử lý lỗi Telegram](/vi/docs/telegram-troubleshooting). Bài đó ánh xạ từng triệu chứng trên màn hình với cách sửa an toàn, gồm mã liên kết hết hạn, command listener chưa chạy, mất tin nhắn test và hai tiến trình cùng dùng một bot.
