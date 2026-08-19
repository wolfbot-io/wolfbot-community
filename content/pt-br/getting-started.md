---
title: "Primeiros Passos com o WolfBot Community"
description: "Primeiros passos após instalar o WolfBot Community. Conecte uma conta Demo, explore o Dashboard e adicione suas exchanges de cripto ou corretora MT5."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/simulation"
previous_guide: "/install/windows"
related_guides: ["/docs/simulation", "/brokers/bybit", "/docs/risk-controls"]
keywords: ["wolfbot primeiros passos", "wolfbot tutorial", "como usar o wolfbot", "plataforma de trading unificada"]
sitemap_priority: 0.9
lang: "pt-BR"
translation_of: "getting-started"
---

# Primeiros Passos com o WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-15

## Bem-vindo! 👋

O WolfBot Community é uma plataforma de trading unificada — uma única interface para exchanges de cripto e corretoras MT5. Instalá-lo não cria nenhuma conta em exchange nem executa nenhuma operação — nada é conectado até que você adicione uma conta. Siga estes passos na ordem indicada.

> **Uma Plataforma. Todos os Mercados.** — Cripto + Futuros + MT5, unificados pelo WolfBot.

## Passo 1: Abra o Dashboard

Inicie o WolfBot Community. Você chegará à página **Status de Capacidades** — ela mostra quais corretoras e recursos estão disponíveis na sua instalação, e confirma que nada foi conectado ainda.

## Passo 2: Explore o Dashboard

| Área | Finalidade |
|---|---|
| **Visão Geral do Portfólio** | Saldo, lucro/prejuízo, posições — em TODOS os mercados conectados |
| **Bots** | Bots de trading automatizado para cripto e MT5 |
| **Terminal Inteligente** | Trading manual com controles de risco |
| **Controles de Risco** | Limites de posição, proteções de drawdown |
| **Contas em Exchanges** | Conexões com corretoras e chaves de API |

## Passo 3: Conecte uma Conta Demo — Risco Zero

O WolfBot não tem um botão separado de "modo Simulação". Em vez disso, você conecta a própria **conta Demo/testnet** da corretora — dados reais de mercado, fundos virtuais, exatamente a mesma interface e o mesmo motor de risco que você usará depois no trading ao vivo.

1. Vá em **Contas em Exchanges → Adicionar Conta**
2. Escolha **Bybit** e siga os [passos de configuração da conta Demo da Bybit](/brokers/bybit) — o WolfBot detecta automaticamente se é uma conta Demo ou Live a partir da chave de API que você colar
3. Experimente o **Terminal Inteligente** com sua conta Demo
4. Observe como as posições aparecem no Dashboard

> ✅ Uma conta Demo não custa nada e nunca envolve fundos reais — a forma mais segura de aprender a usar o WolfBot em todos os mercados suportados.

[Guia Completo de Demo/Simulação →](/docs/simulation)

## Passo 4: Conecte Seus Mercados para Trading Real

Quando estiver pronto para operar ao vivo:
1. Crie uma chave de API somente-negociação na sua exchange
2. Contas em Exchanges → Adicionar Conta → Selecione a corretora → Insira as chaves
3. Comece com posições pequenas e controles de risco rigorosos

> ⚠️ Sempre use chaves de API com permissão apenas para negociação (sem saque).

Guias de corretoras: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

## Checklist da Primeira Semana

- [ ] Explorar o Dashboard
- [ ] Conectar uma conta Demo (Bybit Demo ou demo MT5)
- [ ] Operar na Demo por 1–2 dias
- [ ] Experimentar o Terminal Inteligente com sua conta Demo
- [ ] Ler o [Guia de Controles de Risco](/docs/risk-controls)
- [ ] Conectar uma conta Live quando estiver pronto

## Precisa de Ajuda?

- [Documentação](/docs)
- [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [Solução de Problemas](/docs/troubleshooting)
- [Perguntas Frequentes](/faq)

## Próximo passo

> **[Conectar uma Conta Demo →](/docs/simulation)**
