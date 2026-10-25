---
title: "Point-in-time data cho AI trading: feature engineering không leakage"
description: "Cách xây market, fundamental và text feature bằng availability time, fit-window isolation và dataset lineage có thể tái lập."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-foundations"
content_type: "research"
difficulty: "advanced"
estimated_time: "19 phút"
lang: "vi"
translation_of: "academy/point-in-time-data-feature-engineering"
previous_guide: "/vi/academy/value-policy-actor-critic-trading"
next_guide: "/vi/academy/portfolio-allocation-risk-aware-objectives"
related_guides: ["/vi/academy/finrl-realistic-market-environments", "/vi/academy/financial-llms-fingpt-data-pipeline", "/vi/academy/ai-trading-research-roadmap", "/vi/docs/simulation"]
keywords: ["point in time trading data", "data leakage machine learning trading", "feature engineering quantitative trading", "survivorship bias AI trading"]
citations: ["https://arxiv.org/abs/2112.06753", "https://arxiv.org/abs/2306.06031", "https://github.com/AI4Finance-Foundation/FinRL-Tutorials"]
sitemap_priority: 0.9
---

# Point-in-time data cho AI trading

Phần lớn thất bại của trading model bắt đầu trước khi train. Network phức tạp không thể sửa dataset chứa future revision, symbol universe hiện tại, scaler fit trên test period hoặc news ghép sai timestamp. Point-in-time correctness nghĩa là mỗi observation chỉ chứa thông tin thực sự có thể biết tại thời điểm decision.

## Event time khác availability time

Một record có thể có nhiều clock:

- market event time;
- exchange publication time;
- vendor receipt time;
- WolfBot ingestion time;
- feature completion time;
- decision cutoff time.

Candle ghi 10:00 có thể chỉ dùng được sau khi đóng và truyền tới hệ thống. Financial report mô tả quý trước nhưng chỉ tradable sau lúc công bố. News có thể được edit sau bản đầu. Phải join theo availability time, không theo kỳ mà dữ liệu mô tả.

Mỗi feature row phải thỏa:

```text
source_available_at <= decision_cutoff_at
```

Nếu không chứng minh được bất đẳng thức này, feature chưa đủ xác nhận cho historical evaluation.

## Các kênh leakage phổ biến

### Global preprocessing

Fit normalization, imputation, vocabulary hoặc principal component trên toàn dataset làm rò distribution tương lai. Fit transformation bên trong từng training window, freeze cho validation/test và version fitted artifact.

### Universe leakage

Test các symbol thành công hiện nay trên lịch sử đã loại bỏ asset delisted hoặc thất bại. Phải giữ eligible universe tại từng ngày, gồm listing date, contract migration và delisting.

### Label overlap

Nếu label dùng return 24 giờ tiếp theo, sample gần train/test boundary cùng chia sẻ future information. Purge observation overlap và dùng embargo khi feature/label tạo temporal dependence.

### Revised value

Economic, fundamental và on-chain series có thể bị revise. API hiện tại không nhất thiết trả giá trị từng được công bố. Cần lưu vintage hoặc nói rõ point-in-time revision không có.

### Execution timing

Dùng candle close để trade ngay chính close đó giả định simultaneity không thực tế, trừ khi mô hình auction hợp lệ. Phải shift action time và áp latency.

## Feature family và contract

Price/volume feature cần exchange, symbol, interval, adjustment rule và missing-bar policy. Cross-sectional feature cần universe đương thời. Fundamental feature cần publication time và amendment handling. Text feature cần original timestamp, source, deduplication, language/model version và cutoff trước inference.

Mỗi feature nên mang lineage gọn:

```text
feature_name và version
source identifier
source time và available time
fit window
parameter/model checksum
missing/stale flag
generated_at
```

Lineage giúp tái lập backtest và dựng lại chính xác điều model đã thấy trong live incident.

## Chronological evaluation

Random split thường không phù hợp với trading. Dùng expanding hoặc rolling walk-forward:

```text
train -> validation -> test
       tiến thời gian
train --------> validation -> test
```

Feature selection và hyperparameter search chỉ diễn ra trong train/validation. Final test chỉ mở một lần. Nếu kết quả làm thay đổi thiết kế, period đó đã trở thành validation và cần test mới chưa bị chạm.

Chạy qua nhiều regime và báo dispersion. Một bull market dài không phải nhiều independent sample. So với lagged, simple và no-skill baseline để feature phức tạp phải chứng minh giá trị.

## Missingness vừa là thông tin vừa là risk

Forward-fill có thể biến outage thành tín hiệu tự tin. Đặt maximum age theo từng feature, emit missing/stale mask rõ ràng. Policy phải degrade hoặc abstain khi dữ liệu vượt freshness budget.

Với multivariate model, test sensor loss: bỏ một venue, delay news, làm hỏng volume field và replay symbol migration. Điều này cho biết model học quan hệ bền hay shortcut dễ vỡ.

## Workflow nghiên cứu WolfBot

Giữ immutable raw snapshot khi license cho phép, sau đó tạo versioned feature dataset. Dataset manifest ghi date range, symbol, timezone, row count, hash, source version và known limitation. Training run trỏ vào manifest thay vì filename mơ hồ.

Khi inference, log dataset/feature version, observation cutoff và stale flag cùng model decision. Không thay historical artifact tại chỗ. Pipeline được sửa phải nhận version mới và đánh giá lại.

## Dataset sạch chưa chứng minh điều gì

Point-in-time correctness loại optimism có thể tránh; nó không làm market stationary hay strategy profitable. Vendor latency, hidden liquidity và impact vẫn có thể chưa được mô hình. Leakage audit là bằng chứng cần thiết, không đủ để cấp live capital.

## Checklist audit

1. Định nghĩa decision và availability timestamp.
2. Fit mọi transformation trong training window.
3. Giữ historical universe và revision.
4. Purge label overlap tại boundary.
5. Shift order sang thời điểm executable.
6. Version feature code, artifact và manifest.
7. Test stale/missing input và abstention.
8. Giữ final test nguyên vẹn tới khi freeze thiết kế.

## Nguồn chính

- Liu và cộng sự, *FinRL-Meta*.
- Yang và cộng sự, *FinGPT*.
- AI4Finance Foundation, *FinRL Tutorials*.

Đọc tiếp [portfolio objective có ràng buộc rủi ro](/vi/academy/portfolio-allocation-risk-aware-objectives) hoặc [FinGPT data pipeline](/vi/academy/financial-llms-fingpt-data-pipeline).
