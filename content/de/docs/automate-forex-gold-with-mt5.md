---
title: "Forex & Gold mit MT5 automatisieren — Gold-, FX- und Rohstoffstrategien self-hosted betreiben"
description: "Automatisiere Forex-, Gold- und Rohstoff-CFD-Strategien mit MT5 auf deiner eigenen Maschine oder einem VPS, Seite an Seite mit Krypto — dieselbe WolfBot-Oberfläche, einheitliches Risiko und ein Portfolio."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "automate forex bot",
  "gold trading bot mt5",
  "mt5 automation forex gold",
  "commodities trading bot",
  "metatrader 5 self hosted",
  "forex gold mt5 wolfbot"
]
sitemap_priority: 0.8
lang: "de"
translation_of: "docs/automate-forex-gold-with-mt5"
---

# Forex & Gold mit MT5 automatisieren

**Getestet mit WolfBot Community v0.1.0-beta.9** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du Forex, Gold, Indizes oder Rohstoff-CFDs handelst und sie auf deiner eigenen Maschine automatisieren willst** — hier erfährst du, wie du MT5-Strategien in WolfBot Community ausführst, ohne einen zweiten Windows-Server zu mieten.
- **Für technische Nutzer** — du siehst, wie MT5-Terminal, Symbol-Mapping und WolfBots einheitliches Risiko zusammenspielen, sodass du genau weißt, was wo läuft.

## Forex, Gold und MT5 — das klassische Automatisierungsproblem

MetaTrader 5 ist das Werkzeug, das die meisten FX-, Gold- und CFD-Trader bereits nutzen. Der traditionelle Weg, es zu automatisieren, bedeutet, eine **rund um die Uhr laufende Windows-Maschine** zu betreiben — meist ein gemieteter VPS — nur um ein einziges MT5-Terminal am Leben zu halten, zusätzlich zu allem anderen, was du sonst betreibst.

WolfBot Community entfernt diese zweite Maschine. MT5 läuft in einem Container auf derselben Linux-Box (oder unter Windows) wie der Rest von WolfBot, sodass deine Gold-/FX-Strategien UND deine Krypto-Strategien in einer Plattform leben.

## Wie automatisierter Gold- und FX-Handel zusammenpasst

```text
Deine Maschine (oder VPS), rund um die Uhr
    │
    ├── WolfBot Community — Strategien + einheitliches Risiko + Portfolio
    │
    └── MT5-Bridge-Container
            ├── echtes MT5-Terminal (headless, dein Broker-Konto)
            └── Browserfenster darauf (kein Remote-Desktop)
```

Deine MT5-Gold-/FX-Strategie, deine Krypto-Futures-Strategie und deine manuellen Positionen erscheinen alle in **einem Dashboard, einer Risiko-Engine, einer Portfolio-Ansicht** — nicht verstreut über separate Apps.

## Symbole funktionieren einfach über Märkte hinweg

Eine Gold-Strategie auf MT5 notiert das Metall als `XAUUSD`; auf einer Krypto-Börse hältst du es vielleicht als das tokenisierte Gold-Paar `PAXGUSDT`. WolfBots Symbol-Mapping gleicht das automatisch ab (siehe den [Symbol-Mapping-Guide](/docs/mt5-symbol-mapping)), sodass dein Portfolio ein einziges Instrument „Gold" zeigt statt zweier getrennter Märkte.

## Starte mit Simulation

Verbinde zuerst ein MT5-**Demo**-Konto (der Connect-Guide führt dich durch), prüfe, dass sich Symbole so auflösen, wie du es erwartest, und lasse deine Strategie im Simulationsmodus laufen, bis du ihr vertraust. Erst danach verbindest du ein Live-Konto und gehst vorsichtig vor.

## Loslegen

- [MT5 verbinden →](/brokers/mt5) — Schritt für Schritt für Windows und Linux
- [MT5-Symbol-Mapping →](/docs/mt5-symbol-mapping)
- [MT5 ohne Windows-VPS ausführen →](/docs/mt5-without-windows-vps)

## Nächster Schritt

> **[MT5-Symbol-Mapping →](/docs/mt5-symbol-mapping)**
