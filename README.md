# 🚨 Pix Antifraude – Confirmação de Recebimento para Contatos Desconhecidos.

Este projeto é um **sistema backend em Node.js** que simula um **mecanismo antifraude para Pix**, focado em **transferências enviadas para destinatários desconhecidos**.

A proposta é adicionar uma **camada de confirmação para o recebedor**, com **alerta legal**, antes que o valor seja efetivamente aceito.

---

## 🧠 Motivação

Atualmente, quando um Pix é enviado por engano, o valor entra automaticamente na conta do recebedor.  
Este projeto propõe um fluxo alternativo:

> Se o recebedor **não conhece o remetente**, o Pix **não é creditado automaticamente**.  
> O recebedor é alertado e decide se aceita ou recusa o valor.

Caso aceite um Pix enviado por engano, o sistema exibe um **alerta legal** referente ao **Art. 169 do Código Penal Brasileiro**.

---

## 🔄 Fluxo do Sistema

1. Pessoa A envia um Pix
2. Sistema verifica se a Pessoa A está na lista de contatos confiáveis da Pessoa B
3. Se **não estiver**:
   - O Pix fica **pendente**
   - Pessoa B recebe uma **notificação de alerta legal**
4. Pessoa B decide:
   - ✅ **Aceitar** → Pix é creditado
   - ❌ **Recusar** → Pix é devolvido
5. Todas as decisões ficam registradas no sistema

---

## ⚖️ Alerta Legal (Simulação)

> ⚠️ **Atenção:** Caso você aceite um Pix enviado por engano, poderá estar cometendo o crime previsto no **Art. 169 do Código Penal (Apropriação de coisa havida por erro)**.

Este alerta tem caráter **educativo e preventivo**, simulando como um sistema bancário poderia atuar.

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma separação clara de responsabilidades:


---

## 🛠️ Tecnologias Utilizadas

- Node.js
- JavaScript (ES Modules)
- Express
- Arquitetura em camadas (MVC simplificado)
- Simulação em memória (sem banco de dados)

---

##O projeto executa um servidor Node.js na porta 3001: http://localhost:3001/
