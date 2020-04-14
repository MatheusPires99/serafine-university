<img class="center" alt="Serafine" src="https://universidade.serafine.com.br/static/media/logo.7dd80909.svg" width="250px" />

## :rocket: Universidade Serafine:

Esse é o repositório do projeto da Universidade Serafine, uma aplicação de uso interno da empresa Serafine Clothing.

Esse projeto vem com o objetivo de ajudar os franqueados da empresa a saber como melhor gerir sua loja, aplicar técnicas de vendas, técnicas de contratação de novos funcionários, dentre outros.

Tudo isso é feito através de documentos que são cadastrados na área do administrador. Nesses documentos é possível linkar para o Google Drive onde se encontra todos os documentos. Também é possível colocar um link de um vídeo do YouTube que um player é exibido em tela para o franqueado.

## :hammer: Para criação dessa aplicação foi utilizado:
- [Node.js](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Docker](https://www.docker.com/)
- [Sequelize](https://github.com/sequelize/sequelize)
- [Nodemailer](https://github.com/nodemailer/nodemailer)
- [Handlebars](https://handlebarsjs.com/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [Bee Queue](https://github.com/bee-queue/bee-queue)
- [Yup](https://github.com/jquense/yup)

## :information_source: Como usar

Para clonar e rodar essa aplicação, vocé precisará do [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/en/) ou posterior + [Yarn v1.13](https://classic.yarnpkg.com/en/docs/install) ou posterior intalado no seu computador. Na linha de comando rode:

```bash
# Clone esse repositório
$ git clone https://github.com/MatheusPires99/serafine-university

# Caso ele peça senha ou permissão para clonar
## user: desenvolvimento_serafine
## pass: Serafine15

# Crie um container no docker para o PostgreSQL e para o Redis

# Entre no repositório
$ cd serafine-university-backend

# Instale as dependências
$ yarn

# Execute o projeto
## Executar servidor
$ yarn dev
## Executar filas
$ yarn queue

```

Feito com ♥ por Matheus Pires :wave: [Get in touch!](https://github.com/MatheusPires99)
