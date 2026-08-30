---
title: "Externe Signale — Marktsignale aus beliebigen Quellen in WolfBot Community einspeisen"
description: "Verbinde externe Handelssignale — TradingView-Alerts, individuelle Webhooks, Signaldienste — über eine signierte, risikokontrollierte Pipeline mit deinem self-hosted WolfBot-Community-Bot."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "external trading signals",
  "webhook trading bot",
  "custom signals into trading bot",
  "signal service wolfbot",
  "signed webhook automation",
  "external signals self hosted"
]
sitemap_priority: 0.75
lang: "de"
translation_of: "docs/external-signals"
---

# Externe Signale

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du bereits Signale von woanders bekommst** — einem TradingView-Alert, einem kostenpflichtigen Signaldienst oder deinem eigenen Skript — und möchtest, dass sie Positionen bei deinem eigenen Bot eröffnen, statt manuell auszuführen.
- **Für technische Nutzer** — du siehst die eine Pipeline, die jedes externe Signal durchläuft (verifizieren → parsen → normalisieren → Risiko → ausführen), sodass du deine eigene Quelle einbinden kannst, ohne einen neuen Pfad zu erfinden.

## Was „externes Signal" hier bedeutet

Ein externes Signal ist jede Kauf-/Verkaufsanweisung, die von **außerhalb** von WolfBot Community kommt und zu einem Trade werden soll. Beispiele:

- TradingView-Alert-Webhooks (siehe den eigenen [TradingView-Guide](/docs/tradingview)).
- Ein individueller Webhook, den dein eigenes Skript oder ein Dienst auslöst.
- Ein Signaldienst, dem du genug vertraust, um ihn auf deine Risikoschicht zeigen zu lassen.

All das teilt sich einen einzigen, signierten Einstiegspunkt, statt dass jedes eine maßgeschneiderte Integration wäre.

## Die eine Pipeline, die jedes externe Signal nutzt

Egal welche Quelle, jedes eingehende Signal durchläuft denselben Pfad:

```text
HTTP POST (signiert)
   → Signaturverifikation (HMAC mit deinem Webhook-Secret)
   → Signal parsen (Symbol, Richtung, von/zu)
   → Symbol auf deinen Ziel-Broker normalisieren
   → Identität anhängen (Quelle, Strategie, Tier)
   → Einstieg über die gemeinsame Risiko-/Ausführungsschicht einreihen
```

Weil jede Quelle durch dieselbe Pipeline läuft, erhältst du dieselben Garantien, egal woher das Signal kam:

- **Authentifiziert** — nur Anfragen, die mit deinem Secret signiert sind, können ausgeführt werden.
- **Risikokontrolliert** — Einstiege durchlaufen weiterhin dieselben Risk Controls wie manuelle oder Strategie-Orders.
- **Symbol-normalisiert** — der MT5-/USD-Name in deinem Signal wird auf das richtige Paar an deiner Ziel-Börse abgebildet.

## Tiers halten Signale passend zu ihrer Quelle

Externe Signale nutzen dasselbe dreistufige Payload-Modell, sodass sowohl ein leichtes Signal als auch eine vollständige Order-Anfrage unterstützt werden:

- `signal_only` — Richtung/Symbol; WolfBot übernimmt Größe und Absicherung.
- `signal_and_risk` — fügt Nominalwert- und Take-Profit-Felder hinzu.
- `full_entry_request` — vollständig, inklusive Zielkonto.

Starte eine neue externe Quelle bei `signal_only` und wechsle erst höher, sobald du einen sauberen Durchlauf im Simulationsmodus gesehen hast.

## Teste jede neue Quelle zuerst im Simulationsmodus

Für jede externe Quelle:

1. Richte sie auf eine **Simulations**-Strategie mit ihrer eigenen Webhook-URL + Secret.
2. Löse ein Testsignal aus und bestätige, dass es authentifiziert beim beabsichtigten Symbol ankommt.
3. Prüfe, ob sich der risikokontrollierte Einstieg wie erwartet verhält.
4. Erst dann wechselt eine Kopie zu Live.

## Sicherheitshinweise

- Jede externe Quelle erhält **ihr eigenes Webhook-Secret** — behandle jedes wie einen API-Schlüssel. Halte sie aus öffentlichen Charts/Repos fern.
- Halte die Webhook-Route hinter deinem eigenen Host; die Signatur authentifiziert, nicht die Geheimhaltung der URL selbst.
- Ein Signaldienst, den du auf deinen Bot zeigen lässt, sollte einer sein, dem du vertraust — die Pipeline authentifiziert die Anfrage, kann aber nicht beurteilen, ob die Signalidee sinnvoll ist.

## Wie es weitergeht

- [TradingView-Alerts →](/docs/tradingview) — die häufigste externe Quelle, Schritt für Schritt
- [Automatisierter Handelsablauf →](/docs/automated-trading-workflow)
- [Erst der Simulationsmodus →](/docs/simulation)

## Nächster Schritt

> **[TradingView-Alerts →](/docs/tradingview)**
