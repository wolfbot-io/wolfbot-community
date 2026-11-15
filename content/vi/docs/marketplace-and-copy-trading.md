---
title: "WolfBot Marketplace & Copy Trading — Đánh giá trước khi theo"
description: "Khám phá Marketplace và Copy Trading của WolfBot Community cùng framework thực tế để đánh giá strategy, provider và risk trước khi kích hoạt."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "8 phút"
lang: "vi"
translation_of: "docs/marketplace-and-copy-trading"
previous_guide: "/vi/docs/mcp-ai-agents"
next_guide: "/vi/docs/risk-controls"
related_guides: ["/vi/docs/simulation", "/vi/docs/reading-first-month-results", "/vi/docs/why-bots-fail-risk-management", "/vi/docs/pre-launch-checklist-before-going-live"]
keywords: ["WolfBot marketplace", "rủi ro copy trading", "marketplace strategy trading", "copy trading self hosted"]
sitemap_priority: 0.8
---

# Khám phá strategy mà không giao phó judgment

Marketplace và Copy Trading rút ngắn discovery nhưng không loại model risk. Strategy card, ranking hoặc provider history là lời mời điều tra, không phải bằng chứng future return sẽ giống quá khứ.

![Marketplace WolfBot Community](/images/product/0.1.0-beta.20/vi/17-marketplace.webp "Marketplace cung cấp nơi có cấu trúc để khám phá trading automation.")

## Đánh giá strategy, không nhìn headline

Trước khi dùng marketplace strategy, kiểm tra market, timeframe, holding period, turnover, drawdown, sample size, cost assumption và account mode. Xác định kết quả đến từ backtest, Demo, Live hay trộn nhiều nguồn. Ưu tiên strategy có hypothesis rõ và failure behavior có giới hạn.

## Copy action cũng copy hidden exposure

Copy Trading tái tạo action trong khi account của bạn có balance, leverage, liquidity, fee và symbol availability khác. Position size phải normalize theo risk budget; copy quantity mù quáng là không an toàn.

![Màn hình Copy Trading WolfBot Community](/images/product/0.1.0-beta.20/vi/18-copy-trading.webp "Copy Trading vẫn cần account-level risk limit và kiểm thử Demo.")

Kiểm tra correlated provider và duplicated position. Theo ba trader cùng giữ một directional exposure là một concentrated bet, không phải diversification.

Quy trình kiểm soát: đọc scope strategy/provider; so period/cost; chạy Simulation hoặc Demo; đặt account/portfolio limit; quan sát fill và drift; chỉ promote với capped exposure cùng stop condition.

Giá trị của WolfBot là automation được khám phá vẫn đi qua account self-hosted và risk control của bạn. Quyền quyết định vẫn thuộc về bạn.

Tiếp theo, cấu hình [Risk Controls](/vi/docs/risk-controls) và dùng [pre-launch checklist](/vi/docs/pre-launch-checklist-before-going-live).
