require('dotenv').config();
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Product = require('./api/models/productModel');
let bodyParser = require('body-parser');

mongoose.connect('mongodb://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@' + process.env.DB_URL, (err) => { 
    if(err) return console.log('db connection is fucked');
    console.log('db connected yayayaya');
});

// let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.get('/', (req, res) => {
    res.send('hello there!');
});

// app.get('/createdummydata', (req, res) => {
//     let productList = [
//         {
//             name: 'Crabs',
//             type: 'game', 
//             price: 34,
//             instock: true
//         }, 
//         {
//             name: 'Coup',
//             type: 'game', 
//             price: 32,
//             instock: true
//         }, 
//         {
//             name: 'Exploding Kittens',
//             type: 'games', 
//             price: 21,
//             instock: false
//         }, 
//         {
//             name: 'Disrupted',
//             type: 'book', 
//             price: 19,
//             instock: true
//         }
//     ];
//     Product.create(productList, (err, products) => {
//         if(err) return console.log(err);
//         res.send(products);
//     })
// })

app.get('/products', (req, res) => {
    Product.find( (err, products) => {
        if(err) return console.log(err);
        res.send(products);
    });
});

app.get('/products/:id', (req, res) => {
    Product.findById({ _id:req.params.id}, (err, product) => {
        if(err) return console.log(err); 
        res.send(product);
    });
});

app.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove({ _id:req.params.id}, (err) => {
        if(err) return console.log(err);
        res.send('deleted!');
    });
});

app.post('/products', (req, res) => {
    let product = new Product(req.body);
    product.save((err, product) => {
        if(err) return console.log(err);
        res.send(product);
    });
});

// req.body must specify what you want to change, but doesn't need to be all the info of the product object
// help from https://stackoverflow.com/questions/27108177/mongoose-findbyidandupdate-doesnt-work-with-req-body
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate( { _id: req.params.id}, {$set:req.body}, (err, product) => {
        if(err) console.log(err);
        console.log('Result: ' + product);
        res.send('done')
    })

});

module.exports = app;