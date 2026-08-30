# ☕ Cafeteria — Sistema de Gerenciamento de Produtos

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/H2-000000?style=flat&logo=h2&logoColor=white">
  <img src="https://img.shields.io/badge/CSS%20Modules-000000?style=flat&logo=cssmodules&logoColor=white">
</p>

## 📖 Sobre o projeto

Este projeto consiste no desenvolvimento de uma aplicação web para uma cafeteria, criada como projeto individual acadêmico.

A aplicação possui um **Front-end desenvolvido em React**, integrado a uma **API REST desenvolvida em Java com Spring Boot**, responsável pela comunicação com o banco de dados H2.

O sistema permite o **cadastro e a visualização de produtos da cafeteria**, utilizando dados persistidos no banco de dados.

O projeto também tem como objetivo aplicar, na prática, conceitos de:

- Desenvolvimento Front-end;
- React e componentização;
- Consumo de API REST;
- Métodos HTTP GET e POST;
- Java e Spring Boot;
- JDBC;
- Banco de dados;
- Persistência de dados;
- Organização de projetos;
- CSS Modules.

---

# 🎯 Objetivo

Desenvolver uma aplicação Front-end em **React** integrada a uma API REST desenvolvida em **Java/Spring Boot**.

A aplicação deverá permitir que os usuários:

- Visualizem os produtos disponíveis;
- Cadastrem novos produtos;
- Enviem os dados do formulário para a API;
- Consultem os produtos armazenados no banco de dados.

---

# ☕ Funcionalidades

## 🏠 Tela inicial

A aplicação possui uma página inicial responsável por apresentar a cafeteria e direcionar o usuário para as principais funcionalidades do sistema.

A navegação permite acessar:

- Início;
- Cadastro de produto;
- Produtos/Cardápio.

---

## 📝 Cadastro de produto

A tela de cadastro permite inserir informações sobre um novo produto da cafeteria.

### Dados cadastrados

O produto possui os seguintes campos:

| Campo | Descrição |
|---|---|
| ID | Identificador do produto |
| Nome | Nome do café/produto |
| Categoria | Categoria do produto |
| Descrição | Descrição do produto |
| Preço | Valor do produto |
| Tamanho | Tamanho do produto |
| Ingredientes | Ingredientes utilizados |
| Imagem | Imagem do produto |

Após o preenchimento do formulário, os dados são enviados para a API através de uma requisição **POST**.

---

## 📋 Produtos / Cardápio

A tela de produtos realiza uma requisição **GET** para a API.

Os dados exibidos na interface são provenientes do banco de dados, não sendo utilizados dados estáticos como fonte principal.

Fluxo:

```text
Banco de dados
      ↓
Spring Boot
      ↓
API REST
      ↓
React
      ↓
Cardápio
