const express = require('express')
const app = express()
const filebd = require('./connect')
const router = require('./routes/user')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/user', router)

app.get('/', (req,res) => {
    res.end('hola')
})

app.listen(5000, function(){
    console.log('El servidor Aa')
});