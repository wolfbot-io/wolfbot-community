---
title: "Deep RL for Crypto Portfolio Management: From the Original CNN Policy to SAC and DDPG"
description: "A 2016 model-less CNN policy and a 2025 LSTM-enhanced actor-critic framework both learn cryptocurrency portfolio weights directly through reinforcement learning — nine years apart, on the exact asset class WolfBot's own portfolio features target."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 minutes"
previous_guide: "/academy/deep-hedging-and-offline-rl-reliability"
next_guide: "/academy/llm-trading-agents-survey-and-multi-agent-pattern"
related_guides: ["/academy/stock-prediction-research-and-the-overfitting-trap", "/academy/graph-neural-networks-for-cross-asset-correlation", "/academy/portfolio-allocation-risk-aware-objectives", "/docs/simulation"]
keywords: ["deep reinforcement learning crypto portfolio", "CNN portfolio weights reinforcement learning", "SAC DDPG cryptocurrency trading", "Markowitz benchmark deep RL", "crypto portfolio management research"]
citations: ["https://arxiv.org/abs/1612.01277", "https://arxiv.org/abs/2511.20678"]
sitemap_priority: 0.9
---

# Deep RL for Crypto Portfolio Management: From the Original CNN Policy to SAC and DDPG

Nine years apart, two papers tackle the exact same problem on the exact asset class most relevant to a crypto-focused platform: learning how to allocate a portfolio across cryptocurrencies directly through reinforcement learning, rather than predicting prices first and optimizing allocation as a separate step afterward. Reading the original 2016 formulation next to its 2025 successor shows both how far the approach has matured and, just as importantly, which evaluation gaps have carried through unchanged.

## 2016: a model-less CNN that outputs portfolio weights directly

Jiang and Liang's original framing is deliberately simple and end-to-end. A convolutional neural network takes the historic prices of a basket of assets as input and outputs portfolio weights for that basket directly — there is no separate price-prediction stage feeding into a separate optimizer. The network is trained in a reinforcement manner, with cumulative return used directly as the reward signal it maximizes. The authors backtest on a real cryptocurrency exchange with a 30-minute trading period, trained on 0.7 years of price data, and report a 10-fold return over a 1.8-month backtest window, compared against several other published portfolio-selection strategies run on the same data.

A 10x return in under two months is an extraordinary claim by any standard, and the paper reports it from a single historical period, on one exchange, almost certainly during a specific, unusually favorable crypto market regime (the 2016-2017 window). The paper does not claim this result generalizes beyond its own backtest, and it predates the widespread practitioner awareness of exactly the evaluation concerns covered in this series' [survey of overfitting risk](/academy/stock-prediction-research-and-the-overfitting-trap) — there is no reported degradation check across multiple holdout splits, and no indication the result was stress-tested against a different historical window.

## 2025: the same problem, a more deliberate benchmark design

Paykan's more recent framework targets four major assets — Bitcoin, Ethereum, Litecoin and Dogecoin — formulated as a discrete-time stochastic system under **partial observability**: the agent sees daily open, high, low, close prices and volume, not the full market state. Rather than a single architecture, the framework combines two actor-critic algorithms — **Deep Deterministic Policy Gradient (DDPG)** and **Soft Actor-Critic (SAC)** — each enhanced with LSTM networks to capture temporal dependencies within both the policy and the value function. Critically, the benchmark is an explicit, named classical baseline: the **Markowitz mean-variance model**, rather than only other published RL strategies. The paper reports that the DRL-based agents consistently outperform the Markowitz benchmark, in both absolute return and risk-adjusted performance.

## What genuinely changed, and what did not

The newer paper is a meaningfully more careful piece of evaluation design: a clearly named, interpretable classical benchmark rather than a basket of other papers' numbers; explicit acknowledgment that the agent operates under partial observability rather than implicitly assuming full market visibility; and an architecture (LSTM-enhanced actor-critic) built on nearly a decade of intervening RL research rather than the earliest viable CNN formulation. That is real progress in rigor, not just in architecture.

What has not changed is the same gap present throughout almost every paper in this series: neither paper reports a formal degradation or overfitting check in the spirit of the Probability of Backtest Overfitting framework, and neither paper's own description states that live transaction costs, slippage, order-book depth or exchange-specific execution constraints were modeled with anything like the care the [deep hedging and execution papers](/academy/deep-hedging-and-offline-rl-reliability) treat as central to their own contribution. A backtested allocation policy that outperforms Markowitz on historical OHLCV data is evidence the architecture can learn *something* useful from that data — it is not yet evidence that the same edge survives real execution costs or a market regime the training data did not contain.

## Why this specifically matters for WolfBot

Both papers target precisely the allocation problem a multi-asset crypto platform's own [portfolio and risk controls](/academy/portfolio-allocation-risk-aware-objectives) have to manage in practice — and precisely the asset class where the [cross-asset correlation research](/academy/graph-neural-networks-for-cross-asset-correlation) covered earlier in this series shows diversification can break down fastest and hardest, exactly during a liquidation cascade. A policy trained on four historically correlated majors needs to be stress-tested specifically against the regime where those four assets stop behaving independently — neither paper's description states that this specific stress case was tested directly, which means it is an open question for anyone considering either architecture, not an answered one. Both papers are worth reading as evidence that end-to-end, learned crypto allocation is a real, maturing research direction; neither is evidence that a specific trained policy is ready to manage real capital without its own [Simulation](/docs/simulation)-stage validation against data and regimes it has not already seen.

## What the papers show — and do not

The 2016 paper shows that a model-less CNN trained with RL can learn portfolio weights end-to-end and reports an extraordinary single-backtest result on one historical crypto window — it does not show the result generalizes across different market periods or survives a degradation check. The 2025 paper shows that LSTM-enhanced SAC and DDPG agents, evaluated under partial observability across four major cryptocurrencies, consistently outperform a classical Markowitz benchmark on the tested data — it does not show this outperformance survives realistic execution costs or a correlation-regime shift across the same four assets.

## Primary sources

- Jiang and Liang, [*Cryptocurrency Portfolio Management with Deep Reinforcement Learning*](https://arxiv.org/abs/1612.01277).
- Paykan, [*Reinforcement Learning-Based Cryptocurrency Portfolio Management Using Soft Actor-Critic and Deep Deterministic Policy Gradient Algorithms*](https://arxiv.org/abs/2511.20678).

Next: [see what a 27-paper survey of LLM trading agents finds, and how a multi-agent framework mimics a real trading firm's roles](/academy/llm-trading-agents-survey-and-multi-agent-pattern).
