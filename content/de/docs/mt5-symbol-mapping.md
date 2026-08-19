---
title: "MT5 Symbol-Mapping — Wie WolfBot Community Symbole zwischen MT5 und Krypto-Börsen routet"
description: "MT5 verwendet USD-notierte Symbole (wie BTCUSD oder XAUUSD), während Krypto-Börsen USDT-Paare verwenden (BTCUSDT). Hier erfährst du genau, wie WolfBot Community sie mappt, damit ein Signal über MT5, Binance, Bybit und BingX hinweg funktioniert — ohne manuelles Umbenennen."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mt5 symbol mapping",
  "mt5 to crypto symbol",
  "xauusd to paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 futures crypto",
  "wolfbot symbol mapping",
  "cross market trading symbols"
]
sitemap_priority: 0.75
lang: "de"
translation_of: "docs/mt5-symbol-mapping"
---

# MT5 Symbol-Mapping

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc17** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du denselben Markt sowohl auf einer Krypto-Börse als auch auf MT5 handelst** — zum Beispiel betreibst du eine Gold- oder BTC-Strategie und willst sie in einem Dashboard sehen — hier wird erklärt, warum die Symbolnamen unterschiedlich aussehen und wie WolfBot Community sie für dich abgleicht.
- **Für technische Nutzer** — du siehst die tatsächliche Mapping-Tabelle, die in WolfBot läuft, sodass du genau weißt, worauf sich ein Symbol auflöst, bevor du eine Position eröffnest.

## Warum MT5 und Krypto-Börsen Symbole unterschiedlich benennen

Jeder Handelsplatz notiert Preise in seinem eigenen Format:

- **MT5 (Forex, Gold, Indizes, Aktien/CFDs)** notiert in **USD-ähnlicher** Form: `BTCUSD`, `XAUUSD`, `XAGUSD`, `ETHUSD`.
- **Krypto-Spot-/Futures-Börsen** wie Binance, Bybit oder BingX notieren in **USDT**-Paaren: `BTCUSDT`, `XAUUSDT`, `ETHUSDT`.
- Gold ist besonders unterschiedlich: Es gibt kein „XAU/USDT"-Paar auf den meisten Krypto-Börsen — WolfBot mappt Gold auf den `PAXG`-Token (`PAXGUSDT`), einen tokenisierten Gold-ETF.

Wenn du deinen MT5-Broker und eine Krypto-Börse ohne jeden Abgleich verbunden hättest, würde dieselbe Strategie auf zwei unterschiedlich benannte Symbole schauen und sie als zwei separate Märkte behandeln. WolfBot Community löst das auf, sodass EINE Portfolio-Ansicht beide zeigen kann.

## Wie WolfBot Community Symbole mappt

WolfBot Community pflegt eine einzige verbindliche Symbol-Zuordnung. Wenn ein Signal oder eine Strategie ein Symbol referenziert, wird es in den nativen Namen des Ziel-Handelsplatzes übersetzt, bevor eine Order gebaut wird. Die allgemeinen Regeln sind:

- `BTCUSD` → `BTCUSDT`, `ETHUSD` → `ETHUSDT` usw. — die krypto-relevanten USD-notierten MT5-Symbole mappen auf das passende `USDT`-Paar.
- `XAUUSD` / `GOLD` → `PAXGUSDT` — Gold mappt auf das tokenisierte-Gold-Paar auf Binance.
- `XAGUSD` / `SILVER` → `XAGUSDT` — Silber hat ein natives USDT-Paar.
- Silber mappt außerdem auf BingX' TradFi-Silber-Perpetual mit seiner internen Swap-ID.
- Ein Symbol **ohne** Mapping wird unverändert durchgereicht, sodass ein individuelles Instrument nie versehentlich umgeschrieben wird.

Diese Tabelle existiert im Code als Exchange-Symbol-Mapping (`map_symbol(source, target_exchange)`); sie gibt den nutzbaren Namen des Ziel-Handelsplatzes zurück, oder das Originalsymbol unverändert, falls kein Eintrag existiert.

## Was das für dein Setup bedeutet

- **Du schreibst eine Strategie einmal.** Ein Gold-Signal auf MT5 und eine Gold-Position auf Krypto erscheinen beide unter einem Instrument in WolfBots einheitlicher Risiko- und Portfolio-Ansicht.
- **Kein manuelles Umbenennen.** Du musst nicht jeden Bot bearbeiten, wenn du einen zweiten Handelsplatz hinzufügst.
- **Deterministisch.** Die Zuordnung ist in der Plattform fest verankert, sodass sich dasselbe Signal immer auf dasselbe Zielsymbol auflöst — keine Überraschungen zwischen einem Demo-Test und einem Live-Lauf.

## Ein praktisches Beispiel

Nimm eine Silber-Strategie. Auf deinem MT5-Broker erscheint das Symbol als `XAGUSD`; auf Binance ist es `XAGUSDT`. Wenn WolfBot diese Strategie routet, löst es das Quellsymbol auf den korrekten Namen pro Handelsplatz auf, sodass die Order auf jeder Börse zum richtigen Paar geht, und deine Portfolio-Ansicht bleibt ein „Silber"-Instrument statt zwei nicht verbundener Märkte.

## Wo es weitergeht

- [Zuerst sicher testen →](/docs/simulation) — Symbole auf einem Demo-Konto mappen und verifizieren, bevor du live gehst
- [Häufige MT5-Probleme →](/docs/mt5-troubleshooting)
- [MT5 verbinden →](/brokers/mt5)

## Nächster Schritt

> **[MT5-Fehlerbehebung →](/docs/mt5-troubleshooting)**
