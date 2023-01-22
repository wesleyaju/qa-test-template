# QA Developer Test - Ploomes
![Node](https://img.shields.io/badge/Node-v16.13.1-brightgreen) ![npm](https://img.shields.io/badge/npm-v8.1.2-green) ![Faker-js](https://img.shields.io/badge/Faker--js-v7.6.0-yellowgreen) ![Faker-br](https://img.shields.io/badge/Faker--br-v0.4.1-orange) ![Cypress](https://img.shields.io/badge/Cypress-v12.3.0-blue) ![K6](https://img.shields.io/badge/Grafana%20K6-v0.42.0-blueviolet)

Nesta etapa foi desenvolvido um teste automatizado usando o framework Cypress e node.js, bem como algumas bibliotecas necessárias para uma melhor realização do desafio proposto pela Ploomes, cumprindo os critérios mínimos estabelecidos.

## 👩‍💻 Critérios mínimos exigidos:
- ✔️ Aplicação em JavaScript
- ✔️ Clean Code
- ✔️ Realizar teste na API do Ploomes nas seguintes entidades:
  - CRUD em Clientes (/Contacts)
  - CRUD em Negócios (/Deals)
- ✔️ Teste no Front-end simulando o uso do sistema semelhante ao realizado pelo usuário final. Devem ser testadas as seguintes funcionalidades:
  - Login do sistema
  - CRUD em Clientes
  - CRUD em Negócios

🎯 Diferenciais:
- É comum encontar projetos cypress que utilizem a técnica 'custom commands' para sua arquitetura de pastas em testes frontend, técnica que se faz eficiente para projetos de pequeno e médio porte. Porém, este respositório utiliza de um combinado entre o 'custom commands' e 'page objects', arquitetura que se provou extremamente eficiente, organizada e escalável para projetos de grande porte, sendo testada por mais de 1 ano em projetos reais com inúmeros arquivos de teste.
- Os testes de frontend não se limitam aos campos obrigatórios e ao fluxo principal de cadastro das entidades. Explorando alguns dos fluxos alternativos para o cadastro de clientes e produtos, e a maioria dos seus campos não obrigatórios.
- Implementação da biblioteca faker-js e faker-br, resultando em uma massa de teste com dados dinâmicos e aleatórios. Para evitar futuras dificuldades de manutenção caso o projeto mude as libs utilizadas para gerar os dados, foi criado um arquivo cypress/utils/mockData.js que concentra as funções para gerar os dados, permitindo assim, que a manutenção ou alteração das libs afete apenas 1 único arquivo, facilitando a solução.
- Uso do cypress-plugin-api para upgrade na visualização gráfica dos testes de api.
- Implementação de testes de performance na api utilizando o [Grafana k6](https://github.com/wesleyaju). A pasta /tests contém arquivos que servem para submeter a api a testes de fumaça, carga e estresse:
    * deal-smoke --> [Resultados do teste de fumaça para verificar o funcionamento básico da api](https://gyazo.com/3adfd17f0851bba6025d59c0e591d6e6)
    * deal-load --> [Resultados do teste de carga com diversos usuários virtuais simultâneos em confições normais e de pico](https://gyazo.com/9303281d3abce8456d4e353769ab43cd)
    * deal-stress --> [Resultados do teste de estresse que submete e aplicação a diversas requisições simultâneas por segundo com a finalidade de verificar a estabilidade e confiabilidade do sistema em condições extremas](https://gyazo.com/1344f014dc5f5b439e5271f2a1c255a6)

## 🔧 Instalação
 Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
 
### Pré requisito: 

  - GIT & Node versão 16.13.1 ou superior (Priorize versões LTS)

Com o Node instalado execute os seguintes comandos:

```bash
# clonar repositório
git clone https://github.com/wesleyaju/qa-test-template.git

# entrar na pasta do projeto qa-test-template
cd qa-test-template

# Instalar dependências
npm install
```
#### Instalar Grafana K6 (Como alternativa, você pode baixar e executar o instalador oficial mais recente)
[![Download K6](https://img.shields.io/badge/K6-090909?style=for-the-badge&logo=k6&logoColor=7D64FF)](https://dl.k6.io/msi/k6-latest-amd64.msi)  👈 (Clique Aqui para iniciar o download)

```bash
# Instalar dependências do K6
npm install uuid@3.4.0
npm install browserify
browserify node_modules/uuid/index.js -s uuid > uuid.js
```

## ⚙️ Dependências

Dependências necessárias para a correta execução dos testes.

<div align="left">
  <img src="https://github.com/faker-js/faker/blob/next/docs/public/logo.svg" width="30"/> Faker-js - Gerador de grandes massas de dados falsos (mas realistas) para desenvolvimento testes.
  
  <img src="https://github.com/faker-js/faker/blob/next/docs/public/logo.svg" width="30"/> Faker-br - Gerador de grandes massas de dados falsos para desenvolvimento testes, tendo como língua nativa o Português-Brasil.

 <a href="https://k6.io/docs/get-started/installation/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/K6-load-testing-tool-logo.svg/2105px-K6-load-testing-tool-logo.svg.png" width="30"/> </a> Grafana k6 é uma ferramenta de testes de fumaça/carga/estresse de código aberto que torna o teste de desempenho fácil e produtivo para os times de desenvolvimento e QA.
</div>
  
 ## 📝 Notas Adicionais

- O arquivo cypress.env.json.example do projeto deve ser renomeado para cypress.env.json
- Dentro desse arquivo cypress.env.json deve-se adicionar as credenciais para login, por exemplo:
  ```bash
  {
    "USER_EMAIL": "",
    "USER_PASSWORD": "",
    "USER_NAME": "",
    "USER_KEY": ""
  }
  ```
- É necessário inserir um token de API válido em cada arquivo teste do k6 para executar os testes, por exemplo:
   ```bash
  const headers = {
        'headers': {
            'user-key': ('insira seu token de api aqui')
        }
    }
   ```

## 🧪 Executando os testes
  ### Cypress
```bash
# abrir interface gráfica do cypress
npm run e2e:open # or npx cypress open

# executar o projeto em modo handles
npm run e2e:run # or npx cypress run
```
  ### Grafana K6
```bash
# comandos para executar os testes de performance com K6
k6 run deal-smoke.js 

k6 run deal-load.js

k6 run deal-stress.js
```

### 🖇️ Bugs e considerações

- Ausência de maiores validações nos fluxos da api, pois em alguns casos é possível cadastrar o mesmo item 2 vezes, ou cadastrar itens com os campos vazios, ou valores inválidos.
- Especialmente após o login, a plataforma exibe diversos erros no console relacionados ao angular e falhas em requisições, que resultam na falha do teste automaticamente. Algumas delas tiveram que ser contornadas no arquivo cypress/support/e2e.js para que o cypress pudesse funcionar.
- Boas práticas sugerem que em projetos que possuem testes automatizados, o time de desenvolvimento implemente atributos como 'data-test' ou 'data-cy', com a intenção de auxiliar o analista de teste automatizado na busca dos seletores html e na manutenção de código.
- Segue link de imagem do momento em que a plataforma apresentou um comportamento estranho, desfigurando a página. (https://gyazo.com/a9e671d3e4cf5bce48f3749dff9da701)
- Nos testes de API foi observado que o retorno do status ao efetuar um cadastro (requisição) com sucesso é (Status=200), onde o padrão normalmente é (Status=201).

## 🛠️ Construído com as Tecnologias

* [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://docs.cypress.io/guides/overview/why-cypress) - Framework de teste
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/) - Desenvolvimento BackEnd em tempo de execução para Javascript.


## ✒️ Autor

* **QA Engineer** - *Trabalho Inicial e Documentação* - [Desenvolvedor de Teste](https://github.com/wesleyaju)

## 📄 Licença

Este projeto está sob a licença MIT.

## 🎁 Expressões de gratidão

* Grato a Ploomes pelo oportunidade de mostrar um pouco do meu trabalho e conhecimento 📢;

---
Por [Wesley Almeida](https://github.com/wesleyaju) 😊
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesleyalmeida-qa)

