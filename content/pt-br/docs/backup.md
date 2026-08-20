---
title: "Backup e Restauração do WolfBot Community — Guia de Proteção de Dados"
description: "Como fazer backup e restaurar o WolfBot Community — proteja a configuração e os dados de trading da sua plataforma unificada."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/troubleshooting"]
keywords: ["backup wolfbot", "restaurar wolfbot", "backup de bot de trading", "proteção de dados de bot de trading", "backup da plataforma unificada wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/backup"
---

# Guia de Backup e Restauração

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-15

## Por Que Fazer Backup?

O WolfBot armazena sua configuração localmente: conexões de API com corretoras, configurações de estratégias, parâmetros de risco, configurações de bots e preferências de trading. Um backup protege dias ou semanas de trabalho de configuração.

---

## Backup (Linux)

Os backups são executados pelo terminal, e por padrão fazem uma **simulação (dry run)** — mostram o que seria incluído no backup sem gravar nada, até você adicionar `--execute`:

```bash
# Ver o que um backup incluiria, sem gravar nada
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot

# Gravar de fato o arquivo de backup
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Adicione `--label "before-weekend"` para marcar um backup com um nome que você reconhecerá depois. O arquivo resultante é gravado com permissões de arquivo restritas (legível apenas pela sua própria conta de usuário), junto com um recibo descrevendo seu conteúdo.

> Execute `wolfbot backup --help` para a lista completa e atualizada de opções — as flags podem mudar entre releases.

### Windows

Um comando de backup dedicado ainda não está disponível no Windows — por enquanto, a opção mais segura é copiar sua pasta de dados do WolfBot para um local seguro antes de uma mudança importante (veja [Solução de Problemas](/docs/troubleshooting) se você não souber onde ela fica).

---

## Restaurar a Partir de um Backup

```bash
wolfbot restore-backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --backup <path-to-archive>
```

Assim como o backup, isso por padrão faz uma simulação, para que você veja o que mudaria antes de confirmar com `--execute`. Use `wolfbot inspect-backup <path-to-archive>` primeiro se você só quiser conferir o que há dentro de um arquivo, sem restaurar nada.

---

## O Que É Incluído no Backup

Sua configuração, ajustes de estratégias, parâmetros de risco e histórico de trading ficam no diretório de dados do WolfBot e são incluídos em um backup. Os secrets de API das corretoras são tratados com cuidado — verifique a saída de `wolfbot backup` (mesmo em modo de simulação) se precisar confirmar exatamente o que um determinado release inclui, antes de contar com ele para migrar de máquina.

---

## Migrando para uma Nova Máquina

1. Crie um backup na máquina antiga (`wolfbot backup ... --execute`)
2. Copie o arquivo resultante para a nova máquina
3. Instale o WolfBot Community na nova máquina
4. Restaure o arquivo (`wolfbot restore-backup ...`), depois verifique suas contas e configurações — insira novamente qualquer chave de API que não tenha sido transferida

---

## Solução de Problemas

| Problema | Solução |
|---|---|
| "Backup creation failed" (falha ao criar backup) | Verifique o espaço em disco e se `--install-root`/`--data-root` apontam para os caminhos reais do seu WolfBot |
| A restauração parece errada após uma mudança de versão | Atualize o WolfBot primeiro para a mesma versão em que o backup foi feito, depois tente novamente |
| Não tem certeza se um backup foi bem-sucedido | Rode `wolfbot inspect-backup <path>` para verificar seu conteúdo antes de precisar dele |

---

## Próximo passo

> **[Guia de Solução de Problemas →](/docs/troubleshooting)**
