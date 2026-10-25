---
title: "Financial LLM cho trading: FinGPT dạy gì về dữ liệu, thời gian và nhiễu"
description: "Hướng dẫn kỹ thuật về financial language model data-centric: ingestion, timestamp integrity, deduplication, adaptation, evaluation và dùng an toàn như trading feature."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 phút"
lang: "vi"
translation_of: "academy/financial-llms-fingpt-data-pipeline"
previous_guide: "/vi/academy/state-space-models-multivariate-market-data"
next_guide: "/vi/academy/financial-ai-agents-auditable-decisions"
related_guides: ["/vi/academy/financial-ai-agents-auditable-decisions", "/vi/academy/ai-trading-research-roadmap", "/vi/docs/trading-data-is-yours", "/security"]
keywords: ["giải thích FinGPT", "financial LLM trading", "LLM sentiment trading", "pipeline dữ liệu financial language model", "AI đọc tin trading"]
citations: ["https://arxiv.org/abs/2306.06031"]
sitemap_priority: 0.9
---

# Financial LLM cho trading: data pipeline chính là model

FinGPT đặt financial language modeling dưới góc data-centric. Finance kết hợp temporal sensitivity cao, thay đổi liên tục và signal-to-noise thấp. Model lớn hơn không sửa được news đến sau decision timestamp, story trùng bị đếm như bằng chứng độc lập hay entity ghép sai instrument.

## Financial text khác ở đâu

### Nhạy thời gian

Giá trị của filing, downgrade hoặc regulatory notice phụ thuộc lúc nó public và lúc trading system nhận được. Publication time, ingestion time và first tradable decision time là ba field riêng.

### Ý nghĩa thay đổi

Công ty đổi sản phẩm, management, capital structure; market vocabulary cũng đổi. Cùng một phrase sentiment có thể mang nghĩa khác theo industry/regime. Static training data lão hóa nhanh.

### Signal-to-noise thấp

Phần lớn text không phải tradable signal bền vững. Nhiều nguồn lặp cùng một event; commentary có thể chỉ mô tả price move đã xảy ra. Evaluation phải tách information extraction khỏi incremental forecasting value.

## Point-in-time text pipeline

```text
source
-> immutable raw capture
-> timestamp normalization
-> deduplication và story clustering
-> entity/instrument linking
-> document parsing
-> label chỉ xuất hiện sau horizon
-> train/validation/test snapshot
-> adaptation và evaluation
```

Giữ raw document và provenance. Khi parser/model đổi, researcher phải dựng lại đúng input experiment cũ đã thấy.

## Ingestion và provenance

Mỗi document cần source/canonical URL, publication time, ingestion time, first-seen time, update relationship, language, entity mapping confidence, content hash, story-cluster ID và licensing policy. Bài đã sửa không được overwrite snapshot gốc từng dùng cho historical decision.

## Deduplication là bắt buộc

Một press release có thể xuất hiện ở corporate site, wire service và nhiều báo. Đếm mười bản thành mười signal tạo confidence giả. Kết hợp exact hash, near-duplicate embedding và event clustering; đánh giá cả document level và event level.

Entity resolution cần temporal awareness. Ticker đổi và một story có thể tác động supplier, competitor hoặc index. Giữ mapping uncertainty thay vì ép vào một symbol.

## Chọn cách adaptation

FinGPT nhấn mạnh low-rank adaptation và data curation tự động. Một hierarchy thực dụng:

1. Prompt frozen model cho extraction task chặt chẽ.
2. Retrieval từ corpus có timestamp và kiểm soát.
3. Train classifier nhỏ trên frozen embedding.
4. Parameter-efficient adaptation khi task data đủ mạnh.
5. Chỉ train rộng hơn khi data rights và evaluation gain rõ.

Phương pháp đơn giản nhất đáp ứng task sẽ dễ audit và refresh hơn.

## Tách extraction khỏi prediction

LLM phù hợp để đổi text thành claim có cấu trúc:

```json
{
  "entity": "issuer-id",
  "event": "earnings-guidance-change",
  "direction": "negative",
  "horizon": "next-quarter",
  "evidence": ["sentence-id-4"],
  "uncertainty": "medium"
}
```

Output đó chưa phải order. Downstream model phải kiểm tra event có predictive value sau publication delay, price move đã xảy ra và cost hay không. Tách extraction accuracy khỏi portfolio performance.

## Evaluation chống temporal leakage

- Split theo thời gian, không random document.
- Để related story cluster trong cùng split.
- Freeze model, prompt và retrieval index trước test.
- Đo entity, event, polarity và evidence-span accuracy.
- Test calibration và abstention.
- So lexicon, encoder nhỏ và no-text baseline.
- Delay feature theo ingestion/processing time thực.
- Chạy theo source, language, asset và volatility regime.

Nếu cùng event wording lọt train/test qua syndicated copy, score đã contamination.

## Risk riêng của LLM

| Rủi ro | Kiểm soát |
|---|---|
| hallucinated fact | bắt buộc evidence span và source ID |
| prompt injection trong document | coi content là data, cô lập tool instruction |
| stale knowledge | retrieve source có timestamp |
| numeric error | parse rồi verify bằng code deterministic |
| nondeterminism | pin config, validate schema, test lặp |
| secret leakage | không đưa broker credential/private log vào prompt |
| vendor drift | pin model version, monitor output distribution |

## Dùng an toàn trong trading stack

Financial LLM output đi vào dưới dạng bounded feature có provenance và expiry. Decision model riêng kết hợp với market/portfolio state. [Risk controls](/vi/docs/risk-controls) và execution deterministic vẫn có thẩm quyền. Bảo vệ private trading data theo [data ownership](/vi/docs/trading-data-is-yours) và [security](/security).

## FinGPT chứng minh gì — và chưa chứng minh gì

FinGPT trình bày open data-centric framework gồm curation, adaptation và building-block task cho finance. Nó chứng minh infrastructure và khả năng tiếp cận nghiên cứu, không chứng minh generic sentiment hay LLM advice tạo net return bền vững.

## Nguồn chính

- Yang, Liu và Wang, [*FinGPT: Open-Source Financial Large Language Models*](https://arxiv.org/abs/2306.06031).

Tiếp theo: [thiết kế financial agent dùng tool nhưng quyết định vẫn audit được](/vi/academy/financial-ai-agents-auditable-decisions).
