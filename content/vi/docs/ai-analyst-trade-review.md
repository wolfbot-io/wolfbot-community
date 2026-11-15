---
title: "WolfBot AI Analyst — Review giao dịch riêng tư bằng số liệu kiểm chứng"
description: "AI Analyst của WolfBot Community review lịch sử thật, chỉ ra điểm hiệu quả/rủi ro và giữ metric deterministic tách khỏi AI commentary."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "11 phút"
lang: "vi"
translation_of: "docs/ai-analyst-trade-review"
previous_guide: "/vi/docs/bot-control-and-live-monitoring"
next_guide: "/vi/docs/mcp-ai-agents"
related_guides: ["/vi/docs/how-to-read-trading-performance", "/vi/docs/reading-first-month-results", "/vi/academy/financial-ai-agents-auditable-decisions", "/security"]
keywords: ["WolfBot AI Analyst", "AI review giao dịch", "phân tích trading riêng tư", "AI trading self hosted"]
sitemap_priority: 0.9
---

# AI commentary dựa trên metric deterministic

WolfBot AI Analyst biến lịch sử giao dịch thành review có cấu trúc: kết quả cuối, tỷ lệ thắng, payoff, drawdown, direction mix, điểm hiệu quả và risk. Ranh giới quan trọng: code tính và reconcile số liệu; language model chỉ giải thích fact được chọn và đề xuất câu hỏi để kiểm thử tiếp.

![Workspace AI Analyst của WolfBot Community](/images/product/0.1.0-beta.20/vi/22-ai-analyst.webp "AI Analyst giữ lịch sử report và scope phân tích trong một workspace.")

## Một report hữu ích cần trả lời

- Account lời hay lỗ trong đúng measured period?
- Kết quả dựa trên nhiều trade hay sample nhỏ?
- Loss tập trung theo symbol, direction hoặc thời gian không?
- Strategy có phụ thuộc position bất thường không?
- Estimated trade record có reconcile với equity thật không?
- Hypothesis nào nên test trên Demo tiếp theo?

![Report AI Analyst chi tiết với performance và risk finding](/images/product/0.1.0-beta.20/vi/22b-ai-analyst-report.webp "Report kết hợp verdict deterministic, biểu đồ performance và AI commentary có giới hạn.")

Ảnh dùng lịch sử local thật; credential và identifier nhạy cảm đã được loại trước khi chụp. Nó chứng minh interface, không bảo đảm performance tương lai.

## Model local hoặc provider của bạn

Settings hỗ trợ local model và external provider được cấu hình. Local model giữ report trên máy và tránh chuyển nội dung lên cloud. External provider có thể viết tốt hơn nhưng operator phải hiểu privacy, cost và retention term.

![Cài đặt AI Analyst cho model local và provider](/images/product/0.1.0-beta.20/vi/23-ai-analyst-settings.webp "Lựa chọn provider luôn rõ ràng; secret được lưu riêng và không xuất hiện trong report.")

## AI Analyst không được làm gì

Nó không đặt order, đổi risk setting, hứa lợi nhuận hoặc khuyên tăng leverage từ sample nhỏ. Report là evidence để review, không phải authority để trade. Metric vẫn có thể bị giới hạn bởi broker history thiếu, sync-close price ước tính hoặc period chưa đủ, nên kết luận quan trọng phải đối chiếu broker.

Workflow nên dùng: chọn account/scope rõ; chỉ tạo report khi đủ history; đọc measured result trước AI summary; test suggestion như hypothesis trên Demo; so sánh kỳ tiếp theo thay vì rewrite quá khứ.

Đọc thêm [Cách đọc Trading Performance](/vi/docs/how-to-read-trading-performance) và [financial AI agent có thể audit](/vi/academy/financial-ai-agents-auditable-decisions).
