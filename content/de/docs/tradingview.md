---
title: "TradingView zum Self-Hosted Trading-Bot — TradingView-Alerts mit WolfBot Community verbinden"
description: "Sende einen TradingView-Alert-Webhook direkt an deinen self-hosted WolfBot-Community-Bot. Wie die Webhook-URL, die HMAC-Signatur und die gestuften Alert-Templates funktionieren, und wie du zuerst sicher in der Simulation testest."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview to trading bot",
  "tradingview webhook bot",
  "tradingview to self hosted bot",
  "tradingview alerts automation",
  "connect tradingview to wolfbot",
  "tradingview webhook self hosted"
]
sitemap_priority: 0.8
lang: "de"
translation_of: "docs/tradingview"
---

# TradingView zum Self-Hosted Trading-Bot

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du bereits TradingView-Alerts schreibst und willst, dass sie auf deinem eigenen Bot agieren, nicht in einem Papier-Notizbuch** — hier bekommst du die eine URL und das eine Alert-Template, um beides zu verbinden, sowie einen sicheren Weg zum Testen, bevor echtes Geld im Spiel ist.
- **Für technische Nutzer** — du siehst genau, wie der Webhook authentifiziert wird (HMAC), wie die Alert-Payload strukturiert ist und wie Symbole auf deinen Broker normalisiert werden, bevor überhaupt eine Order existiert.

## Wie TradingView sich mit WolfBot Community verbindet

TradingView-Alerts können einen **HTTP-Webhook** auslösen. WolfBot Community stellt einen Webhook-Endpunkt für diesen Alert bereit, verifiziert, dass er wirklich von dir kam, und verwandelt ihn in ein Strategiesignal, das dieselbe Risiko- und Execution-Pipeline durchläuft wie jede andere Order.

Der Ablauf:

```text
TradingView-Alert
   → HTTP POST an deine Webhook-URL
   → WolfBot verifiziert die HMAC-Signatur
   → parst den Alert (Symbol, Richtung, von/zu)
   → normalisiert das Symbol auf deinen Ziel-Broker
   → reiht eine Order über den gemeinsamen Risiko-/Execution-Layer ein
```

## 1. Deine Webhook-URL und dein Secret holen

Jede TradingView-Quelle erhält einen dedizierten Endpunkt. Die Pfadform ist:

```text
/api/v1/strategy-webhooks/{source_id}
```

Du URL-kodierst das gegen deinen eigenen WolfBot-Community-Host (denselben Host, bei dem du dich sonst einloggst), und kombinierst es mit einem Webhook-Secret pro Quelle. Dieses Secret ist es, mit dem WolfBot verifiziert, dass jede Anfrage tatsächlich von dir stammt.

## 2. Ein Alert-Template verwenden (drei Stufen)

WolfBot liefert Alert-Templates in drei Stufen, sodass du nur mit dem aufrufst, was jede Situation braucht:

- **`signal_only`** — nur Richtung und Symbol; keine Risiko- oder Kontodetails. WolfBot entscheidet über Größe und Absicherung.
- **`signal_and_risk`** — fügt Risikofelder wie angeforderten Nominalwert und Take-Profit hinzu, aber keine Kontoauswahl.
- **`full_entry_request`** — die vollständige Payload inklusive der Ziel-`account_id`, wenn du willst, dass ein Alert ein bestimmtes Konto steuert.

Jede Stufe trägt ihre Identitätsfelder — `tenant_id`, `source_id`, Strategie-Instanz/-Version und einen `definition_hash` — sodass das Signal immer der exakten Strategie zugeordnet wird, die du auslösen wolltest.

## 3. Die HMAC-Signatur

Damit niemand sonst deinen Bot auslösen kann, wird der Webhook signiert. Die HTTP-Anfrage, die du von TradingView sendest, enthält eine über den Body berechnete Signatur mit deinem Webhook-Secret (das fertige curl-Beispiel liefert dieses HMAC-Rezept bereits korrekt). WolfBot berechnet sie serverseitig neu und akzeptiert nur eine Anfrage, deren Signatur übereinstimmt. Eine nicht übereinstimmende Signatur wird einfach abgelehnt — nichts wird ausgeführt.

## 4. Symbole werden für dich normalisiert

Das `symbol` in deinem Alert kann die MT5/USD-Form sein (`XAGUSD`), während dein Order-Ziel Binance ist (`XAGUSDT`). WolfBot lässt das Alert-Symbol durch denselben Broker-bewussten Symbol-Mapper laufen, der überall sonst verwendet wird, sodass der Alert auf dem richtigen Paar landet. Gibt es kein Mapping, wird das Symbol unverändert durchgereicht statt stillschweigend umgeschrieben. Siehe den [Symbol-Mapping-Guide](/docs/mt5-symbol-mapping) für die vollständige Tabelle.

## 5. Zuerst in der Simulation testen, bevor irgendetwas echt wird

Bevor du den Alert auf eine Live-Strategie richtest:

1. Erstelle eine Strategie auf einem **Simulation**-Konto und gib ihr die Webhook-URL + einen Test-Alert.
2. Löse einen Test-Alert von TradingView aus (oder verwende das curl-Beispiel) und beobachte, wie das Signal in WolfBot landet.
3. Bestätige, dass sich das Symbol auf das erwartete Paar aufgelöst hat und die Stufenfelder richtig aussehen.
4. Erst dann die Strategie auf Live umstellen.

## Sicherheitshinweise

- Halte dein Webhook-Secret geheim — es ist das Einzige, das eine Anfrage vertrauenswürdig macht. Behandle es wie einen API-Key.
- Betreibe deine Community-Instanz auf deinem eigenen Host/Port, exponiere die Webhook-Route nicht im offenen Internet, ohne die Signaturprüfung sicherzustellen.
- Beginne mit `signal_only`, füge Risiko-/Take-Profit-Felder erst hinzu, nachdem du einen vollständigen Zyklus in der Simulation funktionieren gesehen hast.

## Wo es weitergeht

- [Automatisierter Trading-Workflow →](/docs/automated-trading-workflow) — die größere Schleife, in die dein Alert einsteckt
- [Erst simulieren →](/docs/simulation)
- [Risk Controls →](/docs/risk-controls)

## Nächster Schritt

> **[Automatisierter Trading-Workflow →](/docs/automated-trading-workflow)**
