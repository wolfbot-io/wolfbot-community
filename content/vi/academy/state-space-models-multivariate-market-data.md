---
title: "State-space model cho market data đa biến: Chimera bổ sung điều gì"
description: "2D state-space model học temporal, seasonal và cross-variable structure trong chuỗi market dài như thế nào, cùng cách kiểm thử mà không thổi phồng benchmark."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-time-series"
content_type: "research"
difficulty: "advanced"
estimated_time: "15 phút"
lang: "vi"
translation_of: "academy/state-space-models-multivariate-market-data"
previous_guide: "/vi/academy/lstm-xlstm-market-time-series"
next_guide: "/vi/academy/financial-llms-fingpt-data-pipeline"
related_guides: ["/vi/academy/lstm-xlstm-market-time-series", "/vi/academy/ai-trading-research-roadmap", "/vi/docs/how-to-read-backtest-results"]
keywords: ["state space model trading", "Chimera time series", "Mamba chuỗi thời gian tài chính", "dự báo market đa biến", "2D state space model"]
citations: ["https://arxiv.org/abs/2406.04320"]
sitemap_priority: 0.86
---

# State-space model cho market data đa biến

Market research hiếm khi chỉ có một sequence. Price, volume, spread, funding, open interest và asset liên quan chuyển động cùng nhau. Chimera coi multivariate time series là bài toán hai chiều: dependency tồn tại theo thời gian và giữa các biến. Thiết kế kết hợp structured recurrence có sức biểu diễn với training complexity hướng tới tuyến tính theo kích thước chuỗi.

Paper nhắc financial market như một application domain, nhưng benchmark được báo cáo trải trên forecasting, classification và anomaly detection nói chung. Đây là research candidate, không phải bằng chứng trading alpha.

## Từ state space cổ điển đến selective model

State-space model tuyến tính giữ latent state:

```text
h_t = A h_(t-1) + B x_t
y_t = C h_t + D x_t
```

State nén history; transition và observation operator quyết định thông tin tiến hóa và thành output. Deep structured SSM làm operator learnable và hiệu quả hơn. Input-dependent selective model cho behavior đổi theo sequence hiện tại thay vì dùng một transition cố định.

## Vì sao chiều thứ hai quan trọng

Với matrix có time trên một trục và variable trên trục kia, model phải trả lời:

1. History nào trong từng variable còn quan trọng?
2. Variable khác nào hữu ích cho target tại thời điểm này?

Luôn mix mọi variable dễ overfit correlation giả; không mix thì bỏ cross-market structure. Mục tiêu của Chimera là dynamic dependence: lọc variable không liên quan và học information flow khi có ích.

## Ý tưởng kiến trúc của Chimera

Paper mô tả input-dependent 2D SSM head với discretization khác nhau để nắm:

- long-term progression;
- seasonal pattern;
- dynamic autoregressive process;
- tương tác time-to-variable và variable-to-time.

2D parallel selective scan giúp train recurrence hiệu quả. Paper cũng liên hệ 2D Mamba/Mamba-2 với formulation này.

Trong dữ liệu tài chính, một model có thể cùng biểu diễn slow regime, calendar behavior lặp lại và cross-asset dependence thay đổi. Nó có cải thiện tradable objective hay không vẫn là câu hỏi thực nghiệm.

## Thiết kế variable axis

```text
microstructure:       return, spread, volume, imbalance
portfolio state:      position, cash, margin, unrealized PnL
cross-market context: index, rate, volatility, asset tương quan
calendar/context:     session, expiry, funding timestamp
```

Mỗi variable cần timestamp policy. Macro value công bố sau close không thể được align như thể có từ buổi sáng. Cross-venue clock và stale feed cần mask cùng age feature.

## Bẫy cross-variable leakage

- Venue công bố candle không cùng thời điểm.
- Revised data đi vào historical snapshot.
- Target asset leak qua aggregate chứa chính nó.
- Normalize toàn universe dùng constituent tương lai.
- Correlation feature selection fit trên test.

Hãy tạo availability matrix ghi lúc mỗi cell lần đầu quan sát được, rồi sinh training tensor từ matrix đó.

## Benchmark có liên quan đến trading

So với seasonal-naive, linear autoregression, model độc lập từng variable, LSTM/xLSTM nhỏ, Transformer/cross-variable attention đơn giản và ablation không variable mixing/seasonal head. Đo forecast theo horizon/regime, sau đó kiểm tra forecast có cải thiện một downstream decision rule cố định sau cost hay không.

Đổi cả forecast model và trading policy cùng lúc sẽ không biết gain đến từ đâu.

## Efficiency cũng là chất lượng

Ghi training throughput, peak memory, inference latency ở batch thực, context length, số variable, kết quả khi rút ngắn context, cost retrain sau drift và behavior khi variable biến mất. Model nhỏ có thể retrain/audit/serve ổn định thường tốt hơn benchmark winner quá nặng.

## Safe integration

Dùng SSM như forecast/feature service. Version chung variable schema, context length, normalization state và weights. Service trả timestamp, horizon, score/distribution và health metadata. Lớp deterministic reject output stale và áp position limit trước broker action.

## Paper chứng minh gì — và chưa chứng minh gì

Chimera báo cáo kết quả mạnh trên nhiều multivariate time-series task và lập luận lý thuyết về sức biểu diễn long-term, seasonal, dynamic autoregressive pattern. Nó chưa chứng minh live profitability, execution robustness hoặc superiority trên một exchange cụ thể.

## Nguồn chính

- Behrouz, Santacatterina và Zabih, [*Chimera: Effectively Modeling Multivariate Time Series with 2-Dimensional State Space Models*](https://arxiv.org/abs/2406.04320).

Tiếp theo: [xây time-aware data pipeline trước khi thích nghi financial language model](/vi/academy/financial-llms-fingpt-data-pipeline).
