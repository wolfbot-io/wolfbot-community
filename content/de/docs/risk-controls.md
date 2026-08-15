---
title: "WolfBot Community Risk Controls — vollständiger Guide"
description: "Konfiguriere einheitliche Risk Controls in WolfBot Community — Positionslimits, Drawdown-Schutz, Cooldowns und tägliche Trade-Limits, die auf alle deine verbundenen Krypto-Börsen und MT5-Broker angewendet werden."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/docs/smart-terminal"
related_guides: ["/docs/smart-terminal", "/docs/live-trading", "/security"]
keywords: ["wolfbot risk controls", "trading bot risk management", "crypto trading risk", "position limit", "drawdown protection"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/risk-controls"
---

# Risk-Controls-Guide

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc8** · Zuletzt aktualisiert: 2026-08-15

## Warum Risk Controls wichtig sind

Risk Controls wirken als Sicherheitsnetz in deiner gesamten Handelsumgebung — sie verhindern Überhandeln, begrenzen Verluste und schützen dein Konto, ob du Krypto auf Binance, Futures auf Bybit oder Gold via MT5 handelst. Dieselben Risikoregeln gelten konsistent, egal auf welchem Markt du handelst.

> 🛡️ Risk Controls sind auf Demo- und Live-Konten identisch aktiv. Konfiguriere sie, bevor du mit dem Handel beginnst.

## Ebenen der Risikokontrolle

WolfBot hat vier Ebenen des Risikoschutzes — sie gelten identisch für alle verbundenen Märkte:

| Ebene | Funktion | Beispiel |
|---|---|---|
| **Position Size** | Begrenzt die Größe einzelner Trades | Max. 5 % Guthaben pro Trade |
| **Drawdown Guard** | Stoppt den Handel nach einer Verlustschwelle | Pause, wenn Tagesverlust 10 % übersteigt |
| **Cooldown Timer** | Mindestzeit zwischen Trades | Mindestens 60 Sekunden zwischen Orders |
| **Daily Limits** | Maximale Trades pro Tag | Max. 20 Trades pro 24 Stunden |

---

## 1. Positionsgrößen-Limits

Verhindert, dass ein einzelner Trade zu viel Kapital riskiert — gilt gleichermaßen für Krypto-Paare und MT5-Instrumente.

### Einstellungen

1. Gehe in der Seitenleiste zu **Risk**
2. Finde **Position Sizing**
3. Konfiguriere:

| Einstellung | Empfohlen (Anfänger) | Beschreibung |
|---|---|---|
| **Max position % of balance** | 2–5 % | Maximale Größe eines einzelnen Trades |
| **Total exposure %** | 20–30 % | Summe aller Positionen |
| **Max leverage** | 1x–3x | Hebel-Limit pro Position |

### Beispiel

Wenn dein Guthaben $10.000 beträgt und die maximale Position 5 % ist:
- Maximaler Einzel-Trade: **$500**
- Gesamt aller Positionen: **$2.000–$3.000**

---

## 2. Drawdown Guard

Stoppt den gesamten Handel, wenn Verluste deine Schwelle überschreiten.

### Einstellungen

| Einstellung | Empfohlen | Beschreibung |
|---|---|---|
| **Daily loss limit** | 5–10 % | Handel für den Tag stoppen |
| **Weekly loss limit** | 15–20 % | Handel für die Woche stoppen |
| **Total drawdown limit** | 25–30 % | Erfordert manuelles Wiederaktivieren |

### Verhalten

Bei Auslösung:
1. Alle aktiven Bots pausieren
2. Neue Orders werden abgelehnt
3. Bestehende Positionen können weiterhin verwaltet/geschlossen werden
4. Benachrichtigung erscheint im Dashboard

> ℹ️ Du kannst Positionen während einer Drawdown-Sperre manuell schließen — nur neue Einstiege werden blockiert.

---

## 3. Cooldown Timer

Verhindert schnelles Feuern von Trades und emotionale Entscheidungen.

### Einstellungen

| Einstellung | Empfohlen | Beschreibung |
|---|---|---|
| **Minimum interval** | 30–120 Sekunden | Zeit zwischen Order-Platzierungen |
| **After loss cooldown** | 5–15 Minuten | Zusätzliche Wartezeit nach einem Verlust-Trade |
| **Per-symbol cooldown** | 60 Sekunden | Verzögerung beim erneuten Einstieg desselben Symbols |

---

## 4. Tägliche Trade-Limits

Begrenzt die Anzahl der Trades pro Tag.

| Einstellung | Empfohlen | Beschreibung |
|---|---|---|
| **Max trades per day** | 10–20 | Gesamtzahl der Orders (alle Symbole) |
| **Max trades per symbol** | 5 | Orders pro Handelspaar |

Wird um Mitternacht UTC zurückgesetzt.

---

## Schnellstart: empfohlene Risikoprofile

### Anfänger (Demo / erster Live)

```
Max. Position: 2 % Guthaben
Gesamtexposure: 20 %
Max. Hebel: 1x
Tagesverlust-Limit: 5 %
Cooldown: 120 Sekunden
Max. Trades/Tag: 10
```

### Konservativ Live

```
Max. Position: 3 % Guthaben
Gesamtexposure: 25 %
Max. Hebel: 2x
Tagesverlust-Limit: 8 %
Cooldown: 60 Sekunden
Max. Trades/Tag: 15
```

### Erfahren

```
Max. Position: 5 % Guthaben
Gesamtexposure: 40 %
Max. Hebel: 5x
Tagesverlust-Limit: 12 %
Cooldown: 30 Sekunden
Max. Trades/Tag: 30
```

---

## Notfall: Globaler Stopp

Wenn du sofort alles stoppen musst:

1. Gehe in der Seitenleiste zu **Risk**
2. Klicke auf **Emergency Stop**
3. Dies:
   - Pausiert alle Bots
   - Storniert alle ausstehenden Orders
   - Lehnt neue Einstiege ab
   - Schließt bestehende Positionen NICHT (du entscheidest)

---

## Überwachung

Das Dashboard zeigt deinen Risikostatus auf einen Blick:

- **Grün** — alles innerhalb der Limits
- **Gelb** — nähert sich einem Limit
- **Rot** — ein Limit wurde ausgelöst

---

## Häufige Fragen

**F: Kann ich Risk Controls für einen bestimmten Trade überschreiben?**
Risk Controls werden global durchgesetzt. Du kannst Parameter auf der Risk-Seite vor dem Handel anpassen.

**F: Was passiert, wenn sich mein Guthaben ändert?**
Positionsgrößen-Limits passen sich automatisch an dein aktuelles Guthaben an.

**F: Funktionieren Risk Controls mit automatischen Bots?**
Ja — alle vier Ebenen gelten für manuellen und automatisierten Handel auf allen verbundenen Märkten.

**F: Kann ich Risk Controls deaktivieren?**
Risk Controls können angepasst werden, aber wir empfehlen dringend, sie aktiv zu lassen. Sie sind dein primäres Sicherheitsnetz.

---

## Weiterführende Lektüre

- [Warum die meisten Trading-Bots beim Risikomanagement versagen →](/docs/why-bots-fail-risk-management) — die vier Arten, wie Bots Geld verlieren, und wie jede verhindert wird
- [Wie du den Drawdown im Handel reduzierst →](/docs/how-to-reduce-drawdown) — eine praktische Anleitung zu den obigen Einstellungen
- [Wie du Handelsleistung verantwortungsvoll liest →](/docs/how-to-read-trading-performance) — beurteile ein Ergebnis nach seinem Drawdown, nicht nach der Schlagzeilen-Rendite

---

## Nächster Schritt

> **[Einen Broker verbinden →](/brokers/bybit)**
