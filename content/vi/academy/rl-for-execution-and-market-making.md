---
title: "Reinforcement learning cho order execution và market making"
description: "Hai paper RL giải quyết câu hỏi dưới directional trading một bậc: khi đã quyết buy/sell, nên execute thế nào, và market maker nên quote hai chiều ra sao — đánh giá trong simulator thị trường, không phải order book thật."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "17 phút"
lang: "vi"
translation_of: "academy/rl-for-execution-and-market-making"
previous_guide: "/vi/academy/graph-neural-networks-for-cross-asset-correlation"
next_guide: "/vi/academy/deep-hedging-and-offline-rl-reliability"
related_guides: ["/vi/academy/reinforcement-learning-trading-mdp", "/vi/academy/ppo-for-trading-systems", "/vi/docs/risk-controls", "/vi/docs/simulation"]
keywords: ["reinforcement learning order execution", "deep RL market making", "Avellaneda-Stoikov RL", "limit order book RL", "ABIDES market simulator"]
citations: ["https://arxiv.org/abs/2411.06389", "https://arxiv.org/abs/2207.09951"]
sitemap_priority: 0.9
---

# Reinforcement learning cho order execution và market making

Mọi paper RL đã nêu trong series này — [công thức MDP nền tảng](/vi/academy/reinforcement-learning-trading-mdp), [PPO](/vi/academy/ppo-for-trading-systems), ensemble và actor-critic — giải quyết cùng câu hỏi: khi nào, và theo hướng nào, nên mở hoặc đóng vị thế. Hai paper này nằm dưới quyết định đó một bậc. Khi "buy" hay "sell" đã quyết, **làm sao** order thật sự được đưa vào thị trường, và riêng ra, một agent liên tục quote cả bid lẫn ask nên quản lý rủi ro việc đó thế nào? Cả hai là bài toán ở execution layer, liên quan trực tiếp tới cách order-handling thật của bất kỳ platform trading tự động nào vận hành, độc lập với strategy nào quyết định trade từ đầu.

## Optimal execution như một bài toán RL riêng

Hafsi và Vittori khung optimal execution thành train một agent — Double Q-Network (DQN) — mua hoặc bán một inventory cố định trong horizon thời gian hữu hạn, tối thiểu chi phí. Chi tiết quan trọng nhất là **train ở đâu**: ABIDES, một multi-agent market simulator mô hình đầy đủ limit order book và để các agent mô phỏng khác thật sự phản ứng với trade của chính RL agent. Đây là bước tiến có ý nghĩa so với cách tiếp cận execution-RL mà paper phê bình thẳng: train trên dataset lịch sử cố định, nơi giá chỉ "revert" về chuỗi đã ghi sau mỗi trade, chỉ bắt được impact **tạm thời**. Một multi-agent simulator, vì agent khác thật sự phản ứng, bắt được cả impact tạm thời lẫn **transient** — phần hiệu ứng giá của một trade suy giảm theo thời gian nhưng không biến mất tức thì. Khác biệt này không chỉ hình thức: một policy chỉ train với giả định impact tạm thời có thể hệ thống đánh giá thấp chi phí thật của execution hung hăng.

## Market making như một bài toán cũ hơn với lời giải mới hơn

Gašperov và Kostanjčar giải một bài toán execution-layer khác: optimal market making, bài toán stochastic control đặt bid và ask đồng thời để ăn spread, đồng thời quản lý **inventory risk** — rủi ro giá đi ngược vị thế tích luỹ do fill một chiều. Framework cổ điển ở đây, khởi nguồn từ Avellaneda và Stoikov, quy bài toán về phương trình Hamilton-Jacobi-Bellman giải bằng xấp xỉ closed-form quanh một reservation price. Paper này thay cách closed-form bằng một deep RL controller, train trên **limit order book simulator dựa Hawkes process** — mô hình order-arrival thực tế hơn Poisson process đơn giản, vì Hawkes process bắt được clustering order-flow (order kích hoạt order tiếp theo), một đặc điểm market microstructure thật, được ghi nhận rõ, mà Poisson model bỏ sót hoàn toàn. Controller kết quả so với nhiều benchmark market-making, báo cáo vượt trội trên nhiều metric risk-reward, kể cả dưới chi phí giao dịch đáng kể.

## Giới hạn cả hai paper cùng có, theo thiết kế

Cả hai kết quả đến từ môi trường mô phỏng, không phải order book thật — ABIDES cho execution, Hawkes-process LOB model cho market making. Đây rõ ràng là điểm mạnh so với cách tiếp cận cũ, thô hơn (cả hai simulator thực tế hơn historical replay ngây thơ hay Poisson arrival model), nhưng không làm kết quả tương đương bằng chứng thị trường thật. Một simulator, dù dựng tốt tới đâu, vẫn là một model về cách người tham gia khác hành xử; thị trường thật chứa người tham gia adversarial chủ động thích nghi với pattern phát hiện được, hành vi tương quan xuyên venue, và tail event mà phân phối train của simulator chưa bao giờ được dựng để đại diện. Không paper nào claim ngược lại — cả hai nói rõ đóng góp của mình là controller validate-bằng-simulator, một kết quả thật và hữu ích, nhưng khác một track record trading thật.

## Vì sao điều này quan trọng với một execution layer như của WolfBot

Một platform route order thật — market, limit, batch — đã có sẵn những quyết định execution-layer trên mỗi trade: thử limit order trước rồi fallback market, chờ bao lâu, size phần fill còn lại thế nào. Hiện nay các quyết định đó thường là rule cố định (fallback limit-rồi-market, timeout cố định), cùng hạng mục cách tiếp cận mà cả hai paper đặt mục tiêu cải thiện bằng policy học được. Hai paper này là bằng chứng hữu ích rằng một execution hoặc market-making policy học được *có thể* vượt benchmark rule cố định — trong mô phỏng. Chúng không phải bằng chứng rằng một policy học được cụ thể an toàn để route vốn thật mà không qua cùng con đường validate mọi model khác trong series này yêu cầu: chứng minh trước trong market simulator, rồi chạy thử trong chế độ [Simulation](/vi/docs/simulation) hoặc demo trên sàn thật, rồi — nếu vẫn đứng vững — thử ở size nhỏ nhất có thể trước khi được tin tưởng với inventory có ý nghĩa. Logic execution rủi ro cao theo bản chất; một policy nhìn tốt trước simulator Hawkes-process vẫn cần chứng minh trước cấu trúc phí, latency và thanh khoản cụ thể của từng venue thật nó sẽ chạy.

## Paper chứng minh gì — và chưa chứng minh gì

Paper execution chứng minh một DQN agent train trong multi-agent simulator bắt được transient market impact có thể học execution strategy, giải quyết một khoảng trống cụ thể trong cách tiếp cận historical-replay đơn giản hơn. Paper market making chứng minh một deep RL controller train trên order-arrival model Hawkes-process thực tế hơn có thể vượt benchmark market-making cổ điển trong mô phỏng, kể cả dưới chi phí giao dịch đáng kể. Không paper nào báo cáo kết quả từ order book thật, và không paper nào nên đọc là bằng chứng policy cụ thể của nó sẵn sàng quản lý inventory thật mà không qua validate riêng, theo từng venue.

## Nguồn chính

- Hafsi và Vittori, [*Optimal Execution with Reinforcement Learning in a Multi-Agent Market Simulator*](https://arxiv.org/abs/2411.06389).
- Gašperov và Kostanjčar, [*Deep Reinforcement Learning for Market Making Under a Hawkes Process-Based Limit Order Book Model*](https://arxiv.org/abs/2207.09951).

Tiếp theo: [xem deep hedging xử lý ma sát thị trường thật ra sao, và vì sao một offline RL policy cần tự kiểm tra độ tin cậy trước khi deploy](/vi/academy/deep-hedging-and-offline-rl-reliability).
