---
title: "Códigos de Erro do WolfBot Community — Referência Rápida de Soluções"
description: "Todo código de erro do WolfBot Community explicado: WB-WIN-001 a WB-WIN-004 e WB-LNX-001 a WB-LNX-002. Encontre a solução exata para o seu erro de instalação ou inicialização."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "códigos de erro wolfbot",
  "WB-WIN-001",
  "WB-LNX-002",
  "erro instalador wolfbot",
  "erro wolfbot linux",
  "código de erro wolfbot windows"
]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/error-codes"
---

# Códigos de Erro do WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-18

Um código para uma solução. Os códigos de erro dizem exatamente o que falhou, para
que você não precise adivinhar. Encontre seu código abaixo, aplique a solução e
depois continue com o [Guia Completo de Solução de Problemas](/docs/troubleshooting)
se o problema persistir.

---

## Tabela de consulta rápida

| Código de erro | Onde acontece | Solução em uma linha |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--espaço-em-disco-insuficiente) | Instalador Windows | Libere 2 GB de espaço em disco |
| [WB-WIN-002](#wb-win-002--permissão-negada) | Instalador Windows | Execute o instalador como Administrador |
| [WB-WIN-003](#wb-win-003--download-corrompido) | Instalador Windows | Baixe novamente e verifique o checksum SHA256 |
| [WB-WIN-004](#wb-win-004--dependências-ausentes) | Primeira execução no Windows | Instale o Visual C++ Redistributable |
| [WB-LNX-001](#wb-lnx-001--docker-não-encontrado) | Instalador Linux | Instale o Docker, ou execute o instalador novamente |
| [WB-LNX-002](#wb-lnx-002--conflito-de-porta) | Primeira execução no Linux | Pare o que estiver usando a porta 8765 |

---

## Códigos de erro do Windows

### WB-WIN-001 — Espaço em Disco Insuficiente
**Sintoma:** O instalador falha com "Not enough disk space".

**Solução:** Libere pelo menos 2 GB e tente novamente. Verifique primeiro o espaço livre da sua unidade `C:`.

### WB-WIN-002 — Permissão Negada
**Sintoma:** "Access denied" durante a instalação.

**Solução:** Clique com o botão direito no instalador e escolha **Executar como Administrador**.

### WB-WIN-003 — Download Corrompido
**Sintoma:** O instalador não abre, ou falha na verificação de integridade.

**Solução:** Baixe novamente em [community.wolfbot.io/download](https://community.wolfbot.io/download), depois verifique o checksum SHA256 contra o valor oficial antes de executá-lo. Veja [Como Verificar um Bot de Trading Baixado](/docs/how-to-verify-a-downloaded-trading-bot).

### WB-WIN-004 — Dependências Ausentes
**Sintoma:** "VCRUNTIME140.dll not found" quando o WolfBot inicia.

**Solução:** Instale o [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe), depois reinicie o WolfBot.

---

## Códigos de erro do Linux

### WB-LNX-001 — Docker Não Encontrado
**Sintoma:** "Docker is not installed".

**Solução:** `sudo apt-get install docker.io`, ou simplesmente execute o instalador novamente — ele instala e roda o Docker automaticamente para você.

### WB-LNX-002 — Conflito de Porta
**Sintoma:** "Port 8765 already in use".

**Solução:** Descubra o que está usando a porta com `sudo lsof -i :8765`, pare esse serviço, depois reinicie o WolfBot.

---

## Relacionados

- [Guia Completo de Solução de Problemas](/docs/troubleshooting) — problemas de rede, atualização, performance e dados.
- [Instalar o WolfBot no Windows](/install/windows) — a jornada exata de configuração no Windows.
- [Instalar o WolfBot no Linux](/install/linux) — configuração no Ubuntu/Debian e estado do serviço.
- [Atualização e Rollback](/docs/updates) — o que fazer quando uma atualização falha.
- Encontrou um código que não está aqui? [Pesquise nas GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) ou [abra uma issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose).
