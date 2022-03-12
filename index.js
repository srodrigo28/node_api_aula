const express = require('express')
const res = require('express/lib/response')
const app = express()
app.listen('3000')

app.route('/')     .get((req,res) => res.send('Hello'))
app.route('/login').get((req,res) => res.send("Login"))
app.route('/cadastro').get((req,res) => res.send("Cadastro"))