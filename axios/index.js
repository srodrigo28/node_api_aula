const express = require('express')
const axios = require('axios')

const app = express()

app.route('/').get((req,res) => {
    //res.send('Hello Api')

    axios.get('https://api.github.com/users/mueledson')
    // .then(rs => res.send(rs.data))
    .then(rs => res.send(`<img src="${rs.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})

app.listen('3000')