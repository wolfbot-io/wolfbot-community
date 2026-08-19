---
title: "Terminal Inteligente do WolfBot Community — Guia de Trading Manual"
description: "Como usar o Terminal Inteligente do WolfBot Community para trading manual. Faça ordens com controles de risco automáticos em todas as suas exchanges de cripto e corretoras MT5 conectadas."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["terminal inteligente wolfbot", "trading manual wolfbot", "terminal de trading de cripto", "terminal bot de trading"]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "docs/smart-terminal"
---

# Guia do Terminal Inteligente

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc17** · Última atualização: 2026-08-15

## O Que É o Terminal Inteligente?

O Terminal Inteligente é a interface de trading manual do WolfBot Community. Diferente de uma UI de trading de exchange padrão, ele aplica automaticamente suas configurações de risco — limites de posição, stop-losses e take-profits — a cada ordem que você fizer. Funciona de forma idêntica seja você operando cripto na Binance, futuros na Bybit, ou ouro via MT5.

## Conceitos-Chave

| Recurso | O Que Faz |
|---|---|
| **Entrada Consciente do Risco** | Calcula automaticamente o tamanho da posição com base nas suas configurações de risco |
| **TP/SL Automático** | Coloca ordens de take-profit e stop-loss automaticamente |
| **Limite Inteligente** | Roteia ordens de forma inteligente com base na profundidade do mercado |
| **Monitor de Posição** | Acompanhamento de lucro/prejuízo em tempo real em todas as posições |

## Como Usar

### 1. Abra o Terminal Inteligente

1. Inicie o WolfBot Community
2. Clique em **Terminal Inteligente** na barra lateral
3. Selecione um par de trading (ex.: BTC/USDT para cripto, EUR/USD para forex, XAU/USD para ouro)
4. Escolha sua conta de corretora

### 2. Configure Sua Ordem

O terminal mostra valores pré-preenchidos com base na sua configuração de risco:

- **Tamanho da Posição** — Calculado a partir do seu percentual de risco e saldo da conta
- **Stop-Loss** — Definido automaticamente com base nos seus parâmetros de risco
- **Take-Profit** — Definido automaticamente com base na sua relação de recompensa
- **Tipo de Ordem** — Market, Limit ou Limite Inteligente

### 3. Faça uma Ordem

1. Revise os parâmetros pré-preenchidos
2. Ajuste se necessário (o terminal avisa se você exceder os limites de risco)
3. Clique em **Comprar** ou **Vender**
4. Confirme os detalhes da ordem
5. Sua ordem é feita já com a proteção de TP/SL anexada

### 4. Monitore as Posições

Depois de fazer uma ordem:
- A posição aparece no painel de **Posições**
- O lucro/prejuízo é atualizado em tempo real
- Os níveis de TP/SL ficam visíveis
- Você pode modificar ou fechar a posição pelo terminal

## Rede de Segurança de Risco

O Terminal Inteligente aplica automaticamente:

- **Limite de Tamanho de Posição** — Não pode exceder seu máximo configurado
- **Stop-Loss Obrigatório** — Toda posição precisa ter um stop-loss (configurável)
- **Timer de Cooldown** — Evita ordens em sequência rápida (configurável)
- **Limite Diário de Operações** — Máximo de operações por dia (configurável)

Veja [Controles de Risco →](/docs/risk-controls) para configurar seus parâmetros de segurança.

## Contas Demo vs Live

Não existe um modo de terminal separado para alternar — a conta que você seleciona no Passo 1 já decide isso:

| Tipo de conta | Como Funciona |
|---|---|
| **Demo** | As ordens são executadas contra a testnet de uma corretora com fundos virtuais — risco zero |
| **Live** | As ordens são executadas na sua conta real de exchange ou corretora MT5 |

O Terminal Inteligente se comporta de forma idêntica em ambos os casos — mesmos controles de risco, mesma lógica de ordens.

> ⚠️ Sempre teste em uma conta Demo antes de mudar para Live. Veja o [Guia de Conta Demo →](/docs/simulation)

## Tipos de Ordem

### Ordem Market
Executa imediatamente ao melhor preço disponível.

### Ordem Limit
Executa apenas no preço especificado por você ou melhor.

### Limite Inteligente
O WolfBot monitora o livro de ordens e executa quando as condições estão ideais — equilibrando preço e probabilidade de execução.

## Tarefas Comuns

| Tarefa | Como Fazer |
|---|---|
| Fazer uma compra a mercado | Selecione o par → clique em **Comprar a Mercado** |
| Fazer uma compra limitada | Selecione o par → escolha **Limit** → defina o preço → clique em **Comprar** |
| Definir TP/SL | Definido automaticamente pela configuração de risco; ajuste manual no painel de posição |
| Fechar uma posição | Clique na posição → **Fechar** |
| Modificar TP/SL | Clique na posição → edite os valores de TP/SL → confirme |
| Ver histórico de ordens | Aba **Atividade** na barra lateral |

## Solução de Problemas

- **"Risk limit exceeded"(limite de risco excedido)** — Reduza o tamanho da posição ou ajuste as configurações de risco
- **"Cooldown active"(cooldown ativo)** — Aguarde o timer de cooldown expirar
- **"Insufficient balance"(saldo insuficiente)** — Verifique o saldo da sua exchange ou corretora MT5
- **"Order rejected"(ordem rejeitada)** — Verifique os mínimos de ordem da exchange ou os requisitos de tamanho de lote do MT5

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)**
