# Aplicação Node
### Orientação 1
```
https://app.rocketseat.com.br/node/trabalhando-com-apis/group/api-no-back-end/lesson/get-1
```
### Orientação 2 Guia Git MD
```
https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open
```
### Requisitos
* [x] Nodejs
```
https://nodejs.org/en/
```

* [x] Xampp que contem o mysql
```
https://www.apachefriends.org/pt_br/download.html
```
* [x] postman | insomnia
```
https://www.postman.com/
```
```
https://insomnia.rest/
```

### Dependências
* nodemon atualizar o código quando for modificado
* express gerênciar rotas

## Inciando o projeto
* Criar um diretório
* Abrir o diretório no vscode
* No terminal
```
npm init -y
```

* Nodemon
```
npm install nodemon
```

* Express
```
npm install express
```

### Objeto Json
~~~
{
    "messagem": "Conectou com sucesso",
    "messagem": "Erro na conexão",
}
~~~

### index.js
~~~
const express = require('express')
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        titulo: '<h1>Hello rota com express</h1>',
        descricao: '<h3>Estudo api com NodeJS</h3>',
        horas: 100
    })
});

app.listen('3001')
console.log("Rodando")
~~~