---
title: "WolfBot Bot Control & Live Monitoring — Vận hành automation bằng bằng chứng"
description: "Dùng màn hình Bots, bot detail, Activity và Live Monitor thật của WolfBot Community để giám sát automated trading mà không mất ngữ cảnh."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 phút"
lang: "vi"
translation_of: "docs/bot-control-and-live-monitoring"
previous_guide: "/vi/docs/strategy-builder-workflow"
next_guide: "/vi/docs/ai-analyst-trade-review"
related_guides: ["/vi/docs/automated-trading-workflow", "/vi/docs/weekly-bot-maintenance-routine", "/vi/docs/reading-bot-logs-like-an-operator", "/vi/docs/risk-controls"]
keywords: ["giám sát trading bot", "WolfBot bot control", "activity log trading", "live trading monitor"]
sitemap_priority: 0.9
---

# Vận hành bot mà không đánh mất evidence trail

Automation nên giảm công việc lặp lại, không loại bỏ visibility. WolfBot Community cho mỗi bot identity, environment, strategy và symbol scope rõ ràng, sau đó cung cấp activity/live state để điều tra điều đã xảy ra.

## My Bots là inventory vận hành

Trang Bots trả lời câu hỏi đầu tiên: automation nào đang tồn tại? Dùng nó để phân biệt Demo/Live và phát hiện bot có scope không còn khớp account hoặc strategy dự kiến.

![Danh sách My Bots trong WolfBot Community](/images/product/0.1.0-beta.20/vi/15-bots.webp "My Bots là inventory của các workflow tự động và trạng thái hiện tại.")

## Bot detail giữ scope luôn hiển thị

Bot detail nên đọc được như execution contract: account, environment, strategy, symbol và state. Review trước khi đổi setting, đặc biệt trên Live.

![Chi tiết bot với environment, strategy và symbol](/images/product/0.1.0-beta.20/vi/16-bot-detail.webp "Bot detail giúp operator kiểm tra scope automation trước khi thao tác.")

## Activity dựng lại chuỗi sự kiện

Activity biến signal, decision và operational event thành timeline. Đọc các entry liên quan cùng nhau: một timeout có retry thành công khác hoàn toàn repeated rejection hoặc silent gap.

![Timeline Activity WolfBot Community](/images/product/0.1.0-beta.20/vi/20-activity.webp "Activity tạo evidence trail để operator đọc lại hoạt động hệ thống.")

Khi điều tra incident, ghi time, account, symbol, direction, bot version và broker response. Không retry một order có trạng thái mơ hồ trước khi reconcile với broker.

## Live Monitor dành cho trạng thái, không phải dự đoán

Live Monitor đưa operational signal hiện tại vào một màn hình. Nó giúp xác nhận service và workflow đang hoạt động, nhưng không biến indicator tức thời thành trading recommendation.

![Live Monitor hiển thị trạng thái vận hành](/images/product/0.1.0-beta.20/vi/21-live-monitor.webp "Live Monitor hỗ trợ giám sát realtime và vẫn giữ Activity làm nguồn điều tra.")

Nhịp vận hành chuyên nghiệp: review bot/environment; kiểm Risk Center; dùng Live Monitor cho state; dùng Activity giải thích anomaly; đối chiếu position với broker; ghi thay đổi và giữ rollback.

Tiếp tục với [AI Analyst](/vi/docs/ai-analyst-trade-review) để review hậu giao dịch có cấu trúc.
