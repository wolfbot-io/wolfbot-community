---
title: "Backup & Restore in WolfBot Community"
description: "So sicherst und stellst du deine WolfBot Community-Konfiguration, Konten und Einstellungen unter Windows und Linux wieder her."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/updates"
previous_guide: "/docs/troubleshooting"
related_guides: ["/docs/updates", "/docs/troubleshooting", "/security"]
keywords: ["wolfbot backup", "wolfbot restore", "wolfbot config backup", "backup trading bot settings"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/backup"
---

# Backup & Restore

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-15

## Was ist gesichert?

Ein Backup von WolfBot Community enthält deine gesamte Einrichtung:

- **Kontokonfiguration** — verbundene Krypto-Börsen und MT5-Broker (API-Schlüssel verschlüsselt)
- **Risk-Control-Einstellungen** — alle Limits, Drawdown-Schutz, Cooldowns
- **Strategie-Konfigurationen** — deine Bot-Setups
- **Benutzerpräferenzen** — Oberflächen- und Anzeigeeinstellungen

---

## Backup erstellen (CLI)

WolfBot Community bietet Backup & Restore über die Kommandozeile.

### Linux

```bash
# Backup in eine komprimierte Datei erstellen
wolfbot backup

# Die Sicherung wird im Standard-Backup-Verzeichnis gespeichert
```

### Windows

```bash
# Backup über die WolfBot-CLI erstellen
wolfbot backup
```

> ℹ️ Das Backup-Kommando sichert deine Konfiguration und Einstellungen. Marktdaten und Handelshistorie werden in WolfBot gespeichert und können bei Bedarf separat exportiert werden.

---

## Wiederherstellen (CLI)

### Linux

```bash
# Aus einem Backup wiederherstellen
wolfbot restore-backup
```

### Windows

```bash
wolfbot restore-backup
```

Folge den Eingabeaufforderungen, um die Backup-Datei auszuwählen.

---

## Backup-Speicherorte

Standardmäßig speichert WolfBot Backups an einem dafür vorgesehenen Ort:

| Betriebssystem | Standard-Backup-Verzeichnis |
|---|---|
| Linux | `/opt/wolfbot/backups/` |
| Windows | `%USERPROFILE%\.wolfbot\backups\` |

---

## Best Practices

### Regelmäßige Backups

- Backup nach größeren Konfigurationsänderungen
- Backup vor einem Update
- Wöchentliche Backups, wenn aktiv im Handel
- Backups an einem separaten, sicheren Ort aufbewahren

### Sicherheit

- Backups enthalten verschlüsselte API-Geheimnisse
- Behandle Backup-Dateien als vertraulich
- Bewahre Backups nicht in unverschlüsseltem Cloud-Speicher auf
- Lösche alte Backups, die nicht mehr benötigt werden

---

## Automatisierte Backups

Du kannst Backups unter Linux über cron planen:

```bash
# Beispiel: jeden Sonntag um 3:00 Uhr sichern
0 3 * * 0 wolfbot backup
```

---

## Backup & Restore auf einer neuen Maschine

So migrierst du zu einer neuen Maschine:

1. **Auf der alten Maschine:** `wolfbot backup` ausführen
2. **Backup-Datei übertragen** — sicher (z. B. über SSH/SCP)
3. **Auf der neuen Maschine:** WolfBot Community installieren
4. `wolfbot restore-backup` ausführen und die übertragene Datei auswählen

---

## Fehlerbehebung

| Problem | Lösung |
|---|---|
| Backup-Kommando nicht gefunden | Sicherstellen, dass WolfBot korrekt installiert ist; Terminal neu starten |
| Restore schlägt fehl | Sicherstellen, dass die Backup-Datei nicht beschädigt ist |
| „Permission denied“ (Linux) | `sudo` verwenden oder Dateiberechtigungen prüfen |

---

## Nächster Schritt

> **[Update-Guide →](/docs/updates)**
