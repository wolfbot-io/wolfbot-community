---
title: "Controles de Risco do WolfBot Community — Guia Completo"
description: "Configure controles de risco unificados no WolfBot Community — limites de posição, proteções de drawdown, tempos de espera e limites diários de operações, aplicados em todas as suas exchanges de cripto e corretoras MT5 conectadas."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/docs/smart-terminal"
related_guides: ["/docs/smart-terminal", "/docs/live-trading", "/security"]
keywords: ["controles de risco wolfbot", "gerenciamento de risco bot de trading", "risco trading de cripto", "limite de posição", "proteção de drawdown"]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "docs/risk-controls"
---

# Guia de Controles de Risco

**Testado com WolfBot Community v0.1.0-beta.2** · Última atualização: 2026-08-15

## Por Que os Controles de Risco Importam

Os controles de risco funcionam como uma rede de segurança em todo o seu ambiente de trading — eles evitam operações excessivas, limitam perdas e protegem sua conta, seja você operando cripto na Binance, futuros na Bybit, ou ouro via MT5. As mesmas regras de risco se aplicam de forma consistente, independentemente do mercado que você está operando.

> 🛡️ Os controles de risco ficam ativos de forma idêntica em contas Demo e Live. Configure-os antes de começar a operar.

## Camadas de Controle de Risco

O WolfBot tem quatro camadas de proteção de risco — elas se aplicam de forma idêntica a todos os mercados conectados:

| Camada | O Que Faz | Exemplo |
|---|---|---|
| **Tamanho da Posição** | Limita o tamanho de cada operação individual | Máximo de 5% do saldo por operação |
| **Proteção de Drawdown** | Interrompe as operações após um limite de perda | Pausa se a perda diária ultrapassar 10% |
| **Timer de Cooldown** | Tempo mínimo entre operações | Pelo menos 60 segundos entre ordens |
| **Limites Diários** | Máximo de operações por dia | Máximo de 20 operações a cada 24 horas |

---

## 1. Limites de Tamanho de Posição

Impede que uma única operação arrisque capital demais — aplica-se igualmente a pares de cripto e instrumentos MT5.

### Configurações

1. Vá em **Risco** na barra lateral
2. Encontre **Dimensionamento de Posição**
3. Configure:

| Configuração | Recomendado (Iniciante) | Descrição |
|---|---|---|
| **% máximo da posição em relação ao saldo** | 2–5% | Tamanho máximo de uma única operação |
| **% de exposição total** | 20–30% | Soma de todas as posições |
| **Alavancagem máxima** | 1x–3x | Limite de alavancagem por posição |

### Exemplo

Se seu saldo é de $10.000 e a posição máxima é 5%:
- Operação única máxima: **$500**
- Total de todas as posições: **$2.000–$3.000**

---

## 2. Proteção de Drawdown

Interrompe todas as operações quando as perdas ultrapassam seu limite.

### Configurações

| Configuração | Recomendado | Descrição |
|---|---|---|
| **Limite de perda diária** | 5–10% | Interrompe as operações pelo resto do dia |
| **Limite de perda semanal** | 15–20% | Interrompe as operações pelo resto da semana |
| **Limite de drawdown total** | 25–30% | Requer reativação manual |

### Comportamento

Quando acionado:
1. Todos os bots ativos são pausados
2. Novas ordens são rejeitadas
3. Posições existentes ainda podem ser gerenciadas/fechadas
4. Uma notificação aparece no Dashboard

> ℹ️ Você pode fechar posições manualmente durante um bloqueio de drawdown — apenas novas entradas são bloqueadas.

---

## 3. Timer de Cooldown

Evita operações em sequência rápida e decisões emocionais.

### Configurações

| Configuração | Recomendado | Descrição |
|---|---|---|
| **Intervalo mínimo** | 30–120 segundos | Tempo entre a colocação de ordens |
| **Cooldown após perda** | 5–15 minutos | Espera extra após uma operação perdedora |
| **Cooldown por símbolo** | 60 segundos | Atraso para reentrada no mesmo símbolo |

---

## 4. Limites Diários de Operações

Limita o número de operações por dia.

| Configuração | Recomendado | Descrição |
|---|---|---|
| **Máximo de operações por dia** | 10–20 | Total de ordens (todos os símbolos) |
| **Máximo de operações por símbolo** | 5 | Ordens por par de trading |

Reseta à meia-noite UTC.

---

## Início Rápido: Perfis de Risco Recomendados

### Iniciante (Demo / Primeira Live)

```
Posição máxima: 2% do saldo
Exposição total: 20%
Alavancagem máxima: 1x
Limite de perda diária: 5%
Cooldown: 120 segundos
Máximo de operações/dia: 10
```

### Live Conservador

```
Posição máxima: 3% do saldo
Exposição total: 25%
Alavancagem máxima: 2x
Limite de perda diária: 8%
Cooldown: 60 segundos
Máximo de operações/dia: 15
```

### Experiente

```
Posição máxima: 5% do saldo
Exposição total: 40%
Alavancagem máxima: 5x
Limite de perda diária: 12%
Cooldown: 30 segundos
Máximo de operações/dia: 30
```

---

## Emergência: Parada Global

Se você precisar parar tudo imediatamente:

1. Vá em **Risco** na barra lateral
2. Clique em **Parada de Emergência**
3. Isso:
   - Pausa todos os bots
   - Cancela todas as ordens pendentes
   - Rejeita novas entradas
   - NÃO fecha posições existentes (você decide)

---

## Monitoramento

O Dashboard mostra seu status de risco rapidamente:

- **Verde** — Tudo dentro dos limites
- **Amarelo** — Aproximando-se de um limite
- **Vermelho** — Um limite foi acionado

---

## Perguntas Comuns

**P: Posso sobrepor os controles de risco para uma operação específica?**
Os controles de risco são aplicados globalmente. Você pode ajustar os parâmetros na página de Risco antes de operar.

**P: O que acontece se meu saldo mudar?**
Os limites de tamanho de posição se ajustam automaticamente ao seu saldo atual.

**P: Os controles de risco funcionam com bots automatizados?**
Sim — as quatro camadas se aplicam tanto ao trading manual quanto ao automatizado, em todos os mercados conectados.

**P: Posso desativar os controles de risco?**
Os controles de risco podem ser ajustados, mas recomendamos fortemente mantê-los ativos. Eles são sua principal rede de segurança.

---

## Leitura complementar

- [Por Que a Maioria dos Bots de Trading Falha no Gerenciamento de Risco →](/docs/why-bots-fail-risk-management) — as quatro formas como bots perdem dinheiro, e como cada uma é evitada
- [Como Reduzir o Drawdown no Trading →](/docs/how-to-reduce-drawdown) — um passo a passo prático das configurações exatas acima
- [Como Interpretar a Performance de Trading com Responsabilidade →](/docs/how-to-read-trading-performance) — julgue um resultado pelo drawdown, não pelo retorno de destaque

---

## Próximo passo

> **[Conectar uma Corretora →](/brokers/bybit)**
