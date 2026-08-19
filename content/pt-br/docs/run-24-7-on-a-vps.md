---
title: "Rode o WolfBot Community 24/7 em uma VPS — Trading Self-Hosted no Seu Próprio Servidor"
description: "Rode o WolfBot Community o tempo todo em uma VPS Ubuntu. Instale o .deb, mantenha seu dashboard privado com um túnel SSH, faça backup no servidor, e opere de forma não-custodial."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "intermediate"
estimated_time: "15 minutes"
next_guide: "/getting-started"
related_guides: ["/install/linux", "/docs/backup", "/docs/updates", "/security"]
keywords: [
  "bot de trading self hosted",
  "bot de trading no meu próprio servidor",
  "rodar bot de trading 24/7",
  "wolfbot vps",
  "servidor bot de cripto",
  "vps bot de trading linux"
]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "docs/run-24-7-on-a-vps"
---

# Rode o WolfBot Community 24/7 em uma VPS

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc17** · Última atualização: 2026-08-15 · Ubuntu 22.04 / 24.04

## Para quem é este guia

Dois tipos de leitores encontram valor aqui:

- **Se você só quer que seus bots rodem o tempo todo** — para nunca perder uma operação enquanto seu computador está desligado — siga os passos abaixo na ordem. Todo comando é copiar e colar, e você não precisa entender os detalhes técnicos para obter o resultado.
- **Se você tem familiaridade com servidores** e quer saber *por que* cada passo é feito dessa forma (dashboard apenas em loopback, túnel SSH), as notas explicam o raciocínio sem atrapalhar seu fluxo.

Resumindo: este guia coloca seu WolfBot Community em um pequeno servidor Linux sempre ativo (uma VPS), para que ele continue operando durante a noite — suas estratégias, configurações e contas permanecem exatamente como você as deixou, e seus bots continuam funcionando mesmo com seu computador pessoal desligado.

## O que você precisa

- Uma VPS Ubuntu 22.04 LTS ou 24.04 LTS (qualquer provedor conhecido funciona — Hetzner, DigitalOcean, Vultr, Linode, AWS Lightsail, etc.)
- Pelo menos 4 GB de RAM e 4 GB de espaço em disco
- Capacidade de abrir um terminal e conectar via SSH ao seu servidor
- 15 minutos

> ℹ️ O WolfBot Community roda em Docker. O instalador configura o Docker para você automaticamente, exatamente como em uma instalação Linux de desktop.

## Passo 1: Obtenha sua VPS e conecte-se

1. Crie um servidor Ubuntu 22.04/24.04 com pelo menos 4 GB de RAM
2. Conecte-se via SSH (a maioria dos provedores te dá esse comando na própria página):

```bash
ssh your-user@your-server-ip
```

## Passo 2: Instale o WolfBot Community (igual ao desktop)

Siga exatamente o [guia de instalação Linux](/install/linux) — os passos são idênticos em um servidor:

1. Baixe o `.deb` em [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Instale-o (em um servidor sem interface gráfica, você usará a forma via terminal):

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

3. Inicie o WolfBot e verifique se está saudável:

```bash
wolfbot start
wolfbot status
```

## Passo 3: Acesse o dashboard com segurança (túnel SSH)

O WolfBot Community vincula seu dashboard **apenas ao endereço de loopback (127.0.0.1)** do seu servidor — isso é intencional: significa que o dashboard de trading nunca fica exposto à internet pública por padrão. No seu próprio computador em casa, o navegador o abre diretamente. Em uma VPS, você o acessa por meio de um túnel SSH criptografado:

```bash
ssh -L 8080:127.0.0.1:8080 your-user@your-server-ip
```

Depois abra **http://localhost:8080** no seu navegador. O túnel encaminha sua porta local 8080 para o dashboard no servidor, via SSH — nenhuma porta aberta, nenhuma URL pública, nada para configurar no firewall.

> 🔎 **Para leitores técnicos:** os serviços do WolfBot Community se vinculam a `127.0.0.1` (loopback) por design — control-api na `8765`, gateway na `8766`, e o dashboard na `8080`. Apenas loopback significa que a superfície de trading nunca fica acessível pela internet, então um túnel SSH é a forma correta (e mais simples) de acessá-lo remotamente, em vez de expor uma porta pública.

> ⚠️ **Não** exponha o dashboard à internet pública. Mantenha-o em loopback e use o túnel SSH. O dashboard controla trading real, então deve permanecer privado.

## Passo 4: Faça backup no servidor

Sua VPS é onde sua configuração agora vive, então faça backup lá:

```bash
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Depois copie o arquivo para fora do servidor para guardá-lo com segurança. Veja o [guia de Backup e Restauração](/docs/backup) para o fluxo completo.

## Passo 5: Mantenha-o atualizado

No servidor, as atualizações rodam pelo atualizador assinado:

```bash
/opt/wolfbot/launcher/wolfbot-updater.sh check
```

Veja o [guia de Atualização](/docs/updates) para os passos de aplicar/reverter.

## Resultado Esperado

- O WolfBot Community roda em Docker na sua VPS, independente do seu PC
- Você acessa o dashboard por um túnel SSH (apenas loopback, sem porta pública)
- Os bots continuam operando e as estratégias continuam rodando enquanto seu computador está desligado

## Erros Comuns

| Erro | Solução |
|---|---|
| Expor o dashboard à internet pública | Não faça isso — use o túnel SSH, mantenha-o apenas em loopback |
| Esquecer de fazer backup no servidor | Rode `wolfbot backup ... --execute`, depois copie o arquivo para fora do servidor |
| O servidor reinicia e o WolfBot não está rodando | Use `wolfbot status` para confirmar; `wolfbot start` se necessário |
| O túnel cai quando seu notebook hiberna | Rode novamente o comando `ssh -L ...`; é uma reconexão normal |

## Solução de Problemas

- **Não consigo acessar localhost:8080 pelo túnel** — confirme que o comando do túnel ainda está em execução e que `wolfbot status` mostra os serviços saudáveis.
- **Conexão SSH recusada** — verifique se o firewall da sua VPS permite SSH (porta 22) e se você está usando o usuário/IP corretos.
- Outros problemas — veja o [guia completo de Solução de Problemas](/docs/troubleshooting).

## Próximo passo

> **[Primeiros Passos →](/getting-started)** — conecte uma conta Demo primeiro e opere com risco zero antes de ir para live.
