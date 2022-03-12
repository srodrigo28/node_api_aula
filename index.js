const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())

app.route('/')     .get((req,res) => res.send('Hello'))
app.route('/login').get((req,res) => res.send("Login"))
// app.route('/cadastro').get((req,res) => res.send("Cadastro"))
app.route('/cadastro').post( (req,res) => res.send(req.body) )

let author = "Anonimo"
app.route('/cadastro').get((req, res) => res.send(author))
app.route('/cadastro').put( (req,res) => {
    // author = req.body
    author = req.body.author
    res.send(author)
})

app.route('/cadastro/:id').delete( (req,res) =>{
    res.send(req.params.id)
})


app.listen('3000')