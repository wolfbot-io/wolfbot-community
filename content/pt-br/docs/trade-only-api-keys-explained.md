---
title: "Chaves de API Somente-Negociação Explicadas — Por Que Seu Bot Nunca Deve Poder Sacar"
description: "A configuração mais importante ao conectar qualquer exchange a um bot de trading: desativar as permissões de saque. Veja exatamente o que uma chave de API somente-negociação pode e não pode fazer, e por que isso importa."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/brokers/api-key-guide"
related_guides: ["/brokers/api-key-guide", "/security", "/docs/self-hosted-explained"]
keywords: [
  "chave de api somente negociação",
  "chave de api com saque desativado",
  "é seguro conectar api de exchange a um bot",
  "bot de trading não custodial",
  "segurança de chave de api de bot de trading"
]
sitemap_priority: 0.75
lang: "pt-BR"
translation_of: "docs/trade-only-api-keys-explained"
---

# Chaves de API Somente-Negociação Explicadas

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc17** · Última atualização: 2026-08-15

## Para quem é este guia

- **Se você quer conectar uma exchange sem colocar seus fundos em risco** — este texto mostra, em linguagem simples, a única permissão que você deve sempre desativar, para que uma chave vazada nunca consiga esvaziar sua conta.
- **Se você é mais técnico** — você vai conhecer o modelo exato de permissões (Leitura/Trade vs Saque/Transferência) e a segunda camada de restrição de IP.

## A configuração mais importante

Toda exchange permite que você crie uma chave de API com um conjunto específico de permissões — não "sua conta inteira", mas uma fatia mais restrita dela. Quando você conecta uma exchange a qualquer bot de trading, incluindo o WolfBot, a decisão mais importante que você toma é quais permissões essa chave terá.

O WolfBot só precisa de duas:

- **Leitura** — ver seu saldo, ordens abertas e posições
- **Trade** — fazer e cancelar ordens

Ele nunca precisa, e nunca deve receber:

- ❌ **Saque** — movimentar fundos para fora da exchange
- ❌ **Transferência** — movimentar fundos entre sub-contas da exchange ou para outros usuários

## O que acontece se você deixar o saque habilitado mesmo assim

Na maioria das vezes, nada — até a única vez em que importa. Se sua chave de API, ou a máquina onde ela está armazenada, algum dia for comprometida, o raio de dano é definido inteiramente pelo que essa chave *tem permissão* de fazer, não pelo que seu bot de fato usa. Uma chave somente-negociação em mãos erradas pode fazer operações indesejadas — algo incômodo, mas que você notaria e poderia desfazer. Uma chave com saque habilitado em mãos erradas pode esvaziar a conta.

É por isso que as exchanges expõem essa permissão como uma caixa de seleção separada da negociação: ela existe justamente para ser desativada nesse tipo de cenário.

## Por que isso importa ainda mais para ferramentas self-hosted

O WolfBot Community roda na sua própria máquina — o que é uma vantagem de segurança genuína (veja [Self-Hosted Explicado](/docs/self-hosted-explained)), mas também significa que a chave de API vive no seu próprio ambiente, não atrás da infraestrutura reforçada de um fornecedor. As permissões somente-negociação são o que tornam essa troca irrelevante: mesmo que sua máquina fosse comprometida, um atacante de posse da sua chave de API ainda não conseguiria movimentar seus fundos para lugar nenhum, porque a própria exchange recusa solicitações de saque vindas dessa chave.

É também por isso que o WolfBot é **não-custodial** — em nenhum momento o WolfBot, ou qualquer outra pessoa, detém seus fundos. Eles permanecem na exchange, sob permissões que você controla, e você pode revogar a chave instantaneamente, pela sua conta na exchange, a qualquer momento.

## Restrição de IP — a segunda camada

A maioria das exchanges também permite vincular uma chave de API a um endereço IP específico. Se você está rodando o WolfBot em uma conexão residencial fixa ou em uma VPS, isso adiciona uma segunda barreira independente: mesmo uma chave vazada com permissões somente-negociação se torna inútil a partir de qualquer outro lugar. Nem toda exchange suporta isso em todos os níveis de conta, mas vale a pena habilitar sempre que disponível.

## Checklist para cada corretora que você conectar

- [ ] Permissão de Trade: **habilitada**
- [ ] Permissão de Leitura: **habilitada**
- [ ] Permissão de Saque: **desativada**
- [ ] Permissão de Transferência: **desativada**
- [ ] Restrição de IP: **habilitada onde suportado**

Cada guia de corretora na [Academy](/academy) mostra exatamente onde encontrar essas opções para aquela exchange específica.

## Próximo passo

> **[Guia Completo de Configuração de Chave de API →](/brokers/api-key-guide)**
