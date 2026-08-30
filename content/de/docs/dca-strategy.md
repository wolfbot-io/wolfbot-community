---
title: "DCA-Strategie erklärt — Dollar-Cost Averaging im Trading"
description: "Verstehe die DCA-Strategie (Dollar-Cost Averaging) — kaufe in Intervallen, um deinen Durchschnittspreis zu senken. Wie sie funktioniert und wie du sie in WolfBot nutzt."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/automated-trading-workflow"
previous_guide: "/docs/take-profit-stop-loss"
related_guides: ["/docs/take-profit-stop-loss", "/docs/automated-trading-workflow", "/docs/risk-controls"]
keywords: ["dca strategy", "dollar cost averaging", "dca trading bot", "average down strategy", "dca explained"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/dca-strategy"
---

# DCA-Strategie erklärt

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15

## Was ist DCA?

DCA (Dollar-Cost Averaging) ist eine Strategie, bei der du in **regelmäßigen Intervallen** einen festen Betrag kaufst — unabhängig vom Preis. Im Trading bedeutet das oft, zusätzlich zu kaufen, wenn der Preis fällt, um deinen **Durchschnittspreis zu senken**.

## Für wen dieser Guide ist

- **Für alle Trader:** Verstehe DCA in einfachen Worten — was es ist, wann es hilft und wann es gefährlich wird.
- **Für technische Nutzer:** Sieh die Mathematik dahinter und wie WolfBot DCA mit Risk Controls verbindet.

---

## Wie DCA funktioniert

### Das Grundprinzip

```text
Du kaufst $100 BTC bei $50.000 (0,002 BTC)
Preis fällt auf $45.000 → du kaufst $100 mehr (0,00222 BTC)
Preis fällt auf $40.000 → du kaufst $100 mehr (0,0025 BTC)

Dein Durchschnittspreis: (100+100+100) / (0,002+0,00222+0,0025) = $44.590

Wenn der Preis auf $45.000 zurückkommt → du bist im Gewinn
(obwohl der Preis unter deinem ersten Kauf liegt)
```

### Warum es hilft

1. **Senkt den Durchschnittspreis** — brauchst weniger Erholung, um zu brechen
2. **Entfernt das Timing** — kein Versuch, den Boden zu erraten
3. **Diszipliniert** — Regeln statt Emotionen
4. **Passt zu volatilen Märkten** — profitiert von Schwankungen

---

## Wann DCA gut funktioniert

### Geeignet für

- **Seitwärtsmärkte** — Preise schwanken in einer Spanne
- **Langfristige Akkumulation** — du glaubst an den langfristigen Wert
- **Trendmärkte mit Korrekturen** — Kauf bei Rücksetzern im Aufwärtstrend

### Nicht geeignet für

- **Stark fallende Märkte** — „ein fallendes Messer fangen“
- **Ruinöse Vermögenswerte** — kein Durchschnittspreis rettet einen Kollaps
- **Wenn das Kapital begrenzt ist** — DCA braucht Reserven

> ⚠️ DCA ist **kein** Ersatz für einen Stop-Loss. Es ist eine Einstiegsstrategie, keine Risikostrategie.

---

## DCA in WolfBot

WolfBot unterstützt DCA als Bot-Strategie:

### DCA-Bot konfigurieren

| Parameter | Beschreibung | Beispiel |
|---|---|---|
| **Symbol** | Das Instrument (Krypto oder MT5) | BTC/USDT |
| **Erster Kauf** | Anfängliche Positionsgröße | $100 |
| **Intervall** | Wann zusätzlich gekauft wird | -5 % Preisrückgang |
| **Anzahl der Käufe** | Maximale zusätzliche Käufe | 5 |
| **TP** | Gewinnziel (vom Durchschnitt) | +3 % |
| **SL** | Verlustlimit | -10 % |

### Beispiel-Konfiguration

```text
Symbol: BTC/USDT
Erster Kauf: $100
Zusätzliche Käufe: alle -5 %
Max. Käufe: 5 (Gesamtmax: $500)
Take-profit: +3 % vom Durchschnittspreis
Stop-loss: -10 %
```

---

## Die Risiken von DCA

### 1. Kapital-Erschöpfung

Wenn der Preis weiter fällt, verbrauchst du dein Kapital mit „Nachkaufen“.

**Schutz:** Setze eine maximale Anzahl von Käufen und eine Gesamtkapital-Obergrenze.

### 2. Fallende Messer

In einem echten Crash fällt der Preis immer weiter — jeder zusätzliche Kauf verliert.

**Schutz:** Nutze DCA nur in Märkten, an die du langfristig glaubst. Setze immer einen Stop-Loss.

### 3. Überexposure

Zu viele DCA-Käufe können deine Gesamtexposure über ein sicheres Niveau hinaus treiben.

**Schutz:** Risk Controls begrenzen deine Gesamtexposure automatisch.

---

## DCA vs. Einmal-Kauf

| Aspekt | DCA | Einmal-Kauf |
|---|---|---|
| **Timing** | Kein perfektes Timing nötig | Timing entscheidend |
| **Durchschnittspreis** | Gleitet im Laufe der Zeit | Festgelegt bei Kauf |
| **Emotionaler Stress** | Geringer | Höher |
| **Kapitalbedarf** | Reserven nötig | Alles auf einmal |
| **Am besten für** | Volatile/seitwärts Märkte | Starke Überzeugung |

---

## Best Practices

1. **Lege einen maximalen Kapitaleinsatz fest** — kenne dein Limit im Voraus
2. **Setze einen Stop-Loss** — DCA ersetzt keinen SL
3. **Wähle Intervalle mit Bedacht** — zu eng = Überhandeln, zu weit = wenig Nutzen
4. **Beginne im Demo** — teste deine DCA-Einstellungen risikofrei
5. **Respektiere Risk Controls** — sie deckeln deine Gesamtexposure

---

## Weiterführende Lektüre

- [Take-Profit & Stop-Loss →](/docs/take-profit-stop-loss) — die Ausstiegsseite von DCA
- [Automatisierter Handelsablauf →](/docs/automated-trading-workflow) — DCA in einem Bot umsetzen
- [Risk-Controls-Guide →](/docs/risk-controls) — Gesamtexposure begrenzen

---

## Nächster Schritt

> **[Automatisierter Handelsablauf →](/docs/automated-trading-workflow)**
