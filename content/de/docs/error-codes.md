---
title: "WolfBot Community Fehlercodes — schnelle Referenz zur Behebung"
description: "Jeder WolfBot-Community-Fehlercode erklärt: WB-WIN-001 bis WB-WIN-004 und WB-LNX-001 bis WB-LNX-002. Finde die genaue Lösung für deinen Installer- oder Startfehler."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot error codes",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot installer error",
  "wolfbot linux error",
  "wolfbot windows error code"
]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/error-codes"
---

# WolfBot Community Fehlercodes

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc8** · Zuletzt aktualisiert: 2026-08-18

Ein Code, eine Lösung. Fehlercodes sagen dir genau, was fehlgeschlagen ist, sodass du
nicht raten musst. Finde deinen Code unten, wende die Lösung an und lies dann bei Bedarf
den [vollständigen Fehlerbehebungs-Guide](/docs/troubleshooting), falls das Problem weiterhin besteht.

---

## Schnellübersicht

| Fehlercode | Wo es passiert | Lösung in einer Zeile |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--nicht-genug-speicherplatz) | Windows-Installer | 2 GB Speicherplatz freigeben |
| [WB-WIN-002](#wb-win-002--zugriff-verweigert) | Windows-Installer | Installer als Administrator ausführen |
| [WB-WIN-003](#wb-win-003--beschädigter-download) | Windows-Installer | Erneut herunterladen und SHA256-Prüfsumme verifizieren |
| [WB-WIN-004](#wb-win-004--fehlende-abhängigkeiten) | Windows Erststart | Visual-C++-Redistributable installieren |
| [WB-LNX-001](#wb-lnx-001--docker-nicht-gefunden) | Linux-Installer | Docker installieren oder Installer erneut ausführen |
| [WB-LNX-002](#wb-lnx-002--port-konflikt) | Linux Erststart | Beenden, was Port 8765 belegt |

---

## Windows-Fehlercodes

### WB-WIN-001 — Nicht genug Speicherplatz
**Symptom:** Installer scheitert mit „Not enough disk space".

**Lösung:** Mindestens 2 GB freigeben, dann erneut versuchen. Prüfe zuerst den freien Speicherplatz auf Laufwerk `C:`.

### WB-WIN-002 — Zugriff verweigert
**Symptom:** „Access denied" während der Installation.

**Lösung:** Rechtsklicke auf den Installer und wähle **Als Administrator ausführen**.

### WB-WIN-003 — Beschädigter Download
**Symptom:** Installer startet nicht oder scheitert an der Integritätsprüfung.

**Lösung:** Lade erneut von [community.wolfbot.io/download](https://community.wolfbot.io/download) herunter und verifiziere dann die SHA256-Prüfsumme gegen den offiziellen Wert, bevor du ihn ausführst. Siehe [Wie du einen heruntergeladenen Trading-Bot verifizierst](/docs/how-to-verify-a-downloaded-trading-bot).

### WB-WIN-004 — Fehlende Abhängigkeiten
**Symptom:** „VCRUNTIME140.dll not found" beim Start von WolfBot.

**Lösung:** Installiere das [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) und starte WolfBot dann neu.

---

## Linux-Fehlercodes

### WB-LNX-001 — Docker nicht gefunden
**Symptom:** „Docker is not installed".

**Lösung:** `sudo apt-get install docker.io`, oder führe einfach den Installer erneut aus — er installiert und startet Docker automatisch für dich.

### WB-LNX-002 — Port-Konflikt
**Symptom:** „Port 8765 already in use".

**Lösung:** Finde heraus, was den Port belegt, mit `sudo lsof -i :8765`, beende diesen Dienst und starte WolfBot dann neu.

---

## Weiterführend

- [Vollständiger Fehlerbehebungs-Guide](/docs/troubleshooting) — Netzwerk-, Update-, Performance- und Datenprobleme.
- [WolfBot unter Windows installieren](/install/windows) — der genaue Windows-Einrichtungsweg.
- [WolfBot unter Linux installieren](/install/linux) — Ubuntu/Debian-Einrichtung und Dienststatus.
- [Update & Rollback](/docs/updates) — was zu tun ist, wenn ein Update fehlschlägt.
- Einen Code gefunden, den du hier nicht findest? [Durchsuche GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) oder [erstelle ein Issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose).
