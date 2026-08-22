---
title: "Take-Profit & Stop-Loss erklärt"
description: "Verstehe Take-Profit (TP) und Stop-Loss (SL) — die zwei wichtigsten Schutzmechanismen im Trading. Wie sie funktionieren und wie du sie in WolfBot setzt."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/dca-strategy"
previous_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/dca-strategy", "/docs/risk-controls"]
keywords: ["take profit stop loss", "tp sl trading", "stop loss explained", "take profit explained", "trading risk orders"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/take-profit-stop-loss"
---

# Take-Profit & Stop-Loss erklärt

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc21** · Zuletzt aktualisiert: 2026-08-15

## Die zwei wichtigsten Orders im Trading

Take-Profit (TP) und Stop-Loss (SL) sind vordefinierte Ausstiegspunkte, die **automatisch** ausgelöst werden — sie entfernen Emotionen aus deinen Entscheidungen.

| Order | Zweck | Wann ausgelöst |
|---|---|---|
| **Stop-Loss (SL)** | Begrenzt deinen Verlust | Wenn der Preis gegen dich läuft |
| **Take-Profit (TP)** | Sichert deinen Gewinn | Wenn der Preis dein Ziel erreicht |

## Für wen dieser Guide ist

- **Für alle Trader:** Verstehe TP/SL in einfachen Worten — warum sie wichtig sind und wie du sie setzt.
- **Für technische Nutzer:** Sieh, wie WolfBot TP/SL über Broker-APIs und MT5 ausführt.

---

## Stop-Loss (SL)

Ein Stop-Loss ist eine Order, die deine Position **automatisch schließt**, wenn der Preis ein bestimmtes Level erreicht, und so deinen Verlust begrenzt.

### Beispiel

```text
Du kaufst BTC bei $50.000
Stop-Loss gesetzt bei $47.500 (5 % darunter)

Wenn BTC auf $47.500 fällt → Position automatisch geschlossen
Verlust begrenzt auf 5 %
```

### Warum Stop-Losses wichtig sind

1. **Begrenzen Verluste** — du weißt im Voraus deinen maximalen Verlust
2. **Entfernen Emotionen** — kein „es kommt zurück“
3. **Schützen dein Konto** — verhindern katastrophale Verluste
4. **Ermöglichen ruhigen Schlaf** — Schutz wirkt auch, wenn du abwesend bist

---

## Take-Profit (TP)

Ein Take-Profit ist eine Order, die deine Position **automatisch schließt**, wenn der Preis ein Gewinnziel erreicht, und so deinen Gewinn sichert.

### Beispiel

```text
Du kaufst BTC bei $50.000
Take-Profit gesetzt bei $55.000 (10 % darüber)

Wenn BTC $55.000 erreicht → Position automatisch geschlossen
Gewinn gesichert: 10 %
```

### Warum Take-Profits wichtig sind

1. **Sichern Gewinne** — verhindern, dass „grün zu rot wird“
2. **Disziplin** — erzwingen Gewinnmitnahme statt Gier
3. **Konsistenz** — deine Strategie bleibt konsistent
4. **Kein Dauerbeobachten** — Gewinne werden automatisch gesichert

---

## TP/SL zusammen

TP und SL arbeiten zusammen als dein **Ausstiegsplan** für jede Position:

```text
            ┌── TP ($55.000) → Gewinn +10 %
Einstieg ($50.000)
            └── SL ($47.500) → Verlust -5 %
```

Ein gutes Risiko-Ertrags-Verhältnis ist mindestens **1:2** — du riskierst $1, um $2 zu gewinnen.

---

## TP/SL in WolfBot setzen

### Im Smart Terminal

1. Öffne das **Smart Terminal**
2. Wähle dein Symbol (Krypto oder MT5)
3. Gib deine Positionsgröße ein
4. Das Order-Panel zeigt vorausgefüllte TP/SL basierend auf deinen Risk Controls
5. Passe TP/SL-Levels nach Bedarf an
6. Platziere den Order

Beide TP und SL werden standardmäßig gesetzt.

### Bei automatisierten Bots

Jede Bot-Vorlage enthält TP/SL-Parameter:
- **TP %** — Gewinnziel als Prozentsatz
- **SL %** — Verlustlimit als Prozentsatz

---

## Best Practices für TP/SL

### Stop-Loss setzen

- ✅ Setze einen SL auf **jeder** Position — ohne Ausnahme
- ✅ Basierend auf deiner Risikotoleranz (z. B. 5 %)
- ✅ Berücksichtige Volatilität (Gold/MT5 können größere Stops benötigen)
- ❌ Setze niemals einen SL zu eng (Marktrauschen triggert ihn)

### Take-Profit setzen

- ✅ Nutze ein Risiko-Ertrags-Verhältnis von mindestens 1:2
- ✅ Bei starken Trends kannst du deinen TP nachziehen (trailing)
- ❌ Setze keinen TP zu weit (der Markt erreicht ihn nie)
- ❌ Setze keinen TP zu eng (du lässt Gewinne liegen)

---

## Häufige Fragen

**F: Kann ich TP/SL nach dem Öffnen einer Position ändern?**
Ja — wähle die Position im Positions-Panel und klicke auf **Modify**.

**F: Was passiert, wenn der Preis den SL überspringt (Gap)?**
Bei schnellen Bewegungen kann der Fill schlechter als dein SL-Level sein (Slippage). Das ist bei allen Brokern normal, aber ein konservativer Hebel reduziert die Auswirkung.

**F: Werden TP/SL auf dem Server oder lokal gehalten?**
Das hängt vom Broker ab. WolfBot sendet TP/SL als Schutzaufträge an deinen Broker (oder MT5), damit sie auch dann wirken, wenn WolfBot offline ist.

**F: Funktioniert TP/SL auf MT5-Instrumenten gleich?**
Ja — WolfBot wendet dieselbe TP/SL-Logik auf Krypto- und MT5-Positionen an.

---

## Weiterführende Lektüre

- [Automatisierter Handelsablauf →](/docs/automated-trading-workflow) — der komplette Ablauf
- [DCA-Strategie →](/docs/dca-strategy) — TP/SL in einer beliebten Strategie
- [Risk-Controls-Guide →](/docs/risk-controls) — wie TP/SL in dein Risiko-Rahmenwerk passen

---

## Nächster Schritt

> **[DCA-Strategie →](/docs/dca-strategy)**
