---
title: "WolfBot Community unter Windows installieren — Schritt für Schritt"
description: "So installierst du WolfBot Community unter Windows 10 oder Windows 11. Lade Setup.exe herunter, installiere in Minuten und beginne mit dem Handel über Krypto- und MT5-Märkte."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "install wolfbot windows",
  "wolfbot community windows setup",
  "crypto trading bot windows",
  "trading bot windows 11",
  "windows trading platform"
]
os_tested: ["Windows 11 23H2", "Windows 10 22H2"]
sitemap_priority: 0.9
lang: "de"
translation_of: "install/windows"
---

# WolfBot Community unter Windows installieren

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15 · Windows 11 / Windows 10

> ℹ️ **Verfügbarkeit:** die erste öffentliche Version (v0.1.0-beta.4) liefert den Linux-Installer. Der Windows-Installer wird hier vor seinem Folge-Release dokumentiert — prüfe die [Download-Seite](/download) für den aktuellen Status, und dieser Guide führt dich durch, sobald er verfügbar ist.

## Für wen dieser Guide ist

Dieser Guide ist für alle, die WolfBot Community auf einem Windows-10- oder Windows-11-Computer installieren möchten. Keine Programmier- oder Docker-Erfahrung erforderlich. Nach der Installation hast du eine einheitliche Handelsplattform für Krypto-Börsen und MT5-Broker — eine Oberfläche, jeder Markt.

## Was du brauchst

- Windows 10 (22H2 oder neuer) oder Windows 11 (23H2 oder neuer), 64-Bit
- Mindestens 4 GB freier RAM
- Mindestens 2 GB freier Speicherplatz
- Internetverbindung
- Administratorzugriff zur Installation von Software

> ⚠️ **Hinweis zu Antivirus:** Manche Antivirus-Programme markieren neue Software. Die Installer von WolfBot Community sind sicher — sie sind offizielle Builds von WolfBot.io. Wenn dein Antivirus den Installer blockiert, füge eine Ausnahme hinzu oder pausiere ihn vorübergehend.

## Schritt 1: Herunterladen

1. Gehe zu [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Klicke auf **Download for Windows**
3. Die Datei `WolfBot-Setup-{version}-windows-x64.exe` wird heruntergeladen

## Schritt 2: Installieren

1. Doppelklicke auf die heruntergeladene `WolfBot-Setup-*.exe`
2. Falls Windows SmartScreen erscheint, klicke auf **More info** → **Run anyway**
3. Folge dem Setup-Assistenten: Ordner wählen → **Install** klicken
4. Warte auf den Abschluss der Installation (normalerweise 30–60 Sekunden)
5. Klicke auf **Finish**

## Schritt 3: WolfBot starten

1. Doppelklicke auf das **WolfBot**-Symbol auf deinem Desktop (oder im Startmenü)
2. WolfBot öffnet das Dashboard — es ist noch kein Börsenkonto verbunden, daher gibt es vor dem Erkunden nichts zu konfigurieren

## Erwartetes Ergebnis

- WolfBot-Symbol im System-Tray
- Dashboard-Fenster öffnet sich
- Die Capability-Status-Seite des Dashboards zeigt, welche Broker du verbinden kannst

## Häufige Fehler

| Fehler | Lösung |
|---|---|
| „Windows protected your PC“ | Klicke „More info“ → „Run anyway“ |
| Installer startet nicht | Rechtsklick → „Run as Administrator“ |
| Antivirus-Quarantäne | Füge `C:\Program Files\WolfBot` zu den Ausschlüssen hinzu |
| Fehler „Missing DLL“ | Installiere [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) — eine kleine, kostenlose Microsoft-Komponente, die viele Windows-Apps benötigen; sicher zu installieren |

## Fehlerbehebung

- **WB-WIN-001:** Unzureichender Speicherplatz → 2 GB freigeben
- **WB-WIN-002:** Zugriff verweigert → Als Administrator ausführen
- **WB-WIN-003:** Beschädigter Download → Erneut herunterladen, Prüfsumme verifizieren
- **WB-WIN-004:** Fehlende Abhängigkeiten → VC++ Redist installieren

Siehe [Fehlerbehebungs-Guide](/docs/troubleshooting).

## Erweitert: Download verifizieren (optional)

Wenn du prüfen möchtest, ob die Datei nicht beschädigt oder manipuliert wurde,
öffne PowerShell und führe aus:

```powershell
Get-FileHash .\WolfBot-Setup-*.exe -Algorithm SHA256
```

Vergleiche das Ergebnis mit der SHA256-Prüfsumme auf der
[Download-Seite](https://community.wolfbot.io/download). Dieser Schritt ist
optional — die meisten können ihn überspringen.

## Nächster Schritt

> **[Starte mit Simulation →](/docs/simulation)**
