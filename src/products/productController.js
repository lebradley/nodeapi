const mongoose = require('mongoose');
const Product = require('./productModel');

let getAll = function(req, res) {
    Product.find((err, products) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            res.status(200).send(products);
        }
    });
};

let getById = function(req, res) {
    Product.findById({ _id: req.params.id }, (err, _product) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            res.status(200).send(_product);
        }
    });
};

let deleteById = function(req, res) {
    Product.findByIdAndRemove({ _id: req.params.id}, (err) => {
        if (err) return console.log(err);
        res.send('deleted!');
    });
};

let upateProductById = function(req, res) {
    Product.findByIdAndUpdate({ _id: req.params.id}, {$set: req.body}, (err, product) => {
        if(err) console.log(err);
        console.log('Result: ' + product);
        res.send('done');
    });
};

let createNewProduct = function(req, res) {
    let product = new Product(req.body);
    product.save((err, product) => {
        if(err) return console.log(err);
        res.send(product);
    });
};


module.exports = {
    getAll, 
    getById,
    deleteById,
    upateProductById,
    createNewProduct
}

//Perhaps not best syntax, hard to test, but this good for me at the moment! 
//For practice, given size of the project controller router split is not deadly needed