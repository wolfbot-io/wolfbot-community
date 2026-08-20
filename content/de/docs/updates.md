---
title: "WolfBot Community aktualisieren — Windows & Linux"
description: "So aktualisierst du WolfBot Community auf die neueste Version unter Windows und Linux, einschließlich Kanälen und Rollback."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/backup"
related_guides: ["/docs/backup", "/docs/troubleshooting", "/releases/channels"]
keywords: ["wolfbot update", "wolfbot upgrade", "update trading bot", "wolfbot auto update", "trading bot version upgrade"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/updates"
---

# Updates

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc20** · Zuletzt aktualisiert: 2026-08-15

## Update-Methoden

WolfBot Community bietet einfache Updates mit der Möglichkeit, bei Bedarf auf eine frühere Version zurückzukehren.

---

## Automatische Updates

Standardmäßig prüft WolfBot auf Updates und lädt sie herunter:

1. Beim Start prüft WolfBot auf neue Releases im konfigurierten Kanal
2. Wenn ein Update verfügbar ist, wirst du benachrichtigt
3. Du wählst, wann du es anwendest
4. Das Update wird heruntergeladen, verifiziert und angewendet

> ℹ️ Für den Live-Handel ist der **Stable**-Kanal empfohlen. Wähle deinen Kanal über das Release, das du installierst (siehe [Release-Kanäle](/releases/channels)).

---

## Manuelles Update (CLI)

### Linux

```bash
# Auf neueste Version aktualisieren
wolfbot update
```

### Windows

```bash
wolfbot update
```

---

## Rollback

Falls ein Update ein Problem verursacht, kannst du zur vorherigen Version zurückkehren:

```bash
wolfbot rollback
```

Dies stellt die zuvor installierte Version wieder her.

---

## Update-Kanäle

Wähle einen Kanal, der zu deinem Risikoprofil passt:

| Kanal | Empfohlen für | Update-Frequenz |
|---|---|---|
| **Stable** | Live-Handel | Monatlich |
| **Beta** | Tester | Wöchentlich |
| **Dev Preview** | Entwickler | Mehrmals wöchentlich |

> 💡 Vollständige Erklärung unter [Release-Kanäle](/releases/channels)

---

## Vor dem Update

### 1. Backup erstellen

Erstelle immer ein Backup vor dem Update:

```bash
wolfbot backup
```

### 2. Positionsstatus prüfen

- Stelle sicher, dass keine kritischen Positionen ungeschützt sind
- Bei Unsicherheit TP/SL-Levels bestätigen
- Erwäge, vor größeren Updates zu pausieren

### 3. Den Zeitpunkt wählen

- Aktualisiere außerhalb der aktiven Handelszeiten
- Plane einige Minuten für den Neustart ein
- Halte einen Rollback-Plan bereit

---

## Während des Updates

WolfBot:
1. Lädt das neue Release herunter
2. Verifiziert die Integrität (Prüfsumme)
3. Sichert die aktuelle Version
4. Wendet das Update an
5. Startet den Dienst neu
6. Überprüft den Start

---

## Nach dem Update

1. Prüfe, ob WolfBot korrekt startet
2. Bestätige, dass alle Konten verbunden sind
3. Verifiziere, dass Risk Controls intakt sind
4. Überwache deine ersten Trades genau

---

## Fehlerbehebung bei Updates

| Problem | Lösung |
|---|---|
| Update schlägt fehl | `wolfbot rollback` ausführen, um zur vorherigen Version zurückzukehren |
| Dienst startet nach Update nicht | Protokolle prüfen; `wolfbot logs` |
| Konten nach Update getrennt | Verbindung erneut herstellen; bei Bedarf Backup wiederherstellen |
| Download langsam | Neu versuchen; Firewall-/Netzwerkprobleme prüfen |

---

## Häufige Fragen

**F: Verliere ich meine Einstellungen beim Update?**
Nein. Updates bewahren deine Konfiguration. Trotzdem wird ein Backup als bewährte Methode empfohlen.

**F: Kann ich auf eine bestimmte ältere Version zurückkehren?**
`wolfbot rollback` kehrt zur vorherigen Version zurück. Für beliebige Versionen installiere das gewünschte Release von [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) neu.

**F: Ist das Update unterbrechungsfrei?**
Nein, der WolfBot-Dienst wird während des Updates neu gestartet (typischerweise einige Sekunden bis Minuten).

---

## Nächster Schritt

> **[Fehlerbehebung →](/docs/troubleshooting)**
