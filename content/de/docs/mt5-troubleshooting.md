---
title: "MT5-Fehlerbehebung — Häufige MT5-Verbindungs- und Einrichtungsprobleme in WolfBot Community beheben"
description: "MT5 verbindet sich nicht, ein Konto kann nicht bereitgestellt werden, oder ein Symbol wird nicht angezeigt? Hier sind die konkreten MT5-Verbindungs- und Einrichtungsfehler in WolfBot Community und genau, was du für jeden davon prüfen solltest."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/mt5-symbol-mapping", "/docs/risk-controls"]
keywords: [
  "mt5 troubleshooting",
  "mt5 not connecting wolfbot",
  "mt5 provisioning failed",
  "mt5 account setup error",
  "metatrader 5 troubleshooting",
  "wolfbot mt5 error",
  "mt5 linux setup problem"
]
sitemap_priority: 0.75
lang: "de"
translation_of: "docs/mt5-troubleshooting"
---

# MT5-Fehlerbehebung

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc21** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du beim Verbinden von MT5 mit WolfBot Community auf einen Fehler stößt** — probiere die untenstehenden Lösungen der Reihe nach; jede verweist dich auf Logs, die du selbst lesen kannst, statt zu raten.
- **Für technische Nutzer** — der Root-Cause-Abschnitt sagt dir genau, welche Komponente was loggt, sodass du auf deiner eigenen Maschine diagnostizieren kannst.

## Bevor du beginnst

Zwei schnelle Checks lösen viele MT5-Verbindungsprobleme schneller als alles andere:

1. **Demo vs. Live.** Stelle sicher, dass du zuerst ein **Demo-(Testnet-)MT5-Konto** verbindest, genau wie es der Connect-Guide vormacht. Ein Live-Konto kann Bereitschaftsprüfungen (Readiness Checks) fehlschlagen lassen (und ist riskanter zum Testen).
2. **Die MT5-Bridge ist nur Teil der Linux-Installation.** MT5 läuft in einem Container auf Linux (mit einem Befehl aktiviert) — es ist auf einem Windows-Build, der noch nicht erschienen ist, nicht auf dieselbe Weise gebündelt. Bestätige, dass deine Plattform zum Guide passt, dem du folgst.

## Häufige Fehler und was du prüfen solltest

### „Could not set up the MT5 account. Please try again." (`MT5_PROVISIONING_FAILED`)

Das ist der Hauptfehler, der aus Live-Installationen gemeldet wird. Er tritt auf, wenn der **Provisioning-Schritt pro Konto** für das MT5-Terminal/die Bridge nicht abgeschlossen werden kann. Ändere nicht zuerst deine API-Zugangsdaten — prüfe in dieser Reihenfolge:

1. **Lies die Control-API-Logs** für den Provisioning-Versuch und den genauen Fehler, den er zurückgegeben hat. Die Meldung notierte `container_provisioned=false`, wenn die Terminal-/Bridge-Container nicht erstellt werden konnten.
2. **Bestätige, dass die Container-Runtime erreichbar ist.** Bei einer Community-Installation bedeutet ein fehlendes Docker-Socket-Mount zur Bridge-Steuerung, dass Container pro Konto nie erstellt werden können — das ist die strukturelle Ursache hinter vielen `MT5_PROVISIONING_FAILED`-Fehlern. Wenn deine Logs einen Socket-/Berechtigungsfehler zeigen, ist das der Flaschenhals.
3. **Bestätige, dass das Bridge-Image vorhanden ist.** Wenn das MT5-Bridge-Image nicht gepullt wurde, schlägt das Provisioning mit einem „Image nicht gefunden"-Fehler fehl, obwohl sonst alles in Ordnung ist.
4. **Nach dem Prüfen der Logs erneut versuchen.** Das ist keine Situation für „Key löschen und neu hinzufügen"; der Zustand steckt im Provisioning-Schritt, und das Log nennt den tatsächlichen Fehler.

### Konto verbindet sich, zeigt aber keine Symbole

- Wenn deine Strategie ein Symbol referenziert, das kein Mapping zum Handelsplatz hat, reicht WolfBot es unverändert durch. Bestätige die exakte Schreibweise des Symbols und prüfe den [Symbol-Mapping-Guide](/docs/mt5-symbol-mapping).
- Wenn die Symbolliste leer aussieht, prüfe die Selected-Symbols-Datei für das MT5-Konto und bestätige, dass die Marktbeobachtung in MT5 tatsächlich die Instrumente geladen hat.

### Verbindungsabbrüche oder Order-Fehler kurz nach dem Start

- Verifiziere, dass die Strategie zuerst auf **Simulation** eingestellt ist, damit ein Tippfehler oder ein falsches Instrument niemals eine echte Position eröffnet, während du noch testest.
- Prüfe das MT5-Bridge-Log auf den Terminal-Zustand; ein Headless-Terminal, das noch nicht beim Broker eingeloggt ist, lehnt Orders ab, bis die Sitzung hergestellt ist.

### Immer noch festgefahren?

Der schnellste Weg zu einer definitiven Antwort ist, den genauen Fehler mit den Logs vor dir zu reproduzieren:

- **Control-API-Logs** — Provisioning und Konto-Bereitschaft (was tatsächlich fehlschlägt).
- **MT5-Bridge-Logs** — Terminal-Login und Order-Zustand.

Wenn du einen Support-Thread eröffnest, füge die spezifische Fehlerzeile ein (wie `MT5_PROVISIONING_FAILED`) und den passenden Log-Rahmen — das macht es in einem Durchgang lösbar statt in einem Hin und Her.

## Auf dem richtigen Fuß loslegen

- [MT5-Symbol-Mapping →](/docs/mt5-symbol-mapping) — sieh genau, wie sich Symbole auflösen, bevor du eine Position eröffnest
- [MT5 ohne Windows-VPS betreiben →](/docs/mt5-without-windows-vps)
- [MT5 verbinden →](/brokers/mt5)

## Nächster Schritt

> **[MT5 verbinden →](/brokers/mt5)**
