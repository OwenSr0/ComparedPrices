const jsonServer = require('json-server');
const jsonServerMiddleware = jsonServer.router('database/db.json');

jsonServerMiddleware.get('/users', (req,res) => {
});

module.exports = jsonServerMiddleware;

/*
http://localhost:5000/api/json/users?q=2 para hacer una busqueda oh shiii
*/