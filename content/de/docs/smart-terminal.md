---
title: "Smart Terminal Guide — dein einheitliches Handels-Tool"
description: "Lerne das WolfBot Community Smart Terminal kennen — dein einheitliches Kontrollzentrum für Krypto-, Futures- und MT5-Märkte in einer Oberfläche."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/bybit"
related_guides: ["/brokers/bybit", "/docs/risk-controls", "/docs/simulation"]
keywords: ["wolfbot smart terminal", "crypto trading terminal", "mt5 terminal self hosted", "unified trading platform", "manual trading tool"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/smart-terminal"
---

# Smart-Terminal-Guide

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-15

## Was ist das Smart Terminal?

Das Smart Terminal ist dein manuelles Handels-Kontrollzentrum — ein einzelner, einheitlicher Bildschirm, über den du deine Krypto-Börsen **und** MT5-Konten beobachten und handeln kannst, ohne zwischen Apps wechseln zu müssen. Es ist das gleiche Tool, ob du BTC/USDT auf Binance, einen Futures-Kontrakt auf Bybit oder Gold (XAU/USD) via MT5 handelst.

## Kernbereiche

| Bereich | Funktion |
|---|---|
| **Chart** | Preisdiagramm für das gewählte Symbol mit Unterstützung mehrerer Zeitrahmen |
| **Order Panel** | Platzieren von Market-, Limit- und TP/SL-Orders |
| **Positions** | Aktive Positionen, offene Orders, Handelshistorie |
| **Watchlist** | Deine bevorzugten Symbole über Krypto und MT5 hinweg |
| **Account Selector** | Schnelles Wechseln zwischen verbundenen Krypto- und MT5-Konten |

---

## Verwendung des Smart Terminals

### Schritt 1: Ein Konto wählen

Wähle oben im **Account Selector** das Konto, auf dem du handeln möchtest — deine verbundenen Krypto-Börsen und MT5-Broker erscheinen alle in derselben Liste.

### Schritt 2: Ein Symbol wählen

Gib ein Symbol ein oder klicke es in deiner Watchlist an:

- **Krypto:** z. B. `BTC/USDT`, `ETH/USDT`
- **Futures:** z. B. `BTC/USDT-PERP`
- **MT5:** z. B. `XAU/USD` (Gold), `EUR/USD` (Forex)

> Jedes Symbol bleibt mit dem Konto verknüpft, auf dem es existiert — du wählst das Konto, dann das Symbol.

### Schritt 3: Order-Parameter konfigurieren

Das Order-Panel zeigt dir Vorausfüllungen basierend auf deinen Risk Controls:

1. **Order-Typ** — Market oder Limit
2. **Größe** — Positionsgröße (durch Risikolimits gedeckelt)
3. **Stop-loss (SL)** — automatisches Stop-Level
4. **Take-profit (TP)** — automatisches Ziel-Level
5. **Richtung** — Long oder Short

### Schritt 4: Order platzieren

1. Überprüfe die Risikoparameter
2. Klicke auf **Place Order**
3. Bestätige bei Aufforderung

Dein Order erscheint sofort im **Positions**-Panel.

---

## Positionsverwaltung

### Aktive Positionen überwachen

Das **Positions**-Panel zeigt:
- Aktuellen P&L (realisiert und nicht realisiert)
- Einstiegspreis vs. aktueller Marktpreis
- TP/SL-Levels
- Positionsgröße

### Position schließen

1. Wähle die Position im **Positions**-Panel
2. Klicke auf **Close**
3. Wähle vollständig oder teilweise schließen
4. Bestätige

### TP/SL ändern

1. Wähle die Position
2. Klicke auf **Modify**
3. Passe TP/SL-Levels an
4. Bestätige die Änderungen

---

## Der Chart

Der integrierte Chart zeigt:

- Candlestick-Preisdaten für das gewählte Symbol
- Anpassbare Zeitrahmen
- Überlagerung von TP/SL-Levels
- Einstiegspunkte, sobald ein Order platziert ist

---

## Watchlist

Baue dir eine Watchlist für schnellen Zugriff auf die Symbole, die dir wichtig sind — du kannst Krypto-Paare und MT5-Instrumente im selben Panel mischen.

1. Klicke auf **+ Add Symbol**
2. Suche und wähle das Symbol
3. Klicke auf ein Symbol in der Watchlist, um es in den Chart zu laden

---

## Kontowechsel während des Handels

Das Smart Terminal hält deine Konten getrennt:
- Positionen erscheinen unter dem Konto, auf dem sie gehandelt wurden
- Wechsel einfach im **Account Selector**, um zwischen ihnen umzuschalten

---

## Tipps

### Für die Arbeit im Smart Terminal

- Nutze die vorausgefüllten Risikoparameter — sie stammen aus deinen Risk Controls
- Platziere zuerst auf einem Demo-Konto einen Testorder
- Behalte die Watchlist für schnellen Zugriff auf deine wichtigsten Symbole
- Überwache offene Orders im Positions-Panel

### Für technische Nutzer

- Chart-Daten fließen über die normale Broker-/MT5-Verbindung — dieselben Preise, die deine Orders steuern
- TP/SL sind Client-seitige Anweisungen, die über deine Broker-API oder MT5 ausgeführt werden
- Order-Typen werden exakt so durchgereicht, wie die Börse/der Broker sie definiert (Market, Limit, ReduceOnly usw.)

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| Order wird abgelehnt | Prüfe Risk-Control-Limits (Größe, Hebel, Tageslimit) |
| Symbol nicht gefunden | Stelle sicher, dass das Symbol auf dem gewählten Konto existiert |
| Chart lädt nicht | Überprüfe die Verbindung zum Broker/MT5 |
| „Insufficient balance“ | Guthaben auf dem gewählten Konto prüfen |

---

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)**
