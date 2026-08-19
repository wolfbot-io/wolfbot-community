---
title: "Trading MT5 Self-Hosted — Rode o MetaTrader 5 na Sua Própria Máquina, Não em um Aluguel"
description: "Trading MT5 self-hosted significa rodar seu terminal MetaTrader 5 onde você o controla — no seu computador ou no seu próprio VPS — em vez de alugar uma máquina Windows separada. Veja o que muda e por que isso importa."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "9 minutes"
next_guide: "/docs/mt5-without-windows-vps"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/self-hosted-explained", "/docs/risk-controls"]
keywords: [
  "mt5 self hosted",
  "trading mt5 self hosted",
  "rodar mt5 no próprio servidor",
  "bot metatrader self hosted",
  "mt5 sem vps windows",
  "self host mt5 linux"
]
sitemap_priority: 0.8
lang: "pt-BR"
translation_of: "docs/mt5-self-hosted-trading"
---

# Trading MT5 Self-Hosted

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você só conhecia a automação do MT5 como "alugar um VPS Windows"** — este guia explica a alternativa self-hosted, em termos simples.
- **Se você é tecnicamente inclinado** — você verá exatamente onde o terminal MT5 roda e por que um desktop alugado não é a única opção.

## O que "self-hosted" significa para o MT5

Seu terminal MetaTrader 5 roda em algum lugar **que você controla** — sua própria máquina Linux ou seu próprio VPS — em vez de em uma máquina alugada especificamente para manter o MT5 vivo.

O WolfBot Community é self-hosted, e seu suporte a MT5 segue a mesma regra: um terminal MT5 real roda dentro de um container na sua máquina, acessível pelo seu navegador, junto com o resto do WolfBot. Sem servidor Windows separado, sem cliente de área de trabalho remota, sem aluguel mensal cujo único trabalho é manter um terminal de pé.

## O que você mantém, o que você elimina

- **Mantém:** um terminal MT5 real e totalmente funcional — mesmo login na corretora, mesmos gráficos, mesmas ordens.
- **Elimina:** a segunda máquina. Um único host roda suas contas de cripto, sua conta MT5 e o próprio WolfBot.
- **Mantém:** seus dados no seu próprio hardware. Self-hosting significa que suas posições e chaves ficam na infraestrutura que você opera.

## Por que isso importa

- **Custo.** Sem cobrança extra de VPS Windows para o MT5. Se você já roda o WolfBot em um VPS Linux, o MT5 acompanha na mesma máquina.
- **Controle.** Você é dono da máquina, do terminal e dos dados.
- **Simplicidade.** Uma única interface de navegador para cripto + MT5 em vez de administrar uma fazenda de desktops alugados.

## Nem todo mundo precisa de self-hosted

Se você não quer rodar ou manter nenhum servidor, hospedagem gerenciada também é uma opção — veja [Community vs Cloud](/community-vs-cloud) para comparar. Self-hosted é o caminho gratuito e totalmente sob seu controle.

## Comece agora

- [Rode o MT5 sem um VPS Windows →](/docs/mt5-without-windows-vps)
- [Conectar o MT5 →](/brokers/mt5)
- [Por que self-hosting? →](/docs/self-hosted-explained)

## Próximo passo

> **[Rode o MT5 sem um VPS Windows →](/docs/mt5-without-windows-vps)**
