---
title: "From News to Numbers: LLM-Derived Sentiment as a Trading Signal"
description: "A study comparing OPT, BERT, FinBERT and a finance dictionary across 965,375 news articles reports a Sharpe ratio above 3 for an LLM-sentiment strategy net of transaction costs — a result that needs exactly the overfitting scrutiny this research series keeps returning to."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "15 minutes"
previous_guide: "/academy/llm-trading-agents-survey-and-multi-agent-pattern"
next_guide: "/academy/explainable-ai-in-finance"
related_guides: ["/academy/financial-llms-fingpt-data-pipeline", "/academy/stock-prediction-research-and-the-overfitting-trap", "/docs/simulation"]
keywords: ["LLM sentiment trading strategy", "OPT BERT FinBERT stock prediction", "news sentiment transaction costs", "Sharpe ratio LLM trading", "GPT sentiment stock returns"]
citations: ["https://doi.org/10.1016/j.frl.2024.105227"]
sitemap_priority: 0.9
---

# From News to Numbers: LLM-Derived Sentiment as a Trading Signal

[FinGPT](/academy/financial-llms-fingpt-data-pipeline) covers how a financial LLM is trained and data-prepared. Kirtac and Germano ask a different, downstream question: once you have a model's sentiment score for a news article, does trading on it actually produce a profitable strategy after realistic costs — and which model's sentiment is worth trusting in the first place?

## The comparison: scale, domain-tuning and a plain dictionary

The paper evaluates four distinct approaches to extracting sentiment from financial news: **OPT** (a GPT-3-scale, general-purpose large language model), **BERT** (a general-purpose, smaller transformer), **FinBERT** (BERT specifically fine-tuned on financial text), and the **Loughran-McDonald dictionary** — the long-standing, finance-specific word-list method the field used before transformer-based models existed. All four are applied to 965,375 U.S. financial news articles spanning 2010 to 2023, a dataset large enough to support a genuinely out-of-sample strategy evaluation rather than a small illustrative example.

The result is notable specifically because it is not simply "bigger wins." The comparison directly pits a large, general model (OPT) against a smaller model specifically fine-tuned for finance (FinBERT) — and the general, larger model wins, predicting stock market returns with 74.4% directional accuracy, meaningfully ahead of the other three approaches. That outcome is informative precisely because the paper's design tests scale against domain-specificity rather than assuming either one dominates by default; it suggests that, in this comparison, the broader language understanding a GPT-3-scale model brings carried real predictive information that a smaller, domain-adapted model did not capture as well.

## The strategy, and the headline numbers

The paper goes one step further than most sentiment-prediction studies: it builds an actual long-short trading strategy from OPT's sentiment scores and evaluates it **net of a stated 10 basis points in transaction costs**, rather than reporting gross returns the way many academic sentiment papers do. Over the period from August 2021 to July 2023, the reported strategy produces a 355% gain with a Sharpe ratio of 3.05, outperforming both the other sentiment-based strategies tested and traditional market portfolios over the same window.

Those are extraordinary numbers by any practical standard — a Sharpe ratio above 3, sustained over roughly two years net of costs, is rare for any real, deployed strategy. That is exactly why this specific result deserves the same scrutiny [this series' earlier overfitting research](/academy/stock-prediction-research-and-the-overfitting-trap) recommends for any single headline figure, regardless of how large the underlying dataset is. A 965,375-article dataset is genuinely large, but the reported strategy performance is still drawn from one realized historical window; a large input dataset reduces one kind of risk (a thin, unrepresentative sample of news) without automatically reducing the risk that this specific two-year strategy-selection result reflects a degree of favorable, non-repeating market conditions rather than a durable edge. The paper does not report a degradation check across multiple disjoint evaluation windows in the spirit of the Probability of Backtest Overfitting framework, which means the headline Sharpe ratio should be read as one reported result awaiting independent replication, not as an expected, repeatable property of LLM-sentiment trading in general.

## What this adds to the LLM-agent picture

This paper is a useful, responsible example of how to evaluate a sentiment pipeline at all: it prices in transaction costs explicitly rather than reporting gross returns, it compares against a genuine prior-generation baseline (the Loughran-McDonald dictionary) rather than only against other LLM variants, and it tests scale against domain-specific fine-tuning directly instead of assuming one approach is obviously superior. That evaluation discipline is exactly the right baseline, and it is worth more than the headline Sharpe ratio itself — a reader can trust the paper's *methodology* for comparing sentiment sources more confidently than they should trust its specific three-year performance figure as a forward expectation.

## The practical boundary

A sentiment-to-signal pipeline built on a large, general LLM is a plausible additional input, consistent with the data-centric approach FinGPT already establishes — but this single paper's striking numbers are evidence that the methodology *can* produce a strong-looking backtest, not evidence that a Sharpe ratio above 3 is a realistic baseline expectation for any specific future deployment. Any attempt to reuse this approach needs its own [Simulation](/docs/simulation)-stage evaluation across a different historical window, with the same degradation and out-of-sample discipline this entire research series keeps returning to, before the strategy's real-world Sharpe ratio is assumed to resemble the one reported here.

## What the paper shows — and does not

The paper shows that a large, general LLM (OPT) outperformed a smaller finance-tuned model, a general-purpose transformer, and a traditional sentiment dictionary at predicting next-day stock returns from financial news, and that a resulting long-short strategy, priced net of transaction costs, produced strong reported performance over a roughly two-year window. It does not show that this specific performance figure is a stable, repeatable property of LLM-sentiment trading, since no degradation or multi-window overfitting check is reported alongside the headline result.

## Primary source

- Kirtac and Germano, [*Sentiment trading with large language models*](https://doi.org/10.1016/j.frl.2024.105227) (Finance Research Letters, 62, 105227).

Next: [see what a comprehensive review of financial explainable AI covers, and why explainability is not the same as correctness](/academy/explainable-ai-in-finance).
