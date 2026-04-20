# 💸 Sistema Antifraude Pix

Projeto backend desenvolvido em Node.js que simula o processamento de transações Pix com aplicação de regras básicas de validação e análise de risco.

---

## 🚀 Sobre o projeto

Este projeto tem como objetivo simular uma camada de verificação em transações Pix, aplicando regras simples de negócio para determinar o status de uma operação.

A aplicação foi desenvolvida com foco em prática de lógica de programação, estruturação de backend e organização de código.

---

## ⚙️ Funcionalidades

* Recebimento de transações Pix
* Validação básica dos dados da transação
* Análise de risco baseada em regras simples
* Retorno de status da transação:

  * ✅ Aprovado
  * ⚠️ Em análise
  * ❌ Recusado

---

## 🧠 Regras de negócio implementadas

* Transações com valor acima de um determinado limite podem ser marcadas como **"em análise"**
* Validação de dados obrigatórios da requisição
* Simulação de decisão baseada em condições simples

---

## 🛠 Tecnologias utilizadas

* Node.js
* JavaScript

---

## 🔌 Estrutura básica

O projeto segue uma estrutura simples, com foco na separação de responsabilidades:

* Rotas para recebimento das requisições
* Lógica de processamento das transações
* Retorno estruturado das respostas

---

## ▶️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Executar o servidor
npm start
```

---

## 📌 Exemplo de uso

### Requisição

```json
{
  "valor": 1200,
  "chavePix": "email@exemplo.com"
}
```

### Resposta

```json
{
  "status": "em análise"
}
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte da minha formação em desenvolvimento backend, com o objetivo de praticar:

* Lógica de programação
* Implementação de regras de negócio
* Estruturação de aplicações backend

---

## 🚀 Próximas melhorias

* Separação em camadas (controllers, services, routes)
* Implementação de mais regras de análise de risco
* Criação de novos endpoints
* Integração com banco de dados

---

## 📫 Autor

Manoel Amâncio
🔗 LinkedIn: https://www.linkedin.com/in/manoellamanciio
