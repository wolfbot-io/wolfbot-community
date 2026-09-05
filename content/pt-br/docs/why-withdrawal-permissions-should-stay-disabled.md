---
title: "Por Que as Permissões de Saque Devem Continuar Desativadas — Proteja Seus Fundos de uma Chave Comprometida"
description: "Chaves de API somente-negociação devem manter os saques desativados. Veja por que uma chave com saque habilitado é a principal forma pela qual uma chave de exchange comprometida vira um saldo roubado, e como verificar a sua."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "permissão de saque chave de api",
  "chave de api somente negociação",
  "desativar saque bot de trading",
  "segurança de chave de api",
  "chave de exchange sem permissão de saque",
  "credenciais de api de bot seguras"
]
sitemap_priority: 0.7
lang: "pt-BR"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
---

# Por Que as Permissões de Saque Devem Continuar Desativadas

**Testado com WolfBot Community v0.1.0-beta.9** · Última atualização: 2026-08-18

## A resposta em uma linha

Um bot de trading só precisa abrir e gerenciar operações. Ele nunca precisa mover seus fundos para fora. Então a chave de API mais segura para qualquer bot auto-hospedado — incluindo o WolfBot Community — é uma **chave somente-negociação com as permissões de saque desativadas.**

## Quais permissões uma chave de API pode ter

Quando você cria uma chave de API em uma exchange, normalmente você escolhe quais ações ela pode executar. A diferença que importa para um bot de trading:

- **Negociar (Trade):** ler saldos, colocar ordens, gerenciar posições — exatamente o que um bot faz.
- **Sacar (Withdraw):** mover fundos para fora da conta.

A segunda é o que transforma uma chave vazada ou roubada de "alguém pode mexer nas minhas operações" em "alguém pode levar meu dinheiro."

## Por que isso importa para os seus fundos

Se a permissão de saque da sua chave está **desligada**, mesmo uma chave totalmente comprometida não consegue enviar seu saldo para lugar nenhum — a exchange simplesmente rejeita qualquer solicitação de saque vinda dela. Isso é um limite absoluto para o dano que uma credencial roubada pode causar aos seus fundos reais.

Se está **ligada**, no momento em que essa chave vaza (um paste, uma máquina comprometida, uma dependência maliciosa que você rodou), um atacante pode drenar a conta diretamente, sem nenhum passo extra.

## Como verificar a sua

1. Faça login na exchange e abra **Gerenciamento de API**.
2. Encontre a chave conectada ao seu bot.
3. Confirme que apenas **Negociar / Ler** está habilitado e que **Sacar está desativado.**
4. Se o saque estiver habilitado, desative-o e reconecte o bot. O WolfBot nunca precisa dele.

## A chave somente-negociação, em resumo

- Uma chave somente-negociação cumpre tudo o que um bot faz: ler, colocar, gerenciar.
- Desativar o saque é a proteção de fundos mais barata e mais eficaz que cada um de nós controla.

## Para onde ir a seguir

- [Chaves de API Somente-Negociação Explicadas →](/docs/trade-only-api-keys-explained)
- [Segurança →](/security)
- [Controles de Risco →](/docs/risk-controls)

## Próximo passo

> **[Chaves de API Somente-Negociação Explicadas →](/docs/trade-only-api-keys-explained)**
