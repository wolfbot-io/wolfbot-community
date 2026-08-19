---
title: "Einheitliches Risiko vs. Risiko pro Bot — warum eine Risiko-Engine für den Handel über mehrere Märkte sicherer ist"
description: "Separate Risikoregeln pro Bot lassen Lücken zwischen ihnen. Hier wird erklärt, wie WolfBot Communitys einzige einheitliche Risiko-Engine Krypto- und MT5-Positionen als ein Portfolio behandelt, und warum das einen verstreuten Drawdown verhindert."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/why-bots-fail-risk-management", "/docs/how-to-reduce-drawdown"]
keywords: [
  "unified risk management",
  "risk vs per bot risk",
  "portfolio level risk trading",
  "unified risk crypto mt5",
  "drawdown control across bots",
  "wolfbot risk management"
]
sitemap_priority: 0.8
lang: "de"
translation_of: "docs/how-unified-risk-differs-from-per-bot-risk"
---

# Einheitliches Risiko vs. Risiko pro Bot

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc19** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du mehr als eine Strategie betreibst und möchtest, dass sie sich wie ein Portfolio verhalten, nicht wie Fremde** — hier wird der Unterschied zwischen Risiko pro Bot und Risiko über alles hinweg erklärt.
- **Für technische Nutzer** — du siehst, wie eine einzige Risiko-Engine deine gesamte Exposure sieht, statt sie nach Strategie zu fragmentieren.

## Die Falle „Risiko pro Bot"

Viele Setups geben **jedem Bot seine eigenen Risikoregeln**: diese Strategie hat ein Drawdown-Limit von 10 %, jene ein anderes. Das Problem ist, dass diese Limits nicht miteinander sprechen. Wenn jedem Bot ein kleiner Drawdown erlaubt ist und sie das alle gleichzeitig tun — was tendenziell passiert, wenn sich Märkte gemeinsam bewegen — „gehorcht" jeder einzeln „seinem Limit", während dein Gesamtkonto über alle hinweg blutet.

Risiko pro Bot ist, als hätte jeder Raum eines Hauses seinen eigenen Sprinkler, aber niemand überwacht das ganze Gebäude.

## Was einheitliches Risiko bedeutet

Eine einheitliche Risiko-Engine betrachtet **deine gesamte Position über jedes verbundene Konto hinweg** — Krypto-Futures und MT5 eingeschlossen — vor und während jedes Trades. Regeln wie Drawdown-Limits, Exposure-Obergrenzen und Guards werden auf Portfolio-Ebene ausgewertet, nicht isoliert pro Strategie.

„Überschreite nicht X % Drawdown" bedeutet also X % deines **gesamten Portfolios** — egal, wie viele Bots und Broker die zugrunde liegenden Positionen erzeugt haben.

## Ergebnis in der Praxis

- **Ein Stopp ist ein echter Stopp.** Das Erreichen des Portfolio-Drawdown-Limits pausiert die Aktivität über alle Strategien hinweg, nicht nur die, die es überschritten hat.
- **Keine versteckte Korrelation.** Wenn zehn Strategien alle von derselben Preisbewegung abhängen, sieht die einheitliche Engine diese Exposure als eine.
- **Krypto und MT5, dieselbe Regel.** Eine Gold-Position auf MT5 und eine Krypto-Position sind beide Teil desselben Risikobilds.

## Vergleich der beiden

| | Risiko pro Bot | Einheitliches Risiko |
|---|---|---|
| Drawdown-Erfassung | pro Strategie | gesamtes Portfolio |
| Korrelierte Positionen | unsichtbar | gruppiert |
| Stopp-Aktion | nur dieser Bot | gesamte Aktivität |
| Krypto + MT5 | getrennt | zusammen |

## Sicher loslegen

- [Richte deine Risk Controls ein →](/docs/risk-controls)
- [Warum Bots scheitern →](/docs/why-bots-fail-risk-management)
- [Wie du Drawdown reduzierst →](/docs/how-to-reduce-drawdown)

## Nächster Schritt

> **[Lies den Risk-Controls-Guide →](/docs/risk-controls)**
