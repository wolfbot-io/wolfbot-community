---
title: "Ensemble DRL cho trading: tính đa dạng, chọn regime và tương quan ẩn"
description: "Cách đánh giá ensemble PPO, A2C và DDPG qua nhiều market regime mà không nhầm số lượng model với diversification thực sự."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "17 phút"
lang: "vi"
translation_of: "academy/ensemble-drl-regime-selection"
previous_guide: "/vi/academy/finrl-realistic-market-environments"
next_guide: "/vi/academy/value-policy-actor-critic-trading"
related_guides: ["/vi/academy/ppo-for-trading-systems", "/vi/academy/reinforcement-learning-trading-mdp", "/vi/academy/rlops-scalable-training-finrl-podracer", "/vi/docs/simulation"]
keywords: ["ensemble deep reinforcement learning trading", "chọn model theo market regime", "PPO A2C DDPG ensemble", "đa dạng hóa AI trading"]
citations: ["https://arxiv.org/abs/2511.12120", "https://arxiv.org/abs/2011.09607", "https://arxiv.org/abs/2112.06753"]
sitemap_priority: 0.9
---

# Ensemble DRL cho trading

Ensemble có thể giảm phụ thuộc vào một thuật toán học, nhưng ba agent chưa chắc tạo ra ba góc nhìn độc lập. PPO, A2C và DDPG dùng quy tắc update khác nhau nhưng có thể cùng nhìn một bộ giá, indicator, reward, simulator và giả định execution. Vì vậy lỗi của chúng vẫn có thể tương quan rất cao đúng lúc market regime thay đổi.

Paper ensemble trong thư viện cục bộ kết hợp các actor-critic agent và chọn model theo kết quả validation. Giá trị học thuật không nằm ở việc sao chép kết quả lịch sử, mà ở cách thiết kế diversity, selection và failure control để giả thuyết ensemble có thể bị bác bỏ bằng dữ liệu.

## Ba nguồn tạo diversity

### Diversity từ tối ưu hóa

PPO giới hạn policy update, A2C ước lượng policy/value gradient, còn DDPG học deterministic policy cho continuous action. Dynamics khác nhau có thể dẫn đến turnover, concentration và độ nhạy với reward noise khác nhau.

### Diversity từ thông tin

Đa dạng thực sự cần nhiều hơn tên thuật toán. Agent có thể dùng các nhóm feature độc lập về giả thuyết: price/volume structure, trạng thái cross-sectional, volatility hoặc tín hiệu từ văn bản. Mọi feature phải giữ publication timestamp. Alternative data không có point-in-time control chỉ tạo leakage, không tạo diversity.

### Diversity từ objective

Một agent có thể tối ưu return, agent khác tối ưu downside utility, turnover-adjusted utility hoặc drawdown penalty. Chỉ nên so sánh khi tất cả dùng cùng fill/cost model; nếu không selector đang xếp hạng các scorecard không tương thích.

## Regime selector cũng là một model

Kiến trúc phổ biến train nhiều policy, chấm điểm trong rolling validation window rồi deploy model thắng. Như vậy hệ thống đã thêm một meta-policy:

```text
market observation
-> regime feature
-> validation score của candidate
-> eligibility và risk filter
-> policy được chọn hoặc no-trade fallback
```

Selector có thể overfit giống agent. Window ngắn thì nhiễu, window dài thì phản ứng chậm. Ngưỡng turbulence/volatility có thể được tune theo crisis lịch sử. Switching liên tục còn làm tăng turnover. Selector phải được train và freeze mà không nhìn final test.

## Kiểm tra tương quan ẩn

Đo diversity trên decision và failure, không chỉ trên return:

- correlation giữa các thay đổi target position;
- mức trùng nhau của giai đoạn drawdown lớn nhất;
- disagreement khi volatility nhảy mạnh;
- exposure chung theo symbol, nhóm tài sản và direction;
- độ nhạy khi cost tăng gấp đôi hoặc fill bị delay;
- hành vi khi một nhóm feature bị stale;
- tail loss dưới cùng một market shock.

Hai agent có daily-return correlation thấp vẫn có thể cùng liquidate một nhóm position khi stress. Đó không phải diversification về vận hành.

## Protocol chống leakage

Dùng nested chronological windows. Train từng candidate trong training window; chọn hyperparameter và selector rule trong validation window riêng; chạy quy trình chọn policy đúng một lần trên untouched test. Lặp toàn bộ walk-forward qua nhiều regime và random seed.

Phải báo cáo mọi candidate, không chỉ seed thắng. Thêm simple benchmark, equal-weight ensemble và deterministic rule strategy. Tất cả chịu cùng fee, spread, slippage, funding và latency. Nếu thiếu order-book history, phải ghi rõ fill model chỉ là approximation.

Selector cần quyền abstain. Nếu mọi candidate vi phạm risk limit, dùng input stale hoặc thấp hơn evidence threshold, output hợp lệ là không giao dịch. Ép chọn một model trong nhóm yếu biến ranking thành false confidence.

## Hợp đồng triển khai với WolfBot

Mỗi decision nên lưu:

```text
decision_time và data_cutoff_time
eligible model cùng model version
regime feature và selector version
candidate score kèm uncertainty
selected model hoặc abstain reason
proposed exposure
risk guard result
execution result
```

Selection không được bypass position, leverage, cooldown hay portfolio guard deterministic của WolfBot. Model chỉ đề xuất exposure; execution/risk layer quyết định đề xuất có hợp lệ hay không.

Promotion phải đi từ offline replay, walk-forward, Simulation, shadow decision, capped live exposure rồi mới mở rộng. Rollback phải pin được model và selector trước đó mà không retrain.

## Paper chưa chứng minh điều gì

Outperformance lịch sử trên Dow 30 không chứng minh profitability phổ quát, độ bền trên crypto/MT5 hoặc khả năng sống qua regime tương lai. Tên thuật toán cũng không tự tạo independent risk. Kết quả paper là một research design đáng tái lập, không phải production guarantee.

Ensemble mạnh không phải ensemble có nhiều agent nhất. Nó phải đo được diversity, cho phép abstain, giữ final test nguyên vẹn và giới hạn được failure path.

## Checklist nghiên cứu

1. Nêu giả thuyết riêng mà mỗi candidate bổ sung.
2. Freeze timestamp, cost và execution assumption.
3. Tách agent training, selector validation và final test.
4. Kiểm tra joint failure và tail dependence.
5. So với equal-weight và deterministic baseline.
6. Cho phép abstain và log nguyên nhân.
7. Đặt WolfBot risk control bên ngoài learned policy.
8. Promotion từng bước với artifact rollback có version.

## Nguồn chính

- Yang và cộng sự, *Deep Reinforcement Learning for Automated Stock Trading: An Ensemble Strategy*.
- Liu và cộng sự, *FinRL*.
- Liu và cộng sự, *FinRL-Meta*.

Đọc tiếp [value, policy và actor-critic](/vi/academy/value-policy-actor-critic-trading) hoặc [FinRL market environment thực tế](/vi/academy/finrl-realistic-market-environments).
