---
title: "Cách mở tài khoản KuCoin qua WolfBot: KYC, 2FA và Trading Password"
description: "Hướng dẫn chi tiết đăng ký KuCoin qua referral WolfBot, xác minh danh tính, bật Google 2FA và phân biệt Trading Password/API passphrase."
tested_version: "0.1.0-beta.4"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 phút, chưa gồm thời gian xét KYC"
lang: "vi"
translation_of: "brokers/open-kucoin-account"
next_guide: "/vi/brokers/kucoin"
related_guides: ["/vi/brokers/kucoin", "/vi/brokers/api-key-guide", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: ["mở tài khoản KuCoin", "đăng ký KuCoin WolfBot", "KuCoin KYC", "KuCoin Google 2FA"]
sitemap_priority: 0.85
---

# Cách mở tài khoản KuCoin qua WolfBot

**[Mở trang đăng ký KuCoin qua WolfBot →](https://www.kucoin.com/r/broker/WOLFBOTIO)**

> Referral ghi nhận WolfBot. KuCoin quyết định chương trình/điều kiện. Theo tài liệu hiện hành, người dùng mới phải hoàn tất Identity Verification để dùng sản phẩm/dịch vụ.

![Bốn bước mở tài khoản KuCoin: referral, đăng ký, KYC và Google 2FA](/images/guides/open-kucoin-account.png)

*Sơ đồ minh hoạ, không phải screenshot KuCoin.*

## Bước 1: đăng ký

1. Xác nhận HTTPS và domain `kucoin.com`.
2. Chọn email/phone, kiểm tra mã referral được điền từ link nếu giao diện hiển thị.
3. Đồng ý Terms sau khi đọc, nhập code xác minh, đặt login password duy nhất và Confirm.
4. Nếu email/phone đã dùng, chuyển sang login/Forgot Password; không tạo tài khoản trùng.

## Bước 2: Identity Verification

1. Profile → **Account Center → Identity Verification**.
2. Chọn **Individual Verification → Get Verified**.
3. Chọn issuing country/region khớp giấy tờ, rồi đúng ID type.
4. Cho phép camera, chụp mặt trước/sau nếu yêu cầu; ảnh rõ, thẳng, đủ khung, không mờ/lóa.
5. Hoàn thành face verification và chờ email/kết quả trong trang Verification.
6. Nếu fail, bấm Re-Verify sau khi sửa đúng lý do; một người chỉ xác minh một tài khoản.

## Bước 3: Google 2FA

1. Profile → **Account Security → Google Verification → Configure**.
2. Xác minh bằng passkey/email/SMS theo màn hình.
3. Quét QR hoặc nhập Google security key vào authenticator.
4. Lưu security key mới nhất ngoại tuyến; nhập mã 6 số để hoàn tất.
5. KuCoin cảnh báo nhập sai nhiều lần có thể khóa tạm thời, nên kiểm tra thời gian điện thoại và dùng mã mới.

## Bước 4: phân biệt ba loại bí mật

- **Login Password:** đăng nhập tài khoản.
- **Trading Password:** xác nhận một số thao tác giao dịch/bảo mật trên KuCoin.
- **API Passphrase:** tạo cùng API key và cần khi WolfBot kết nối.

Không dùng một chuỗi cho cả ba. Lưu bằng password manager; không screenshot/gửi chat.

## Checklist WolfBot

- [ ] KYC và Google 2FA hoàn tất; security key đã lưu.
- [ ] Hiểu đúng Trading Password và API passphrase.
- [ ] Làm theo [hướng dẫn KuCoin](/vi/brokers/kucoin).
- [ ] API riêng cho WolfBot, Read/Trade tối thiểu, **Withdrawal/Transfer tắt**.
- [ ] [Simulation](/vi/docs/simulation) và [Risk Controls](/vi/docs/risk-controls) trước Live.

## Lỗi thường gặp

| Lỗi | Cách xử lý |
|---|---|
| Referral không tự điền | Quay lại link; không tiếp tục nếu bạn cần attribution nhưng chưa xác nhận được. |
| KYC thất bại | Đúng issuing country/type, ảnh gốc đủ góc và face scan cùng người. |
| 2FA sai | Bật tự động thời gian; dùng mã mới, tránh nhập sai liên tiếp. |
| Quên API passphrase | Thu hồi/tạo API mới; không nhầm với Trading Password. |

## Nguồn chính thức

- [KuCoin Sign Up and Login](https://www.kucoin.com/support/30808055892633)
- [KuCoin Identity Verification](https://www.kucoin.com/support/360015102254)
- [KuCoin Google 2FA](https://www.kucoin.com/support/360014897913)
