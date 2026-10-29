---
title: "Deep RL cho crypto portfolio management: từ CNN policy gốc tới SAC và DDPG"
description: "Một CNN policy model-less 2016 và một actor-critic LSTM-enhanced 2025 đều học portfolio weight crypto trực tiếp qua reinforcement learning — cách nhau chín năm, trên đúng asset class mà tính năng portfolio của WolfBot nhắm tới."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 phút"
lang: "vi"
translation_of: "academy/deep-rl-crypto-portfolio-management"
previous_guide: "/vi/academy/deep-hedging-and-offline-rl-reliability"
next_guide: "/vi/academy/llm-trading-agents-survey-and-multi-agent-pattern"
related_guides: ["/vi/academy/stock-prediction-research-and-the-overfitting-trap", "/vi/academy/graph-neural-networks-for-cross-asset-correlation", "/vi/academy/portfolio-allocation-risk-aware-objectives", "/vi/docs/simulation"]
keywords: ["deep reinforcement learning crypto portfolio", "CNN portfolio weight reinforcement learning", "SAC DDPG cryptocurrency trading", "Markowitz benchmark deep RL", "nghiên cứu crypto portfolio management"]
citations: ["https://arxiv.org/abs/1612.01277", "https://arxiv.org/abs/2511.20678"]
sitemap_priority: 0.9
---

# Deep RL cho crypto portfolio management: từ CNN policy gốc tới SAC và DDPG

Cách nhau chín năm, hai paper giải cùng một bài toán trên đúng asset class liên quan nhất tới một platform tập trung crypto: học cách phân bổ portfolio qua các cryptocurrency trực tiếp bằng reinforcement learning, thay vì dự đoán giá trước rồi tối ưu phân bổ như một bước riêng sau đó. Đọc công thức gốc 2016 cạnh bản kế thừa 2025 cho thấy cách tiếp cận đã trưởng thành tới đâu, và cũng quan trọng không kém, khoảng trống đánh giá nào vẫn giữ nguyên.

## 2016: CNN model-less xuất portfolio weight trực tiếp

Công thức gốc của Jiang và Liang có chủ đích đơn giản và end-to-end. Một convolutional neural network nhận giá lịch sử của một basket asset làm input và xuất portfolio weight cho basket đó trực tiếp — không có giai đoạn dự đoán giá riêng đưa vào optimizer riêng. Network được train kiểu reinforcement, dùng cumulative return trực tiếp làm reward signal nó tối đa hoá. Tác giả backtest trên một sàn cryptocurrency thật với chu kỳ trading 30 phút, train trên 0.7 năm dữ liệu giá, báo cáo return gấp 10 lần qua window backtest 1.8 tháng, so với nhiều portfolio-selection strategy đã công bố khác chạy trên cùng dữ liệu.

Return 10x trong chưa đầy hai tháng là claim phi thường theo bất kỳ chuẩn nào, và paper báo cáo nó từ một giai đoạn lịch sử duy nhất, một sàn, gần như chắc chắn trong một regime thị trường crypto cụ thể, bất thường thuận lợi (window 2016-2017). Paper không claim kết quả này generalize ngoài chính backtest của nó, và ra đời trước khi giới thực hành nhận thức rộng rãi đúng những lo ngại đánh giá đã nêu trong [survey về rủi ro overfitting](/vi/academy/stock-prediction-research-and-the-overfitting-trap) của series này — không có degradation check báo cáo qua nhiều split held-out, không dấu hiệu kết quả được stress-test trước một window lịch sử khác.

## 2025: cùng bài toán, thiết kế benchmark cẩn trọng hơn

Framework gần đây hơn của Paykan nhắm bốn major asset — Bitcoin, Ethereum, Litecoin và Dogecoin — khung thành hệ thống stochastic discrete-time dưới **partial observability**: agent thấy open, high, low, close daily và volume, không thấy toàn bộ market state. Thay vì một architecture duy nhất, framework kết hợp hai actor-critic algorithm — **Deep Deterministic Policy Gradient (DDPG)** và **Soft Actor-Critic (SAC)** — mỗi cái enhanced bằng LSTM network để bắt temporal dependency trong cả policy lẫn value function. Quan trọng, benchmark là một baseline cổ điển, đặt tên rõ ràng: **Markowitz mean-variance model**, không chỉ là con số từ các paper RL khác. Paper báo cáo agent DRL-based vượt trội nhất quán benchmark Markowitz, cả về absolute return lẫn hiệu năng điều chỉnh rủi ro.

## Điều thật sự thay đổi, và điều không

Paper mới hơn là một thiết kế đánh giá cẩn trọng có ý nghĩa hơn: một baseline cổ điển đặt tên rõ, diễn giải được, thay vì một rổ số từ các paper khác; thừa nhận rõ ràng agent hoạt động dưới partial observability thay vì ngầm giả định thấy toàn bộ thị trường; và một architecture (actor-critic LSTM-enhanced) dựng trên gần một thập kỷ nghiên cứu RL tiếp theo thay vì công thức CNN khả thi sớm nhất. Đó là tiến bộ thật về độ nghiêm ngặt, không chỉ về architecture.

Điều chưa thay đổi là cùng khoảng trống hiện diện xuyên gần như mọi paper trong series này: không paper nào báo cáo một degradation check hay kiểm overfitting hình thức theo tinh thần framework Probability of Backtest Overfitting, và mô tả của cả hai không nói rõ chi phí giao dịch thật, slippage, độ sâu order book hay ràng buộc execution riêng sàn được mô hình với mức độ cẩn thận mà [paper deep hedging và execution](/vi/academy/deep-hedging-and-offline-rl-reliability) coi là trung tâm đóng góp của chính mình. Một policy phân bổ backtest vượt Markowitz trên dữ liệu OHLCV lịch sử là bằng chứng architecture học được *thứ gì đó* hữu ích từ dữ liệu đó — chưa phải bằng chứng cùng edge sống sót qua chi phí execution thật hay một regime thị trường dữ liệu train không chứa.

## Vì sao điều này quan trọng cụ thể với WolfBot

Cả hai paper nhắm đúng bài toán phân bổ mà [kiểm soát portfolio và rủi ro](/vi/academy/portfolio-allocation-risk-aware-objectives) của một platform crypto đa tài sản phải quản lý thực tế — và đúng asset class nơi [nghiên cứu correlation đa tài sản](/vi/academy/graph-neural-networks-for-cross-asset-correlation) nêu trước đó trong series này cho thấy diversification có thể vỡ nhanh và nặng nhất, đúng lúc một liquidation cascade. Một policy train trên bốn major coin tương quan lịch sử cần stress-test cụ thể trước regime bốn asset đó ngừng hành xử độc lập — mô tả của cả hai paper không nói rõ case stress cụ thể này đã được test trực tiếp, nghĩa là đây là câu hỏi mở cho bất kỳ ai cân nhắc một trong hai architecture, không phải câu đã trả lời. Cả hai paper đáng đọc như bằng chứng rằng crypto allocation học được, end-to-end, là một hướng nghiên cứu thật, đang trưởng thành; không paper nào là bằng chứng một policy đã train cụ thể sẵn sàng quản lý vốn thật mà không qua validate giai đoạn [Simulation](/vi/docs/simulation) riêng trước dữ liệu và regime nó chưa từng thấy.

## Paper chứng minh gì — và chưa chứng minh gì

Paper 2016 chứng minh một CNN model-less train bằng RL có thể học portfolio weight end-to-end và báo cáo một kết quả single-backtest phi thường trên một window crypto lịch sử — nó không chứng minh kết quả generalize qua giai đoạn thị trường khác hay sống sót qua degradation check. Paper 2025 chứng minh agent SAC và DDPG LSTM-enhanced, đánh giá dưới partial observability trên bốn major cryptocurrency, vượt trội nhất quán một benchmark Markowitz cổ điển trên dữ liệu test — nó không chứng minh sự vượt trội này sống sót qua chi phí execution thực tế hay một dịch chuyển regime correlation xuyên bốn asset đó.

## Nguồn chính

- Jiang và Liang, [*Cryptocurrency Portfolio Management with Deep Reinforcement Learning*](https://arxiv.org/abs/1612.01277).
- Paykan, [*Reinforcement Learning-Based Cryptocurrency Portfolio Management Using Soft Actor-Critic and Deep Deterministic Policy Gradient Algorithms*](https://arxiv.org/abs/2511.20678).

Tiếp theo: [xem survey 27 paper về LLM trading agent nói gì, và một multi-agent framework mô phỏng vai trò một công ty trading thật ra sao](/vi/academy/llm-trading-agents-survey-and-multi-agent-pattern).
