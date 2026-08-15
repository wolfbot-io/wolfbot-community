---
title: "Wie du den Drawdown im Trading reduzierst"
description: "Praktische Schritte, um den maximalen Drawdown deiner Trading-Strategie zu senken — Positionsgröße, Stops, Diversifikation und Cooldowns."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "reference"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/why-bots-fail-risk-management"
previous_guide: "/docs/how-to-read-trading-performance"
related_guides: ["/docs/why-bots-fail-risk-management", "/docs/risk-controls", "/docs/how-to-read-trading-performance"]
keywords: ["reduce drawdown", "trading drawdown", "lower max drawdown", "drawdown protection", "risk management"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/how-to-reduce-drawdown"
---

# Wie du den Drawdown im Trading reduzierst

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc8** · Zuletzt aktualisiert: 2026-08-15

## Was ist Drawdown?

Drawdown ist der Rückgang deines Kontos von einem Höchststand zu einem Tiefststand. Er misst die **schlimmste Verluststrecke**, die du erlebt hast.

```text
$10.000 → $15.000 (Hoch) → $11.000 (Tief)
Drawdown = (15.000 - 11.000) / 15.000 = 26,7 %
```

Je niedriger dein Drawdown, desto ruhiger kannst du handeln — und desto wahrscheinlicher überlebst du die unvermeidlichen Verlustphasen.

## Für wen dieser Guide ist

- **Für alle Trader:** Sechs umsetzbare Schritte, um deinen Drawdown zu senken — ohne Statistikstudium.
- **Für technische Nutzer:** Die Mathematik dahinter und wie WolfBot diese Regeln automatisch durchsetzt.

## Warum ein niedriger Drawdown wichtig ist

| Drawdown | Erforderliche Erholung | Emotionaler Druck |
|---|---|---|
| 10 % | 11 % Gewinn | Gering |
| 25 % | 33 % Gewinn | Spürbar |
| 50 % | 100 % Gewinn | Hoch |
| 75 % | 300 % Gewinn | Extrem |

Je tiefer du fällst, desto schwerer ist die Rückkehr — **und** desto wahrscheinlicher gibst du emotional auf.

## Sechs Schritte, um den Drawdown zu senken

### 1. Begrenze die Positionsgröße

Der wirksamste Hebel zur Drawdown-Kontrolle.

**Regel:** Riskieren Sie nie mehr als 1–2 % Ihres Kontos bei einem einzelnen Trade.

```text
Konto $10.000 → Risiko pro Trade = $100–$200
```

- Bei 2 % Risiko: Selbst 10 Verluste in Folge = -20 % (schmerzhaft, aber überlebbar)
- Bei 10 % Risiko: 10 Verluste in Folge = nahezu Ruin

**In WolfBot:** Setze `Max position % of balance` auf 2–5 %.

### 2. Nutze Stop-Losses auf jeder Position

Ein Stop-Loss begrenzt den Verlust eines einzelnen Trades auf einen bekannten Betrag.

**In WolfBot:** Das Smart Terminal setzt standardmäßig einen Stop-Loss auf jede Position. Entferne ihn niemals.

### 3. Diversifiziere über Märkte

Setze nicht alles auf einen Markt. WolfBot handelt Krypto **und** MT5 (Forex, Gold, Indizes) — verteile dein Risiko auf unkorrelierte Instrumente.

**Warum es hilft:** Wenn ein Markt fällt, kann ein anderer steigen, was deinen Gesamt-Drawdown glättet.

### 4. Nutze Cooldowns nach Verlusten

Nach einem Verlusttrade ist die Wahrscheinlichkeit emotionaler Entscheidungen hoch. Erzwinge eine Pause.

**In WolfBot:** Setze `After loss cooldown` auf 5–15 Minuten.

### 5. Setze Tagesverlust-Limits

Lege einen maximalen Tagesverlust fest, nach dem der Handel stoppt.

**In WolfBot:** Setze `Daily loss limit` auf 5–10 %. Danach pausiert der Handel automatisch.

### 6. Reduziere den Hebel

Hebel verstärkt Gewinne **und** Verluste.

| Hebel | Preisbewegung | Kontowirkung |
|---|---|---|
| 1x | 10 % | 10 % |
| 5x | 10 % | 50 % |
| 10x | 10 % | 100 % (Ruin) |

**In WolfBot:** Setze `Max leverage` konservativ (1x–3x für Anfänger).

## Die Mathematik der Erholung

Nach einem Verlust brauchst du mehr Gewinn, um wieder auf null zu kommen:

```text
Verlust 10 % → brauche +11 %  um zu brechen
Verlust 20 % → brauche +25 %
Verlust 30 % → brauche +43 %
Verlust 50 % → brauche +100 %
```

Die Kurve der Erholung wird steiler, je tiefer der Drawdown — ein weiterer Grund, ihn klein zu halten.

## Beispiel vorher/nachher

### Vorher (hoher Drawdown)

```
Position: 20 % des Kontos
Hebel: 10x
Stops: oft ignoriert
Verluste: keine Pause
Ergebnis: 60 % Drawdown bei einem schlechten Lauf
```

### Nachher (niedriger Drawdown)

```
Position: 3 % des Kontos
Hebel: 2x
Stops: immer gesetzt
Verluste: 10-Minuten-Cooldown
Ergebnis: 15 % Drawdown bei demselben Lauf
```

Dieselbe Strategie, dasselbe Marktumfeld — völlig anderes Risikoprofil.

## In WolfBot umsetzen

Alles in diesem Guide lässt sich in den Risk Controls von WolfBot konfigurieren:

| Schritt | WolfBot-Einstellung |
|---|---|
| Positionsgröße | `Max position %` |
| Stop-Losses | Smart Terminal (Standard) |
| Diversifikation | Verbinde mehrere Broker/Märkte |
| Cooldowns | `After loss cooldown` |
| Tageslimits | `Daily loss limit` |
| Hebel | `Max leverage` |

> Vollständige Anleitung unter [Risk-Controls-Guide →](/docs/risk-controls)

## Ein Denkanstoß

Drawdown ist unvermeidlich — aber seine **Größe** liegt in deiner Hand. Die meisten Trader, die aufgeben, geben nicht wegen der Strategie auf; sie geben wegen eines Drawdowns auf, der zu groß zum Durchhalten war.

## Weiterführende Lektüre

- [Warum die meisten Trading-Bots beim Risikomanagement versagen →](/docs/why-bots-fail-risk-management) — die vier Ausfallarten erklärt
- [Wie du Handelsleistung verantwortungsvoll liest →](/docs/how-to-read-trading-performance) — verstehe die Kennzahlen
- [Risk-Controls-Guide →](/docs/risk-controls) — implementiere alles jetzt
