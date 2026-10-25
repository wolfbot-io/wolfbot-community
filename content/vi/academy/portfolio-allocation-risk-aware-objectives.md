---
title: "AI portfolio allocation: objective, ràng buộc rủi ro và rebalancing"
description: "Cách thiết kế portfolio action và reward quanh turnover, concentration, drawdown cùng ràng buộc executable thay vì chỉ tối ưu raw return."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-foundations"
content_type: "research"
difficulty: "advanced"
estimated_time: "18 phút"
lang: "vi"
translation_of: "academy/portfolio-allocation-risk-aware-objectives"
previous_guide: "/vi/academy/point-in-time-data-feature-engineering"
next_guide: "/vi/academy/hybrid-llm-bayesian-options-decisions"
related_guides: ["/vi/academy/reinforcement-learning-trading-mdp", "/vi/academy/finrl-realistic-market-environments", "/vi/academy/value-policy-actor-critic-trading", "/vi/docs/risk-controls"]
keywords: ["AI portfolio allocation", "risk aware reward trading", "reinforcement learning portfolio constraint", "turnover drawdown objective"]
citations: ["https://arxiv.org/abs/2011.09607", "https://arxiv.org/abs/2112.06753", "https://github.com/AI4Finance-Foundation/FinRL-Tutorials", "https://arxiv.org/abs/2411.07585"]
sitemap_priority: 0.9
---

# AI portfolio allocation

Portfolio agent không chỉ dự đoán direction. Nó chọn một vector exposure mà các thành phần tương tác qua cash, leverage, correlation, margin và execution. Tối ưu raw portfolio return thường khuyến khích concentration và turnover nếu risk cùng implementation cost không được biểu diễn rõ.

## Định nghĩa action trước khi chọn model

Action có thể là trade quantity, position change, target weight hoặc risk budget. Target weight thuận tiện cho nghiên cứu nhưng cần deterministic translation thành order. Phải định nghĩa cash có phải một asset không, short weight có được phép không, leverage đo thế nào và rebalancing xảy ra lúc nào.

Long-only simplex dùng:

```text
w_i >= 0
sum(w_i) <= 1
```

Leveraged long/short portfolio cần gross/net exposure constraint, symbol limit và margin assumption. Neural-network output phải được project vào admissible set trước order generation. Log cả raw và projected value để thấy model thường xuyên yêu cầu điều bất hợp lệ hay không.

## Reward là bản đặc tả hành vi

Raw equity change đơn giản nhưng không đầy đủ. Research reward có thể gồm:

```text
net portfolio return
- transaction và funding cost
- turnover penalty
- concentration penalty
- downside hoặc drawdown penalty
- constraint violation penalty
```

Mỗi term thay đổi hành vi. Turnover penalty quá lớn có thể giữ position stale; drawdown penalty có thể làm policy bỏ lỡ recovery; ratio như one-step Sharpe dễ bơm noise. Phải báo magnitude và làm ablation cho từng term.

Không chỉ mã hóa hard safety limit bằng soft penalty. Maximum leverage, forbidden symbol và account loss lock phải là deterministic constraint. Model có thể chấp nhận penalty nếu estimated reward cao hơn.

## Rebalancing và path dependence

Hai target portfolio có endpoint giống nhau nhưng cost khác vì một đường đi cần nhiều giao dịch hơn. State phải chứa current holding, available cash và pending order liên quan. Nếu không, policy không phân biệt mở exposure với duy trì exposure.

Drawdown và margin phụ thuộc path. Cần đủ account state hoặc recurrent policy, đồng thời không giả định Markov property nếu chưa kiểm tra. Partial observability phải được ghi như limitation.

## Baseline làm lộ complexity thừa

So với cash/no-trade, equal weight, buy-and-hold, periodic rebalancing và classical optimizer phù hợp. Dùng cùng universe, execution time và cost. Policy phức tạp thắng frictionless baseline nhưng thua equal weight đã tính cost chưa chứng minh operational value.

Attribution phải tách asset selection, market beta, leverage, timing và cost. Báo turnover, gross/net exposure, concentration, drawdown duration, tail loss và capacity assumption cùng return metric.

## Correlation không ổn định

Historical covariance có thể đổi nhanh. Feature/reward từ window ngắn nhiễu; window dài có thể stale. Stress policy với correlation spike, volatility scaling error và một asset không còn tradable.

Đếm symbol không đủ để chứng minh diversification. Mười crypto position có thể cùng mang một market factor; nhiều MT5 CFD có thể map vào underlying risk liên quan. Group limit và factor exposure check phải nằm ngoài learned policy.

## Walk-forward protocol

Fit data transformation, policy và reward hyperparameter trong chronological train/validation window. Freeze trước từng test window. Tính fee, spread, slippage, funding và minimum order rule. Reject order không đáp ứng broker constraint thay vì âm thầm round thành favorable fill.

Lặp qua nhiều mức initial capital vì minimum size và rounding là nonlinear. Chạy nhiều seed và báo cả distribution lẫn failed training run. Stress doubled cost và delayed execution.

## Ranh giới triển khai WolfBot

Model đề xuất target exposure. Portfolio controller kiểm tra account mode, current position, pending order, leverage, symbol cap và portfolio lock. Executor đổi admissible delta thành broker-specific order rồi lưu fill/rejection.

Bắt đầu trong Simulation, sau đó shadow proposal trên live data. Promotion cần capped exposure và rollback về model/feature/reward version đã biết. Nếu portfolio state thiếu hoặc stale, fail closed thay vì đoán cash hay position.

## Nguồn chưa chứng minh điều gì

Ví dụ portfolio của FinRL và các kết quả RL framework minh họa research workflow, không chứng minh allocation superiority phổ quát. Historical risk-adjusted performance không thiết lập capacity, live fill hoặc robustness trước correlation regime mới. Reward design vẫn là hypothesis cần ablation và forward evidence.

## Checklist portfolio research

1. Định nghĩa action semantic và admissible set.
2. Đưa current holding và cash vào state.
3. Tách soft learning objective khỏi hard safety limit.
4. Tính mọi cost và funding quan sát được.
5. So với simple costed baseline.
6. Attribute beta, leverage, selection và timing.
7. Stress correlation, liquidity và rounding.
8. Log raw target, projected target và execution outcome.

## Nguồn chính

- Liu và cộng sự, *FinRL* và *FinRL-Meta*.
- AI4Finance Foundation, *FinRL Portfolio Allocation Tutorials*.
- *Reinforcement Learning Framework for Quantitative Trading*.

Tiếp theo, xem [hybrid decision minh bạch cho options](/vi/academy/hybrid-llm-bayesian-options-decisions).
