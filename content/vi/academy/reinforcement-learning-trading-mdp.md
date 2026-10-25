---
title: "Reinforcement learning cho trading: thiết kế MDP, state, action và reward"
description: "Hướng dẫn kỹ thuật về cách mô hình hóa trading thành Markov decision process, gồm partial observability, transaction cost, reward design và evaluation chống leakage."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 phút"
lang: "vi"
translation_of: "academy/reinforcement-learning-trading-mdp"
previous_guide: "/vi/academy/ai-trading-research-roadmap"
next_guide: "/vi/academy/ppo-for-trading-systems"
related_guides: ["/vi/academy/ai-trading-research-roadmap", "/vi/academy/ppo-for-trading-systems", "/vi/academy/finrl-realistic-market-environments", "/vi/docs/simulation", "/vi/docs/risk-controls"]
keywords: ["reinforcement learning trading", "Markov decision process trading", "reward function trading", "state action reward trading", "AI định lượng"]
citations: ["https://incompleteideas.net/book/the-book-2nd.html", "https://arxiv.org/abs/2411.07585", "https://arxiv.org/abs/2011.09607"]
sitemap_priority: 0.9
---

# Reinforcement learning cho trading: thiết kế MDP trước khi chọn agent

Quyết định reinforcement learning quan trọng nhất xuất hiện trước khi chọn PPO, A2C hay DDPG: phải mô hình hóa bài toán thành environment. Agent sẽ tối ưu đúng environment nó nhận, kể cả fill phi thực tế, biến risk bị thiếu và feature vô tình nhìn thấy tương lai.

## Contract của MDP

Markov decision process thường viết là `(S, A, P, R, gamma)`:

- `S`: state policy được quan sát.
- `A`: action policy được phép chọn.
- `P`: động lực chuyển từ state này sang state kế.
- `R`: reward cho một transition.
- `gamma`: mức coi trọng reward tương lai.

Trong trading, `P` không phải simulator vật lý stationary. Historical replay chỉ cho một đường đi đã xảy ra; chính order của policy có thể làm thay đổi cost và fill. Mục tiêu thực tế là công khai mọi approximation và kiểm tra độ nhạy của policy với chúng.

## State: policy thật sự biết gì

```text
market:     lagged return, volatility, volume, spread, regime feature
portfolio:  cash, position, average entry, unrealized PnL, margin
risk:       exposure, drawdown, concentration, limit còn lại
execution:  open order, fill gần nhất, latency, rejection state
context:    thời gian, venue status, point-in-time text feature
```

Indicator giá thôi chưa đủ. Hai portfolio nhìn cùng candle có thể cần action ngược nhau vì inventory và margin khác nhau.

Market là partially observable: ý định của participant khác, hidden liquidity và regime tương lai đều không biết. History window, recurrent model hay belief state có thể giảm vấn đề nhưng không biến thị trường thành Markov hoàn hảo. Câu hỏi đúng là state có đủ cho quyết định bị giới hạn đang mô hình hóa hay không.

## Action: kiểm soát chính xác hơn thay vì chỉ dự báo

| Thiết kế | Ví dụ | Rủi ro chính |
|---|---|---|
| Discrete | buy, hold, sell | Bỏ qua quantity và inventory nếu định nghĩa sơ sài |
| Continuous order | signed quantity trong `[-q, q]` | Turnover cao và resize thiếu ổn định |
| Target position | exposure mong muốn trong `[-1, 1]` | Cần lớp deterministic đổi target thành order hợp lệ |

Target position thường dễ audit hơn. Policy đề xuất exposure; execution layer áp dụng lot size, leverage, position và venue constraint. Policy không nên tạo raw exchange payload.

## Reward: đặc tả mà agent sẽ tìm cách khai thác

Gross PnL là reward yếu vì bỏ qua con đường tạo ra nó. Có thể bắt đầu từ biến động portfolio ròng:

```text
r_t = delta_equity
      - fee
      - spread_and_slippage
      - lambda_turnover * turnover
      - lambda_risk * risk_penalty
      - constraint_violation
```

Mỗi term đổi hành vi. Drawdown penalty quá lớn có thể khiến agent giữ cash mãi. Turnover penalty yếu tạo giao dịch liên tục. Reward kiểu Sharpe trên window ngắn dễ nhiễu và không additive. Hãy log từng thành phần reward riêng.

Hard safety constraint không được chỉ là reward âm. Max leverage, permission cấm, stale-data gate và portfolio loss lock phải nằm trong guard deterministic có quyền reject action.

## Thời gian và discount factor

`gamma` chỉ có nghĩa khi gắn với timestep. Ở bar 5 phút, `gamma=0.99` có effective horizon ngắn hơn nhiều so với bar ngày. Phải báo cáo cả timestep và horizon dự kiến. Không sao chép hyperparameter từ benchmark có temporal scale khác.

## Environment an toàn về chronology

Tại thời điểm `t`, mọi feature phải thật sự có sẵn. Leakage thường đến từ:

- normalize bằng thống kê toàn dataset;
- dùng fundamental đã revise trước ngày công bố;
- gán news theo ngày bài thay vì ingestion timestamp;
- chọn universe bằng constituent tương lai;
- fill ở chính giá close dùng để tạo action;
- tune reward weight trên final test.

Hãy chia train, validation và test theo thời gian; fit preprocessing chỉ trên train window.

## Checklist simulator

- Fee, bid/ask spread và slippage phụ thuộc venue và size.
- Order có thể reject, partial fill, expire hoặc nằm open.
- Cash và inventory chỉ đổi sau fill.
- Delisting và constituent thay đổi được biểu diễn point in time.
- Outage và missing data phải fail closed.
- Borrow, funding và margin cost được tính khi liên quan.
- Baseline đi qua cùng cost model.

## Từ policy output đến WolfBot

```text
RL policy -> target exposure có timestamp
          -> validation và risk guard deterministic
          -> order planner
          -> broker adapter
          -> fill reconciliation và audit log
```

Policy có thể sai; hệ xung quanh phải bounded và observable. Test contract trong [Simulation](/vi/docs/simulation), rồi áp dụng [risk controls](/vi/docs/risk-controls) độc lập với learned reward.

## Paper chứng minh gì — và chưa chứng minh gì

Nghiên cứu RL framework cho thấy cách tổ chức indicator, preprocessing, action và reward. FinRL đưa ra kiến trúc environment-agent-application tái sử dụng được, có cost, liquidity và risk aversion. Đây là nền tảng kỹ thuật; chưa phải bằng chứng policy từ một universe lịch sử sẽ có lợi nhuận khi regime, execution và participant thay đổi.

## Nguồn chính

- Sutton và Barto, [*Reinforcement Learning: An Introduction*](https://incompleteideas.net/book/the-book-2nd.html).
- Yasin và Gill, [*Reinforcement Learning Framework for Quantitative Trading*](https://arxiv.org/abs/2411.07585).
- Liu et al., [*FinRL*](https://arxiv.org/abs/2011.09607).

Tiếp theo: [PPO thay đổi trading policy thế nào mà không cho update vượt kiểm soát](/vi/academy/ppo-for-trading-systems).
