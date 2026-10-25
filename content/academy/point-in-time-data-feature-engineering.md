---
title: "Point-in-Time Data for AI Trading: Feature Engineering Without Leakage"
description: "How to construct market, fundamental and text features using availability time, fit-window isolation and reproducible dataset lineage."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-foundations"
content_type: "research"
difficulty: "advanced"
estimated_time: "18 minutes"
previous_guide: "/academy/value-policy-actor-critic-trading"
next_guide: "/academy/portfolio-allocation-risk-aware-objectives"
related_guides: ["/academy/finrl-realistic-market-environments", "/academy/financial-llms-fingpt-data-pipeline", "/academy/ai-trading-research-roadmap", "/docs/simulation"]
keywords: ["point in time trading data", "machine learning trading data leakage", "feature engineering quantitative trading", "survivorship bias AI trading"]
citations: ["https://arxiv.org/abs/2112.06753", "https://arxiv.org/abs/2306.06031", "https://github.com/AI4Finance-Foundation/FinRL-Tutorials"]
sitemap_priority: 0.9
---

# Point-in-Time Data for AI Trading

Most trading-model failures begin before model training. A sophisticated network cannot repair a dataset that contains future revisions, today's symbol universe, a scaler fitted on the test period or news aligned to the wrong timestamp. Point-in-time correctness means every observation contains only information that could actually have been known when the decision was made.

## Event time is not availability time

A record can have several clocks:

- market event time;
- exchange publication time;
- vendor receipt time;
- WolfBot ingestion time;
- feature completion time;
- decision cutoff time.

A candle stamped 10:00 may not be usable until it closes and arrives. A financial report may describe the previous quarter but become tradable only after publication. News can be edited after first release. Join on availability time, not the period the information describes.

For every feature row, enforce:

```text
source_available_at <= decision_cutoff_at
```

If that inequality cannot be demonstrated, the feature is unconfirmed for historical evaluation.

## Common leakage channels

### Global preprocessing

Fitting normalization, imputation, vocabulary or principal components on the complete dataset leaks future distribution information. Fit transformations inside each training window, freeze them for validation/test, and version the fitted artifacts.

### Universe leakage

Testing today's successful symbols over old history excludes delisted or failed assets. Preserve the eligible universe at each date, including listing dates, contract migrations and delistings.

### Label overlap

If a label uses the next 24 hours of return, samples near a train/test boundary share future information. Purge overlapping observations and use an embargo where feature or label construction creates temporal dependence.

### Revised values

Economic, fundamental and on-chain series may be revised. A current API response may differ from the value originally published. Keep vintages or explicitly state that point-in-time revisions are unavailable.

### Execution timing

Using a candle's close to trade at that same close assumes impossible simultaneity unless a valid auction mechanism is modeled. Shift action time and apply realistic latency.

## Feature families and contracts

Price/volume features require exchange, symbol, interval, adjustment rules and missing-bar policy. Cross-sectional features require the contemporaneous universe. Fundamental features need report publication time and amendment handling. Text features need original timestamp, source, deduplication, language/model version and a cutoff before inference.

Each feature should carry a compact lineage record:

```text
feature_name and version
source identifiers
source time and available time
fit window
parameters/model checksum
missing/stale flags
generated_at
```

Lineage makes a backtest reproducible and allows a live incident to reconstruct what the model saw.

## Chronological evaluation

Random train/test splits are usually inappropriate for trading. Use expanding or rolling walk-forward windows:

```text
train -> validation -> test
       advance time
train --------> validation -> test
```

Feature selection and hyperparameter search happen only in training/validation. The final test is opened once. If the result changes the design, it has become validation data and a new untouched period is required.

Use several regimes and report dispersion. One long bull market is not multiple independent samples. Compare against lagged, simple and no-skill baselines so a complicated feature set must earn its complexity.

## Missingness is information and risk

Forward-filling can silently turn an outage into a confident signal. Define maximum age by feature. Emit explicit missing and stale masks. The policy should degrade or abstain when required data exceed their freshness budget.

For multivariate models, test sensor loss: remove one venue, delay news, corrupt a volume field and replay a symbol migration. This reveals whether the model learned robust relationships or a brittle data shortcut.

## WolfBot research workflow

Keep immutable raw snapshots where licensing permits, then generate versioned feature datasets. A dataset manifest should include date ranges, symbols, timezone, row counts, hashes, source versions and known limitations. Training runs reference the manifest rather than an ambiguous filename.

At inference, log the dataset/feature version, observation cutoff and stale flags with the model decision. Never replace a historical feature artifact in place. A corrected pipeline receives a new version and must be re-evaluated.

## What a clean dataset does not prove

Point-in-time correctness removes avoidable optimism; it does not make markets stationary or a strategy profitable. Vendor latency, hidden liquidity and impact may remain unmodeled. A leakage audit is necessary evidence, not sufficient evidence for live capital.

## Audit checklist

1. Define decision and availability timestamps.
2. Fit every transformation within the training window.
3. Preserve historical universe membership and revisions.
4. Purge overlapping labels at boundaries.
5. Shift orders to an executable time.
6. Version feature code, artifacts and manifests.
7. Test stale/missing inputs and abstention.
8. Keep the final test untouched until design freeze.

## Primary sources

- Liu et al., *FinRL-Meta: A Universe of Near-Real Market Environments*.
- Yang et al., *FinGPT: Open-Source Financial Large Language Models*.
- AI4Finance Foundation, *FinRL Tutorials*.

Continue with [risk-aware portfolio objectives](/academy/portfolio-allocation-risk-aware-objectives) or the [FinGPT data pipeline](/academy/financial-llms-fingpt-data-pipeline).
