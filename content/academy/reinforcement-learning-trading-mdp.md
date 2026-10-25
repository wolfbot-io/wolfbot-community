---
title: "Reinforcement Learning for Trading: Designing the MDP, State, Action and Reward"
description: "A rigorous guide to formulating trading as a Markov decision process, including partial observability, transaction costs, reward design and leakage-safe evaluation."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-25"
platforms: ["windows", "linux"]
category: "ai-trading-reinforcement-learning"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 minutes"
previous_guide: "/academy/ai-trading-research-roadmap"
next_guide: "/academy/ppo-for-trading-systems"
related_guides: ["/academy/ai-trading-research-roadmap", "/academy/ppo-for-trading-systems", "/academy/finrl-realistic-market-environments", "/docs/simulation", "/docs/risk-controls"]
keywords: ["reinforcement learning trading", "trading Markov decision process", "trading reward function", "RL trading state action reward", "quantitative trading AI"]
citations: ["https://incompleteideas.net/book/the-book-2nd.html", "https://arxiv.org/abs/2411.07585", "https://arxiv.org/abs/2011.09607"]
sitemap_priority: 0.9
---

# Reinforcement Learning for Trading: Design the MDP Before the Agent

The most consequential reinforcement-learning decision is made before selecting PPO, A2C or DDPG: the trading problem must be formulated as an environment. An agent optimizes the environment it receives, including every unrealistic fill, missing risk variable and accidental future feature.

## The MDP contract

A Markov decision process is commonly written as `(S, A, P, R, gamma)`:

- `S`: states available to the policy.
- `A`: actions the policy may take.
- `P`: transition dynamics from one state to the next.
- `R`: reward assigned to a transition.
- `gamma`: discount factor controlling the weight of later rewards.

In trading, `P` is not a stationary physical simulator. Historical replay exposes one realized path, while the policy's own orders can change costs and fills. The useful goal is therefore not to claim a perfect MDP; it is to make every approximation explicit and test how sensitive the policy is to it.

## State: what the policy actually knows

A state might contain:

```text
market:     lagged returns, volatility, volume, spread, regime features
portfolio:  cash, positions, average entry, unrealized PnL, margin usage
risk:       current exposure, drawdown, concentration, remaining limits
execution:  open orders, recent fills, latency and rejection state
context:    time, venue status, point-in-time text features
```

Price indicators alone are not sufficient. Two portfolios can see the same candle and require opposite actions because inventory and margin differ.

Markets are partially observable: the full intentions of other participants, hidden liquidity and future regime are unknown. A history window, recurrent model or belief state may reduce this problem, but none makes the market truly Markov. The right question is whether the chosen state is sufficient for the constrained decision being modeled.

## Action: predict less, control more precisely

Three action designs are common:

| Design | Example | Main risk |
|---|---|---|
| Discrete | buy, hold, sell | Ignores quantity and current inventory unless carefully defined |
| Continuous order | signed quantity in `[-q, q]` | Can create excessive turnover and unstable resizing |
| Target position | desired exposure in `[-1, 1]` | Requires a deterministic layer to convert targets into valid orders |

Target position is often easier to audit. The policy proposes exposure; an execution layer applies lot size, leverage, position and venue constraints. The policy should not generate raw exchange payloads.

## Reward: the specification the agent will exploit

Gross PnL is a weak reward because it ignores the path taken to obtain it. A more realistic transition reward can start from net portfolio change:

```text
r_t = delta_equity
      - fees
      - spread_and_slippage
      - lambda_turnover * turnover
      - lambda_risk * risk_penalty
      - constraint_violations
```

Every term changes behavior. A large drawdown penalty may make the agent stay in cash. A weak turnover penalty may create frantic trading. A Sharpe-like reward calculated over a short rolling window can be noisy and non-additive. Reward components should be logged separately so researchers can see what the policy is optimizing.

Hard safety constraints should not exist only as negative reward. Maximum leverage, forbidden permissions, stale-data gates and portfolio loss locks belong in deterministic guards that can reject an action.

## Time and the discount factor

`gamma` has meaning only relative to timestep. At five-minute bars, `gamma=0.99` implies a much shorter effective horizon than at daily bars. Report both timestep and expected horizon. Avoid copying a hyperparameter from a benchmark with a different temporal scale.

Irregular events create another issue. A fixed bar hides variable real time and overnight gaps. If decisions are event-driven, encode elapsed time or formulate transitions around actual decision events.

## Build a chronology-safe environment

At observation time `t`, every feature must have been available then. Common leakage paths include:

- normalizing with full-dataset statistics;
- using revised fundamentals before their publication date;
- assigning news to market bars by article date rather than ingestion timestamp;
- choosing the universe using future constituents;
- filling at the same close used to form the action;
- tuning reward weights on the final test period.

Use chronological train, validation and untouched test windows. Walk forward through multiple regimes. Refit preprocessing only on the training window and carry its state forward.

## Simulator realism checklist

- Fees, bid/ask spread and slippage depend on venue and size.
- Orders can reject, partially fill, expire or remain open.
- Position and cash update only after fills.
- Delisted assets and changing constituents are represented point in time.
- Market outages and missing data fail closed.
- Borrow, funding and margin costs are included where relevant.
- Baselines execute through the same cost model as the agent.

## From policy output to WolfBot

A clean boundary is:

```text
RL policy -> timestamped target exposure
          -> deterministic validation and risk guards
          -> order planner
          -> broker adapter
          -> fill reconciliation and audit log
```

The policy may be wrong. The surrounding system must remain bounded and observable. Test the contract in [Simulation](/docs/simulation), then apply [risk controls](/docs/risk-controls) independently of the learned reward.

## What research establishes — and what it does not

The RL framework literature demonstrates how indicators, preprocessing, actions and reward can be organized. FinRL demonstrates a reusable environment-agent-application architecture and includes costs, liquidity and risk aversion. These are engineering foundations. They do not prove that a policy trained on one historical universe will remain profitable after regime, execution and market-participant changes.

## Primary sources

- Sutton and Barto, [*Reinforcement Learning: An Introduction*](https://incompleteideas.net/book/the-book-2nd.html).
- Yasin and Gill, [*Reinforcement Learning Framework for Quantitative Trading*](https://arxiv.org/abs/2411.07585).
- Liu et al., [*FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading*](https://arxiv.org/abs/2011.09607).

Next: [how PPO changes a trading policy without allowing unconstrained updates](/academy/ppo-for-trading-systems).
