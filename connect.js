const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/databasee');

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('Conexion exitosa')})
objectbd.on('error', ()=>{console.log('Conexion error')})

module.exports = mongoose