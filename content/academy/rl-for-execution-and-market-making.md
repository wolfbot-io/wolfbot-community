---
title: "Reinforcement Learning for Order Execution and Market Making"
description: "Two RL papers address a question below directional trading: once a buy or sell decision is made, how should it actually be executed, and how should a market maker quote both sides at once — evaluated in market simulators, not live order books."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "17 minutes"
previous_guide: "/academy/graph-neural-networks-for-cross-asset-correlation"
next_guide: "/academy/deep-hedging-and-offline-rl-reliability"
related_guides: ["/academy/reinforcement-learning-trading-mdp", "/academy/ppo-for-trading-systems", "/docs/risk-controls", "/docs/simulation"]
keywords: ["reinforcement learning order execution", "deep RL market making", "Avellaneda-Stoikov RL", "limit order book RL", "ABIDES market simulator"]
citations: ["https://arxiv.org/abs/2411.06389", "https://arxiv.org/abs/2207.09951"]
sitemap_priority: 0.9
---

# Reinforcement Learning for Order Execution and Market Making

Every RL paper covered so far in this series — [the base MDP formulation](/academy/reinforcement-learning-trading-mdp), [PPO](/academy/ppo-for-trading-systems), ensemble and actor-critic methods — addresses the same question: when, and in which direction, should a position be opened or closed. These two papers sit one level below that decision. Once "buy" or "sell" has already been decided, *how* should the order actually be worked into the market, and separately, how should an agent that continuously quotes both a bid and an ask manage the risk of doing so? Both are execution-layer problems, directly relevant to how any automated trading platform's order handling actually behaves, independent of what strategy decided to trade in the first place.

## Optimal execution as its own RL problem

Hafsi and Vittori frame optimal execution as training an agent — a Double Q-Network (DQN) — to buy or sell a fixed inventory within a finite time horizon while minimizing cost. The detail that matters most is *where* the agent is trained: ABIDES, a multi-agent market simulator that models the full limit order book and lets other simulated agents actually react to the RL agent's own trades. This is a meaningful step up from the execution-RL approach the paper explicitly critiques: training against a fixed historical dataset where price simply "reverts back" to the recorded sequence after a trade, which can only capture *temporary* market impact. A multi-agent simulator, because other agents genuinely respond, can capture both temporary and **transient** impact — the part of a trade's price effect that decays over time but does not vanish instantly. That distinction is not cosmetic: a policy trained only against temporary-impact assumptions can systematically underestimate the true cost of aggressive execution.

## Market making as a distinct, older problem with a newer solver

Gašperov and Kostanjčar tackle a different execution-layer problem: optimal market making, the stochastic control problem of placing bid and ask orders simultaneously to earn the spread while managing **inventory risk** — the risk that price moves against a position accumulated by one-sided fills. The classical framework here, originating with Avellaneda and Stoikov, reduces the problem to a Hamilton-Jacobi-Bellman equation solved via closed-form approximations around a reservation price. This paper replaces that closed-form approach with a deep RL controller, trained on a **Hawkes-process-based limit order book simulator** — a more realistic order-arrival model than a simple Poisson process, because Hawkes processes capture order-flow clustering (orders triggering further orders), a well-documented feature of real market microstructure that a Poisson model misses entirely. The resulting controller is compared against multiple market-making benchmarks and reported to outperform them on several risk-reward metrics, including under significant transaction costs.

## The limitation both papers share, by design

Both results come from simulated environments, not live order books — ABIDES for execution, a Hawkes-process LOB model for market making. This is explicitly a strength relative to older, cruder approaches (both simulators are more realistic than naive historical replay or a Poisson arrival model), but it does not make either result equivalent to live-market evidence. A simulator, however well-constructed, is still a model of how other participants behave; real markets contain adversarial participants actively adapting to detectable patterns, correlated cross-venue behavior, and tail events no simulator's training distribution was built to represent. Neither paper claims otherwise — both are explicit that their contribution is a simulator-validated controller, which is a real and useful result, but a different claim from a live-trading track record.

## Why this matters for an execution layer like WolfBot's

A platform that routes real orders — market, limit, batch — already makes execution-layer choices on every trade: whether to try a limit order first and fall back to market, how long to wait, how to size a remaining fill. Today those choices are typically fixed rules (a limit-then-market fallback, a fixed timeout), the same category of approach both papers set out to improve on with a learned policy. These two papers are useful evidence that a learned execution or market-making policy *can* outperform fixed-rule benchmarks — in simulation. They are not evidence that any specific learned policy is safe to route real capital through without the same validation path every other model in this series requires: proven first in a market simulator, then exercised in [Simulation](/docs/simulation) or demo mode against a real exchange, then — if it still holds up — trialed at the smallest possible size before being trusted with meaningful inventory. Execution logic is risk-critical by nature; a policy that looks good against a Hawkes-process simulator still needs to prove itself against the specific fee structure, latency and liquidity of each real venue it will actually run on.

## What the papers show — and do not

The execution paper shows that a DQN agent trained in a multi-agent simulator that captures transient market impact can learn an execution strategy, addressing a specific gap in simpler historical-replay approaches. The market-making paper shows that a deep RL controller trained on a more realistic, Hawkes-process order-arrival model can outperform classical market-making benchmarks in simulation, even under meaningful transaction costs. Neither paper reports results from a live order book, and neither should be read as evidence that its specific policy is ready to manage real inventory without its own separate, venue-specific validation.

## Primary sources

- Hafsi and Vittori, [*Optimal Execution with Reinforcement Learning in a Multi-Agent Market Simulator*](https://arxiv.org/abs/2411.06389).
- Gašperov and Kostanjčar, [*Deep Reinforcement Learning for Market Making Under a Hawkes Process-Based Limit Order Book Model*](https://arxiv.org/abs/2207.09951).

Next: [see how deep hedging handles real market frictions, and why an offline RL policy needs its own trust check before deployment](/academy/deep-hedging-and-offline-rl-reliability).
