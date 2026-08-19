---
title: "WolfBot Community 24/7 auf einem VPS betreiben"
description: "So betreibst du WolfBot Community rund um die Uhr auf einem virtuellen privaten Server (VPS) — Krypto- und MT5-Handel, ohne dass dein PC ständig läuft."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "20 minutes"
next_guide: "/docs/run-24-7-on-a-vps"
related_guides: ["/install/linux", "/docs/self-hosted-explained", "/docs/mt5-without-windows-vps", "/docs/backup"]
keywords: ["run trading bot 24/7", "vps trading bot", "trading bot vps setup", "wolfbot vps", "24/7 crypto bot"]
sitemap_priority: 0.85
lang: "de"
translation_of: "docs/run-24-7-on-a-vps"
---

# 24/7 auf einem VPS betreiben

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc17** · Zuletzt aktualisiert: 2026-08-15

## Warum ein VPS?

Automatisierter Handel funktioniert am besten, wenn er **immer läuft**. Dein PC ist nicht dafür ausgelegt, rund um die Uhr zu laufen — er geht in den Ruhezustand, startet neu oder trennt sich vom Netz.

Ein **VPS (Virtual Private Server)** ist ein Computer in einem Rechenzentrum, der:
- 24/7 eingeschaltet bleibt
- Eine stabile Internetverbindung hat
- Nicht von deinem lokalen Strom/Netz abhängt
- Günstig ist (oft $5–20/Monat)

## Für wen dieser Guide ist

- **Für alle Trader:** Warum ein VPS deinen Bot zuverlässiger macht und wie du einen für WolfBot einrichtest — ohne tiefe Serverkenntnisse.
- **Für technische Nutzer:** Die konkreten Befehle und Best Practices für einen stabilen 24/7-Betrieb.

---

## Einen VPS wählen

### Mindestanforderungen

| Ressource | Minimum | Empfohlen |
|---|---|---|
| **CPU** | 1 Kern | 2 Kerne |
| **RAM** | 2 GB | 4 GB |
| **Speicher** | 20 GB SSD | 40 GB SSD |
| **Netzwerk** | 1 Gbit/s | 1 Gbit/s |
| **Betriebssystem** | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

> Wenn du MT5 auf demselben VPS handelst, nimm 4 GB RAM oder mehr.

### Anbieter

Jeder seriöse VPS-Anbieter funktioniert. Beliebte Optionen: DigitalOcean, Linode, Vultr, Hetzner, AWS Lightsail.

---

## Schritt 1: VPS erstellen

1. Wähle ein Ubuntu-22.04-Image
2. Wähle eine Region in der Nähe deiner Broker-Server (niedrige Latenz)
3. Wähle deine Größe (2 vCPU / 4 GB empfohlen)
4. Richte SSH-Schlüssel ein (sicherer als Passwörter)
5. Erstelle und starte den Server

---

## Schritt 2: Verbinden

```bash
ssh root@DEINE_VPS_IP
```

Ersetze `DEINE_VPS_IP` durch die IP-Adresse deines Servers.

---

## Schritt 3: WolfBot Community installieren

Befolge die [Linux-Installationsanleitung](/install/linux).

Zusammenfassung:

```bash
# System aktualisieren
sudo apt update && sudo apt upgrade -y

# WolfBot installieren (siehe /install/linux für den genauen Befehl)
# ...
```

---

## Schritt 4: Konten verbinden & konfigurieren

1. Verbinde deine Broker-Konten (Krypto und/oder MT5) — siehe [Verbinde deine Märkte](/getting-started)
2. Konfiguriere Risk Controls — siehe [Risk-Controls-Guide](/docs/risk-controls)
3. Richte deine Bots ein — siehe [Automatisierter Handelsablauf](/docs/automated-trading-workflow)

---

## Schritt 5: Rund-um-die-Uhr-Betrieb absichern

### Als Dienst ausführen

WolfBot läuft als Dienst und startet automatisch beim Booten:

```bash
# Status prüfen
sudo systemctl status wolfbot

# Bei Bedarf aktivieren
sudo systemctl enable wolfbot
```

### Automatische Backups

Richte einen täglichen Cron-Backup ein:

```bash
# Cron öffnen
crontab -e

# Tägliches Backup um 3:00 Uhr hinzufügen
0 3 * * * wolfbot backup
```

### Updates planen

Entscheide, ob du automatische Updates im Stable-Kanal zulässt oder manuell aktualisierst:

```bash
# Manuell aktualisieren
wolfbot update
```

---

## Für technische Nutzer: Stabilitäts-Tipps

### Uptime überwachen

Ein einfacher Health-Check per cron:

```bash
# Alle 5 Minuten prüfen, ob der Dienst läuft
*/5 * * * * systemctl is-active --quiet wolfbot || systemctl restart wolfbot
```

### Swap konfigurieren

Ein Swap-Puffer verhindert OOM-Abstürze auf kleinen VPS:

```bash
# 2 GB Swap erstellen (falls nicht vorhanden)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### MT5 auf dem VPS

MT5 läuft auf Linux über den Container von WolfBot — kein Windows-VPS nötig. Siehe [MT5 auf Linux ohne Windows-VPS →](/docs/mt5-without-windows-vps).

---

## Sicherheit

Dein VPS hält deine Handelszugänge — sichere ihn ab:

- [ ] SSH nur mit Schlüsseln (keine Passwörter)
- [ ] Firewall aktiviert (nur nötige Ports)
- [ ] Regelmäßige System-Updates
- [ ] WolfBot-Backups an separatem Ort
- [ ] Keine unnötigen Dienste installiert

> ⚠️ Teile niemals deine SSH-Schlüssel oder VPS-Zugangsdaten. Sie geben vollen Zugriff auf deinen Handel.

---

## Häufige Fragen

**F: Ist ein VPS sicher für den Handel?**
Ja, wenn du Best Practices befolgst (Schlüssel-Auth, Firewall, Updates). Es ist dieselbe Sicherheit wie bei jedem Server.

**F: Wie viel kostet ein VPS?**
Typischerweise $5–20/Monat für WolfBot. Oft günstiger als ein Windows-VPS, wenn du MT5 handelst (WolfBot läuft auf Linux).

**F: Brauche ich einen VPS, wenn ich nur tagsüber handle?**
Nein — dein PC reicht, wenn er während deiner Handelszeiten an ist. Ein VPS ist für den 24/7-Betrieb.

**F: Kann ich einen VPS von einem anderen Kontinent nutzen?**
Ja, aber niedrigere Latenz (Server in der Nähe deiner Broker) ist besser für die Ausführungsgeschwindigkeit.

---

## Nächster Schritt

> **[Linux-Installation →](/install/linux)** — beginne mit der Einrichtung deines VPS
