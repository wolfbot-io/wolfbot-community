---
title: "Một thập kỷ nghiên cứu deep learning dự báo chứng khoán — và bẫy overfitting đằng sau nó"
description: "Survey 94 paper deep learning cho stock prediction thực sự nói gì, và vì sao framework Probability of Backtest Overfitting quan trọng hơn bất kỳ con số accuracy nổi bật nào."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-foundations"
content_type: "research"
difficulty: "advanced"
estimated_time: "17 phút"
lang: "vi"
translation_of: "academy/stock-prediction-research-and-the-overfitting-trap"
previous_guide: "/vi/academy/rlops-scalable-training-finrl-podracer"
next_guide: "/vi/academy/transformers-and-foundation-models-for-market-series"
related_guides: ["/vi/academy/ai-trading-research-roadmap", "/vi/academy/point-in-time-data-feature-engineering", "/vi/academy/transformers-and-foundation-models-for-market-series", "/vi/docs/simulation"]
keywords: ["survey deep learning stock prediction", "probability of backtest overfitting", "CSCV backtest", "overfitting trading strategy", "nghiên cứu AI dự báo chứng khoán"]
citations: ["https://arxiv.org/abs/2212.12717", "https://escholarship.org/uc/item/4w1110bb"]
sitemap_priority: 0.9
---

# Một thập kỷ nghiên cứu deep learning dự báo chứng khoán — và bẫy overfitting đằng sau nó

Một survey 2022 từ University of Adelaide review 94 paper về deep learning cho stock market prediction, trải một thập kỷ nghiên cứu từ RNN tới Transformer. Đọc cùng nó, một paper 2015 của Bailey, Borwein, López de Prado và Zhu trả lời câu hỏi sắc hơn mà 94 paper kia không tự trả lời được: với một con số nổi bật từ backtest, xác suất con số đó bị overfit thay vì thật là bao nhiêu? Paper đầu vẽ bản đồ những gì đã được thử. Paper sau cho biết nên tin bản đồ đó tới đâu.

## Bốn task, một taxonomy

Survey tổ chức nghiên cứu stock deep learning thành bốn task riêng biệt: **stock movement prediction** (phân loại tăng/giảm), **stock price prediction** (regression trên giá/return thật), **portfolio management** (phân bổ đa tài sản), và **trading strategies** (quyết định buy/sell end-to-end). Sau đó phân loại 94 paper theo model family — RNN/LSTM, CNN, GNN, Transformer-based, và reinforcement learning — và theo dõi sự chuyển dịch chú ý của ngành từ kiến trúc recurrent sang Transformer và RL qua thập kỷ khảo sát.

Taxonomy đó hữu ích thật. Nhưng theo chính khung của tác giả, nó thiếu một điều cụ thể: nó phân loại *cái gì đã được thử*, không phải *nên tin kết quả đó tới đâu*. Một model báo 58% directional accuracy trên một test window held-out nằm cùng ô taxonomy với một model báo 58% accuracy từ một walk-forward evaluation nghiêm ngặt — survey không có cơ chế phân biệt, vì phần lớn 94 paper chỉ báo một train/test split và một metric nổi bật duy nhất.

## Vì sao một con số backtest không phải bằng chứng

Đây là chỗ paper thứ hai quan trọng. Bailey, Borwein, López de Prado và Zhu xuất phát từ một quan sát khó chịu: công cụ chuẩn ngăn overfitting trong regression thông thường — hold-out test set — lại không đáng tin cậy chính trong bối cảnh backtest đầu tư. Lý do mang tính tổ hợp, không phải thống kê theo nghĩa thường: nhà nghiên cứu (hoặc một search tự động) có thể thử nhiều biến thể model, feature set, hyperparameter trên cùng một lịch sử, rồi đơn giản giữ cái cho điểm cao nhất trên slice held-out. Slice held-out không còn "out of sample" ngay khi nó được dùng, dù chỉ một lần, để chọn giữa các ứng viên.

## Probability of Backtest Overfitting, cụ thể

Framework đề xuất của paper, **combinatorially symmetric cross-validation (CSCV)**, model-free và non-parametric — không giả định gì về strategy nền là factor model, LSTM hay Transformer, chính vì vậy nó áp dụng trực tiếp cho hệ thống trading deep learning dù ra đời trước hầu hết các model đó. Quy trình:

1. Chia toàn bộ lịch sử backtest thành số chẵn block liên tục.
2. Tạo mọi cách gán combinatorially symmetric: một nửa block vào tập in-sample (IS), nửa còn lại vào out-of-sample (OOS).
3. Với mỗi split, chọn ứng viên strategy nào tốt nhất in-sample (theo Sharpe ratio hoặc metric khác).
4. Kiểm tra strategy đó xếp hạng thế nào khi đánh giá trên tập OOS của split đó.
5. **Probability of Backtest Overfitting (PBO)** là tỉ lệ split mà người thắng in-sample lại nằm *dưới trung vị* out-of-sample — tức tỉ lệ thời gian "backtest tốt nhất" thực ra là noise overfit, không phải kỹ năng thật.

Một quy trình chọn strategy có PBO cao là quy trình mà chọn "backtest tốt nhất" gần như tương đương chọn ngẫu nhiên out-of-sample. Paper cũng suy ra một đại lượng liên quan, **minimum backtest length** — ước lượng cần bao nhiêu dữ liệu lịch sử cho một search qua N strategy thử nghiệm trước khi Sharpe ratio in-sample tốt nhất không còn chủ yếu do may mắn multiple-testing.

## Điều này có ý nghĩa gì cho chính 94 paper của survey

Áp lăng kính này ngược lại survey deep learning thì khó chịu nhưng cần thiết: phần lớn áp đảo các paper được review có đúng hình dạng kết quả mà CSCV được thiết kế để cờ đỏ — một architecture, tune và chọn trên một window lịch sử, báo cáo bằng một metric nổi bật duy nhất, không kèm ước lượng degradation kiểu PBO. Đây không phải chỉ trích riêng deep learning — cùng khoảng trống tồn tại khắp phần lớn empirical quantitative finance — nhưng nghĩa là taxonomy của survey nên đọc như "model family nào đã được thử," không bao giờ như "kết quả nào trong số này sẽ sống sót qua một lần xem lại trung thực trên cùng dữ liệu."

## Ranh giới thực tế

Cả hai paper không thay đổi điều gì cần xảy ra với một trading system trước khi quản lý tiền thật: một accuracy, Sharpe ratio, hay return được báo cáo duy nhất — dù architecture nền tốt tới đâu — không phải bằng chứng đủ để deploy. Nó cần, tối thiểu, một degradation check qua nhiều split held-out, lý tưởng là một ước lượng kiểu PBO về bao nhiêu edge báo cáo sống sót qua out-of-sample evaluation trung thực. Đây chính xác là lý do giai đoạn [Simulation](/vi/docs/simulation) hoặc tài khoản demo trước bất kỳ tài khoản thật nào không phải thủ tục hình thức — nó là split tiếp theo, rẻ nhất, trong cùng chuỗi mà CSCV được xây từ đó, và là thứ không backtest nào, dù dựng cẩn thận tới đâu, thay thế được.

## Paper chứng minh gì — và chưa chứng minh gì

Survey là bản đồ chính xác về một thập kỷ architecture và task; nó không nói gì về kết quả nào đã công bố sẽ sống sót qua re-evaluation. Paper backtest overfitting cho một cách cụ thể, model-agnostic để ước lượng xác suất sống sót đó, nhưng không thể xác thực ngược lại claim của bất kỳ paper cụ thể nào — việc xác thực đó phải chạy lại trên dữ liệu và quy trình chọn của từng paper, điều survey không làm và chưa bao giờ được thiết kế để làm.

## Nguồn chính

- Zou, Zhao, Jiao, Cao, Liu, Yan, Abbasnejad, Liu và Shi, [*Stock Market Prediction via Deep Learning Techniques: A Survey*](https://arxiv.org/abs/2212.12717).
- Bailey, Borwein, López de Prado và Zhu, [*The Probability of Backtest Overfitting*](https://escholarship.org/uc/item/4w1110bb) (Journal of Computational Finance, 20(4)).

Tiếp theo: [xem Transformer architecture và zero-shot foundation model tiếp cận cùng bài toán forecasting ra sao](/vi/academy/transformers-and-foundation-models-for-market-series).
