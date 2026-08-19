---
title: "Instalar o WolfBot Community no Ubuntu/Linux — Passo a Passo"
description: "Como instalar o WolfBot Community no Ubuntu 22.04, Ubuntu 24.04 ou Debian 12. Baixe o pacote .deb e comece a operar em mercados de cripto e MT5 — sem necessidade de linha de comando."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "instalar wolfbot linux",
  "wolfbot community ubuntu",
  "bot de cripto ubuntu",
  "bot de trading linux",
  "plataforma de trading unificada linux",
  "trading self hosted linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
lang: "pt-BR"
translation_of: "install/linux"
---

# Instalar o WolfBot Community no Ubuntu/Linux

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-15 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## Para quem é este guia

Para quem deseja instalar o WolfBot Community no Ubuntu ou Debian — **você não precisa saber usar o terminal nem o Docker.** Tudo abaixo usa a mesma instalação por duplo clique que você usaria para qualquer outro aplicativo; uma alternativa via linha de comando está incluída mais adiante para quem preferir.

## O que você precisa

- Ubuntu 22.04 LTS, Ubuntu 24.04 LTS ou Debian 12 (64 bits)
- Pelo menos 4 GB de RAM, 4 GB de espaço livre em disco
- Conexão com a internet
- Sua senha de usuário (será solicitada uma vez, para permitir a instalação
  — isso é completamente normal, todo instalador de app no Linux pede isso)

> ℹ️ O WolfBot precisa do Docker para funcionar. Se ainda não estiver instalado, o instalador o instala automaticamente para você — nada para configurar manualmente.

## Passo 1: Download

1. Acesse [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Clique em **Download for Linux**
3. O arquivo `WolfBot-Setup-linux-amd64.deb` é baixado para sua pasta
   **Downloads**

## Passo 2: Instalação (duplo clique, como qualquer outro app)

1. Abra sua pasta **Downloads** e dê **duplo clique** em
   `WolfBot-Setup-linux-amd64.deb`
2. A janela do instalador de apps do seu sistema abrirá (geralmente chamada
   de "Software Install" ou "Package Installer")
3. Clique em **Instalar**
4. Digite sua senha quando solicitado, depois pressione Enter/clique em OK
5. Aguarde a conclusão — pode levar um ou dois minutos na primeira vez, já
   que também configura o Docker em segundo plano

Pronto — nenhum terminal é necessário.

> **Não abriu uma janela de instalação?** Algumas versões do Ubuntu abrem
> arquivos `.deb` em um visualizador de arquivos compactados em vez do
> instalador por padrão. Clique com o botão direito no arquivo →
> **Abrir com** → escolha **Software Install** (ou **GDebi Package
> Installer**, se disponível) → depois clique em **Instalar**.

## Passo 3: Inicie o WolfBot

1. Abra o menu **Aplicativos** (ou pressione a tecla Windows/Super e digite
   "WolfBot")
2. Clique no ícone do **WolfBot**
3. Seu navegador abre automaticamente no Dashboard do WolfBot

## Resultado esperado

- Um ícone do WolfBot aparece no seu menu de Aplicativos
- Clicar nele abre o Dashboard no seu navegador
- A página de Status de Capacidades do Dashboard mostra quais corretoras você pode conectar — comece com uma [conta Demo](/docs/simulation) para operar com risco zero

## Opere Forex, Ouro e Índices via MT5 — sem precisar de Windows

O WolfBot Community é uma **plataforma unificada**: exchanges de cripto e MT5 (Forex, Ouro, Índices, Ações/CFDs) em uma única interface, um único motor de risco, um único portfólio — inclusive no Linux, sem necessidade de uma máquina Windows ou VPS separada. O MT5 roda como um terminal real ao lado do restante do WolfBot, e você o controla pelo seu próprio navegador. Ative-o com um único comando — veja o [guia de conexão do MT5](/brokers/mt5) para os passos exatos.

## Erros comuns

| Erro | Solução |
|---|---|
| O duplo clique abre um arquivo compactado em vez de instalar | Clique com o botão direito no arquivo → Abrir com → Software Install |
| Prompt de "Autenticação necessária" | Isso é normal — digite sua senha de login habitual |
| Nada acontece depois de clicar em Instalar | Aguarde um minuto — a configuração do Docker roda em segundo plano na primeira vez |
| Não encontro o WolfBot depois de instalar | Faça logout e login novamente uma vez, ou procure "WolfBot" no menu de Aplicativos |

## Prefere a linha de comando?

Se você se sente à vontade com um terminal, isto faz o mesmo que os passos
acima:

```bash
cd ~/Downloads
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Usar `apt install ./file.deb` (em vez de `dpkg -i`) resolve automaticamente
qualquer dependência ausente em uma única etapa.

Comandos úteis após a instalação:

```bash
wolfbot status     # verifica os serviços
wolfbot start      # inicia o WolfBot
wolfbot open       # abre o Dashboard no seu navegador
wolfbot logs       # visualiza os logs
```

Endereço do Dashboard: `http://127.0.0.1:8765`

## Solução de problemas

- **Nada abre quando clico no ícone do WolfBot** — aguarde um minuto após
  uma instalação recém-feita (os containers Docker ainda estão iniciando),
  depois tente novamente.
- **"Porta em uso" ou o Dashboard não carrega** — outro programa no seu
  computador pode estar usando a porta 8765. Veja o [Guia de Solução de
  Problemas](/docs/troubleshooting) para saber como verificar.
- Ainda com problemas? Veja o [Guia de Solução de Problemas](/docs/troubleshooting)
  completo ou pergunte no [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Desinstalar

Abra a loja de aplicativos do seu sistema (por exemplo, **Ubuntu Software**),
pesquise por "WolfBot" e clique em **Remover** — da mesma forma que você
desinstalaria qualquer outro app instalado via arquivo `.deb`.

Ou pelo terminal:

```bash
sudo apt remove wolfbot-community
rm -rf ~/.wolfbot    # opcional: também exclui seus dados locais do WolfBot
```

## Próximo passo

> **[Comece com a Simulação →](/docs/simulation)**
