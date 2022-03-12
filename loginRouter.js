const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())

app.route('/login').get((req,res) => res.send("Login"))

let login = "Anonimo"
let senha = "Anonimo"

let validaLogin = function(req, res, next){
    if(login === "admin" && senha == "admin"){
        next();
    }else{
        alert("Sem permissão de acesso")
        return false
    }
}

app.route('/cadastro').post( (req,res) => {
    login = req.body.author
    senha = req.body.senha
})


app.listen('3000')