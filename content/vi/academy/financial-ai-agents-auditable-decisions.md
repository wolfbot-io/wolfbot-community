---
title: "Financial AI agent: FinRobot, quyết định hybrid LLM và khả năng audit"
description: "Cách thiết kế financial AI agent với bounded tool, risk control deterministic và reasoning hybrid LLM-Bayesian thay vì tạo lệnh black-box."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "18 phút"
lang: "vi"
translation_of: "academy/financial-ai-agents-auditable-decisions"
previous_guide: "/vi/academy/financial-llms-fingpt-data-pipeline"
next_guide: "/vi/academy/rlops-scalable-training-finrl-podracer"
related_guides: ["/vi/academy/financial-llms-fingpt-data-pipeline", "/vi/academy/ai-trading-research-roadmap", "/vi/docs/risk-controls", "/security", "/vi/docs/reading-bot-logs-like-an-operator"]
keywords: ["financial AI agent", "giải thích FinRobot", "LLM trading agent", "AI trading audit được", "LLM Bayesian network trading"]
citations: ["https://arxiv.org/abs/2405.14767", "https://arxiv.org/abs/2512.01123"]
sitemap_priority: 0.9
---

# Financial AI agent: hiểu context mà không giao quyền kiểm soát

AI agent không chỉ là chatbot có broker tool. Nó là operating loop quan sát, reasoning, gọi tool, lưu state và có thể đề xuất action. Trong finance, mỗi layer thêm permission và failure mode. FinRobot cho một kiến trúc phân lớp hữu ích; nghiên cứu hybrid LLM-Bayesian minh họa cách tách language reasoning khỏi quantitative inference deterministic.

## Bốn lớp của FinRobot

1. **Financial AI Agents:** workflow chuyên môn phân rã financial task.
2. **Financial LLM Algorithms:** chiến lược model theo task.
3. **LLMOps và DataOps:** data, training, fine-tuning và operations.
4. **Foundation Models:** nhiều LLM nền cho layer trên.

Phân tách này quan trọng vì financial application lớn hơn model. Data freshness, tool contract, memory, evaluation và observability quyết định workflow có đáng tin không.

## Định nghĩa quyền agent trước prompt

| Cấp | Hành vi được phép |
|---|---|
| Observe | đọc public data hoặc portfolio data được duyệt |
| Analyze | tạo finding có cấu trúc và evidence |
| Recommend | đề xuất bounded action cho con người review |
| Simulate | chỉ gửi vào simulation cô lập |
| Execute | chuyển target đã validate vào execution deterministic |

Mặc định dùng quyền thấp nhất. Analysis agent không cần trade credential; simulation agent không cần live endpoint; withdrawal permission không bao giờ cần cho trading model.

## Tool contract thay cho free-form autonomy

```json
{
  "tool": "propose_target_exposure",
  "account_id": "opaque-id",
  "symbol": "BTCUSDT",
  "target_fraction": 0.05,
  "valid_until": "timestamp",
  "evidence_ids": ["market-snapshot-id", "news-event-id"],
  "model_version": "agent-policy-version"
}
```

Tool này không đặt order. Nó validate schema, freshness, account scope và bound, rồi đưa proposal qua portfolio guard và order planner.

## Vì sao end-to-end LLM trading mong manh

LLM có thể hallucinate observation, quyết định không nhất quán cho cùng state, tính sai probability/position size, làm theo malicious instruction trong retrieved text, bỏ sót constraint dài hoặc đổi behavior khi hosted model update.

Prompt “không vượt 5%” không phải position limit. Enforce giới hạn bằng code sau khi parse output.

## Pattern hybrid model-first

Paper options wheel cho LLM vai trò khác: model constructor thay vì final decision-maker. LLM hiểu context và đề xuất Bayesian-network structure. Historical data populate conditional probability table; deterministic inference tạo probability và risk metric.

```text
unstructured context
-> LLM extract variable và đề xuất relationship
-> schema/graph validation
-> point-in-time data populate formal model
-> deterministic inference/optimization
-> hard risk constraint
-> recommendation hoặc bounded target
```

Pattern này tách contextual flexibility khỏi numerical authority.

## Yêu cầu auditability

Mỗi decision cần lưu input snapshot/timestamp, retrieved document/evidence span, prompt/model version, tool call đã validate, generated graph, calculation deterministic, constraint result, final proposal/rejection/execution ID và outcome sau đó mà không sửa original record.

Log phải replay được decision nhưng không lộ secret. Xem [đọc log](/vi/docs/reading-bot-logs-like-an-operator) và [security](/security).

## Validate model do LLM tạo

1. Chỉ variable được duyệt xuất hiện.
2. Edge tuân temporal direction.
3. Graph acyclic.
4. Conditional table đủ sample support.
5. Probability normalize.
6. Output ổn định trước thay đổi prompt nhỏ.
7. Expert graph đơn giản vẫn là baseline.
8. Model selection không nhìn final test.

Explainability không đồng nghĩa correctness. Một giải thích rõ có thể mô tả trung thực một model sai.

## Đánh giá component riêng

| Component | Evaluation |
|---|---|
| extraction | entity/event/evidence accuracy |
| graph proposal | structural validity và expert review |
| probability model | calibration, log loss, regime stability |
| recommendation | utility dưới cost/constraint cố định |
| agent workflow | tool success, abstention, incident rate |
| portfolio | net return, drawdown, turnover, tail risk |

End-to-end PnL không chỉ ra component nào hỏng.

## Ranh giới thực tế với WolfBot

Agent có thể hỗ trợ research, tóm tắt account health hoặc đề xuất strategy config. Live order authority phải nằm sau explicit enablement, [risk controls](/vi/docs/risk-controls) deterministic, credential theo account và reconciliation đầy đủ. Safe failure mode là không hành động và có lỗi quan sát được.

## Paper chứng minh gì — và chưa chứng minh gì

FinRobot trình bày platform phân lớp cho specialized financial agent. Paper hybrid options báo cáo kiến trúc Bayesian do LLM tạo và historical result cho một wheel strategy. Kết quả đó không phải bảo đảm chung cho options, crypto hay WolfBot. Bài học chuyển giao mạnh nhất là dùng LLM cho contextual structure, còn formal model và hard control sở hữu quantitative decision.

## Nguồn chính

- Yang et al., [*FinRobot*](https://arxiv.org/abs/2405.14767).
- Kuang và Lin, [*A Hybrid Architecture for Options Wheel Strategy Decisions*](https://arxiv.org/abs/2512.01123).

Tiếp theo: [vận hành training và promotion như một RLOps system tái lập được](/vi/academy/rlops-scalable-training-finrl-podracer).
