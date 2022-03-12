const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())

// localhost:3000/user/?nome=aline
app.route('/').get((req,res) => res.send('Pegando valores da URL ?'))

/** Aqui pego todos que passam na url */
    // localhost:3000/user/?nome=beto&idade=25
// app.route('/user').get( (req,res) => res.send( req.query ))
app.route('/user').get( (req,res) => res.send( req.query))

/** Aqui pego somente da query.nome */
    // localhost:3000/user/?nome=beto sousa nascimento
//app.route('/user').get( (req,res) => res.send( req.query.nome ))

app.listen('3000')