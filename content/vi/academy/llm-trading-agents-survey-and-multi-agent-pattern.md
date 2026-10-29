---
title: "LLM trading agent: survey 27 paper và pattern multi-agent kiểu công ty trading"
description: "Survey 27 paper LLM-agent cho trading và TradingAgents, framework mô phỏng tranh luận bull/bear và vai trò risk-management của một công ty trading thật — và vì sao vai trò 'risk team' trong LLM agent vẫn chưa phải risk control deterministic."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "17 phút"
lang: "vi"
translation_of: "academy/llm-trading-agents-survey-and-multi-agent-pattern"
previous_guide: "/vi/academy/deep-rl-crypto-portfolio-management"
next_guide: "/vi/academy/llm-sentiment-as-a-trading-signal"
related_guides: ["/vi/academy/financial-ai-agents-auditable-decisions", "/vi/academy/ai-agent-architecture-model-tools-orchestration", "/vi/docs/risk-controls", "/security"]
keywords: ["survey LLM trading agent", "TradingAgents multi-agent framework", "tranh luận bull bear agent trading", "LLM agent risk management", "kiến trúc financial trading agent"]
citations: ["https://arxiv.org/abs/2408.06361", "https://arxiv.org/abs/2412.20138"]
sitemap_priority: 0.9
---

# LLM trading agent: survey 27 paper và pattern multi-agent kiểu công ty trading

[Platform phân lớp của FinRobot](/vi/academy/financial-ai-agents-auditable-decisions) và [kiến trúc agent tổng quát](/vi/academy/ai-agent-architecture-model-tools-orchestration) đã nêu trong series này mô tả cách một LLM agent tới được một quyết định. Hai paper nữa mở rộng lăng kính: một survey 27 paper về LLM agent áp dụng cụ thể cho financial trading, và TradingAgents, một framework tổ chức quyết định của agent quanh một ý tưởng cấu trúc hoàn toàn khác — vai trò và tranh luận nội bộ của một công ty trading thật, thay vì một agent reasoning đơn với tool.

## Survey 27 paper LLM trading agent nói gì

Ding, Li, Wang, Chen, Guo và Zhang nêu thẳng câu hỏi động lực thật của ngành: LLM agent có vượt được trader chuyên nghiệp không? Họ coi đây rõ ràng là câu hỏi mở, không phải điều survey trả lời dứt khoát. Review 27 paper nghiên cứu LLM cho financial trading — bảy trong số đó dùng từ "agent" ngay tiêu đề — survey tổng hợp pattern architecture chung, data input dùng (tin tức, giá, fundamental, sentiment mạng xã hội), và hiệu năng backtest báo cáo xuyên literature, đồng thời nêu tên thách thức thật, chưa giải quyết của ngành thay vì chỉ gom kết quả tích cực.

Điểm cuối đó quan trọng cho cách đọc survey. Một literature review của 27 backtest tự báo cáo, theo cấu trúc, là tổng hợp điều mỗi paper riêng claim về chính nó — survey có thể so sánh architecture và báo cáo điều mỗi paper nói, nhưng không thể audit độc lập liệu backtest của paper cụ thể nào có sống sót qua kiểu degradation check đã nêu trong [nghiên cứu overfitting của series này](/vi/academy/stock-prediction-research-and-the-overfitting-trap). Giá trị của survey nằm ở vẽ bản đồ design space và nêu tên vấn đề mở, không phải chứng thực bất kỳ hệ thống review cụ thể nào sẵn sàng production.

## TradingAgents: architecture dựng quanh sự bất đồng

TradingAgents đề xuất một pattern khác hẳn về cấu trúc so với một agent đơn gọi tool. Nó gán agent LLM-powered vai trò chuyên môn mô phỏng công ty trading thật — fundamental analyst, sentiment analyst, technical analyst — rồi thêm **Bull và Bear researcher agent** có nhiệm vụ rõ ràng là tranh luận quan điểm đối lập về điều kiện thị trường, một team risk-management riêng giám sát exposure, và trader với risk profile đa dạng tổng hợp tranh luận cùng dữ liệu lịch sử thành quyết định cuối. Đây là cơ chế khác biệt có ý nghĩa để bộc lộ bất đồng và bất định so với một chuỗi reasoning đơn: thay vì một model tự thuyết phục mình tới kết luận, architecture về mặt cấu trúc buộc một lập luận đối lập phải được đưa ra trước khi tới quyết định trade, gần cách một investment committee thật vận hành hơn cách một analyst đơn độc làm việc. Paper báo cáo cải thiện cumulative return, Sharpe ratio và maximum drawdown so với baseline model trong backtest của chính nó, và code của framework công khai trên GitHub.

## Vì sao lựa chọn architecture tự nó không phải cơ chế an toàn

Nhiều agent tranh luận hơn không tự nó bảo đảm risk-taking hiệu chỉnh tốt hơn. Vai trò "risk management team" trong một LLM multi-agent framework vẫn, về mặt cơ chế, là nhiều output LLM hơn — text sinh bởi một model đóng vai — không phải risk control deterministic, trừ khi output đó được validate và enforce bằng code ngoài model, đúng như bài [kiến trúc agent tổng quát](/vi/academy/ai-agent-architecture-model-tools-orchestration) đã nêu cho pattern Functions. Một agent bear-case hệ thống kém thuyết phục hơn agent bull-case (do thiết kế prompt, bias model, hay đơn giản lập luận nào tình cờ sinh text nghe thuyết phục hơn) có thể tạo consensus sai tự tin dễ như một agent đơn, và cấu trúc thêm vào cũng thêm chi phí thật: nhiều model call hơn nghĩa nhiều latency hơn, nhiều inference cost hơn, và nhiều bề mặt nơi output một vai trò âm thầm bias vai trò khác — không điều nào được giải quyết chỉ bằng thêm vai trò thay vì ranh giới enforce tốt hơn.

## Ranh giới thực tế vẫn áp dụng

Khung capability-level đã dựng sẵn cho financial AI agent — Observe, Analyze, Recommend, Simulate, Execute, mặc định quyền thấp nhất cần thiết — áp dụng không đổi cho pattern multi-agent kiểu công ty trading. Một "risk team" kiểu TradingAgents có thể hữu ích ở cấp Analyze hoặc Recommend, bộc lộ finding có cấu trúc và cờ đỏ mối lo để con người review. Nó không nên bị nhầm với [risk control deterministic của chính WolfBot](/vi/docs/risk-controls), tồn tại chính xác vì output LLM, dù role prompting quanh nó có cấu trúc tốt tới đâu, không phải thay thế cho position limit, TP/SL và exposure guard enforce bằng code.

## Paper chứng minh gì — và chưa chứng minh gì

Survey chứng minh LLM trading agent là một hướng nghiên cứu đang hoạt động, đa dạng về cấu trúc, với thách thức thật, chưa giải quyết, review qua 27 paper — nó không chứng thực độc lập backtest của bất kỳ hệ thống review cụ thể nào, và câu hỏi trung tâm nó nêu (LLM agent có vượt trader chuyên nghiệp không) vẫn rõ ràng còn mở. TradingAgents chứng minh một architecture multi-agent mô phỏng cấu trúc vai trò công ty trading thật, kèm tranh luận bull/bear gắn sẵn, có thể vượt baseline model trong backtest của chính nó — nó không chứng minh bản thân pattern architecture, độc lập với risk control enforce bằng code ngoài agent, đủ để quản lý vốn thật an toàn.

## Nguồn chính

- Ding, Li, Wang, Chen, Guo và Zhang, [*Large Language Model Agent in Financial Trading: A Survey*](https://arxiv.org/abs/2408.06361).
- Xiao, Sun, Luo và Wang, [*TradingAgents: Multi-Agents LLM Financial Trading Framework*](https://arxiv.org/abs/2412.20138).

Tiếp theo: [xem sentiment tin tức do LLM trích xuất chuyển thành trading strategy thật ra sao, kèm hạch toán chi phí giao dịch thật](/vi/academy/llm-sentiment-as-a-trading-signal).
