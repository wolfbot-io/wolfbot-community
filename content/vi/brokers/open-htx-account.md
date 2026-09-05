---
title: "Cách mở tài khoản HTX qua WolfBot: đăng ký, KYC và 2FA"
description: "Hướng dẫn chi tiết tạo tài khoản HTX qua referral WolfBot, xác minh danh tính, bảo vệ tài khoản và hiểu trạng thái tích hợp Community."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["htx"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 phút, chưa gồm thời gian xét KYC"
lang: "vi"
translation_of: "brokers/open-htx-account"
related_guides: ["/vi/brokers/api-key-guide", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: ["mở tài khoản HTX", "đăng ký HTX WolfBot", "HTX referral WolfBot", "HTX KYC"]
sitemap_priority: 0.75
---

# Cách mở tài khoản HTX qua WolfBot

> **Trạng thái WolfBot:** referral HTX đang hoạt động; kết nối trực tiếp HTX trong WolfBot Community hiện là **planned**. Đăng ký tài khoản không đồng nghĩa release hiện tại hỗ trợ API HTX.

**[Mở trang đăng ký HTX qua WolfBot →](https://www.htx.com/invite/en-us/1f?invite_code=84k59223&regChannel=11349190)**

![Bốn bước mở tài khoản HTX: referral, đăng ký, KYC và authenticator](/images/guides/open-htx-account.png)

*Sơ đồ minh hoạ, không phải screenshot HTX.*

## Bước 1: kiểm tra domain và eligibility

1. Mở link, xác nhận HTTPS và domain cuối thuộc `htx.com`.
2. Chọn đúng country/region; đọc điều khoản và restricted jurisdiction hiện hành.
3. Nếu invite code hiển thị, kiểm tra `84k59223` trước khi hoàn tất.
4. Không dùng VPN hoặc thông tin người khác để vượt hạn chế.

## Bước 2: đăng ký

1. Chọn email/số điện thoại chính chủ và nhập mã xác minh.
2. Đặt mật khẩu riêng, lưu trong password manager.
3. Hoàn thành CAPTCHA/security prompt và đăng nhập lại.
4. Kiểm tra email cảnh báo/thiết bị đăng nhập ngay sau khi tạo.

## Bước 3: Identity Verification

1. Từ hồ sơ, tìm **Identity Verification/KYC**.
2. Chọn tài khoản Individual, issuing country và loại giấy tờ chính xác.
3. Nhập thông tin đúng giấy tờ, chụp bản gốc còn hạn, rõ và đủ góc.
4. Làm face/liveness trong ánh sáng tốt; không dùng ảnh của người khác.
5. Xem kết quả trong tài khoản/Help Center chính thức. Yêu cầu có thể thay đổi theo khu vực.

## Bước 4: bảo mật

1. Bật authenticator app trong Security và lưu recovery/setup key ngoại tuyến.
2. Bật anti-phishing code, passkey và withdrawal whitelist nếu HTX cung cấp.
3. Xóa session/device lạ, thử đăng xuất/đăng nhập bằng 2FA.
4. Không cung cấp OTP, KYC, password hoặc recovery key cho “admin” trong nhóm chat.

## Không tạo API WolfBot khi tích hợp còn planned

Chờ WolfBot Community công bố capability và trang `/brokers/htx`. Khi có hỗ trợ, tạo API mới chỉ dùng cho WolfBot, quyền Read/Trade tối thiểu và **Withdrawal/Transfer tắt**. Không tái dùng key từng cấp cho công cụ khác.

Nếu cần bắt đầu ngay, dùng broker đã có tài liệu kết nối như [BingX](/vi/brokers/bingx), [KuCoin](/vi/brokers/kucoin) hoặc [Binance](/vi/brokers/binance), rồi thử [Simulation](/vi/docs/simulation).

## Checklist

- [ ] Domain/invite code và khu vực đã kiểm tra.
- [ ] Email/phone chính chủ, KYC và 2FA hoàn tất.
- [ ] Recovery key lưu tách mật khẩu; không có session lạ.
- [ ] Chưa tạo API WolfBot cho tính năng chưa phát hành.
- [ ] Không nạp tiền chỉ vì kỳ vọng hỗ trợ tương lai.

## Nguồn

- [HTX Support](https://www.htx.com/support/)
- [HTX Registration via WolfBot](https://www.htx.com/invite/en-us/1f?invite_code=84k59223&regChannel=11349190)
