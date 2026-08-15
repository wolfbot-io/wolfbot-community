---
title: "Guia de Atualização do WolfBot Community — Auto-Atualização e Canais"
description: "Como funcionam as atualizações do WolfBot Community. Canais Stable, Beta e Dev Preview. Mantenha sua plataforma unificada atualizada."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/backup"
related_guides: ["/docs/backup", "/releases/channels", "/docs/troubleshooting"]
keywords: ["atualização wolfbot", "auto atualização wolfbot", "canais de release wolfbot", "atualizar bot de trading", "canais de atualização wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/updates"
---

# Atualizar o WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-15

## Como Funcionam as Atualizações

O WolfBot Community é distribuído em canais — o release que você baixa decide o quão recente (e o quão testada) é sua build.

| Canal | Descrição | Frequência de Atualização | Nível de Risco |
|---|---|---|---|
| **Stable** | Pronto para produção | Marcos mensais | Mais baixo |
| **Beta** | Testes amplos | A cada 1–2 semanas | Baixo |
| **Dev Preview** | Recursos mais recentes | Várias vezes por semana | Médio |

Veja [Canais de Release Explicados →](/releases/channels)

---

## Atualizando

### Windows

1. Acesse [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Baixe o Setup.exe mais recente
3. Execute o instalador — ele faz upgrade no lugar e mantém seus dados, contas e configurações

### Linux

Toda instalação inclui um atualizador assinado, executado pelo terminal:

```bash
# Verificar o que está instalado atualmente
/opt/wolfbot/launcher/wolfbot-updater.sh check

# Aplicar um release específico (veja community.wolfbot.io/releases para os links do manifesto)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

O atualizador verifica a assinatura do novo release antes de baixar qualquer coisa, e só interrompe sua stack atual depois que a nova já estiver preparada.

> ℹ️ Hoje não existe um pop-up de "atualização disponível" dentro do app — verifique as [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) ou rode o comando de verificação acima para ver o que está atual.

---

## Antes de Atualizar

1. **Faça backup da sua configuração** — Veja o [Guia de Backup →](/docs/backup)
2. **Leia as notas de release** — [community.wolfbot.io/releases](/releases)
3. **Verifique problemas conhecidos** — Listados em cada release

### O Que É Preservado
- ✅ Chaves de API e conexões com corretoras
- ✅ Configurações de estratégias e ajustes de risco
- ✅ Histórico de trading e configurações de bots

---

## Escolhendo um Canal

Não existe um seletor de canal dentro do app — você escolhe um canal pelo release que baixa. Pegue uma build Beta ou Dev Preview diretamente das [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) em vez do link Stable na página de download, quando quiser experimentar recursos mais novos.

> ⚠️ As builds Dev Preview podem conter recursos incompletos — espere mais arestas do que na Stable.

---

## Rollback

Se uma atualização causar problemas:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
Isso restaura o manifesto do release anterior e reinicia a stack nele.

**Windows:** baixe e reinstale o Setup.exe da versão anterior nas [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) — instalar sobre a versão atual faz upgrade ou downgrade no lugar, de qualquer forma.

---

## Segurança das Atualizações

- Todas as atualizações são assinadas criptograficamente
- O WolfBot verifica as assinaturas antes de aplicá-las
- Checksums são publicados para verificação manual

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| "Update check failed" (falha na verificação de atualização) | Verifique sua conexão com a internet |
| "Signature verification failed" (falha na verificação de assinatura) | Baixe manualmente pelo site |
| Atualização travada no meio | Rode o comando de atualização novamente, ou reinstale com um download novo |

---

## Próximo passo

> **[Guia de Backup e Restauração →](/docs/backup)**
