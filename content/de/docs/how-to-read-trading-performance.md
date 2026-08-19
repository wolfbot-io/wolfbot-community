---
title: "Wie du Handelsleistung verantwortungsvoll liest"
description: "Lerne, Trading-Performance richtig zu beurteilen: Rendite, Drawdown, Win-Rate und Risiko. Hör auf, dich von Schlagzeilen-Zahlen täuschen zu lassen."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "reference"
difficulty: "beginner"
estimated_time: "8 minutes"
previous_guide: "/docs/why-verifiable-results-matter"
related_guides: ["/docs/why-verifiable-results-matter", "/docs/risk-controls", "/docs/how-to-reduce-drawdown"]
keywords: ["how to read trading performance", "trading metrics explained", "sharpe ratio", "max drawdown", "trading win rate"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/how-to-read-trading-performance"
---

# Wie du Handelsleistung verantwortungsvoll liest

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc19** · Zuletzt aktualisiert: 2026-08-15

## Die Schlagzeilen-Falle

Du siehst: „**+250 % Rendite!**“ — und fühlst dich versucht.

Aber Rendite allein sagt dir fast nichts über die **Qualität** eines Trading-Ergebnisses. Ein Ergebnis mit +250 % Rendite kann weit **schlechter** sein als eines mit +20 % — wenn das Risiko, das dahintersteckt, nicht verstanden wird.

## Für wen dieser Guide ist

- **Für alle Trader:** Lerne die wenigen Zahlen, die wirklich zählen, damit du nie wieder von Schlagzeilen-Zahlen getäuscht wirst.
- **Für technische Nutzer:** Sieh die präzisen Formeln und wie WolfBot sie konsistent über alle Märkte berechnet.

## Die Kennzahlen, die wirklich zählen

### 1. Maximaler Drawdown

**Die wichtigste Kennzahl**, die die meisten Menschen ignorieren.

Der maximale Drawdown ist der größte Rückgang vom Höchststand zum Tiefststand über einen Zeitraum. Er sagt dir, wie schlimm es im schlimmsten Fall wurde.

```text
Beispiel:
Start: $10.000 → Hoch: $25.000 → Tief danach: $12.000
Max Drawdown = (25.000 - 12.000) / 25.000 = 52 %
```

Ein Drawdown von 52 % bedeutet: Dein Konto hätte **mehr als die Hälfte seines Wertes verloren**, bevor es sich erholte. Die meisten Trader steigen emotional weit vor diesem Punkt aus.

> **Faustregel:** Ein Drawdown über 30–40 % ist für die meisten riskant — unabhängig von der Rendite.

### 2. Risiko-adjustierte Rendite

Wie viel Rendite pro Risikoeinheit?

```text
Rendite ÷ Max Drawdown = Risiko-Effizienz

Beispiel A: +250 % Rendite, 80 % Drawdown → Verhältnis 3,1
Beispiel B: +60 % Rendite, 15 % Drawdown → Verhältnis 4,0
```

Beispiel B ist **effizienter** — es erzielte mehr Rendite pro Risikoeinheit, obwohl die Schlagzeilen-Rendite niedriger ist.

### 3. Win-Rate

Der Prozentsatz gewinnender Trades.

```text
Win-Rate = Gewinnende Trades ÷ Gesamte Trades
```

- Hohe Win-Rate (80 %+) klingt gut — aber wenn Verluste selten, aber riesig sind, kann es verheerend sein
- Niedrige Win-Rate (40 %) kann profitabel sein, wenn Gewinne die Verluste überwiegen

> **Wichtiger als die Win-Rate:** das Verhältnis von durchschnittlichem Gewinn zu durchschnittlichem Verlust.

### 4. Erwartungswert

Der durchschnittliche Gewinn/Verlust pro Trade.

```text
Erwartungswert = (Win-Rate × Ø-Gewinn) - (Loss-Rate × Ø-Verlust)
```

Ein positiver Erwartungswert bedeutet Profitabilität im Durchschnitt.

---

## Risiko-Kennzahlen, die Profis verwenden

### Sharpe Ratio

Misst Rendite relativ zu Volatilität.

```text
Sharpe = (Rendite - risikofreier Zins) ÷ Standardabweichung der Rendite
```

- Über 1,0: gut
- Über 2,0: exzellent
- Unter 0,5: schlecht risikobereinigt

### Profit Factor

Bruttogewinn ÷ Bruttoverlust.

```text
Profit Factor = Gesamtgewinn ÷ Gesamtverlust

2,0 bedeutet: Du verdienst $2 für jeden verlorenen $1
```

- Über 1,5: solide
- Über 2,0: sehr gut
- Unter 1,0: Verlustbringer

---

## Eine ehrliche Checkliste

Wenn du ein Trading-Ergebnis siehst, frag:

- [ ] **Wie groß ist der maximale Drawdown?** (nicht nur die Rendite)
- [ ] **Wie lange ist der Zeitraum?** (Monate > Tage)
- [ ] **Ist es vollständig?** (Verluste enthalten?)
- [ ] **Was ist die Risiko-adjustierte Rendite?**
- [ ] **Wie viele Trades?** (10 Trades sind statistisch bedeutungslos; 100+ sind aussagekräftiger)
- [ ] **Ist es verifiziert?** (siehe [Warum verifizierbare Ergebnisse wichtig sind →](/docs/why-verifiable-results-matter))

---

## Wie WolfBot dir hilft

WolfBot zeigt deine Performance ehrlich über alle Märkte (Krypto, Futures, MT5):

- **Vollständige Historie** — jeder Trade, Gewinne und Verluste
- **Konsistente Metriken** — gleiche Formeln, egal welcher Markt
- **Drawdown-Tracking** — sieh deinen maximalen Drawdown
- **Risiko-Visualisierung** — verstehe Risiko, nicht nur Rendite

---

## Ein reales Beispiel

Zwei Trader, beide starten mit $10.000:

| Kennzahl | Trader A | Trader B |
|---|---|---|
| Endguthaben | $35.000 | $16.000 |
| Rendite | +250 % | +60 % |
| Max Drawdown | 62 % | 12 % |
| **Risiko-Effizienz** | **4,0** | **5,0** |

Trader A verdiente mehr, aber erlitt einen Drawdown von 62 % — die meisten Menschen hätten aufgegeben. Trader B erzielte eine glattere, nachhaltigere Kurve.

**Welcher ist der bessere Trader?** Risikobereinigt: B.

---

## Weiterführende Lektüre

- [Warum verifizierbare Ergebnisse wichtig sind →](/docs/why-verifiable-results-matter) — der vorherige Guide in dieser Reihe
- [Wie du den Drawdown im Handel reduzierst →](/docs/how-to-reduce-drawdown) — praktische Schritte, um deinen Drawdown zu senken
- [Risk-Controls-Guide →](/docs/risk-controls) — implementiere die Einstellungen, die diese Kennzahlen schützen
