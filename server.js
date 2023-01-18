const express = require('express')
const app = express()
const filebd = require('./connect')

app.get('/', (req,res) => {
    res.end('hola')
})

app.listen(5000, function(){
    console.log('El servidor Aa')
});