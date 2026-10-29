---
title: "AI Agent Architecture: Model, Tools, Orchestration and the Trading Boundary"
description: "Google's 2024 Agents whitepaper defines the general model/tools/orchestration blueprint behind most AI agents — and why a live trading agent needs a harder boundary than that blueprint provides on its own."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-29"
platforms: ["windows", "linux"]
category: "ai-trading-llm-agents"
content_type: "research"
difficulty: "advanced"
estimated_time: "16 minutes"
previous_guide: "/academy/financial-ai-agents-auditable-decisions"
next_guide: "/academy/rlops-scalable-training-finrl-podracer"
related_guides: ["/academy/financial-ai-agents-auditable-decisions", "/academy/hybrid-llm-bayesian-options-decisions", "/academy/ai-trading-research-roadmap", "/docs/risk-controls", "/security"]
keywords: ["AI agent architecture", "ReAct loop explained", "agent orchestration layer", "function calling vs extensions", "AI trading agent safety boundary"]
citations: ["https://www.kaggle.com/whitepaper-agents"]
sitemap_priority: 0.9
---

# AI Agent Architecture: Model, Tools, Orchestration and the Trading Boundary

Most "AI agent" products — chat assistants that book flights, coding agents, and trading copilots alike — are built from the same three-part blueprint: a model, a set of tools, and an orchestration layer that loops between them. Google's 2024 *Agents* whitepaper is a clear, vendor-neutral description of that blueprint. It is not a finance paper. Reading it alongside [financial-ai-agents-auditable-decisions](/academy/financial-ai-agents-auditable-decisions), which looked at finance-specific agent research, shows exactly where the general pattern stops and where a live trading agent needs a harder boundary than the blueprint provides on its own.

## Three components, one loop

The paper's cognitive architecture has three essential pieces:

1. **The model** — the language model used as the agent's decision maker, following a reasoning framework such as ReAct, Chain-of-Thought or Tree-of-Thoughts.
2. **The tools** — Extensions, Functions and Data Stores, the only way the model reaches anything outside its training data.
3. **The orchestration layer** — a cyclical process: observe, reason, act, observe the result, repeat until the goal or a stopping point is reached.

The orchestration layer is where complexity actually lives. It can be a simple rule, or it can be an open-ended loop that keeps calling tools until it decides it is done.

## The ReAct loop, concretely

The paper walks through a single ReAct cycle step by step: the user's **Question** goes to the model; the model produces a **Thought** about what to do next; it picks an **Action** (which tool, if any); it supplies the **Action input**; it reads the **Observation** (the tool's result); and this Thought/Action/Observation sequence can repeat N times before a **Final answer** is returned. Nothing in that loop caps how many times it repeats, which tools it is allowed to chain together, or what happens if an early Thought is wrong. The loop is a reasoning mechanism, not a safety mechanism.

## Agents are not models: what actually changes

The paper's own agents-vs-models comparison is useful read through a trading lens:

| What changes when you add an agent | Why it matters for a trading system |
|---|---|
| Managed session history across turns | The agent can act on something decided several turns ago — a stale or wrong earlier Thought can silently bias every later Action unless the full session is logged and replayable. |
| Native tool implementation | Tools are now first-class, callable things, not just text the model happens to generate. |
| A cognitive architecture (ReAct, CoT, prebuilt frameworks) | The agent can keep reasoning and acting *without new human input* until it decides to stop. |

A plain model only ever answers one prompt. An agent is explicitly designed to keep going.

## Three tool types — and why "Functions" is the safer pattern for trading

The paper describes three tool types. **Extensions** teach the model how to call a known API directly, by example, so the agent itself executes the request. **Data Stores** give the model fresh, retrieved context (RAG) instead of only its frozen training data. **Functions** work differently on purpose: the model does not call anything. It returns a structured, typed payload (for example `{"name": "display_cities", "args": {...}}`), and the *client-side code* decides whether, when and how to actually run it — which also means API credentials never need to live anywhere near the model-facing layer.

That Function pattern — model proposes a structured, bounded action; deterministic code outside the model validates and executes it — is structurally the same separation [financial-ai-agents-auditable-decisions](/academy/financial-ai-agents-auditable-decisions) describes as the correct shape for a trading agent: the model never holds an exchange credential or calls an exchange endpoint, it only produces a proposal that a separate, auditable layer checks against risk limits before anything executes.

## Three ways a model learns which tool to use

The paper names three approaches to giving a model task-specific tool knowledge: **in-context learning** (examples supplied in the prompt at inference time, the way ReAct itself works), **retrieval-based in-context learning** (examples and tools dynamically pulled from an external store, such as the data-store RAG pattern above), and **fine-tuning** (training on a larger example set before any user query arrives). None of the three teaches a model hard position-sizing math or a maximum-drawdown rule. All three only ever improve *which* tool the model reaches for and *how plausibly* it fills in the arguments — the numeric safety limits still have to be enforced in code outside the model, regardless of which learning method is used.

## Where a trading agent needs a harder boundary than the blueprint gives

The paper's own distinction — an agent keeps a managed history and reasons across turns without new human input until it stops — is precisely the surface area that needs an explicit capability ceiling before it is allowed anywhere near a live order. An unbounded ReAct loop with one trading Function attached is, mechanically, already sufficient to place real orders: the whitepaper describes how to build that loop, not where to stop it. That is exactly why WolfBot's own MCP AI Agent interface sits underneath this general pattern rather than on top of it — it exposes a fixed, owner-defined, policy-controlled set of trading limits and an approval workflow, instead of letting any connected agent reason its way to an unbounded Action.

## What the paper shows — and does not

The paper is a clear, general description of agent architecture, with working example code against one specific model family. It makes no claim about trading or financial decision quality, and it does not propose a risk boundary — that is explicitly left to whoever deploys the agent. Its real value here is vocabulary and structure: "model," "tool," "orchestration layer" and the ReAct loop are the shared language most agent frameworks (LangChain included) are built on, which makes it easier to see precisely which layer WolfBot's own trading-safety constraints have to sit in.

## Primary sources

- Wiesinger, Marlow and Vuskovic, [*Agents*](https://www.kaggle.com/whitepaper-agents) (Google, Kaggle 5-Day Gen AI Intensive whitepaper series, September 2024).

Next: [see how reproducible training and promotion become their own RLOps discipline](/academy/rlops-scalable-training-finrl-podracer).
