const express = require('express')
const app = express()
//app.use(express.json())


app.route('/').get((req,res) => {
    res.send('Hello')
})


app.listen('3000')