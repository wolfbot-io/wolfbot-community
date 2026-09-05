---
title: "Cách mở tài khoản Bitget qua WolfBot: KYC, 2FA và passphrase"
description: "Hướng dẫn từng bước đăng ký Bitget qua referral WolfBot, làm Identity Verification, bật Google Authenticator và chuẩn bị API passphrase."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 phút, chưa gồm thời gian xét KYC"
lang: "vi"
translation_of: "brokers/open-bitget-account"
next_guide: "/vi/brokers/bitget"
related_guides: ["/vi/brokers/bitget", "/vi/brokers/api-key-guide", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: ["mở tài khoản Bitget", "đăng ký Bitget WolfBot", "Bitget KYC", "Bitget API passphrase"]
sitemap_priority: 0.85
---

# Cách mở tài khoản Bitget qua WolfBot

**[Mở trang đăng ký Bitget qua WolfBot →](https://partner.bitget.com/bg/WOLFBOT)**

> Referral ghi nhận WolfBot; mọi chương trình/điều kiện do Bitget quyết định. Không cần nạp tiền để hoàn tất tài khoản và bảo mật.

![Bốn bước mở tài khoản Bitget: referral, đăng ký, KYC và authenticator](/images/guides/open-bitget-account.png)

*Sơ đồ minh hoạ, không phải screenshot Bitget.*

## Bước 1: đăng ký đúng trang

1. Mở link trên, xác nhận HTTPS và domain Bitget chính thức.
2. Chọn email hoặc điện thoại bạn kiểm soát lâu dài.
3. Nhập verification code, tạo mật khẩu riêng và lưu trong password manager.
4. Đăng nhập lại; kiểm tra quốc gia/khu vực và điều khoản sản phẩm áp dụng cho bạn.

## Bước 2: Identity Verification

1. Web: biểu tượng hồ sơ → **Identity Verification**. App: User profile → **ID verification**.
2. Bấm **Verify**, chọn issuing country/region và document type.
3. Đọc yêu cầu ảnh; chụp mặt trước/sau nếu hệ thống yêu cầu, bảo đảm họ tên/ngày sinh rõ và không chỉnh sửa.
4. Hoàn thành facial recognition trên máy tính/điện thoại.
5. Chờ kết quả trong website inbox/email. Nếu từ chối, xem lý do, chụp lại bản gốc đủ góc và đúng loại giấy tờ.

## Bước 3: bật Google Authenticator

1. Vào Profile → **Security → Google Authenticator**.
2. Bấm Next; trong authenticator chọn thêm key rồi quét QR hoặc nhập setup key thủ công.
3. Lưu setup key ở nơi ngoại tuyến. Nếu cả Bitget và authenticator cùng điện thoại, nhập key thủ công có thể dễ hơn quét QR.
4. Nhập mã 6 số để hoàn tất; bật anti-phishing code và cảnh báo đăng nhập nếu có.
5. Kiểm tra thiết bị/phiên, đăng xuất thiết bị lạ và thử đăng nhập lại.

## Bước 4: hiểu API passphrase trước khi kết nối

Bitget có thể yêu cầu ba giá trị riêng: **API Key**, **Secret Key** và **API Passphrase**. Passphrase là bí mật bạn đặt lúc tạo API, không phải mật khẩu đăng nhập và không phải mã 2FA. Lưu cả ba bằng password manager; mất passphrase thì thu hồi key và tạo key mới.

## Checklist WolfBot

- [ ] KYC/2FA hoàn tất; recovery key an toàn.
- [ ] Đã đọc [hướng dẫn Bitget](/vi/brokers/bitget).
- [ ] API riêng cho WolfBot, quyền Read/Trade tối thiểu.
- [ ] **Withdrawal/Transfer luôn tắt**; passphrase không gửi qua chat.
- [ ] Chạy [Simulation](/vi/docs/simulation) và cấu hình [Risk Controls](/vi/docs/risk-controls).

## Lỗi thường gặp

| Lỗi | Cách xử lý |
|---|---|
| KYC không duyệt | Đúng issuing country/type, ảnh bản gốc rõ, không sửa và face scan đủ sáng. |
| Mã authenticator sai | Bật thời gian tự động trên điện thoại, nhập mã mới nhất. |
| Quên API passphrase | Thu hồi API key và tạo lại; không dùng mật khẩu login để đoán. |
| Test Connection lỗi | Kiểm tra key/secret/passphrase, account type và quyền; không bật Withdrawal để thử. |

## Nguồn chính thức

- [Bitget Registration and Login](https://www.bitget.com/support/sections/12508313443723)
- [Bitget Identity Verification](https://www.bitget.com/support/articles/12560603795184)
- [Bitget Google Authenticator](https://www.bitget.com/support/articles/12560603808459)
