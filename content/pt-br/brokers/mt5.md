---
title: "Conectar o MT5 ao WolfBot Community — Passo a Passo"
description: "O WolfBot Community inclui MT5 — opere Forex, Ouro, Índices e Ações/CFDs no Windows ou Linux, sem precisar de uma máquina Windows separada. Guia de conexão passo a passo."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["automação mt5", "bot de trading mt5", "bot mt5 self hosted", "automação metatrader 5", "automação trading de ouro", "mt5 no linux"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "brokers/mt5"
---

# Conectar o MT5 ao WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-15

**Status de suporte ao MT5:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅ · Windows ✅ · Linux ✅

## O MT5 já vem integrado

Forex, Ouro, Índices, Ações/CFDs — os mercados MT5 fazem parte do WolfBot Community desde a instalação, bem ao lado das suas contas de cripto no mesmo dashboard. Funciona da mesma forma no Windows e no Linux, e você nunca precisa de uma máquina Windows separada para operar no MT5.

- **No Windows**, o WolfBot se conecta ao aplicativo MetaTrader 5 que você já usa.
- **No Linux**, o WolfBot abre o MT5 para você dentro do seu próprio navegador — nada extra para instalar.

## Para quem é este guia

Traders de MT5 que querem automatizar suas operações com o WolfBot Community — sua plataforma unificada para mercados de cripto e tradicionais, no sistema operacional que você já usa.

## O que você precisa

- WolfBot Community instalado
- Uma conta em corretora MT5 (Demo ou Live)
- No Windows: [MetaTrader 5](https://www.metatrader5.com/en/download) instalado
- 15 minutos

## Conectar o MT5

1. Abra o WolfBot Community
2. Vá em **Contas em Exchanges → Adicionar Conta → MT5**
3. Faça login na sua conta da corretora (Demo ou Live)
   - **Windows:** isso acontece no seu aplicativo MetaTrader 5
   - **Linux:** isso acontece diretamente dentro da janela do navegador do WolfBot — apenas na primeira vez, há uma rápida etapa única de configuração (veja [Para Usuários Técnicos](#for-technical-users) abaixo)
4. O WolfBot detecta seus símbolos disponíveis automaticamente
5. Comece a operar — Terminal Inteligente, Bots e Controles de Risco funcionam exatamente da mesma forma que com suas contas de cripto

> ⚠️ O MT5 precisa estar conectado (logado) para que o WolfBot possa operar através dele.

## Teste a Conexão

1. No WolfBot: Terminal Inteligente → selecione MT5
2. Os símbolos disponíveis devem aparecer vindos do MT5
3. Faça primeiro uma pequena ordem de teste na sua conta Demo
4. Mude para sua conta MT5 Live e faça uma ordem de tamanho mínimo
5. Verifique se a ordem aparece no MT5
6. Cancele a ordem de teste

## O Que Você Pode Operar

O MT5 cobre praticamente todas as classes de ativos — o WolfBot opera o que quer que a conta MT5 da sua corretora ofereça, não uma lista fixa:

- **Forex** — EUR/USD, GBP/USD, USD/JPY e mais de 50 outros pares
- **Metais** — Ouro (XAU/USD), Prata (XAG/USD), muitas vezes também Platina e Paládio
- **Energéticos** — Petróleo Bruto, Gás Natural (depende da corretora)
- **Índices** — US30, NAS100, S&P 500, DAX e mais
- **Ações/CFDs** — ações de empresas individuais, muitas vezes milhares de símbolos (depende da corretora)
- **Commodities agrícolas** — Trigo, Milho, Café, Açúcar e outros (depende da corretora)
- **CFDs de cripto** — quando oferecidos pela sua corretora

> A disponibilidade exata dos instrumentos depende da sua corretora MT5, não do WolfBot — confira o **Market Watch** no seu terminal MT5 para a lista completa de símbolos que sua conta pode operar.

## MT5 para Trading de Ouro

Ouro (XAU/USD) é um dos instrumentos MT5 mais populares para automação:

1. Conecte sua corretora MT5 com XAU/USD
2. No WolfBot: Terminal Inteligente → XAU/USD
3. Configure o risco (o ouro é volátil — comece com posições pequenas)
4. Teste em uma conta Demo antes de operar ao vivo

## Problemas Comuns

| Problema | Solução |
|---|---|
| MT5 não conecta | Certifique-se de estar logado na sua conta da corretora no MT5, depois tente novamente |
| "Symbol not available" (símbolo não disponível) | Verifique os instrumentos disponíveis na sua corretora |
| "Automated trading disabled" (trading automatizado desativado) | No MT5: Ferramentas → Opções → Expert Advisors → Permitir Trading Automatizado |
| "Order rejected by broker" (ordem rejeitada pela corretora) | Verifique o tamanho mínimo do lote e o horário de negociação |

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)** — especialmente importante para instrumentos MT5 voláteis

---

## Para Usuários Técnicos

Os detalhes abaixo são para quem quer entender exatamente como funciona a ponte (bridge) do MT5, ou prefere fazer a etapa de configuração do Linux pelo terminal. Nada disso é leitura obrigatória para usar o MT5 no WolfBot — veja [Conectar o MT5](#connect-mt5) acima para o fluxo normal.

### Como funciona a ponte

**Windows** — o MT5 roda como seu próprio aplicativo nativo; o WolfBot se conecta a ele diretamente:

```text
WolfBot Community → Ponte MT5 (local) → Terminal MetaTrader 5 (sua instalação) → Servidor da Corretora MT5
```

**Linux** — o WolfBot roda o próprio terminal MT5 dentro de um container, e te dá uma janela de navegador para acessá-lo (VNC):

```text
WolfBot Community → Container Ponte MT5 (Terminal + VNC + RPyC) → Janela do navegador → Servidor da Corretora MT5
```

De qualquer forma, a ponte só conversa com sua corretora *através* do MT5 — o WolfBot nunca se conecta diretamente à sua corretora.

### Linux: configuração única pelo terminal

O container MT5 do WolfBot não é iniciado pela instalação básica (nem todo usuário do Community opera no MT5), então na primeira vez, inicie-o com:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

Depois abra **`http://127.0.0.1:8090/mt5-vnc/`** no seu navegador (senha `wolfbot`, ou o que você definiu via `MT5_VNC_PASSWORD`) e faça login na sua corretora ali — essa é a mesma janela de navegador que o fluxo MT5 do WolfBot usará depois. O acesso fica sempre disponível e sem restrições, já que esta é sua própria máquina, não uma instância Cloud compartilhada.

### Windows: referência de configuração da ponte

| Configuração | Valor |
|---|---|
| Caminho de Instalação do MT5 | Detectado automaticamente (geralmente `C:\Program Files\MetaTrader 5`) |
| Tipo de Conta | Demo ou Live |
| Mapeamento de Símbolos | Configurado automaticamente |

### Requisitos

- O MT5 precisa estar em execução durante as operações (nativo no Windows, ou o container da ponte no Linux)
- O Trading Automatizado (Algo Trading) precisa estar habilitado no MT5
- Sua máquina precisa permanecer ligada (ou use uma VPS — Windows ou Linux funcionam)
- Ainda não suportado: múltiplas instâncias do MT5 ao mesmo tempo, alguns símbolos exóticos específicos de corretoras

### Solução de problemas técnicos

| Problema | Solução |
|---|---|
| "MT5 not detected" (MT5 não detectado, Windows) | Verifique o caminho de instalação; reinicie o MT5 |
| A página VNC não carrega (Linux) | Confirme se o container MT5 está em execução: `docker compose ... ps` — pode levar um minuto na primeira inicialização |
| "Bridge connection failed" (falha na conexão da ponte) | Certifique-se de que o MT5 está em execução e logado — nativo no Windows, ou a sessão do navegador no Linux |

### Rodando o MT5 24/7

- **Windows:** use uma VPS Windows, instale o MT5 + WolfBot Community, habilite o login automático no MT5, configure o Windows para iniciar o WolfBot automaticamente
- **Linux:** use uma VPS Linux rodando o WolfBot Community com o container MT5 habilitado — ele permanece logado e continua rodando da mesma forma que qualquer outro serviço do WolfBot, sem necessidade de script de login automático
