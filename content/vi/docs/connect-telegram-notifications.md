---
title: "Cách kết nối Telegram với WolfBot Community — Hướng dẫn từng bước"
description: "Tạo bot Telegram riêng bằng BotFather, lưu token an toàn trong WolfBot Community, liên kết cuộc trò chuyện và kiểm tra thông báo giao dịch."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "integrations"
difficulty: "beginner"
estimated_time: "10 phút"
lang: "vi"
translation_of: "docs/connect-telegram-notifications"
next_guide: "/vi/docs/telegram-notifications-guide"
previous_guide: "/vi/getting-started"
related_guides: ["/vi/docs/telegram-notifications-guide", "/vi/docs/telegram-troubleshooting", "/vi/docs/risk-controls", "/vi/docs/run-24-7-on-a-vps"]
keywords: ["kết nối telegram wolfbot", "thông báo telegram wolfbot", "botfather wolfbot", "cài telegram cho bot giao dịch", "cảnh báo giao dịch telegram", "telegram bot token"]
sitemap_priority: 0.86
---

# Kết nối thông báo Telegram với WolfBot Community

WolfBot Community có thể gửi **thông báo ENTRY, trạng thái lệnh, chốt lời/cắt lỗ, trailing và cảnh báo an toàn** vào cuộc trò chuyện Telegram riêng. Bạn tự tạo và sở hữu bot Telegram; WolfBot lưu token của bot trong Vault cục bộ đã mã hóa và chỉ dùng token đó cho kết nối thông báo.

Liên kết Telegram chỉ phục vụ thông báo. Thao tác này **không** cấp quyền giao dịch, không làm lộ API key của sàn, không bật chiến lược và không kích hoạt giao dịch live.

## Chuẩn bị trước khi cài đặt

Bạn cần:

- WolfBot Community đang chạy trên Windows hoặc Linux
- Truy cập được dashboard local, thông thường tại `http://127.0.0.1:8080`
- Một tài khoản Telegram trên điện thoại hoặc máy tính
- Máy chạy WolfBot có thể kết nối Internet và Telegram
- Khoảng 10 phút

Hãy mở đồng thời WolfBot và Telegram trong lúc thiết lập. Mã liên kết của WolfBot hết hạn sau 10 phút và chỉ dùng được một lần.

## Bước 1: Mở phần cài đặt Telegram trong WolfBot

1. Mở dashboard WolfBot Community.
2. Chọn **Integrations** ở gần cuối thanh điều hướng bên trái.
3. Tìm khung **Telegram**.
4. Chọn **Manage Telegram**.

![Trang Integrations của WolfBot Community với khung Telegram và nút Manage Telegram](/images/guides/telegram/wolfbot-community-integrations-telegram.png "Mở Integrations rồi chọn Manage Telegram. Nhấn vào ảnh để phóng to.")

Trang **Connect Telegram** sẽ xuất hiện, gồm khung **Platform bot token** và khung **Telegram status** với ba bước liên kết.

## Bước 2: Tạo bot bằng BotFather

`@BotFather` là tài khoản quản lý bot chính thức của Telegram. Không sử dụng tài khoản có tên gần giống.

1. Trong Telegram, mở [cuộc trò chuyện @BotFather chính thức](https://t.me/BotFather).
2. Kiểm tra tài khoản có dấu xác minh.
3. Gửi lệnh `/newbot`.
4. Nhập tên hiển thị, ví dụ `My WolfBot Alerts`.
5. Nhập username duy nhất. Telegram yêu cầu 5–32 ký tự Latin, chữ số hoặc dấu gạch dưới; username phải kết thúc bằng `bot`, ví dụ `my_wolfbot_alerts_bot`.
6. BotFather trả về HTTP API token. Sao chép toàn bộ token, bao gồm cả dấu hai chấm.

Token thường có dạng:

```text
1234567890:AAExampleOnly_DoNotUse_ThisValue
```

Hãy bảo vệ token như mật khẩu. Người có token có thể kiểm soát bot Telegram đó. [Tài liệu BotFather chính thức của Telegram](https://core.telegram.org/bots/features#botfather) cũng mô tả quy trình tạo bot và yêu cầu bảo mật token này.

> Không dán token thật vào GitHub Issue, ảnh chụp màn hình, nhóm chat, trích đoạn log hoặc tin nhắn hỗ trợ.

## Bước 3: Lưu bot token vào WolfBot

1. Quay lại trang **Connect Telegram** trong WolfBot.
2. Dán token vào ô **Platform bot token**.
3. Chọn **Save token**.
4. Chờ dòng xác nhận màu xanh: **Stack is configured with a platform bot**.

WolfBot mã hóa token vào Vault local. Sau khi lưu, trang chỉ hiển thị giá trị đã che. Khi token hợp lệ được lưu, dịch vụ thông báo cũng được kết nối lại mà không cần khởi động lại container hoặc máy tính.

![Trang Connect Telegram của WolfBot Community hiển thị bot token đã lưu và trạng thái Telegram đã liên kết, các giá trị riêng tư được thay bằng ví dụ](/images/guides/telegram/wolfbot-community-connect-telegram.png "Màn hình Connect Telegram. Token và định danh cuộc trò chuyện đã được thay bằng dữ liệu ví dụ trong ảnh tài liệu.")

Nếu liên kết **Open Telegram bot** chưa xuất hiện, chọn **Refresh status** một lần. Nếu trang báo Telegram chưa lắng nghe lệnh, chọn **Enable Telegram commands** rồi tiếp tục.

## Bước 4: Tạo mã liên kết dùng một lần

1. Trong khung **Telegram status**, chọn **Create link code**.
2. WolfBot hiển thị lệnh theo dạng:

```text
/link WB-XXXXXX
```

3. Chọn **Copy**.
4. Không chia sẻ mã này vì nó xác định workspace WolfBot cần liên kết.

Mã hết hạn sau 10 phút và chỉ dùng được một lần. Nếu mã hết hạn, chỉ cần tạo mã mới; bạn không cần thay bot token.

## Bước 5: Gửi lệnh liên kết cho bot

1. Chọn **Open Telegram bot**, hoặc tìm bot bằng username bạn đã tạo.
2. Nếu Telegram hiển thị nút **Start**, hãy chọn nút đó.
3. Dán toàn bộ lệnh `/link WB-XXXXXX` vào cuộc trò chuyện riêng với bot.
4. Gửi tin nhắn.

Bot sẽ trả lời **WolfBot Telegram linked successfully**. Trang WolfBot tự kiểm tra trạng thái sau mỗi vài giây; bạn cũng có thể chọn **Refresh status**.

> Chỉ gửi lệnh trong cuộc trò chuyện riêng với bot của bạn. Không đăng lệnh vào group hoặc channel Telegram.

## Bước 6: Xác nhận trạng thái Linked

Thiết lập hoàn tất khi khung Telegram hiển thị:

- Nhãn xanh **Linked**
- Định danh Telegram đã được che bớt
- Nút **Send test** có thể sử dụng

![Khung trạng thái Telegram của WolfBot Community với ba bước và nhãn Linked màu xanh](/images/guides/telegram/wolfbot-community-telegram-linked.png "Kết nối thành công sẽ hiển thị Linked và bật nút Send test.")

WolfBot che một phần định danh để trang không làm lộ đầy đủ chat ID.

## Bước 7: Gửi thông báo kiểm tra

1. Chọn **Send test**.
2. Mở Telegram.
3. Kiểm tra bot đã gửi tin nhắn bắt đầu bằng **WolfBot Telegram is connected**.

Nhận được tin nhắn này chứng minh toàn bộ đường truyền đang hoạt động: WolfBot đọc được bot token đã lưu, tìm đúng cuộc trò chuyện, kết nối được Telegram và gửi được thông báo.

Nếu WolfBot hiển thị **Linked** nhưng không nhận được tin nhắn kiểm tra, xem [Hướng dẫn xử lý lỗi Telegram](/vi/docs/telegram-troubleshooting).

## Sau khi cài đặt xong

WolfBot có thể chuyển các thông báo được hỗ trợ của tài khoản đang bật tới cuộc trò chuyện đã liên kết. Hãy giữ máy WolfBot hoạt động và có Internet nếu bạn muốn nhận cảnh báo khi không mở dashboard. Laptop đã tắt hoặc đang sleep không thể gửi cảnh báo từ phần mềm self-hosted.

Telegram là kênh thông báo, không thay thế các lớp bảo vệ trên sàn. Hãy cấu hình stop-loss, giới hạn vị thế và [Risk Controls của WolfBot](/vi/docs/risk-controls) độc lập với Telegram.

## Checklist bảo mật

- [ ] Tôi dùng đúng tài khoản `@BotFather` có xác minh
- [ ] Tôi không công khai hoặc chụp lại bot token thật
- [ ] Tôi chỉ lưu token trong ô Platform bot token của WolfBot
- [ ] Tôi gửi lệnh `/link` trong cuộc trò chuyện riêng với bot của mình
- [ ] WolfBot hiển thị **Linked**
- [ ] Tôi đã nhận thông báo kiểm tra
- [ ] Mọi API key sàn vẫn tắt quyền rút tiền

## Câu hỏi thường gặp

### Liên kết Telegram có cho phép người khác đặt lệnh không?

Không. Liên kết chỉ lưu thông tin định tuyến thông báo. Nó không cấp quyền giao dịch, không làm lộ thông tin broker, không khởi động bot và không bật giao dịch live.

### Tôi có phải tự nhập Telegram chat ID không?

Không. Lệnh `/link` dùng một lần giúp WolfBot tự xác định đúng cuộc trò chuyện riêng.

### Có thể dùng lại mã liên kết không?

Không. Mã chỉ dùng một lần và hết hạn sau 10 phút. Khi cần, hãy tạo mã mới từ WolfBot.

### WolfBot có phải luôn chạy không?

Có. WolfBot Community là phần mềm self-hosted nên dịch vụ thông báo phải đang chạy và kết nối được Telegram. Để nhận cảnh báo liên tục, xem [hướng dẫn chạy WolfBot 24/7 trên VPS](/vi/docs/run-24-7-on-a-vps).

### Bot token được lưu ở đâu?

WolfBot mã hóa token trong Vault local của bản cài đặt. Sau khi lưu, trang cài đặt chỉ trả về token đã che.

## Bước tiếp theo

Đọc [Vận hành và bảo mật thông báo Telegram](/vi/docs/telegram-notifications-guide) để biết cách kiểm tra định kỳ, đổi token an toàn và chuẩn bị trước khi để WolfBot chạy không giám sát.
