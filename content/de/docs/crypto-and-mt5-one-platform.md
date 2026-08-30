---
title: "Krypto und MT5 auf einer Plattform — eine WolfBot-Oberfläche für beides"
description: "Warum die Kombination von Krypto-Futures mit MT5-Forex und -Gold in einer einzigen self-hosted Oberfläche der größte Vorteil von WolfBot Community ist — ein Login, eine Risiko-Engine, ein Portfolio über beide Welten."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/brokers/mt5", "/docs/mt5-symbol-mapping", "/docs/risk-controls", "/community-vs-cloud"]
keywords: [
  "crypto and mt5 one platform",
  "crypto forex futures one interface",
  "wolfbot multi market trading",
  "unified crypto mt5",
  "one interface crypto mt5",
  "crypto plus metatrader"
]
sitemap_priority: 0.8
lang: "de"
translation_of: "docs/crypto-and-mt5-one-platform"
---

# Krypto und MT5 auf einer Plattform

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du sowohl Krypto als auch Forex/Gold handelst** und es leid bist, zwei Bots, zwei Dashboards und zwei Sätze von Risikoregeln zu jonglieren.
- **Für technische Nutzer** — hier wird erklärt, wie Symbole, Positionen und Risiko vereinheitlicht werden, obwohl die zugrunde liegenden Handelsplätze völlig unterschiedliche Systeme sind.

## Das Fragmentierungsproblem

Die meisten automatisierten Handelssetups zwingen dich, dein Setup über mehrere Werkzeuge zu verteilen: ein Bot für Binance, ein anderer für MT5, ein anderer Bildschirm für Positionen, und Risikoregeln, die nicht miteinander sprechen. Genau in dieser Fragmentierung passieren Fehler — eine Position auf einer Plattform ignoriert, was du gerade auf der anderen getan hast.

WolfBot Community wurde um die gegenteilige Idee herum gebaut: **eine Plattform, jeder Markt.** Deine Krypto-Futures-Konten und deine MT5-Konten leben im selben self-hosted WolfBot, erreichbar über eine einzige Browser-Oberfläche.

## Was tatsächlich zu „eins" wird

- **Ein Dashboard.** Deine Binance-/Bybit-Positionen und deine MT5-Gold-Positionen erscheinen nebeneinander, nicht in zwei Apps.
- **Eine Risiko-Engine.** Dieselben Risk Controls gelten für Krypto und MT5, sodass eine krypto-seitige Regel nicht von deinen Gold-Positionen abgekoppelt ist.
- **Eine Portfolio-Ansicht.** Gesamtexposure, Margin und Drawdown sind gemeinsam sichtbar, statt im Kopf über mehrere Plattformen hinweg zusammengezählt zu werden.
- **Ein Satz Strategien.** Eine Strategie kann ein Symbol aus beiden Welten referenzieren; das [Symbol-Mapping](/docs/mt5-symbol-mapping) übernimmt die Namensunterschiede.

## Unter der Haube

Krypto und MT5 sind wirklich unterschiedliche Systeme — das eine ist eine REST-/Futures-API, das andere ein Windows-Handelsterminal. WolfBot vereinheitlicht sie hinter einer Ausführungs- und Risikoschicht, und Kurse werden über broker-bewusstes Symbol-Mapping abgeglichen (`XAUUSD` auf MT5 → `PAXGUSDT` auf einem Krypto-Paar und so weiter). Die Unterschiede bleiben intern gehandhabt; die Oberfläche, die du siehst, ist eine Plattform.

## Klein anfangen

Verbinde ein Krypto-Demo- und ein MT5-Demo-Konto nebeneinander, füge ein Symbol hinzu, das du gut kennst (z. B. BTC oder Gold), und beobachte, wie dasselbe Instrument konsistent im Portfolio erscheint. Beginne danach damit, echte Strategien im Simulationsmodus hinzuzufügen.

## Loslegen

- [MT5 verbinden →](/brokers/mt5)
- [Symbol-Mapping über Märkte hinweg →](/docs/mt5-symbol-mapping)
- [Automatisierter Handelsablauf →](/docs/automated-trading-workflow)

## Nächster Schritt

> **[Lies den MT5-Connect-Guide →](/brokers/mt5)**
