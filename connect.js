const mongoose = require('mongoose');



const mongo_uri = 'mongodb://127.0.0.1:27017/database'

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    } else {
        console.log('todo bien')
    }
})
/*
mongoose.connect('mongodb://127.0.0.1:27017/databasee');

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('Conexion exitosa')})
objectbd.on('error', ()=>{console.log('Conexion error')})
*/
module.exports = mongoose