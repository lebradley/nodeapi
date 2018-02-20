require('dotenv').config();
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let productRouter = require('./')
let jsinfo = require('./jsinfo/jsinfo')(app);
let tfl = require('./tflConsume/tflConsumer')(app);


mongoose.connect('mongodb://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@' + process.env.DB_URL, (err) => { 
    if(err) return console.log('db connection is fucked');
    console.log('db connected yayayaya');
});

// let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/products', productRouter);

module.exports = app;