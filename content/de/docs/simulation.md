---
title: "Mit einem Demo-Konto in WolfBot Community starten"
description: "Erfahre, wie du WolfBot Community risikofrei mit einem Broker-Demo-Konto testest. Paper-Trade gegen echte Marktdaten über Krypto- und MT5-Märkte, ohne echtes Geld zu riskieren."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/getting-started"
related_guides: ["/getting-started", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: [
  "wolfbot simulation",
  "wolfbot paper trading",
  "wolfbot demo mode",
  "test trading bot without money",
  "crypto trading simulator",
  "bybit demo account"
]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/simulation"
---

# Starte mit einem Demo-Konto

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15

## Was ist „Simulation“ in WolfBot?

WolfBot hat keinen separaten globalen „Simulationsmodus“, den du an- und ausschaltest. Stattdessen verbindest du das eigene **Demo- (Testnet-)Konto** eines Brokers — dieselbe Oberfläche, derselbe Risiko-Engine und dieselbe Order-Logik wie beim Live-Handel, aber gegen Echtzeit-Marktdaten mit virtuellem Guthaben statt echtem. Zwischen Demo und Live ändert sich an der Plattform nichts; nur das Konto, auf dem du handelst, ist anders.

Für Bybit erkennt WolfBot automatisch, ob ein API-Schlüssel zu einem Demo- oder Live-Konto gehört — du wählst keinen Modus manuell.

## Warum mit einem Demo-Konto starten?

1. **Null Risiko** — kein echtes Geld beteiligt
2. **Oberfläche lernen** — verstehe Orders, Positionen, Risk Controls über Märkte hinweg
3. **Strategien testen** — validiere deinen Ansatz auf Krypto- und MT5-Instrumenten vor dem Live-Gang
4. **Vertrauen aufbauen** — sieh, wie WolfBot auf Marktbewegungen in verschiedenen Anlageklassen reagiert

## Schritt 1: Ein Demo-Konto verbinden

1. Öffne WolfBot Community → **Exchange Accounts → Add Account**
2. Wähle **Bybit** und erstelle einen Demo-/Testnet-API-Schlüssel — genaue Schritte im [Bybit-Verbindungs-Guide](/brokers/bybit)
3. Füge den Schlüssel ein. WolfBot erkennt automatisch, dass es ein Demo-Schlüssel ist, und beschriftet das Konto entsprechend
4. MT5-Nutzer: Die meisten MT5-Broker bieten ebenfalls ein kostenloses Demo-Konto — prüfe das Dashboard deines Brokers und folge dann dem [MT5-Verbindungs-Guide](/brokers/mt5)

## Schritt 2: Erkunde das Smart Terminal

Das Smart Terminal ist deine manuelle Handels-Oberfläche — dieselbe, die du später für den Live-Handel nutzt.

1. Gehe zum **Smart Terminal**
2. Wähle dein Demo-Konto, dann ein Handelspaar (z. B. BTC/USDT für Krypto oder XAU/USD für Gold via MT5)
3. Beachte die vorausgefüllten Risikoparameter:
   - Positionsgröße
   - Stop-loss
   - Take-profit
4. Klicke auf **Place Order**

Dein Order erscheint sofort im **Positions**-Panel — finanziert durch das virtuelle Guthaben deines Demo-Kontos.

## Schritt 3: Beobachte dein Demo-Portfolio

1. Gehe zu **Portfolio Overview**
2. Sieh Guthaben und P&L deines Demo-Kontos
3. Beobachte, wie sich Positionen mit echten Marktpreisen aktualisieren
4. Beobachte, wie TP/SL-Levels deine Position schützen

## Schritt 4: Risk Controls konfigurieren

Übe auch im Demo-Modus gutes Risikomanagement — diese Einstellungen übernehmen sich identisch, wenn du ein Live-Konto verbindest:

1. **Position Limits** — maximale Größe pro Trade
2. **Drawdown Guards** — maximaler Verlust vor dem Stopp
3. **Cooldowns** — minimale Zeit zwischen Trades
4. **Daily Limits** — maximale Trades pro Tag

> 🛡️ Risk Controls funktionieren identisch auf Demo- und Live-Konten. Konfiguriere sie jetzt, damit du bereit bist, wenn du live gehst.

Siehe [Risk-Controls-Guide →](/docs/risk-controls)

## Schritt 5: Probiere automatische Bots

1. Gehe zu **Bots → Create Bot**
2. Wähle eine Strategie-Vorlage
3. Konfiguriere die Parameter
4. Richte den Bot auf dein Demo-Konto
5. Beobachte, wie er automatisch Trades ausführt — dieselbe Logik läuft für Krypto- und MT5-Instrumente

## Wechsel zum Live-Handel

Wenn du sicher bist:
1. Verbinde ein Broker-Konto mit einem Live-Trade-Only-API-Schlüssel (siehe [Verbinde deine Märkte](/getting-started))
2. Beginne mit minimalen Positionsgrößen
3. Halte enge Stop-losses
4. Erhöhe allmählich, während du das Verhalten verifizierst

> ⚠️ Auch erfahrene Trader sollten neue Strategien zuerst auf einem Demo-Konto testen — besonders beim Handel über verschiedene Markttypen hinweg.

## Häufige Fragen

**F: Nutzt ein Demo-Konto echte Marktdaten?**
Ja. WolfBot holt Echtzeit-Preise von Börsen und MT5-Brokern für Demo- und Live-Konten.

**F: Kann ich auf einem Demo-Konto Geld verlieren?**
Nein. Demo-Konten handeln mit virtuellem Guthaben von der Börse/dem Broker, nicht mit echtem Geld.

**F: Wie realistisch ist Demo im Vergleich zu Live?**
WolfBot führt dieselbe Order-Logik auf beiden aus. Der Hauptunterschied ist die Ausführung — ein Demo-Konto füllt gegen das Testnet der Börse, nicht gegen das echte Orderbuch, daher kann Slippage leicht abweichen. Das gilt unabhängig davon, ob du Krypto, Forex oder Gold handelst.

**F: Kann ich mein Demo-Guthaben zurücksetzen?**
Das hängt von der Börse ab, nicht von WolfBot — die meisten Broker lassen dich das virtuelle Guthaben eines Demo-Kontos von ihrer eigenen Website aus aufladen oder zurücksetzen (z. B. das Bybit-Testnet-Dashboard).

## Nächster Schritt

> **[Bybit Demo verbinden →](/brokers/bybit)** oder **[Risk Controls erkunden →](/docs/risk-controls)**
