---
title: "WolfBot Community Fehlerbehebung — häufige Probleme"
description: "Löse häufige WolfBot Community-Probleme — Verbindungsfehler, Order-Ablehnungen, Dienst startet nicht und mehr."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "15 minutes"
next_guide: "/docs/backup"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/backup", "/security", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot troubleshooting", "wolfbot error", "trading bot connection error", "wolfbot not starting", "api key error"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/troubleshooting"
---

# Fehlerbehebung

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc21** · Zuletzt aktualisiert: 2026-08-15

## Schnelle Diagnose

WolfBot enthält einen Diagnosebefehl, der häufige Probleme automatisch erkennt:

```bash
wolfbot doctor
```

Führe diesen Befehl zuerst aus, wenn etwas nicht funktioniert — er prüft Dienststatus, Konfiguration, Netzwerk und häufige Konfigurationsfehler.

---

## Häufige Probleme

### 1. Dienst startet nicht

**Symptome:** Die Oberfläche lädt nicht, der Dienst startet nicht.

**Prüfen:**

```bash
# Linux
sudo systemctl status wolfbot

# Windows
# In Diensten (services.msc) nach "WolfBot" suchen
```

**Lösungen:**
- Protokolle prüfen: `wolfbot logs`
- Sicherstellen, dass Ports nicht belegt sind
- Nach einer Konfigurationsänderung neu starten
- Bei anhaltendem Problem: `wolfbot repair` ausführen

---

### 2. API-Schlüssel ungültig

**Symptome:** „API key invalid“ oder „Authentication failed“.

**Lösungen:**
1. Schlüssel in WolfBot → **Exchange Accounts** erneut eingeben
2. Prüfen, ob der Schlüssel auf der Börse abgelaufen oder gelöscht wurde
3. Sicherstellen, dass der Schlüssel **Trade**-Berechtigung hat
4. Bei IP-Bindung prüfen, dass deine IP übereinstimmt
5. Auf der Börse einen neuen Schlüssel generieren und erneut verbinden

---

### 3. Order abgelehnt

**Symptome:** Order wird nicht platziert, „Order rejected“.

**Häufige Ursachen:**
- Risk-Control-Limits überschritten (Größe, Hebel, Tageslimit)
- Unzureichendes Guthaben
- Symbol nicht verfügbar
- Preis außerhalb der Tick-Größe

**Lösungen:**
- Risk-Control-Einstellungen prüfen
- Guthaben prüfen
- Symbol auf dem gewählten Konto verifizieren
- Ordergröße an die Tick-Größe der Börse anpassen

---

### 4. Verbindungsprobleme

**Symptome:** Broker- oder MT5-Verbindung fällt aus, „Connection lost“.

**Lösungen:**
- Netzwerkverbindung prüfen
- Status der Börse prüfen (Wartung?)
- Für MT5: sicherstellen, dass MT5 läuft und angemeldet ist
- Firewall-Einstellungen prüfen
- Bei VPS: sicherstellen, dass der Dienst läuft

---

### 5. Daten erscheinen nicht

**Symptome:** Guthaben, Positionen oder Chart laden nicht.

**Lösungen:**
- Broker-/MT5-Verbindung prüfen
- API-Schlüssel-Berechtigungen prüfen (Read muss aktiviert sein)
- Die Oberfläche aktualisieren / neu laden
- Logs auf Datenfehler prüfen

---

### 6. MT5 verbindet nicht

**Symptome:** MT5 erscheint nicht oder Orders werden abgelehnt.

**Lösungen:**
- Sicherstellen, dass MT5 läuft und bei deinem Broker angemeldet ist
- Für Linux: prüfen, dass der MT5-Container aktiv ist (siehe [MT5-Guide](/brokers/mt5))
- In MT5: Tools → Options → Expert Advisors → **Allow Automated Trading** aktivieren
- Mindest-Lotgröße und Handelszeiten des Brokers prüfen

---

## Logs

### Protokolle anzeigen

```bash
# Linux
wolfbot logs

# Windows
# Protokolle befinden sich unter %USERPROFILE%\.wolfbot\logs\
```

### Protokolle verstehen

Protokolle verwenden Tags zur Identifikation:
- `[EXEC]` — Order-Ausführung
- `[TP/SL]` — Take-profit/Stop-loss
- `[COOLDOWN]` — Cooldown-Ereignisse
- `[FETCHER]` — Marktdatenabruf
- `[MT5-BRIDGE]` — MT5-Bridge-Ereignisse

---

## Reparatur-Kommando

Wenn die Konfiguration beschädigt ist oder der Dienst in einem schlechten Zustand ist:

```bash
wolfbot repair
```

Dies:
- Prüft die Konfigurationsintegrität
- Repariert häufige Konfigurationsprobleme
- Stellt beschädigte Zustände wieder her

---

## Wiederherstellung aus einem Backup

Wenn alles andere fehlschlägt, stelle aus einem Backup wieder her:

```bash
wolfbot restore-backup
```

Siehe [Backup & Restore →](/docs/backup)

---

## Wann du Hilfe suchen solltest

Wenn du ein Problem nicht lösen kannst:
1. Sammle relevante Protokolle (redigiere Geheimnisse!)
2. Notiere die Schritte zur Reproduktion
3. Erstelle eine [GitHub Discussion](https://github.com/wolfbot-io/wolfbot-community/discussions)
4. Gib Details an: Betriebssystem, Version, Broker, Fehlermeldung

> ⚠️ Teile niemals API-Schlüssel, Passwörter oder private Daten in Diskussionen.

---

## Nächster Schritt

> **[Backup & Restore →](/docs/backup)**
