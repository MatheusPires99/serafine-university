<h1 align="center">
    <img alt="Serafine" src="https://universidade.serafine.com.br/static/media/logo.7dd80909.svg" width="250px" />
    <br />
</h1>

## :rocket: Universidade Serafine:

Esse é o repositório do projeto da Universidade Serafine, uma aplicação de uso interno da empresa Serafine Clothing.

Esse projeto vem com o objetivo de ajudar os franqueados da empresa a saber como melhor gerir sua loja, aplicar técnicas de vendas, técnicas de contratação de novos funcionários, dentre outros. 

Tudo isso é feito através de documentos que são cadastrados na área do administrador. Nesses documentos é possível linkar para o Google Drive onde se encontra todos os documentos. Também é possível colocar um link de um vídeo do YouTube que um player é exibido em tela para o franqueado.

## :hammer: Para criação dessa aplicação foi utilizado:
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html), para desenvolvimento Front-end.
- [Node.js](https://nodejs.org/en/), para desenvolvimento Back-end.

## :computer: Resultado:

### ADMIN - Login
![serafine](.github/admin-login.png)

### ADMIN - Esqueci minha senha
![serafine](.github/admin-forgot.png)

### ADMIN - Categorias
![serafine](.github/admin-category.png)

### ADMIN - Form Categorias
![serafine](.github/admin-category-form.png)

### ADMIN - Documentos
![serafine](.github/admin-document.png)

### ADMIN - Form Documentos
![serafine](.github/admin-document-form.png)

### ADMIN - Usuários
![serafine](.github/admin-user.png)

### ADMIN - Form Usuários
![serafine](.github/admin-user-form.png)

### ADMIN - 404
![serafine](.github/admin-404.png)

### Franqueado - Login
![serafine](.github/franchisee-login.png)

### Franqueado - Documentações
![serafine](.github/franchisee-docs.png)

### Franqueado - Documentações2
![serafine](.github/franchisee-doc2.png)

## :information_source: Como usar

Para clonar e rodar essa aplicação, vocé precisará do [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/en/) ou posterior + [Yarn v1.13](https://classic.yarnpkg.com/en/docs/install) ou posterior intalado no seu computador. Na linha de comando rode:

```bash
# Clone esse repositório:
$ git clone https://github.com/MatheusPires99/serafine-university

# Entre no repositório
$ cd serafine-university

# Instale as dependências em cada pasta(backend, frontend-admin, frontend-franchisee)
$ yarn

# Para o backend criei dois containers no docker para PostgreSQL e Redis e depois execute o comando:
$ yarn dev

# Para ambos os front-ends execute o comando:
$ yarn start

```
