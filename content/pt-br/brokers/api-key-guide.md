---
title: "Guia de Chave de API Somente-Negociação — Melhores Práticas de Segurança"
description: "Como criar chaves de API seguras somente-negociação para o WolfBot Community. Nunca habilite permissões de saque. Guia para Binance, Bybit, BingX, KuCoin, Bitget."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: [
  "chave de api somente negociação",
  "segurança de chave de api bot de trading",
  "bot de trading não custodial",
  "configuração segura de chave de api",
  "permissões de api do wolfbot"
]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "brokers/api-key-guide"
---

# Guia de Chave de API Somente-Negociação

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-15

## Por Que Somente-Negociação?

O WolfBot Community é **não-custodial** — ele nunca detém seus fundos. Ele se conecta às exchanges por meio de chaves de API que você controla. Você pode revogar essas chaves a qualquer momento.

**A regra de ouro:** Nunca habilite as permissões de Saque ou Transferência em nenhuma chave de API usada com software de trading. Veja [Chaves de API Somente-Negociação Explicadas →](/docs/trade-only-api-keys-explained) para entender por que essa configuração importa mais do que qualquer outra.

## Permissões Necessárias

O WolfBot só precisa destas permissões:

| Permissão | Necessária | Por quê |
|---|---|---|
| **Trade** (Leitura e Escrita) | ✅ Sim | Fazer/cancelar ordens, verificar posições |
| **Leitura** (Somente Leitura) | ✅ Sim | Ler saldo, posições, histórico de ordens |
| **Saque** | ❌ NUNCA | O WolfBot não faz saques de fundos |
| **Transferência** | ❌ NUNCA | O WolfBot não transfere entre contas |

Se a exchange oferecer permissões granulares, desative também:
- ❌ **Saque**
- ❌ **Transferência Interna**
- ❌ **Transferência entre Sub-contas**
- ❌ Gerenciamento de **Earn/Staking**

## Por Exchange

### Binance
1. Gerenciamento de API → Criar API
2. Habilitar: **Habilitar Trading Spot e Margem**
3. Desabilitar: **Habilitar Saques**
4. (Recomendado) Restringir a IPs confiáveis

### Bybit
1. Gerenciamento de API → Criar Nova Chave
2. Habilitar: permissão **Trade**
3. Desabilitar: **Saque**, **Transferência**
4. (Recomendado) Vincular endereço IP

### BingX
1. Gerenciamento de API → Criar Chave de API
2. Habilitar: **Trade**
3. Desabilitar: **Saque**
4. (Recomendado) Restringir acesso por IP

### KuCoin
1. Gerenciamento de API → Criar API
2. Habilitar: **Trade** em Trading Spot
3. Desabilitar: **Saque**, **Transferência**
4. Defina uma passphrase (obrigatória na KuCoin)

### Bitget
1. Gerenciamento de API → Criar Chave de API
2. Habilitar: **Trade**
3. Desabilitar: **Saque**
4. (Recomendado) Vincular IP

## Dicas Adicionais de Segurança

### Vinculação de IP (Recomendado)
Onde suportado, vincule as chaves de API ao endereço IP da sua máquina:
- Impede o uso a partir de outros locais
- Atualize quando seu IP mudar
- Use um IP estático ou uma VPS para operação 24/7

### Chaves Separadas por Serviço
- Uma chave de API para o WolfBot Community
- Chaves diferentes para apps de acompanhamento de portfólio
- Facilita revogar integrações individuais

### Auditorias Regulares
- Revise as chaves de API mensalmente
- Exclua chaves não utilizadas
- Regenere as chaves periodicamente

### Armazenamento de Chaves
- Armazene os secrets da API com segurança (o WolfBot os criptografa localmente)
- Nunca compartilhe chaves em capturas de tela ou mensagens de suporte
- Não armazene chaves em notas na nuvem ou e-mail

---

## O Que Fazer se uma Chave for Comprometida?

1. **Imediatamente** exclua a chave de API na exchange
2. Verifique sua conta em busca de atividade não autorizada
3. Crie uma nova chave somente-negociação
4. Atualize o WolfBot com a nova chave

Como o saque está desativado, uma chave somente-negociação comprometida não consegue roubar fundos — mas pode fazer ordens indesejadas. Sempre aja rapidamente.

---

## Próximos Passos

> **[Conectar a Bybit →](/brokers/bybit)** ou **[Visão Geral de Segurança →](/security)**
