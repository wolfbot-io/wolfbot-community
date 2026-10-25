---
title: "Value, policy và actor-critic cho trading: chọn đúng action space"
description: "So sánh kỹ thuật value-based, policy-gradient và actor-critic cho discrete order, continuous allocation và trading có ràng buộc."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "18 phút"
lang: "vi"
translation_of: "academy/value-policy-actor-critic-trading"
previous_guide: "/vi/academy/ensemble-drl-regime-selection"
next_guide: "/vi/academy/point-in-time-data-feature-engineering"
related_guides: ["/vi/academy/reinforcement-learning-trading-mdp", "/vi/academy/ppo-for-trading-systems", "/vi/academy/finrl-realistic-market-environments", "/vi/docs/simulation"]
keywords: ["actor critic trading", "value based reinforcement learning trading", "policy gradient portfolio", "DQN DDPG PPO tài chính"]
citations: ["https://incompleteideas.net/book/the-book-2nd.html", "https://arxiv.org/abs/1707.06347", "https://arxiv.org/abs/2011.09607", "https://arxiv.org/abs/2411.07585"]
sitemap_priority: 0.9
---

# Value, policy và actor-critic cho trading

Chọn thuật toán phải bắt đầu từ trading decision, không phải từ xu hướng. Hệ thống chọn hold/buy/sell có action space khác hẳn hệ thống phân bổ weight cho hai mươi instrument. Ép hai bài toán vào cùng một khuôn có thể tạo learning bất ổn, order không thể execute và benchmark sai lệch.

Reinforcement learning tách environment, policy, reward và value estimate. Value-based, policy-based và actor-critic khác nhau chủ yếu ở đối tượng chúng học và cách cải thiện hành vi.

## Value-based method

Agent ước lượng action tốt đến đâu trong một state, thường qua action-value function:

```text
Q(s, a) = expected discounted return sau action a tại state s
```

Sau đó agent chọn action có value cao nhất và dùng exploration rule trong training. Cách này phù hợp với lựa chọn discrete nhỏ như hold/buy/sell hoặc chọn một strategy trong catalog cố định.

Khó khăn là combinatorics. Nếu mười asset, mỗi asset có năm position change, joint action space trở nên khổng lồ. Discretize position size còn tạo bước nhảy nhân tạo và có thể che turnover. Value estimate cũng dễ quá lạc quan khi rare action có ít dữ liệu.

## Policy-gradient method

Policy method parameterize trực tiếp action distribution. Nó có thể output xác suất cho discrete order hoặc tham số continuous allocation. Điều này phù hợp khi action cần biểu diễn position size, target exposure hoặc portfolio weight.

Policy gradient có thể tối ưu stochastic behavior nhưng estimate thường variance cao. Trading làm vấn đề nặng hơn vì reward nhiễu, serial dependence và số market regime độc lập hữu hạn. Large update có thể phá hành vi tốt trước đó, vì vậy clipped objective của PPO thường được dùng trong nghiên cứu.

Continuous output chưa chắc executable. Raw vector có thể vi phạm leverage, minimum order, cash hoặc symbol constraint. Cần deterministic projection:

```text
raw policy action
-> project thành target hợp lệ
-> áp portfolio/account limit
-> đổi target difference thành order
-> execute hoặc reject kèm lý do
```

## Actor-critic method

Actor-critic học cả policy (actor) và value estimate (critic). Critic ước lượng action/state tốt hơn kỳ vọng đến đâu; actor dùng tín hiệu đó để update policy. A2C, PPO và DDPG đều thuộc họ này nhưng khác update rule và action-space assumption.

Critic có thể giảm gradient variance, nhưng biased critic sẽ dẫn actor sai hướng. Cùng dùng một dataset không khiến lỗi của chúng độc lập. Cần theo dõi value loss, explained variance, action saturation và policy entropy cùng với return.

## Ghép method với hình học của decision

Dùng discrete value method khi action ít, loại trừ nhau và có ý nghĩa vận hành rõ. Cân nhắc stochastic policy/actor-critic khi allocation continuous hoặc exploration cần một distribution. Có thể dùng hierarchy khi trộn nhiều time scale: model chọn risk budget/strategy, deterministic logic dịch lựa chọn thành order.

Không để model tự ngầm học broker mechanics. Tick size, quantity step, reduce-only, hedging mode và margin check thuộc execution adapter có test rõ ràng.

## On-policy và off-policy

On-policy chủ yếu học từ dữ liệu do current policy tạo ra, sạch về khái niệm nhưng tốn sample. Off-policy có thể tái dùng replay data từ hành vi cũ, tăng sample efficiency nhưng thêm distribution shift. Lặp lại lịch sử tài chính trong replay buffer không tạo thêm independent regime.

Mỗi transition phải ghi behavior policy, action constraint và environment version. Khi reward hay fill model đổi, replay cũ có thể không còn đại diện cho task hiện tại.

## Ma trận đánh giá

So sánh dưới cùng điều kiện:

- cùng chronological train/validation/test window;
- cùng observation và availability timestamp;
- cùng transaction-cost/fill model;
- cùng risk và exposure constraint;
- nhiều seed và đầy đủ hyperparameter log;
- deterministic baseline và no-trade baseline;
- stress test delay fill, thiếu feature và tăng cost.

Báo cáo turnover, concentration, drawdown, tail loss và rejected action, không chỉ cumulative return. Model return cao hơn nhưng liên tục yêu cầu order bất khả thi không phải policy tốt hơn.

## Tích hợp WolfBot an toàn

Learned output là proposal kèm model version, observation cutoff, confidence diagnostic và intended target exposure. Risk guard hiện có của WolfBot vẫn có quyền quyết định. Nếu projection đổi action đáng kể, log cả raw và admissible target để phát hiện policy thường xuyên yêu cầu hành vi bị cấm.

Simulation và shadow mode đối chiếu proposed action với market outcome mà không cấp vốn. Live promotion phải giới hạn account/symbol/strategy exposure và giữ rollback một bước về model trước.

## Nghiên cứu chưa giải quyết điều gì

Không họ thuật toán nào tốt nhất cho mọi trading task. PPO ổn định ở một benchmark, DDPG tốt trên một continuous task hay DQN tốt trong discrete simulator không tự transfer qua asset, timeframe và venue. Action-space contract cùng evaluation discipline quan trọng hơn acronym.

## Nguồn chính

- Sutton và Barto, *Reinforcement Learning: An Introduction*.
- Schulman và cộng sự, *Proximal Policy Optimization Algorithms*.
- Liu và cộng sự, *FinRL*.
- *Reinforcement Learning Framework for Quantitative Trading*.

Bước tiếp theo là xây evidence base bằng [point-in-time data và feature chống leakage](/vi/academy/point-in-time-data-feature-engineering).
