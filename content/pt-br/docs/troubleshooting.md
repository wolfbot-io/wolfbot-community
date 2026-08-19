---
title: "Solução de Problemas do WolfBot Community — Problemas Comuns e Soluções"
description: "Resolva problemas comuns do WolfBot Community. Erros de instalação, problemas de conexão com mercados, falhas de atualização e códigos de erro."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "5 minutes"
related_guides: ["/install/windows", "/install/linux", "/docs/updates", "/brokers/api-key-guide"]
keywords: ["solução de problemas wolfbot", "códigos de erro wolfbot", "corrigir wolfbot", "erro de instalação wolfbot", "problema de conexão wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/troubleshooting"
---

# Guia de Solução de Problemas

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-15

## Diagnóstico Rápido

Execute a ferramenta de diagnóstico integrada pelo terminal (Prompt de Comando/PowerShell no Windows, um terminal comum no Linux), a partir da sua pasta de instalação do WolfBot:

```bash
wolfbot doctor
```

Ela é somente leitura — verifica a integridade da instalação, o status dos serviços, e as conexões de rede e de corretoras sem alterar nada.

---

## Erros de Instalação

### WB-WIN-001 — Espaço em Disco Insuficiente
**Sintoma:** O instalador falha com "Not enough disk space" (espaço insuficiente)

**Solução:** Libere pelo menos 2 GB. Verifique o espaço no drive `C:`.

### WB-WIN-002 — Permissão Negada
**Sintoma:** "Access denied" (acesso negado) durante a instalação

**Solução:** Clique com o botão direito no instalador → **Executar como Administrador**

### WB-WIN-003 — Download Corrompido
**Sintoma:** O instalador não inicia ou falha na verificação de integridade

**Solução:** Baixe novamente pelo [community.wolfbot.io/download](https://community.wolfbot.io/download). Verifique o checksum SHA256.

### WB-WIN-004 — Dependências Ausentes
**Sintoma:** "VCRUNTIME140.dll not found" (DLL não encontrada)

**Solução:** Instale o [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)

### WB-LNX-001 — Docker Não Encontrado
**Sintoma:** "Docker is not installed" (Docker não está instalado)

**Solução:** Execute `sudo apt-get install docker.io` ou rode novamente o instalador, que cuida disso automaticamente.

### WB-LNX-002 — Conflito de Porta
**Sintoma:** "Port 8765 already in use" (porta 8765 já em uso)

**Solução:** Execute `sudo lsof -i :8765` → pare o serviço conflitante → reinicie o WolfBot

---

## Problemas de Conexão

### Falha na Conexão com a Corretora
1. Verifique se a chave de API ainda é válida (não expirou)
2. Confira as permissões da API: Trade ✅, Saque ❌
3. Se houver restrição de IP: confirme que seu IP corresponde
4. Verifique a página de status da API da exchange
5. Para MT5: certifique-se de que o terminal MT5 está em execução e logado
6. Gere uma nova chave e adicione novamente

### "Connection Refused" (conexão recusada)
- Verifique sua conexão com a internet
- Confirme que a exchange não está bloqueada geograficamente na sua região
- Tente com VPN, se necessário

### "Rate Limit Exceeded" (limite de taxa excedido)
O WolfBot trata isso automaticamente. Se persistir, reduza a frequência do bot.

---

## Problemas de Atualização

| Problema | Solução |
|---|---|
| A verificação de atualização falha | Verifique a internet; o firewall pode estar bloqueando o servidor de atualização |
| A verificação de assinatura falha | Baixe manualmente pela [página de download](/download) |
| Atualização travada | Reinicie o WolfBot e tente novamente |
| Após a atualização, o WolfBot não inicia | Linux: `wolfbot-updater.sh rollback`. Windows: reinstale o Setup.exe da versão anterior — veja o [Guia de Atualização](/docs/updates) |

---

## Problemas de Performance

### Uso Alto de CPU
- Reduza o número de pares de trading ativos
- Aumente o intervalo do bot (ex.: de 5 min para 15 min)
- Feche abas do Dashboard não utilizadas

### Uso Alto de Memória
- Reinicie o WolfBot (pode haver vazamento de memória se estiver rodando há mais de 7 dias)
- Reduza o número de estratégias simultâneas

### Dashboard Lento
- Use um navegador moderno (Chrome, Edge, Firefox)
- Limpe o cache do navegador
- Reduza os widgets do Dashboard

---

## Dados e Configuração

### Configuração Perdida
1. Se você tiver um arquivo de backup, restaure-o — veja o [Guia de Backup e Restauração](/docs/backup)
2. Se não: reconfigure manualmente

### Corrupção no Banco de Dados
```bash
wolfbot repair
```
Este é um comando de reparo dedicado e de bloqueio padrão (fail-closed) — ele nunca repara automaticamente sem você executá-lo, e não mexe em nada de que não tenha certeza.

---

## Logs

Encontre logs detalhados para depuração:

**Windows:** `C:\Program Files\WolfBot\logs\`

**Linux:** `~/.wolfbot/logs/` ou execute `wolfbot logs`

Ao reportar problemas no [GitHub](https://github.com/wolfbot-io/wolfbot-community/issues), anexe trechos relevantes dos logs (oculte as chaves de API).

---

## Ainda com Problemas?

1. Pesquise no [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
2. Verifique as [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues)
3. Abra uma [nova issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) com:
   - Versão do WolfBot
   - Sistema operacional e versão
   - Código ou mensagem de erro
   - Passos para reproduzir

> ⚠️ Nunca compartilhe chaves de API, secret keys ou senhas.
