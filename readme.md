# Begiatinho's RPG Api
## API REST

This project aims to train and develop the practice of using the concepts of clean code, clean architecture and TDD.

For that, I'm going to develop an application where players will be able to create characters initially for the werewolf the apocalypse system, but the intention is to make it scalable for other rpg systems, that's why it's so important to work with clean architecture.

## 🚀 Starting


These instructions will allow you to get a copy of the project up and running on your local machine to consume the API.

See **Running the application** to learn how to use the project.


### 📋 Pre-requisites

What do you need to install the software and how to install it?

```
Node.js

```

A series of step-by-step examples that tell you what you must do to get a running development environment.

**Node Installation**


***Windows:***

You can download directly from the website: [Node](https://nodejs.org/en/)   

Or you can use Chocolatey:   

```
choco install nodejs-lts
```

***Mac:***

You can download directly from the website: [Node](https://nodejs.org/en/)

***Linux*** 

using apt and snap:

```
sudo apt-get install curl

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install -y nodejs
```

After installing Node, we will use the following NPM (Node Package Manager) command to install the libraries and frameworks

```
npm install
```

After installation, you should have downloaded a folder called node_modules


**Insomnia Instalation** (optional):

Insomnia is the route testing software that I prefer, but you can use whichever one you like.

***Windows:***

You can download directly from the website:  [Insomnia](https://insomnia.rest/download)

Or you can use Chocolatey: 
```
choco install insomnia-rest-api-client
```
***Mac:***

by Brew
```
brew install --cask insomnia
```

***Linux:***

by snap:
```
snap install insomnia
```



## ⚙️ Executando a aplicação   

To run the test you must enter the npm start command:   

```
npm start
```

If everything goes well, the endpoint of the application should appear in the terminal.


## 👥 Entities  

<!-- 
### Entidade Cliente: 

Acessar pela rota: http://localhost:3000/clientes

Modelo do corpo da requisição: 
``` 
    {
        "nome" : "nome cliente",
        "endereco" : "rua exemplo",
        "formaDePagamento" : "pix",
        "cpf" : "12345678910",
        "telefone" : "12345678910",
        "email" : "email.cliente@exemplo.com"
    }

    Exemplo:
    {
        "nome" : "José das Couves",
        "endereco" : "rua das hortalicias 47",
        "formaDePagamento" : "pix",
        "cpf" : "12345678910",
        "telefone" : "12345678910",
        "email" : "jose.couves@gmail.com"
    }

``` -->

<!-- 
Depois acesse a rota e escolha o método para cada uma das ações do CRUD

**Método GET**

O método GET pode ser utilizado de duas maneiras:

1. Selecionar todas as informações do banco. Para isso utilize o método GET na rota da entidade escolhida.
Ex.: http://localhost:3000/clientes

2. Selecionar apenas uma informação filtrada pelo ID. Para isso complemente o link da rota com "/id".
Ex.: http://localhost:3000/clientes/1


**Método POST**

No método POST você deve preencher o corpo da requisição conforme descrito acima e utilizar a rota na entidade escolhida.
Ex.: http://localhost:3000/clientes

Se as informações passadas no corpo da requisição passarem na validação ele irá criar um novo item dentro da entidade escolhida com um id único, gerado automáticamente.


**Método PUT**

No método PUT você deve preencher o corpo da requisição conforme descrito acima e utilizar a rota na entidade escolhida complementando com "/id".

Ex.: http://localhost:3000/clientes/1

Se as informações passadas no corpo da requisição passarem na validação ele irá alterar o item dentro da entidade escolhida com o id único passado na rota.


**Método DELETE**

No método DELETE você deve utilizar a rota na entidade escolhida complementando com "/id".

Ex.: http://localhost:3000/clientes/1

Ele irá deletar o item dentro da entidade escolhida com o id único passado na rota.


**Finalizando**

Quando terminar de utilizar a aplicação você irá precisar derrubar o servidor e liberar o terminal. Para isso é só utilizar o comando:
```
ctrl + c
``` -->

---

## 🛠️ Working tools:   

* [Node](https://nodejs.org/en/docs/)

---

## ✒️ Author

**João Paulo Gotardi Begiato**   

<img src="./readme/linkedin.png" width="20px"/> [Linked-In](https://www.linkedin.com/in/joaopgbegiato/)  
<img src="./readme/github.png" width="20px"/> [GitHub](https://github.com/Joao-P-G-Begiato)  
<img src="./readme/email.png" width="20px"/> jpbegiato@hotmail.com  

---

## 📄 License

This project is protected under the MIT license which can be consulted here: [LICENSE](./Documents/LICENSE) para detalhes.

---

## 🎁 Special Thanks

* To my dear friend and mentor Pedro Alves who always kept me motivated and engaged to develop myself
* To my dear co-worker and friend Ruan Costa, aka Little Dolly who, in addition to paving the way to programming for me, always guided me so that my codes would improve more and more
* To the entire Resilia facilitation team, where I took my first step into the world of programming, especially Cinthia Cantú, who showed me the way

---