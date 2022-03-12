const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())
app.route('/')     .get((req,res) => res.send('Pegando valores do body'))
app.route('/user').post( (req,res) => res.send(req.body))


app.route('/user').post( (req, res) => {
    const {nome, cidade} = req.body
    res.send(`Nome: ${nome} Cidade: ${cidade}`)
})

/*** POST :: localhost:3000/cadastro
    {
        "nome": "yasmim toledo",
        "cidade": "são paulo"
    }
 */


app.listen('3000')