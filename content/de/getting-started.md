---
title: "Erste Schritte mit WolfBot Community"
description: "Die ersten Schritte nach der Installation von WolfBot Community. Verbinde ein Demo-Konto, erkunde das Dashboard und füge deine Krypto-Börsen oder deinen MT5-Broker hinzu."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/simulation"
previous_guide: "/install/windows"
related_guides: ["/docs/simulation", "/brokers/bybit", "/docs/risk-controls"]
keywords: ["wolfbot getting started", "wolfbot tutorial", "how to use wolfbot", "unified trading platform"]
sitemap_priority: 0.9
lang: "de"
translation_of: "getting-started"
---

# Erste Schritte mit WolfBot Community

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-15

## Willkommen! 👋

WolfBot Community ist eine einheitliche Handelsplattform — eine Oberfläche für Krypto-Börsen und MT5-Broker. Die Installation erstellt kein Börsenkonto und platziert keinen Trade — nichts ist verbunden, bis du eines hinzufügst. Befolge diese Schritte der Reihe nach.

> **Eine Plattform. Jeder Markt.** — Krypto + Futures + MT5, vereint durch WolfBot.

## Schritt 1: Öffne das Dashboard

Starte WolfBot Community. Du landest auf der Seite **Capability Status** — sie zeigt, welche Broker und Funktionen bei deiner Installation verfügbar sind, und bestätigt, dass noch nichts verbunden ist.

## Schritt 2: Erkunde das Dashboard

| Bereich | Zweck |
|---|---|
| **Portfolio Overview** | Saldo, P&L, Positionen — über ALLE verbundenen Märkte |
| **Bots** | Automatisierte Handelsbots für Krypto und MT5 |
| **Smart Terminal** | Manueller Handel mit Risikokontrollen |
| **Risk Controls** | Positionslimits, Drawdown-Schutz |
| **Exchange Accounts** | Broker-Verbindungen und API-Schlüssel |

## Schritt 3: Verbinde ein Demo-Konto — Null Risiko

WolfBot hat keinen separaten „Simulationsmodus“-Schalter. Stattdessen verbindest du das eigene **Demo-/Testnet-Konto** eines Brokers — echte Marktdaten, virtuelles Guthaben, exakt dieselbe Oberfläche und derselbe Risiko-Engine, den du später für den Live-Handel nutzt.

1. Gehe zu **Exchange Accounts → Add Account**
2. Wähle **Bybit** und befolge die [Bybit-Demo-Einrichtungsschritte](/brokers/bybit) — WolfBot erkennt Demo vs. Live automatisch anhand des eingefügten API-Schlüssels
3. Probiere das **Smart Terminal** mit deinem Demo-Konto aus
4. Beobachte, wie Positionen im Dashboard erscheinen

> ✅ Ein Demo-Konto kostet nichts und berührt niemals echtes Geld — der sicherste Weg, WolfBot auf jedem unterstützten Markt kennenzulernen.

[Vollständiger Demo-/Simulations-Guide →](/docs/simulation)

## Schritt 4: Verbinde deine Märkte für den echten Handel

Wenn du bereit für den Live-Betrieb bist:
1. Erstelle einen Trade-Only-API-Schlüssel auf deiner Börse
2. Exchange Accounts → Add Account → Broker wählen → Schlüssel eingeben
3. Beginne mit kleinen Positionen und strengen Risikokontrollen

> ⚠️ Verwende immer API-Schlüssel mit Trade-Only-Berechtigung (kein Abheben).

Broker-Guides: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

## Checkliste für die erste Woche

- [ ] Erkunde das Dashboard
- [ ] Verbinde ein Demo-Konto (Bybit Demo oder MT5-Demo)
- [ ] Trade 1–2 Tage im Demo-Modus
- [ ] Probiere das Smart Terminal mit deinem Demo-Konto aus
- [ ] Lies den [Risk-Controls-Guide](/docs/risk-controls)
- [ ] Verbinde ein Live-Konto, wenn du bereit bist

## Brauchst du Hilfe?

- [Dokumentation](/docs)
- [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [Fehlerbehebung](/docs/troubleshooting)
- [FAQ](/faq)

## Nächster Schritt

> **[Verbinde ein Demo-Konto →](/docs/simulation)**
