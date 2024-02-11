const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const auth = require('./routes/auth')
const plants = require('./routes/plants')
const myPlant = require('./routes/myPlant')

const errorMiddleWare = require('./middlewares/error');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type')
    next();
})

app.use('/api/v1/',auth);
app.use('/api/plants',plants)
app.use('/api/myplant',myPlant)


app.use(errorMiddleWare)


module.exports = app;