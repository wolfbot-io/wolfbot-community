---
title: "WolfBot Community unter Ubuntu/Linux installieren — Schritt für Schritt"
description: "So installierst du WolfBot Community unter Ubuntu 22.04, Ubuntu 24.04 oder Debian 12. Lade das .deb-Paket herunter und beginne mit dem Handel über Krypto- und MT5-Märkte — keine Kommandozeile erforderlich."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "install wolfbot linux",
  "wolfbot community ubuntu",
  "crypto bot ubuntu",
  "linux trading bot",
  "unified trading platform linux",
  "self hosted trading linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
lang: "de"
translation_of: "install/linux"
---

# WolfBot Community unter Ubuntu/Linux installieren

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc17** · Zuletzt aktualisiert: 2026-08-15 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## Für wen dieser Guide ist

Alle, die WolfBot Community unter Ubuntu oder Debian installieren möchten — **du musst
weder das Terminal noch Docker beherrschen.** Alles unten verwendet dieselbe
Doppelklick-Installation wie bei jeder anderen Anwendung; eine Kommandozeilen-Alternative
ist weiter unten für alle enthalten, die sie bevorzugen.

## Was du brauchst

- Ubuntu 22.04 LTS, Ubuntu 24.04 LTS oder Debian 12 (64-Bit)
- Mindestens 4 GB RAM, 4 GB freier Speicherplatz
- Internetverbindung
- Dein Kontopasswort (du wirst einmal danach gefragt, um die Installation zu erlauben
  — das ist völlig normal, jeder App-Installer unter Linux fragt danach)

> ℹ️ WolfBot benötigt Docker zum Ausführen. Falls es noch nicht installiert ist,
> installiert es der Installer automatisch für dich — nichts manuell einzurichten.

## Schritt 1: Herunterladen

1. Gehe zu [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Klicke auf **Download for Linux**
3. Die Datei `WolfBot-Setup-linux-amd64.deb` wird in deinen **Downloads**-Ordner
   heruntergeladen

## Schritt 2: Installieren (Doppelklick, wie jede andere App)

1. Öffne deinen **Downloads**-Ordner und **doppelklicke** auf
   `WolfBot-Setup-linux-amd64.deb`
2. Das App-Installer-Fenster deines Systems öffnet sich (normalerweise „Software
   Install“ oder „Package Installer“ genannt)
3. Klicke auf **Install**
4. Gib auf Nachfrage dein Passwort ein und drücke Enter/klicke OK
5. Warte, bis es fertig ist — das kann beim ersten Mal ein oder zwei Minuten dauern,
   da im Hintergrund auch Docker eingerichtet wird

Das war's — kein Terminal nötig.

> **Kein Installationsfenster bekommen?** Manche Ubuntu-Versionen öffnen `.deb`-Dateien
> standardmäßig in einem Archivbetrachter statt im Installer.
> Rechtsklicke auf die Datei → **Open With** → wähle **Software Install** (oder
> **GDebi Package Installer**, falls vorhanden) → klicke dann auf **Install**.

## Schritt 3: WolfBot starten

1. Öffne dein **Anwendungs**-Menü (oder drücke die Windows/Super-Taste und tippe
   „WolfBot“)
2. Klicke auf das **WolfBot**-Symbol
3. Dein Browser öffnet automatisch das WolfBot-Dashboard

## Erwartetes Ergebnis

- Ein WolfBot-Symbol erscheint in deinem Anwendungsmenü
- Ein Klick darauf öffnet das Dashboard im Browser
- Die Capability-Status-Seite des Dashboards zeigt, welche Broker du verbinden kannst — starte mit einem [Demo-Konto](/docs/simulation) für risikofreien Handel

## Forex, Gold und Indizes über MT5 handeln — ohne Windows

WolfBot Community ist eine **einheitliche Plattform**: Krypto-Börsen und MT5 (Forex, Gold, Indizes, Aktien/CFDs) in einer Oberfläche, einem Risiko-Engine, einem Portfolio — auch unter Linux, ohne separate Windows-Maschine oder VPS. MT5 läuft als echter Terminal neben dem Rest von WolfBot, und du steuerst ihn über deinen eigenen Browser. Aktiviere ihn mit einem Befehl — siehe den [MT5-Verbindungs-Guide](/brokers/mt5) für die genauen Schritte.

## Häufige Fehler

| Fehler | Lösung |
|---|---|
| Doppelklick öffnet ein Dateiarchiv statt zu installieren | Rechtsklick auf die Datei → Open With → Software Install |
| „Authentication required“-Aufforderung | Das ist normal — gib dein normales Anmeldepasswort ein |
| Nach dem Klick auf Install passiert nichts | Gib ihm eine Minute — Docker-Setup läuft beim ersten Mal im Hintergrund |
| WolfBot nach der Installation nicht gefunden | Melde dich einmal ab und wieder an, oder suche „WolfBot“ im Anwendungsmenü |

## Bevorzugst du die Kommandozeile?

Wenn du mit einem Terminal vertraut bist, macht dies dasselbe wie die
Schritte oben:

```bash
cd ~/Downloads
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Mit `apt install ./datei.deb` (statt `dpkg -i`) werden fehlende
Abhängigkeiten in einem Schritt automatisch aufgelöst.

Nützliche Befehle nach der Installation:

```bash
wolfbot status     # Dienste prüfen
wolfbot start      # WolfBot starten
wolfbot open       # das Dashboard im Browser öffnen
wolfbot logs       # Logs anzeigen
```

Dashboard-Adresse: `http://127.0.0.1:8765`

## Fehlerbehebung

- **Es öffnet sich nichts, wenn ich das WolfBot-Symbol klicke** — gib nach einer
  frischen Installation eine Minute Zeit (Docker-Container starten noch), dann
  versuche es erneut.
- **„Port in use“ oder das Dashboard lädt nicht** — etwas anderes auf deinem
  Computer verwendet möglicherweise Port 8765. Siehe den
  [Fehlerbehebungs-Guide](/docs/troubleshooting), wie du das prüfst.
- Immer noch festgefahren? Siehe den vollständigen [Fehlerbehebungs-Guide](/docs/troubleshooting)
  oder frage in [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Deinstallieren

Öffne den App-Store deines Systems (z. B. **Ubuntu Software**), suche nach
„WolfBot“ und klicke auf **Remove** — genau so, wie du jede andere
App deinstallierst, die du über eine `.deb`-Datei installiert hast.

Oder über das Terminal:

```bash
sudo apt remove wolfbot-community
rm -rf ~/.wolfbot    # optional: auch deine lokalen WolfBot-Daten löschen
```

## Nächster Schritt

> **[Starte mit Simulation →](/docs/simulation)**
