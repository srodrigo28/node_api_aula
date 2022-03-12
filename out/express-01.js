const express = require('express')
const app = express()
app.listen('3000')

let titulo = `
    <h1>
        <strong>
            <a href="#">Node 2022</a>
        </strong>
    </h1>
`
app.route('/').get((req,res) => res.send(titulo))