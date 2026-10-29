---
title: "Kiến trúc AI agent: model, tool, orchestration và ranh giới an toàn cho trading"
description: "Whitepaper Agents 2024 của Google định nghĩa blueprint chung model/tool/orchestration đằng sau phần lớn AI agent — và vì sao một trading agent thật cần ranh giới chặt hơn blueprint đó tự cung cấp."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 phút"
lang: "vi"
translation_of: "academy/ai-agent-architecture-model-tools-orchestration"
previous_guide: "/vi/academy/financial-ai-agents-auditable-decisions"
next_guide: "/vi/academy/rlops-scalable-training-finrl-podracer"
related_guides: ["/vi/academy/financial-ai-agents-auditable-decisions", "/vi/academy/hybrid-llm-bayesian-options-decisions", "/vi/academy/ai-trading-research-roadmap", "/vi/docs/risk-controls", "/security"]
keywords: ["kiến trúc AI agent", "ReAct loop giải thích", "orchestration layer agent", "function calling vs extensions", "ranh giới an toàn AI trading agent"]
citations: ["https://www.kaggle.com/whitepaper-agents"]
sitemap_priority: 0.9
---

# Kiến trúc AI agent: model, tool, orchestration và ranh giới an toàn cho trading

Phần lớn sản phẩm "AI agent" — chat assistant đặt vé máy bay, coding agent, hay trading copilot — đều dựng từ cùng một blueprint ba phần: một model, một tập tool, và một orchestration layer loop giữa chúng. Whitepaper *Agents* 2024 của Google mô tả blueprint này rõ ràng, không gắn riêng vendor nào. Đây không phải paper về finance. Đọc cùng [financial-ai-agents-auditable-decisions](/vi/academy/financial-ai-agents-auditable-decisions) (nói về research agent chuyên finance), ta thấy rõ pattern chung dừng ở đâu và trading agent thật cần ranh giới chặt hơn gì so với blueprint tự cho.

## Ba thành phần, một loop

Cognitive architecture trong paper có ba phần thiết yếu:

1. **Model** — language model đóng vai trò decision maker của agent, theo reasoning framework như ReAct, Chain-of-Thought hoặc Tree-of-Thoughts.
2. **Tool** — Extensions, Functions và Data Stores, cách duy nhất model chạm được thứ ngoài training data.
3. **Orchestration layer** — một quá trình cyclical: observe, reason, act, observe kết quả, lặp lại tới khi đạt goal hoặc tới stopping point.

Orchestration layer là nơi complexity thật sự nằm. Nó có thể là một rule đơn giản, hoặc một loop mở, cứ gọi tool tiếp tục tới khi tự quyết là xong.

## ReAct loop, cụ thể

Paper đi qua từng bước một chu kỳ ReAct: **Question** từ user đưa vào model; model sinh **Thought** về việc cần làm tiếp; chọn **Action** (tool nào, nếu có); đưa ra **Action input**; đọc **Observation** (kết quả tool trả về); chuỗi Thought/Action/Observation này có thể lặp N lần trước khi trả **Final answer**. Không có gì trong loop này giới hạn số lần lặp, tool nào được phép chain với nhau, hay chuyện gì xảy ra nếu một Thought sớm đã sai. Loop này là cơ chế reasoning, không phải cơ chế safety.

## Agent khác model: điều thật sự thay đổi

Bảng so sánh agent-vs-model trong paper đáng đọc qua lăng kính trading:

| Điều thay đổi khi thêm agent | Vì sao quan trọng với trading system |
|---|---|
| Session history được quản lý qua nhiều turn | Agent có thể hành động dựa trên điều quyết định từ vài turn trước — một Thought cũ sai lệch có thể âm thầm bias mọi Action sau đó nếu không log và replay được toàn bộ session. |
| Tool được implement native | Tool giờ là thứ first-class, gọi được thật sự, không chỉ là text model tình cờ sinh ra. |
| Có cognitive architecture (ReAct, CoT, framework dựng sẵn) | Agent có thể tiếp tục reasoning và hành động *mà không cần thêm input từ con người* tới khi tự quyết dừng. |

Một model thuần chỉ trả lời đúng một prompt. Một agent được thiết kế rõ ràng để tiếp tục.

## Ba loại tool — và vì sao "Functions" an toàn hơn cho trading

Paper mô tả ba loại tool. **Extensions** dạy model cách gọi trực tiếp một API đã biết, qua example, nên chính agent thực thi request. **Data Stores** cho model context mới, retrieve được (RAG) thay vì chỉ dùng training data đã đóng băng. **Functions** hoạt động khác, có chủ đích: model không gọi gì cả. Nó trả về một payload có cấu trúc, typed (ví dụ `{"name": "display_cities", "args": {...}}`), và **code phía client** quyết định có chạy, chạy khi nào và chạy thế nào — điều này cũng có nghĩa credential của API không bao giờ cần nằm gần model-facing layer.

Pattern Function này — model đề xuất một action có cấu trúc, bounded; code deterministic ngoài model validate và thực thi — về kiến trúc chính là tách biệt mà [financial-ai-agents-auditable-decisions](/vi/academy/financial-ai-agents-auditable-decisions) mô tả là hình dạng đúng cho trading agent: model không bao giờ giữ exchange credential hay gọi thẳng exchange endpoint, nó chỉ sinh ra một proposal mà một layer riêng, audit được, kiểm tra theo risk limit trước khi bất cứ gì thực thi.

## Ba cách model học dùng tool nào

Paper nêu ba cách cho model kiến thức tool cụ thể theo task: **in-context learning** (example đưa trong prompt tại inference time, đúng cách ReAct hoạt động), **retrieval-based in-context learning** (example và tool kéo động từ external store, như pattern data-store RAG ở trên), và **fine-tuning** (train trên tập example lớn hơn trước khi có user query nào). Không cách nào trong ba dạy model toán position-sizing chặt chẽ hay rule max-drawdown. Cả ba chỉ cải thiện *chọn tool nào* và *điền argument hợp lý tới đâu* — giới hạn số học an toàn vẫn phải enforce bằng code ngoài model, bất kể dùng learning method nào.

## Vì sao trading agent cần ranh giới chặt hơn blueprint cho

Chính điểm khác biệt paper nêu — agent giữ history được quản lý và reasoning qua nhiều turn mà không cần thêm input con người tới khi tự dừng — là đúng bề mặt cần một capability ceiling rõ ràng trước khi cho lại gần live order. Một ReAct loop không giới hạn gắn kèm một Function trading là, về mặt cơ chế, đã đủ để đặt order thật: whitepaper mô tả cách dựng loop đó, không phải dừng nó ở đâu. Đây chính xác là lý do MCP AI Agent interface của WolfBot nằm dưới pattern chung này chứ không nằm trên nó — nó expose một tập giới hạn trading cố định, do owner định nghĩa, policy-controlled, cùng một approval workflow, thay vì để agent kết nối tự reasoning tới một Action không giới hạn.

## Paper chứng minh gì — và chưa chứng minh gì

Paper mô tả kiến trúc agent rõ ràng, chung, kèm code mẫu thật chạy trên một model family cụ thể. Nó không claim gì về trading hay chất lượng quyết định tài chính, và không đề xuất ranh giới risk nào — việc đó để ngỏ hoàn toàn cho người deploy agent. Giá trị thật của paper ở đây là vocabulary và cấu trúc: "model," "tool," "orchestration layer" và ReAct loop là ngôn ngữ chung phần lớn agent framework (kể cả LangChain) dựng trên, giúp thấy rõ layer nào mà risk-safety constraint của WolfBot phải nằm trong đó.

## Nguồn chính

- Wiesinger, Marlow và Vuskovic, [*Agents*](https://www.kaggle.com/whitepaper-agents) (Google, Kaggle 5-Day Gen AI Intensive whitepaper series, tháng 9/2024).

Tiếp theo: [xem training tái lập và promotion trở thành một RLOps discipline riêng ra sao](/vi/academy/rlops-scalable-training-finrl-podracer).
