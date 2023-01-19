const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema


const schemaUser = new schema({
    name: String,
    email: String,
    password: String,
    number: String,
    idUser: String
})

const ModelUser = mongoose.model('users', schemaUser)
module.exports = router;

router.post('/register', (req, res) => {
    const newUser = new ModelUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        idUser: req.body.IdUser
    })
    newUser.save(function(error){
        if(!error){
            res.send('User added')
        } else(
            res.send(err)
        )
    })
})


router.get('/test', (req, res) => {
    res.end('Hey Test')
})


