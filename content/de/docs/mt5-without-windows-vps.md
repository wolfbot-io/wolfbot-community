---
title: "MT5 auf Linux ohne Windows-VPS — erklärt"
description: "So führt WolfBot Community MT5 auf Linux aus, ohne einen Windows-VPS zu benötigen. Handle Forex, Gold und CFDs direkt in deinem Browser."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "reference"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
previous_guide: "/install/linux"
related_guides: ["/brokers/mt5", "/install/linux", "/docs/run-24-7-on-a-vps"]
keywords: ["mt5 on linux", "mt5 without windows", "metatrader 5 linux", "mt5 vps linux", "mt5 wine docker"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/mt5-without-windows-vps"
---

# MT5 auf Linux ohne Windows-VPS

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc21** · Zuletzt aktualisiert: 2026-08-15

## Die übliche Annahme

Viele glauben, man brauche eine Windows-Maschine (oder einen Windows-VPS), um MetaTrader 5 auszuführen — weil MT5 offiziell eine Windows-App ist.

**Mit WolfBot Community brauchst du das nicht.**

## Für wen dieser Guide ist

- **Für alle Trader:** MT5 (Forex, Gold, Indizes, CFDs) läuft auf deinem Linux-Server genauso wie dein Krypto-Handel — keine Windows-Maschine nötig.
- **Für technische Nutzer:** Verstehe, wie WolfBot MT5 auf Linux über eine Container-Bridge ausführt.

## Wie es funktioniert

WolfBot Community bündelt MT5 direkt — keine separate Windows-Maschine, kein Wine-Gefummel. Auf Linux führt WolfBot das MT5-Terminal in einem Container aus und stellt dir ein Browserfenster darauf bereit:

```text
Dein Browser → WolfBot (Linux) → MT5-Terminal (im Container) → MT5-Broker-Server
```

Auf Windows verbindet sich WolfBot einfach mit deiner bereits installierten MetaTrader-5-App. In beiden Fällen handelst du Forex, Gold und CFDs neben Krypto in derselben einheitlichen Oberfläche.

## Vorteile für alle Trader

1. **Keine Windows-Lizenz** — nur deine Linux-Maschine
2. **Ein VPS, alle Märkte** — Krypto + MT5 auf derselben Box
3. **Vertraute Oberfläche** — MT5 erscheint in deinem Browser
4. **Niedrigere Kosten** — kein zusätzlicher Windows-VPS
5. **Einheitliche Plattform** — dieselben Risk Controls über Krypto und MT5

## So richtest du es ein

1. **Linux-Maschine bereit haben** (oder [24/7 auf einem VPS einrichten →](/docs/run-24-7-on-a-vps))
2. **WolfBot Community installieren** — siehe [Linux-Installation](/install/linux)
3. **MT5-Konto verbinden** — folge dem [MT5-Guide](/brokers/mt5)

Das ist alles — MT5 ist Teil von WolfBot Community, kein separater Download.

## Für technische Nutzer

### Architektur

WolfBot führt MT5 auf Linux in einem Container aus, der drei Komponenten kombiniert:

```text
MT5 Bridge Container
├── MetaTrader 5 Terminal (läuft unter Wine)
├── VNC-Server (stellt dir die GUI im Browser bereit)
└── RPyC-Bridge (verbindet WolfBot mit dem Terminal)
```

WolfBot spricht mit deinem Broker **nur** über MT5 — es gibt keine direkte Verbindung zum Broker. Deine MT5-Anmeldung bleibt in dem Container.

### Einmalige Einrichtung

Der MT5-Container wird von der Basisinstallation nicht automatisch gestartet (nicht jeder Community-Nutzer handelt MT5). Beim ersten Mal startest du ihn mit:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

Öffne dann **`http://127.0.0.1:8090/mt5-vnc/`** in deinem Browser (Passwort `wolfbot`, oder was du über `MT5_VNC_PASSWORD` gesetzt hast) und melde dich bei deinem Broker an. Danach nutzt der normale MT5-Ablauf in WolfBot dasselbe Browserfenster.

### Warum ein Container?

- **Isolation** — MT5 läuft abgekapselt von deinem System
- **Reproduzierbar** — gleiches Verhalten auf jedem Linux-Host
- **Einfache Bereitstellung** — ein `docker compose up`
- **Kein Wine-Setup von Hand** — im Container vorkonfiguriert

### Anforderungen für Linux-MT5

| Voraussetzung | Empfehlung |
|---|---|
| Docker Engine | 20.10+ |
| RAM | 4 GB+ (2 GB für den MT5-Container) |
| CPU | 2 Kerne |
| Browser | Jeder moderne Browser |
| Netzwerk | Zugriff auf den MT5-Broker-Server |

### Fehlerbehebung bei Linux-MT5

| Problem | Lösung |
|---|---|
| VNC-Seite lädt nicht | Bestätige, dass der Container läuft (`docker compose ... ps`); beim ersten Start kann es eine Minute dauern |
| „Bridge connection failed“ | Sicherstellen, dass MT5 im Browser angemeldet ist |
| Container startet nicht | `docker compose ... logs` auf Fehler prüfen |
| MT5 friert ein | Container neu starten (`docker compose ... restart`) |

---

## Nächster Schritt

> **[MT5 verbinden →](/brokers/mt5)**
