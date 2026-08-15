---
title: "Conectar a Bybit ao WolfBot Community — Passo a Passo"
description: "Conecte a Bybit ao WolfBot Community — crie chaves de API somente-negociação e comece a operar automaticamente em Spot, Futuros e Demo."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "bot de trading bybit",
  "bot self hosted bybit",
  "automação de trading api bybit",
  "conectar bybit ao wolfbot",
  "trading unificado bybit"
]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "brokers/bybit"
---

# Conectar a Bybit ao WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-15

**Status de suporte à Bybit:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅

## Para quem é este guia

Para quem deseja conectar uma conta Bybit (Demo ou Live) ao WolfBot Community para trading automatizado.

## O que você precisa

- Uma conta Bybit ([cadastre-se](https://partner.bybit.com/b/WOLFBOT))
- WolfBot Community instalado e em execução
- 5 minutos

---

## Passo 1: Criar uma Chave de API da Bybit

### Para Demo (Testnet)

1. Acesse [testnet.bybit.com](https://testnet.bybit.com) e faça login
2. Navegue até **Conta e Segurança → Gerenciamento de API**
3. Clique em **Criar Nova Chave**
4. Selecione **Chave de API Gerada pelo Sistema**
5. Configure as permissões:
   - ✅ **Trade** (Leitura e Escrita)
   - ❌ **Saque** (desativado)
   - ❌ **Transferência** (desativado)
6. (Opcional) Vincule um endereço IP para segurança extra
7. Clique em **Confirmar**
8. **Copie e salve** sua API Key e Secret Key

### Para Trading Live

1. Acesse [bybit.com](https://partner.bybit.com/b/WOLFBOT) e faça login
2. Navegue até **Conta e Segurança → Gerenciamento de API**
3. Siga os mesmos passos da Demo — sempre desative Saque e Transferência

> ⚠️ **Crítico:** Nunca habilite as permissões de Saque ou Transferência. O WolfBot só precisa da permissão de Trade.

---

## Passo 2: Adicionar a Conta Bybit no WolfBot

1. Abra o WolfBot Community
2. Vá em **Contas em Exchanges → Adicionar Conta**
3. Selecione **Bybit** na lista de corretoras
4. Escolha o tipo de conta: **Demo** ou **Live**
5. Insira sua API Key e Secret Key
6. Clique em **Testar Conexão**

O WolfBot vai verificar:
- Se a API key é válida
- Se as permissões estão corretas
- A conectividade de rede

---

## Passo 3: Teste a Conexão

Após a conexão ser bem-sucedida:

1. Vá em **Terminal Inteligente**
2. Selecione um par de trading da Bybit (ex.: BTC/USDT)
3. Certifique-se de que o modo é **Simulação** (para o primeiro teste)
4. Faça uma pequena ordem simulada
5. Verifique se a ordem aparece em Posições

Depois mude para **Live** (Demo ou Real):
1. Comece com o tamanho mínimo de posição
2. Faça uma pequena ordem limitada
3. Verifique na Bybit se a ordem aparece
4. Cancele a ordem de teste

---

## Passo 4: Configurar Ajustes

Configurações recomendadas para a Bybit:

| Ajuste | Demo | Live |
|---|---|---|
| Modo | Simulação primeiro, depois Live | Comece pequeno |
| Tamanho da Posição | Qualquer | Mínimo |
| Alavancagem Máxima | Qualquer | Comece com 1x |
| TP/SL | Habilitado | Habilitado |
| Modo Hedge | Opcional | Opcional |

---

## Resultado Esperado

Após a configuração bem-sucedida:
- **Contas em Exchanges** mostra a Bybit como "Conectada"
- O Terminal Inteligente mostra seu saldo na Bybit
- Você pode fazer ordens que aparecem na Bybit

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| "API key invalid" (chave inválida) | Verifique se a chave não expirou; gere uma nova se necessário |
| "Permission denied" (permissão negada) | Verifique se a permissão Trade está habilitada e o Saque desativado |
| "Connection timeout" (tempo de conexão esgotado) | Verifique o firewall/rede; confirme que a Bybit não está geo-restrita na sua região |
| "IP restriction" (restrição de IP) | Se vinculado a um IP, confirme que o IP da sua máquina corresponde à restrição da chave de API |
| "Insufficient balance" (saldo insuficiente) | Para Live: deposite fundos; para Demo: solicite fundos de testnet |

---

## Notas Específicas da Bybit

- **Modo Hedge:** Suportado. Habilite primeiro nas configurações da conta Bybit, depois no WolfBot.
- **Modo de Posição:** Tanto o modo Unidirecional quanto o modo Hedge são suportados.
- **Tipos de Ordem:** Market, Limit, TP/SL e DCA são todos suportados.
- **Limites de Taxa:** O WolfBot respeita automaticamente os limites de taxa da Bybit.

---

## Solução de Problemas

Para problemas persistentes:
1. Verifique o [Status do Sistema da API da Bybit](https://bybit-exchange.github.io/docs/v5/system-status)
2. Confirme as permissões da API key na Bybit
3. Gere uma nova API key e adicione novamente no WolfBot
4. Verifique os logs do WolfBot: `wolfbot logs` (Linux) ou `C:\Program Files\WolfBot\logs\` (Windows)

---

## Próximos Passos

> **[Configurar Controles de Risco →](/docs/risk-controls)** ou **[Conectar a Binance →](/brokers/binance)**
