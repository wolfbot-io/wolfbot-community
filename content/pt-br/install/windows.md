---
title: "Instalar o WolfBot Community no Windows — Passo a Passo"
description: "Como instalar o WolfBot Community no Windows 10 ou Windows 11. Baixe o Setup.exe, instale em minutos e comece a operar em mercados de cripto e MT5."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "instalar wolfbot windows",
  "wolfbot community configuração windows",
  "bot de trading de cripto windows",
  "bot de trading windows 11",
  "plataforma de trading windows"
]
os_tested: ["Windows 11 23H2", "Windows 10 22H2"]
sitemap_priority: 0.9
lang: "pt-BR"
translation_of: "install/windows"
---

# Instalar o WolfBot Community no Windows

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-15 · Windows 11 / Windows 10

> ℹ️ **Disponibilidade:** o primeiro lançamento público (v0.1.0-p12-ghcr-rc19) traz o instalador para Linux. O instalador para Windows está documentado aqui antes do seu lançamento futuro — confira a [página de download](/download) para o status atual, e este guia vai te orientar assim que ele estiver disponível.

## Para quem é este guia

Este guia é para quem deseja instalar o WolfBot Community em um computador com Windows 10 ou Windows 11. Não é necessário nenhum conhecimento de programação ou Docker. Após a instalação, você terá uma plataforma de trading unificada para exchanges de cripto e corretoras MT5 — uma interface, todos os mercados.

## O que você precisa

- Windows 10 (22H2 ou superior) ou Windows 11 (23H2 ou superior), 64 bits
- Pelo menos 4 GB de RAM livre
- Pelo menos 2 GB de espaço livre em disco
- Conexão com a internet
- Acesso de administrador para instalar o software

> ⚠️ **Aviso sobre antivírus:** Alguns antivírus podem sinalizar softwares novos. Os instaladores do WolfBot Community são seguros — são builds oficiais da WolfBot.io. Se o seu antivírus bloquear o instalador, adicione uma exceção ou desative-o temporariamente.

## Passo 1: Download

1. Acesse [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Clique em **Download for Windows**
3. O arquivo `WolfBot-Setup-{version}-windows-x64.exe` será baixado

## Passo 2: Instalação

1. Dê duplo clique no arquivo baixado `WolfBot-Setup-*.exe`
2. Se o Windows SmartScreen aparecer, clique em **Mais informações** → **Executar assim mesmo**
3. Siga o assistente de instalação: escolha a pasta → clique em **Instalar**
4. Aguarde a instalação terminar (normalmente 30–60 segundos)
5. Clique em **Concluir**

## Passo 3: Inicie o WolfBot

1. Dê duplo clique no ícone do **WolfBot** na área de trabalho (ou no menu Iniciar)
2. O WolfBot abre no Dashboard — nenhuma conta em exchange está conectada ainda, então não há nada para configurar antes de você explorar

## Resultado esperado

- Ícone do WolfBot na bandeja do sistema
- A janela do Dashboard abre
- A página de Status de Capacidades do Dashboard mostra quais corretoras você pode conectar

## Erros comuns

| Erro | Solução |
|---|---|
| "O Windows protegeu seu PC" | Clique em "Mais informações" → "Executar assim mesmo" |
| O instalador não inicia | Clique com o botão direito → "Executar como administrador" |
| Antivírus colocou em quarentena | Adicione `C:\Program Files\WolfBot` às exclusões |
| Erro de "DLL ausente" | Instale o [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) — um componente oficial, pequeno e gratuito da Microsoft, necessário para muitos apps Windows; seguro de instalar |

## Solução de problemas

- **WB-WIN-001:** Espaço em disco insuficiente → Libere 2 GB
- **WB-WIN-002:** Permissão negada → Execute como administrador
- **WB-WIN-003:** Download corrompido → Baixe novamente, verifique o checksum
- **WB-WIN-004:** Dependências ausentes → Instale o VC++ Redist

Veja o [Guia de Solução de Problemas](/docs/troubleshooting).

## Avançado: verifique seu download (opcional)

Se quiser confirmar que o arquivo não foi corrompido ou adulterado, abra o PowerShell e execute:

```powershell
Get-FileHash .\WolfBot-Setup-*.exe -Algorithm SHA256
```

Compare o resultado com o checksum SHA256 exibido na
[página de download](https://community.wolfbot.io/download). Esta etapa é
opcional — a maioria das pessoas pode pular.

## Próximo passo

> **[Comece com a Simulação →](/docs/simulation)**
