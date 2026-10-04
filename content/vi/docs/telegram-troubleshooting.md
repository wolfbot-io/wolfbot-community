---
title: "Telegram WolfBot không hoạt động — Hướng dẫn xử lý lỗi"
description: "Khắc phục lỗi Telegram trong WolfBot Community: bot token không hợp lệ, mã link hết hạn, polling chưa chạy, mất tin nhắn test và trùng dịch vụ bot."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "10 phút"
lang: "vi"
translation_of: "docs/telegram-troubleshooting"
previous_guide: "/vi/docs/telegram-notifications-guide"
related_guides: ["/vi/docs/connect-telegram-notifications", "/vi/docs/telegram-notifications-guide", "/vi/docs/troubleshooting", "/vi/docs/run-24-7-on-a-vps"]
keywords: ["telegram wolfbot không hoạt động", "telegram bot không link được", "mã telegram hết hạn", "telegram polling conflict", "wolfbot send test lỗi", "telegram bot token không hợp lệ"]
sitemap_priority: 0.82
---

# Xử lý lỗi thông báo Telegram của WolfBot

Hãy bắt đầu từ triệu chứng nhìn thấy trên màn hình. Phần lớn lỗi cài đặt Telegram nằm ở một trong bốn lớp: bot token, dịch vụ lắng nghe lệnh, mã liên kết dùng một lần hoặc đường gửi tin nhắn ra Telegram.

Nếu chưa làm quy trình ban đầu, hãy xem [Kết nối Telegram với WolfBot Community](/vi/docs/connect-telegram-notifications) trước.

## Chẩn đoán nhanh

| Triệu chứng | Lớp có khả năng lỗi | Thao tác đầu tiên |
|---|---|---|
| **Save token** thất bại | Bot token | Sao chép token mới và đầy đủ từ `@BotFather` có xác minh |
| Không tìm được username của bot | Token hoặc mạng | Chọn **Refresh status**; kiểm tra Internet và token |
| Cảnh báo vàng “commands aren't listening” | Command listener | Chọn **Enable Telegram commands** |
| Bot không phản hồi `/link` | Listener hoặc trùng poller | Bật commands; dừng ứng dụng khác đang dùng cùng token |
| “invalid, expired, or already used” | Mã dùng một lần | Tạo mã mới và gửi trong vòng 10 phút |
| WolfBot vẫn hiện **Not linked yet** | Lệnh liên kết | Kiểm tra đã gửi đủ lệnh cho đúng bot |
| Đã **Linked** nhưng test lỗi | Gửi tin ra ngoài | Bỏ chặn/start bot, kiểm tra mạng rồi test lại |
| Mất thông báo sau khi đổi token | Quyền bot | Lưu token mới và chạy **Send test** |

## 1. WolfBot từ chối bot token

Kiểm tra lần lượt:

1. Token đến từ đúng tài khoản `@BotFather` có xác minh.
2. Bạn đã sao chép toàn bộ giá trị gồm phần số, dấu hai chấm và chuỗi phía sau.
3. Không có khoảng trắng, dấu ngoặc kép hoặc xuống dòng ở đầu/cuối token.
4. Bạn không dán nhầm username bot, link Telegram, placeholder hoặc nội dung trả lời của `/newbot`.
5. Token chưa bị thu hồi trong BotFather.

Quay lại **Integrations → Manage Telegram**, dán giá trị đúng rồi chọn **Save token** hoặc **Update token**.

> Không kiểm tra token thật bằng cách đăng nó lên URL trình duyệt, shell history hoặc website xác thực online. Lưu trong WolfBot và dùng **Send test** sẽ giữ quy trình trong đường ứng dụng được thiết kế.

## 2. Không có liên kết “Open Telegram Bot”

WolfBot lấy username công khai của bot từ Telegram sau khi kết nối token. Nếu liên kết không xuất hiện:

1. Xác nhận trang báo platform bot đã được cấu hình.
2. Chọn **Refresh status**.
3. Xác nhận máy WolfBot có Internet.
4. Kiểm tra firewall, DNS filter, proxy hoặc VPN không chặn Telegram API.
5. Nếu token cũ đã bị thu hồi, tạo token mới trong BotFather và dùng **Update token**.

Bạn có thể tự tìm bot theo username đã tạo, nhưng không nên tiếp tục cho đến khi WolfBot chấp nhận và lưu token hợp lệ.

## 3. Telegram chưa lắng nghe lệnh

Sau khi dịch vụ restart, WolfBot có thể đọc được token đã lưu nhưng command listener chưa hoạt động. Trang sẽ hiển thị cảnh báo vàng rằng `/link` và bước test chưa thể dùng.

Chọn **Enable Telegram commands**. Chờ vài giây, chọn **Refresh status**, rồi gửi lại lệnh `/link`.

Thao tác này chỉ khởi động command listener của Telegram. Nó không bật giao dịch live, không thay đổi trạng thái tài khoản và không sửa cài đặt lệnh.

## 4. Bot không phản hồi lệnh `/link`

Kiểm tra theo đúng thứ tự:

1. Lệnh được gửi trong private chat với đúng bot có token đang lưu trong WolfBot.
2. Chọn **Start** nếu Telegram hiển thị nút này.
3. Sao chép đủ `/link`, một dấu cách và mã `WB-...`.
4. Trong WolfBot, chọn **Enable Telegram commands** nếu có cảnh báo.
5. Tạo mã mới và gửi ngay.
6. Xác nhận không có chương trình khác, bản cài WolfBot cũ, script test hoặc dịch vụ automation dùng cùng token để polling `getUpdates`.

Telegram chỉ cho phép một tiến trình long-polling hoạt động trên mỗi bot token. Nếu tiến trình khác dùng cùng token, Telegram có thể kết thúc một listener bằng lỗi `409 Conflict`, khiến bot WolfBot không nhận được `/link`. Hãy dừng listener còn lại hoặc tạo bot riêng cho WolfBot.

## 5. Mã liên kết không hợp lệ, hết hạn hoặc đã dùng

Đây là phản hồi bảo mật bình thường khi mã cũ hơn 10 phút hoặc đã được sử dụng.

1. Quay lại WolfBot.
2. Chọn **Create link code**.
3. Chọn **Copy**.
4. Gửi ngay lệnh mới cho bot.

Không dùng lại lệnh cũ. Tạo mã liên kết mới không yêu cầu đổi bot token và không ảnh hưởng cài đặt giao dịch.

## 6. Telegram báo thành công nhưng WolfBot vẫn “Not linked yet”

1. Chờ vài giây; trang tự kiểm tra khi có mã đang hoạt động.
2. Chọn **Refresh status**.
3. Kiểm tra phản hồi trong Telegram là **WolfBot Telegram linked successfully**, không phải thông báo mã sai/hết hạn.
4. Xác nhận bạn đang mở đúng bản cài WolfBot local đã tạo mã.
5. Nếu cần, tạo mã mới từ chính bản cài đó và làm lại.

Mã do một bản cài WolfBot tạo ra không dùng để liên kết cho bản cài khác.

## 7. Đã Linked nhưng “Send Test” thất bại

Bản ghi liên kết chat tồn tại nhưng việc gửi tin hiện tại bị lỗi. Hãy kiểm tra:

- Bot không bị chặn hoặc xóa trong Telegram.
- Bạn đã mở chat và chọn **Start**.
- Token vẫn thuộc đúng bot và chưa bị thu hồi.
- WolfBot có Internet.
- Telegram không bị chặn bởi mạng, firewall, proxy hoặc VPN.
- Ngày giờ hệ thống chính xác.

Nếu vừa đổi token, hãy dán token mới vào **Update token** trước khi test. Nếu chuyển sang bot hoàn toàn khác, mở bot mới, tạo mã mới và liên kết lại.

## 8. Test thành công nhưng không có thông báo giao dịch

Test thành công chứng minh đường gửi Telegram, không chứng minh một sự kiện giao dịch cụ thể đã xảy ra. Kiểm tra:

1. Tài khoản cần theo dõi đang bật và healthy trong WolfBot.
2. Sự kiện có xuất hiện trong **Activity** hoặc **Live Monitor**.
3. Chiến lược hoặc thao tác thực sự tạo ra sự kiện ENTRY, order, TP/SL, trailing hoặc safety.
4. Máy WolfBot đang thức và online tại thời điểm đó.
5. Bạn đang xem đúng Telegram chat đã nhận tin nhắn test.

Với sự kiện liên quan lệnh, hãy xác minh trực tiếp trên broker. Telegram là kênh quan sát, không nên là nguồn duy nhất để xác nhận execution.

## 9. Mất thông báo sau khi restart WolfBot

Mở **Connect Telegram** sau khi restart:

1. Xác nhận token vẫn hiển thị **saved**.
2. Nếu có cảnh báo listener màu vàng, chọn **Enable Telegram commands**.
3. Xác nhận **Linked**.
4. Chạy **Send test**.

Thông thường bạn không cần link lại nếu vẫn dùng cùng bot và Vault local còn nguyên.

## Nâng cao: lấy log an toàn trên Linux

Chỉ dùng lệnh log tích hợp khi các bước trên UI chưa đủ:

```bash
sudo /opt/wolfbot/launcher/wolfbot-stack.sh logs | grep -i telegram
```

Tìm các dòng mới liên quan khởi tạo token, polling, lỗi mạng hoặc `409 Conflict`. Trước khi chia sẻ:

- Xóa bot token, mã `/link`, chat ID, username, email và đường dẫn riêng tư.
- Ghi rõ phiên bản WolfBot và thời điểm gần đúng xảy ra lỗi.
- Không đăng toàn bộ log archive lên issue công khai.

## Quy trình reset an toàn

Khi chưa xác định được nguyên nhân, quy trình này chỉ làm mới đường Telegram:

1. Tạo token thay thế cho cùng bot trong `@BotFather`.
2. Lưu bằng **Update token**.
3. Chọn **Enable Telegram commands** nếu được hiển thị.
4. Tạo mã liên kết mới.
5. Gửi mã cho bot trong private chat.
6. Xác nhận **Linked**.
7. Chọn **Send test**.

Quy trình không thay đổi broker credential hoặc cấu hình giao dịch.

## Vẫn chưa hoạt động?

Tạo [GitHub issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) kèm:

- Phiên bản WolfBot Community
- Phiên bản Windows hoặc Linux
- Nguyên văn lỗi hiển thị
- Bước bị lỗi: save, enable, link, refresh hay test
- Ảnh chụp đã che thông tin riêng tư
- Một đoạn log Telegram ngắn đã che dữ liệu, nếu có

Không bao giờ gửi bot token hoặc mã `/link` còn hiệu lực.
