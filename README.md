# QA Developer Test - Ploomes
![Node](https://img.shields.io/badge/Node-v12.3.0-orange) ![GitHub top language](https://img.shields.io/github/languages/top/wesleyaju/qa-test-template) ![npm](https://img.shields.io/badge/npm-v8.1.2-yellow) ![Faker-js](https://img.shields.io/badge/Faker--js-v7.6.0-yellowgreen) ![Faker-br](https://img.shields.io/badge/Faker--br-v0.4.1-brightgreen) ![Cypress](https://img.shields.io/badge/Cypress-v12.3.0-green) ![CleanCode](https://img.shields.io/badge/Clean%20Code-Evangelist-_.svg)

Nesta etapa foi desenvolvido um teste automatizado usando o framework Cypress e JavaScript, bem como algumas bibliotecas necessárias para uma melhor realização do desafio proposto pela Ploomes, cumprindo os critérios mínimos estabelecidos.

## 👩‍💻 Critérios mínimos exigidos:
- Aplicação em JavaScript
- Clean Code
- Realizar teste na API do Ploomes nas seguintes entidades:
  - CRUD em Clientes (/Contacts)
  - CRUD em Negócios (/Deals)
- Teste no Front-end simulando o uso do sistema semelhante ao realizado pelo usuário final. Devem ser testadas as seguintes funcionalidades:
  - Login do sistema
  - CRUD em Clientes
  - CRUD em Negócios

🎯 Diferenciais sugeridos:
- Testar mais funcionalidades além das especificadas:

## 🔧 Instalação
 Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
 
### Pré requisito: 

  - Node versão 16.10.0 ou superior (Priorize versões LTS)

Com o Node instalado execute os seguintes comandos:

```bash
# clonar repositório
git clone https://github.com/wesleyaju/qa-test-template.git

# entrar na pasta do projeto qa-test-template
cd qa-test-template

# Instalar NPM
npm install

# depois instale as dependências
npm install --save-dev @faker-js/faker
# e
npm install faker-br
```

## 🖇️ Dependências

Dependências necessárias para a correta execução dos testes.

<div align="left">
  <img src="https://github.com/faker-js/faker/blob/next/docs/public/logo.svg" width="30"/> Faker-js - Gerador de grandes massas de dados falsos (mas realistas) para desenvolvimento testes.
  
  <img src="https://github.com/faker-js/faker/blob/next/docs/public/logo.svg" width="30"/> Faker-br - Gerador de grandes massas de dados falsos para desenvolvimento testes, tendo como língua nativa o Português-Brasil.</div>
 
## 📦 Notas Adicionais

- O arquivo cypress.env.json.example do projeto deve ser renomeado para cypress.env.json
- Dentro desse arquivo cypress.env.json deve-se adicionar as credenciais para login, por exemplo:
  ```bash
  {
    "USER_EMAIL": "",
    "USER_PASSWORD": "",
    "USER_NAME": ""
  }```

## ⚙️ Executando os testes

```bash
# executar o projeto
npm run e2e:open
```

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.


## 🛠️ Construído com as Tecnologias

* [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://docs.cypress.io/guides/overview/why-cypress) - O framework web usado.
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/) - Desenvolvimento BackEnd em tempo de execução para Javascript.
* [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.w3schools.com/js/) - JavaScript é a linguagem de programação web mais popular do mundo.


## ✒️ Autor

* **QA Engineer** - *Trabalho Inicial e Documentação* - [Desenvolvedor de Teste](https://github.com/wesleyaju)

## 📄 Licença

Este projeto está sob a licença MIT.

## 🎁 Expressões de gratidão

* Grato a Ploomes pelo oportunidade de mostrar um pouco do meu trabalho e conhecimento 📢;

---
Por [Wesley Almeida](https://github.com/wesleyaju) 😊
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesleyalmeida-qa)

