---
title: "Hybrid LLM-Bayesian cho options: minh bạch trước tự động hóa"
description: "Kiến trúc Bayesian network do LLM đề xuất dạy gì về options research có thể giải thích, uncertainty và ranh giới execution deterministic."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "19 phút"
lang: "vi"
translation_of: "academy/hybrid-llm-bayesian-options-decisions"
previous_guide: "/vi/academy/portfolio-allocation-risk-aware-objectives"
next_guide: "/vi/academy/neural-networks-mt5-research-to-deployment"
related_guides: ["/vi/academy/financial-ai-agents-auditable-decisions", "/vi/academy/financial-llms-fingpt-data-pipeline", "/vi/academy/point-in-time-data-feature-engineering", "/vi/docs/simulation"]
keywords: ["LLM Bayesian network options trading", "explainable AI options", "options wheel AI", "quyết định AI tài chính minh bạch"]
citations: ["https://arxiv.org/abs/2512.01123", "https://arxiv.org/abs/2405.14767", "https://arxiv.org/abs/2306.06031"]
sitemap_priority: 0.9
---

# Hybrid LLM-Bayesian cho options

Large language model có thể diễn giải narrative context nhưng không đáng tin nếu được dùng như numerical decision engine không ràng buộc. Bayesian network biểu diễn conditional relationship và uncertainty, nhưng structure cùng probability table khó chỉnh thủ công cho mọi market context. Hybrid architecture giao cho mỗi thành phần một vai trò hẹp hơn.

Paper options wheel trong thư viện dùng LLM để dựng context-specific Bayesian network, chọn historical analog và giải thích factor; probabilistic inference sau đó tạo distribution rõ ràng. Đây là pattern tốt về transparency, nhưng backtest được báo cáo không phải bằng chứng rằng LLM có thể tự động giao dịch options an toàn.

## Tách model building khỏi inference

Luồng đề xuất:

```text
point-in-time market và text context
-> LLM đề xuất variable, graph và comparable history
-> schema và causal check
-> Bayesian parameter estimation
-> probabilistic inference
-> deterministic eligibility/risk check
-> recommendation, abstention hoặc bounded order proposal
```

Output có structure không tự cấp authority cho LLM. Mọi node, edge, data window và assumption phải được machine-validate và ghi lại.

## Vì sao Bayesian structure hữu ích

Bayesian network làm dependency có thể inspect. Operator có thể hỏi evidence nào thay đổi assignment probability, premium adequacy hoặc downside risk. Nó biểu diễn uncertainty thay vì nén mọi context thành opaque score.

Tuy nhiên graph không tự động là causal. LLM có thể tạo edge nghe hợp lý nhưng sai, đảo chiều quan hệ hoặc bỏ confounder. Coi generated graph là hypothesis. Dùng variable allowlist, acyclicity check, minimum sample threshold và sensitivity analysis trước inference.

## Chọn analog là rủi ro lớn

Historical case được xem là “tương tự” sẽ quyết định probability table. Chọn similarity sau khi thấy outcome gây leakage. Context thưa làm estimate bất ổn; volatility regime đổi làm analog cũ sai lệch.

Selection policy phải được freeze bằng thông tin có tại decision time. Log candidate count, effective sample size, distance distribution và excluded period. Nếu support không đủ, mở interval theo hướng bảo thủ hoặc abstain. Không để LLM âm thầm chọn subset thuận lợi.

## Options cần contract-level mechanics

Options decision phụ thuộc expiry, strike, multiplier, exercise style, settlement, liquidity, spread, early assignment, dividend, borrow và broker rule. Text model không được suy đoán các field này từ tên. Resolve từ authoritative contract metadata và reject ambiguity.

Wheel strategy còn có nghĩa vụ path-dependent. Sell put có thể dẫn đến assignment; covered call ràng buộc underlying position; rolling hiện thực hóa cost và đổi exposure. Backtest phải mô hình bid/ask execution, assignment policy và unavailable contract mà không hindsight.

## Transparency record

Mỗi recommendation cần lưu:

- data cutoff và source version;
- prompt/model version cùng generation setting phù hợp;
- variable và graph được đề xuất;
- validation change hoặc rejected edge;
- analog-selection rule và effective sample size;
- posterior distribution và sensitivity test;
- contract identifier cùng market snapshot;
- risk check, final action và outcome sau đó.

Record này hỗ trợ audit mà không phơi free-form chain-of-thought. Explanation nên dẫn observable factor và calculated probability.

## Guardrail cho hệ thống kiểu WolfBot

Trước hết dùng hybrid model cho research hoặc decision support. Deterministic code kiểm soát eligible underlying, maximum notional, collateral, concentration, expiry range và permitted order type. Model không được bật naked exposure, bypass account permission hoặc sửa portfolio limit.

Bắt buộc abstain khi graph invalid, analog thiếu, option chain stale, spread rộng, Greeks thiếu hoặc contract mapping không chắc chắn. Simulation nên replay complete option-chain snapshot nếu có; chỉ dùng contract cuối cùng được chọn tạo survivorship bias.

## Đánh giá component, không chỉ P&L

Đo graph validity, calibration của probability, analog stability, abstention quality và sensitivity khi prompt/model đổi. So với fixed Bayesian network, deterministic rule và non-LLM analog selector. Làm ablation để biết LLM thêm thông tin hay chỉ thêm variance.

Portfolio return có thể che uncalibrated probability và rare assignment risk. Báo drawdown, tail exposure, turnover, assignment/roll behavior, transaction cost và capacity. Calibration cần kiểm tra theo bucket và theo thời gian: nếu hệ thống liên tục dự báo 70%, tỷ lệ đúng phải xấp xỉ mức đó trong điều kiện tương đương.

## Paper chưa chứng minh điều gì

Paper báo một architecture và historical experiment. Nó không chứng minh live execution quality, khả năng transfer cho mọi underlying, causal correctness của generated graph hoặc safety trong unseen volatility regime. Đóng góp mạnh nhất là kiến trúc: LLM đề xuất interpretable model, sau đó validate và constrain trước inference/execution.

## Nguồn chính

- Kuang và Lin, *A Hybrid Architecture for Options Wheel Strategy Decisions*.
- Yang và cộng sự, *FinRobot*.
- Yang và cộng sự, *FinGPT*.

Đọc [financial AI agent có thể audit](/vi/academy/financial-ai-agents-auditable-decisions) hoặc [neural network từ research tới MT5](/vi/academy/neural-networks-mt5-research-to-deployment).
