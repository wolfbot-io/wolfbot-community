---
title: "MT5 mit WolfBot Community verbinden — Schritt für Schritt"
description: "WolfBot Community enthält MT5 — handle Forex, Gold, Indizes und Aktien/CFDs unter Windows oder Linux, ohne separate Windows-Maschine. Schritt-für-Schritt-Verbindungs-Guide."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gold trading automation", "mt5 on linux"]
sitemap_priority: 0.80
lang: "de"
translation_of: "brokers/mt5"
---

# MT5 mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc17** · Zuletzt aktualisiert: 2026-08-15

**MT5-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅ · Windows ✅ · Linux ✅

## MT5 ist integriert

Forex, Gold, Indizes, Aktien/CFD — MT5-Märkte gehören ab Werk zu WolfBot Community, direkt neben deinen Krypto-Konten im selben Dashboard. Es funktioniert auf Windows und Linux gleich, und du brauchst niemals eine separate Windows-Maschine, um MT5 zu handeln.

- **Unter Windows** verbindet sich WolfBot mit der von dir bereits genutzten MetaTrader-5-App.
- **Unter Linux** öffnet WolfBot MT5 direkt in deinem eigenen Browser — nichts zusätzlich zu installieren.

## Für wen dieser Guide ist

Für MT5-Trader, die ihren Handel mit WolfBot Community automatisieren möchten — deiner einheitlichen Plattform für Krypto- und traditionelle Märkte, auf dem Betriebssystem, das du bereits nutzt.

## Was du brauchst

- WolfBot Community installiert
- Ein MT5-Broker-Konto (Demo oder Live)
- Unter Windows: installiertes [MetaTrader 5](https://www.metatrader5.com/en/download)
- 15 Minuten

## MT5 verbinden

1. Öffne WolfBot Community
2. Gehe zu **Exchange Accounts → Add Account → MT5**
3. Melde dich bei deinem Broker-Konto an (Demo oder Live)
   - **Windows:** das passiert in deiner MetaTrader-5-App
   - **Linux:** das passiert direkt im WolfBot-Browserfenster — nur beim ersten Mal gibt es einen kurzen einmaligen Einrichtungsschritt (siehe [Für technische Nutzer](#für-technische-nutzer) unten)
4. WolfBot übernimmt deine verfügbaren Symbole automatisch
5. Beginne zu handeln — Smart Terminal, Bots und Risk Controls funktionieren exakt wie mit deinen Krypto-Konten

> ⚠️ MT5 muss angemeldet sein, damit WolfBot darüber handeln kann.

## Verbindung testen

1. In WolfBot: Smart Terminal → wähle MT5
2. Verfügbare Symbole sollten aus MT5 erscheinen
3. Platziere zuerst einen kleinen Testorder auf deinem Demo-Konto
4. Wechsle zu deinem Live-MT5-Konto und platziere einen Order in Mindestgröße
5. Verifiziere, dass der Order in MT5 erscheint
6. Storniere den Testorder

## Was du handeln kannst

MT5 deckt fast jede Anlageklasse ab — WolfBot handelt, was das MT5-Konto deines Brokers anbietet, keine feste Liste:

- **Forex** — EUR/USD, GBP/USD, USD/JPY und 50+ weitere Paare
- **Metalle** — Gold (XAU/USD), Silber (XAG/USD), oft auch Platin und Palladium
- **Energien** — Rohöl, Erdgas (brokerabhängig)
- **Indizes** — US30, NAS100, S&P 500, DAX und mehr
- **Aktien/CFD** — Aktien einzelner Unternehmen, oft Tausende von Symbolen (brokerabhängig)
- **Agrarrohstoffe** — Weizen, Mais, Kaffee, Zucker und andere (brokerabhängig)
- **Krypto-CFDs** — wo von deinem Broker angeboten

> Die genaue Instrumentenverfügbarkeit hängt von deinem MT5-Broker ab, nicht von WolfBot — prüfe **Market Watch** in deinem MT5-Terminal für die vollständige Symbolliste, die dein Konto handeln kann.

## MT5 für den Goldhandel

Gold (XAU/USD) ist eines der beliebtesten MT5-Instrumente für die Automatisierung:

1. Verbinde deinen MT5-Broker mit XAU/USD
2. In WolfBot: Smart Terminal → XAU/USD
3. Konfiguriere das Risiko (Gold ist volatil — beginne mit kleinen Größen)
4. Teste auf einem Demo-Konto, bevor du live gehst

## Häufige Probleme

| Problem | Lösung |
|---|---|
| MT5 verbindet nicht | Stelle sicher, dass du in MT5 bei deinem Broker-Konto angemeldet bist, und versuche es erneut |
| „Symbol not available“ | Prüfe die verfügbaren Instrumente deines Brokers |
| „Automated trading disabled“ | In MT5: Tools → Options → Expert Advisors → Allow Automated Trading |
| „Order rejected by broker“ | Prüfe Mindestlotgröße und Handelszeiten |

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)** — besonders wichtig für volatile MT5-Instrumente

---

## Für technische Nutzer

Die Details unten sind für alle, die genau verstehen möchten, wie die MT5-Bridge funktioniert, oder die den Linux-Einrichtungsschritt lieber aus einem Terminal ausführen. Nichts davon ist Pflichtlektüre, um MT5 in WolfBot zu nutzen — siehe [MT5 verbinden](#mt5-verbinden) oben für den normalen Ablauf.

### Wie die Bridge funktioniert

**Windows** — MT5 läuft als eigene native App; WolfBot verbindet sich direkt damit:

```text
WolfBot Community → MT5 Bridge (local) → MetaTrader 5 Terminal (deine Installation) → MT5-Broker-Server
```

**Linux** — WolfBot führt das MT5-Terminal selbst in einem Container aus und gibt dir ein Browserfenster darauf (VNC):

```text
WolfBot Community → MT5 Bridge Container (Terminal + VNC + RPyC) → Browserfenster → MT5-Broker-Server
```

In beiden Fällen spricht die Bridge mit deinem Broker nur *über* MT5 — WolfBot verbindet sich niemals direkt mit deinem Broker.

### Linux: einmalige Terminal-Einrichtung

Der MT5-Container von WolfBot wird von der Basisinstallation nicht gestartet (nicht jeder Community-Nutzer handelt MT5), daher starte ihn beim ersten Mal mit:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

Öffne dann **`http://127.0.0.1:8090/mt5-vnc/`** in deinem Browser (Passwort `wolfbot`, oder was du über `MT5_VNC_PASSWORD` gesetzt hast) und melde dich dort bei deinem Broker an — das ist dasselbe Browserfenster, das der MT5-Ablauf von WolfBot danach nutzt. Der Zugriff ist dauerhaft und uneingeschränkt, da dies deine eigene Maschine ist, keine geteilte Cloud-Instanz.

### Windows: Referenz zur Bridge-Konfiguration

| Einstellung | Wert |
|---|---|
| MT5-Installationspfad | Automatisch erkannt (normalerweise `C:\Program Files\MetaTrader 5`) |
| Kontotyp | Demo oder Live |
| Symbol Mapping | Automatisch konfiguriert |

### Anforderungen

- MT5 muss während des Handels laufen (nativ unter Windows, oder der Bridge-Container unter Linux)
- Automated Trading (Algo Trading) muss in MT5 aktiviert sein
- Deine Maschine muss eingeschaltet bleiben (oder nutze einen VPS — Windows und Linux funktionieren beide)
- Noch nicht unterstützt: mehrere MT5-Instanzen gleichzeitig, einige exotische brokereigene Symbole

### Technische Fehlerbehebung

| Problem | Lösung |
|---|---|
| „MT5 not detected“ (Windows) | Prüfe den Installationspfad; starte MT5 neu |
| VNC-Seite lädt nicht (Linux) | Bestätige, dass der MT5-Container läuft: `docker compose ... ps` — beim ersten Start kann das eine Minute dauern |
| „Bridge connection failed“ | Stelle sicher, dass MT5 läuft und angemeldet ist — nativ unter Windows, oder die Browser-Sitzung unter Linux |

### MT5 rund um die Uhr betreiben

- **Windows:** nutze einen Windows-VPS, installiere MT5 + WolfBot Community, aktiviere Auto-Login in MT5, konfiguriere Windows zum Auto-Start von WolfBot
- **Linux:** nutze einen Linux-VPS mit WolfBot Community und aktiviertem MT5-Container — er bleibt angemeldet und läuft weiter wie jeder andere WolfBot-Dienst, ohne Auto-Login-Skripting
