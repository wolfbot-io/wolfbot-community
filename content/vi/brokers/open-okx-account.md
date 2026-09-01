---
title: "Cách mở tài khoản OKX qua WolfBot: đăng ký, KYC và bảo mật"
description: "Hướng dẫn chi tiết đăng ký OKX qua referral WolfBot, liên kết email/điện thoại, xác minh danh tính và bật authenticator."
tested_version: "0.1.0-beta.4"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["okx"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 phút, chưa gồm thời gian xét KYC"
lang: "vi"
translation_of: "brokers/open-okx-account"
related_guides: ["/vi/brokers/api-key-guide", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: ["mở tài khoản OKX", "đăng ký OKX WolfBot", "OKX referral WolfBot", "OKX KYC"]
sitemap_priority: 0.8
---

# Cách mở tài khoản OKX qua WolfBot

**[Mở trang đăng ký OKX qua WolfBot →](https://okx.com/join/WOLFBOT)**

> Referral gắn WolfBot làm người giới thiệu. Điều kiện/ưu đãi nếu có do OKX quyết định. OKX yêu cầu thông tin hợp lệ và sản phẩm có thể khác theo khu vực.

![Bốn bước mở tài khoản OKX: referral, đăng ký, identity verification và 2FA](/images/guides/open-okx-account.png)

*Sơ đồ minh hoạ, không phải screenshot OKX.*

## Bước 1: kiểm tra link và tạo tài khoản

1. Mở link, xác nhận HTTPS và domain `okx.com`.
2. Chọn đúng Country/region, đọc Terms, Risk/Compliance Disclosure và Privacy Notice.
3. Nhập email và xác nhận referral `WOLFBOT` nếu ô này hiển thị.
4. Nhập mã email, sau đó liên kết số điện thoại với đúng mã quốc gia và nhập mã SMS. Hướng dẫn hiện hành của OKX yêu cầu liên kết cả email và điện thoại.
5. Đặt mật khẩu riêng, lưu trong password manager và đăng nhập thử.

## Bước 2: xác minh danh tính

1. Web: profile → **Verification** → **Individual account → Continue**. App: Menu → Account settings → Identity verification.
2. Nhập country of residence, nationality, legal name, ngày sinh, ID type/number và địa chỉ theo yêu cầu.
3. Chụp giấy tờ gốc còn hạn: ảnh rõ, đủ góc, không screenshot, không lóa hoặc chỉnh sửa.
4. Làm selfie/liveness với toàn khuôn mặt trong khung, bỏ kính/mũ/khẩu trang nếu được yêu cầu.
5. Theo dõi kết quả trong OKX. Tài liệu OKX nêu tài khoản chưa xác minh bị hạn chế các chức năng chính; hãy hoàn tất trước khi nạp/kết nối bot.

## Bước 3: bảo mật

1. Vào Security, bật authenticator app và lưu recovery key ngoại tuyến.
2. Bật anti-phishing code/passkey nếu có, theo dõi cảnh báo thiết bị mới.
3. Kiểm tra Authorized devices, xóa phiên lạ và đăng nhập thử lại bằng 2FA.
4. Phân biệt tài khoản exchange với OKX Wallet: seed phrase/private key của wallet không bao giờ được nhập vào WolfBot.

## Bước 4: sẵn sàng cho WolfBot

- [ ] Email + phone đã liên kết; identity verification hoàn tất.
- [ ] 2FA/recovery đã thử; không ai khác giữ mã.
- [ ] Đã kiểm tra Connect Account của release hiện tại có hỗ trợ đúng OKX market/account type.
- [ ] Nếu tạo API, chỉ Read/Trade cần thiết; **Withdrawal/Transfer tắt**.
- [ ] Chạy [Simulation](/vi/docs/simulation) và [Risk Controls](/vi/docs/risk-controls) trước Live.

Không thấy OKX trong luồng Connect Account không có nghĩa nên dùng cấu hình broker khác. Hãy chờ/hành động theo capability của release đang dùng.

## Lỗi thường gặp

| Lỗi | Cách xử lý |
|---|---|
| Email/phone đã dùng | Dùng login/khôi phục; mỗi email/số chỉ đăng ký một tài khoản theo hướng dẫn OKX. |
| Giấy tờ bị từ chối | Dùng bản gốc còn hạn, rõ nét, đủ góc, đúng quốc gia/loại. |
| Thiết bị mới bị chặn | Hoàn thành device authorization theo email/phone/authenticator. |
| Khu vực/sản phẩm không áp dụng | Dừng và làm theo thông báo trong tài khoản, không lách vùng. |

## Nguồn chính thức

- [OKX Account Registration Guide](https://www.okx.com/en-gb/help/okx-account-registration-guide)
- [OKX Individual Verification](https://www.okx.com/en-gb/help/how-do-i-verify-an-individual-account)
- [OKX Account Security Guide](https://www.okx.com/en-gb/help/account-security-enhancement-guide)
