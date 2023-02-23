const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./connect');
const userRouter = require('./routers/userVerified');
const searchRouter = require('./routers/search.js');
const jsonServerRouter = require('./routers/jsonServer.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.listen(5000, function(){
    console.log('El servidor Aa')
});

app.use('/api/user', userRouter);

app.use('/api/searches', searchRouter);

app.use('/api/json', jsonServerRouter);


app.get('/', (req,res) => {
    res.end("Welcome to my Api. :D you aren't suppose to be here :l ")
});



