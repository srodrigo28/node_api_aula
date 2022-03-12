const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())

// localhost:3000/user/camila-sousa
app.route('/').get((req,res) => res.send('Pegando valores da URL'))
app.route('/user/:nome').get( (req,res) => res.send( req.params.nome ))

app.listen('3000')