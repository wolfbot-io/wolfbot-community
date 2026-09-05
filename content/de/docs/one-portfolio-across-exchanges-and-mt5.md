---
title: "Ein Portfolio über Börsen und MT5 hinweg — jede Position in einer einzigen Ansicht sehen"
description: "Statt dich bei jeder Börse einzeln einzuloggen, erscheint dein gesamtes Portfolio — Krypto und MT5 zusammen — in einer self-hosted Ansicht. Hier erfährst du, was einheitliche Portfolio-Sichtbarkeit bewirkt und warum sie verändert, wie du Risiko managst."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "unified portfolio trading",
  "one portfolio multiple exchanges",
  "crypto mt5 portfolio view",
  "portfolio across exchanges",
  "single portfolio view bot",
  "wolfbot portfolio dashboard"
]
sitemap_priority: 0.8
lang: "de"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
---

# Ein Portfolio über Börsen und MT5 hinweg

**Getestet mit WolfBot Community v0.1.0-beta.9** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du Positionen auf mehr als einer Börse und in MT5 hältst und es leid bist, sie im Kopf oder in einer Tabelle zusammenzurechnen.**
- **Für technische Nutzer** — hier wird erklärt, wie Positionen von völlig unterschiedlichen Handelsplätzen zu einem lesbaren Portfolio abgeglichen werden.

## Das Problem des verstreuten Portfolios

Je mehr Märkte du handelst, desto mehr verteilt sich dein „Portfolio" über Login-Bildschirme: eine Futures-Position auf einer Börse, Spot auf einer anderen, Gold und FX drüben in MT5. Nichts rechnet sie zusammen, außer du machst es von Hand, und bis du damit fertig bist, haben sich die Zahlen schon bewegt.

WolfBot Community zeigt dir **ein Portfolio** — jedes verbundene Konto, Krypto und MT5, in einem einzigen self-hosted Dashboard.

## Was einheitliche Sichtbarkeit dir bringt

- **Gesamtexposure auf einen Blick.** Sieh dein gesamtes Risiko, statt es über Tabs zu splitten.
- **Konsistente Symbole.** Dasselbe Instrument erscheint als eine Zeile, egal ob es von MT5 (`XAUUSD`) oder einem Krypto-Paar kommt — [Symbol-Mapping](/docs/mt5-symbol-mapping) gleicht die Namen ab.
- **Eine Zahl auf Portfolio-Ebene.** Margin, Drawdown und Exposure werden zusammen berechnet, was die [einheitliche Risiko-Engine](/docs/how-unified-risk-differs-from-per-bot-risk) speist, statt eine lose Sammlung von Zahlen pro Bot.

## Wie es funktioniert

Darunter sind Binance und MT5 unabhängige Systeme — eine Futures-REST-API und ein Windows-Trading-Terminal. WolfBot verbindet beide und präsentiert sie über eine Portfolio-Ansicht, wobei die Symbol-/Handelsplatz-Unterschiede dazwischen aufgelöst werden. Du bekommst ein kohärentes Bild, ohne einen deiner Broker aufzugeben.

## Klein anfangen

Verbinde ein Krypto-Demo- und ein MT5-Demo-Konto, eröffne auf jedem eine winzige Position, und schau dir die Portfolio-Ansicht an — beide erscheinen in derselben Liste. Das ist die Grundlage, um den einheitlichen Zahlen zu vertrauen, bevor du größere Größen fährst.

## Wo es weitergeht

- [Risk Controls →](/docs/risk-controls)
- [Wie sich einheitliches Risiko unterscheidet →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [Krypto und MT5 auf einer Plattform →](/docs/crypto-and-mt5-one-platform)

## Nächster Schritt

> **[Lies den Risk-Controls-Guide →](/docs/risk-controls)**
