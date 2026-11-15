---
title: "WolfBot MCP AI Agents — Tool access với ranh giới rõ ràng"
description: "Khám phá MCP AI Agents, integrations và safety model của WolfBot Community để nối assistant với trading data mà không trao execution không kiểm soát."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "advanced"
estimated_time: "9 phút"
lang: "vi"
translation_of: "docs/mcp-ai-agents"
previous_guide: "/vi/docs/ai-analyst-trade-review"
next_guide: "/vi/docs/marketplace-and-copy-trading"
related_guides: ["/vi/academy/ai-agent-architecture-model-tools-orchestration", "/vi/academy/financial-ai-agents-auditable-decisions", "/security", "/vi/docs/trade-only-api-keys-explained"]
keywords: ["WolfBot MCP", "AI agent trading tool", "Model Context Protocol trading", "AI agent self hosted"]
sitemap_priority: 0.85
---

# Kết nối AI Agent với tool nhưng không mất quyền kiểm soát

Khu AI Agents của WolfBot Community là control surface cho capability dựa trên MCP. MCP có thể đưa tool và context có cấu trúc cho assistant, nhưng mục tiêu chuyên nghiệp không phải “để AI trade mọi thứ”; mục tiêu là làm từng capability rõ ràng, có scope và audit được.

![Màn hình quản lý MCP AI Agents](/images/product/0.1.0-beta.20/vi/24-ai-agents.webp "AI Agents làm trạng thái và capability MCP hiển thị rõ cho operator.")

## Model, tool và policy là ba lớp khác nhau

Agent gồm model diễn giải yêu cầu, tool thực hiện operation có giới hạn và policy quyết định điều gì được phép. Tách lớp ngăn một câu trả lời thuyết phục của model tự biến thành execution authority.

Với trading, nên bắt đầu bằng read-only tool: account state, position, performance và documentation. Write capability tương lai cần schema hẹp, deterministic validation, confirmation rõ, idempotency và audit record đầy đủ. Không bao giờ cần withdrawal permission.

## Integration luôn nhìn thấy được

Trang Integrations giữ context vận hành cho Telegram, TradingView và service kết nối khác.

![Trang Integrations WolfBot Community](/images/product/0.1.0-beta.20/vi/26-integrations.webp "Integration được quản lý tập trung để đường dữ liệu và notification có thể kiểm tra.")

Checklist an toàn: liệt kê read/write tool; giới hạn theo account/tenant/environment; không đưa credential vào prompt; validate symbol/amount/account mode bằng code; xác nhận action quan trọng; log request/validation/result; mặc định không hành động khi context stale hoặc mơ hồ.

MCP chuẩn hóa interface, không tự làm tool an toàn. Đọc [kiến trúc AI agent](/vi/academy/ai-agent-architecture-model-tools-orchestration) và [Security](/security).
