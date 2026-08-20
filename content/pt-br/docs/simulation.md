---
title: "Comece o WolfBot Community com uma Conta Demo"
description: "Aprenda a testar o WolfBot Community sem riscos com uma conta Demo de corretora. Faça paper-trade contra dados reais de mercado em cripto e MT5 sem arriscar fundos reais."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/getting-started"
related_guides: ["/getting-started", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: [
  "simulação wolfbot",
  "paper trading wolfbot",
  "modo demo wolfbot",
  "testar bot de trading sem dinheiro",
  "simulador de trading de cripto",
  "conta demo bybit"
]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "docs/simulation"
---

# Comece com uma Conta Demo

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-15

## O que é "Simulação" no WolfBot?

O WolfBot não tem um "modo Simulação" global separado que você liga e desliga. Em vez disso, você conecta a própria **conta Demo (testnet)** da corretora — a mesma interface, o mesmo motor de risco e a mesma lógica de ordens do trading ao vivo, mas rodando contra dados de mercado em tempo real com fundos virtuais em vez de reais. Nada na plataforma muda entre Demo e Live; apenas a conta em que você está operando é diferente.

Especificamente para a Bybit, o WolfBot detecta automaticamente se uma chave de API pertence a uma conta Demo ou Live — você não seleciona o modo manualmente.

## Por que começar com uma conta Demo?

1. **Risco zero** — Nenhum dinheiro real envolvido
2. **Aprenda a interface** — Entenda ordens, posições e controles de risco em todos os mercados
3. **Teste estratégias** — Valide sua abordagem em instrumentos de cripto e MT5 antes de operar ao vivo
4. **Construa confiança** — Veja como o WolfBot reage aos movimentos do mercado em diferentes classes de ativos

## Passo 1: Conectar uma Conta Demo

1. Abra o WolfBot Community → **Contas em Exchanges → Adicionar Conta**
2. Escolha **Bybit** e crie uma chave de API Demo/testnet — veja o [guia de conexão da Bybit](/brokers/bybit) para os passos exatos
3. Cole a chave. O WolfBot detecta automaticamente que é uma chave Demo e rotula a conta de acordo
4. Usuários de MT5: a maioria das corretoras MT5 também oferece uma conta demo gratuita — verifique o dashboard da sua corretora e siga o [guia de conexão do MT5](/brokers/mt5)

## Passo 2: Explore o Terminal Inteligente

O Terminal Inteligente é sua interface de trading manual — a mesma que você usará depois no trading ao vivo.

1. Vá em **Terminal Inteligente**
2. Selecione sua conta Demo, depois um par de trading (ex.: BTC/USDT para cripto, ou XAU/USD para ouro via MT5)
3. Observe os parâmetros de risco pré-preenchidos:
   - Tamanho da posição
   - Stop-loss
   - Take-profit
4. Clique em **Fazer Ordem**

Sua ordem aparece imediatamente no painel de **Posições** — financiada pelo saldo virtual da sua conta Demo.

## Passo 3: Observe Seu Portfólio Demo

1. Vá em **Visão Geral do Portfólio**
2. Veja o saldo e o lucro/prejuízo da sua conta Demo
3. Observe as posições sendo atualizadas com preços reais de mercado
4. Observe como os níveis de TP/SL protegem sua posição

## Passo 4: Configure os Controles de Risco

Mesmo na Demo, pratique um bom gerenciamento de risco — essas configurações são mantidas identicamente quando você conectar uma conta Live:

1. **Limites de Posição** — Tamanho máximo por operação
2. **Proteções de Drawdown** — Perda máxima antes de parar
3. **Tempos de Espera (Cooldowns)** — Intervalo mínimo entre operações
4. **Limites Diários** — Número máximo de operações por dia

> 🛡️ Os controles de risco funcionam de forma idêntica nas contas Demo e Live. Configure-os agora para já estar pronto quando for operar ao vivo.

Veja o [Guia de Controles de Risco →](/docs/risk-controls)

## Passo 5: Experimente Bots Automatizados

1. Vá em **Bots → Criar Bot**
2. Escolha um modelo de estratégia
3. Configure os parâmetros
4. Aponte o bot para sua conta Demo
5. Observe-o executar operações automaticamente — a mesma lógica roda para instrumentos de cripto e MT5

## Migrando para o Trading ao Vivo

Quando estiver confiante:
1. Conecte uma conta de corretora com uma chave de API Live, somente-negociação (veja [Conecte Seus Mercados](/getting-started))
2. Comece com os menores tamanhos de posição possíveis
3. Mantenha stop-losses rigorosos
4. Aumente gradualmente conforme você verifica o comportamento

> ⚠️ Mesmo traders experientes devem testar novas estratégias primeiro em uma conta Demo — especialmente ao operar em diferentes tipos de mercado.

## Perguntas Comuns

**P: Uma conta Demo usa dados reais de mercado?**
Sim. O WolfBot busca preços em tempo real de exchanges e corretoras MT5 tanto para contas Demo quanto Live.

**P: Posso perder dinheiro em uma conta Demo?**
Não. Contas Demo operam com fundos virtuais fornecidos pela exchange/corretora, não com dinheiro real.

**P: Quão realista é a Demo comparada à Live?**
O WolfBot roda exatamente a mesma lógica de ordens em ambas. A principal diferença é a execução — uma conta Demo executa contra a testnet da exchange, não o livro de ordens real, então o slippage pode diferir ligeiramente. Isso vale seja você operando cripto, forex ou ouro.

**P: Posso resetar meu saldo Demo?**
Isso depende da exchange, não do WolfBot — a maioria das corretoras permite recarregar ou resetar o saldo virtual de uma conta Demo pelo próprio site (ex.: o dashboard de testnet da Bybit).

## Próximo passo

> **[Conectar a Conta Demo da Bybit →](/brokers/bybit)** ou **[Explorar Controles de Risco →](/docs/risk-controls)**
