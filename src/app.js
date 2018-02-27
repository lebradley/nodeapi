require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./products/productRouter');
const tflRouter = require('./tfl/tflRouter');

mongoose.connect('mongodb://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@' + process.env.DB_URL, (err) => { 
    if(err) return console.log('db connection is fucked');
    console.log('db connected yayayaya');
});

// let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/products', productRouter);
app.use('/tfl', tflRouter);

app.get('/', (req, res) => {
    res.send('Hello there, I\'m an API!');
});

module.exports = app;