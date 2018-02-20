const mongoose = require('mongoose');
const Product = require('./productModel');

let getAll = function(req, res) {
    Product.find((err, products) => {
        if(err) console.log(err);
        res.send(products);
    });
};

let getById = function(req, res) {
    Product.findById({ _id: req.params.id }, (err, _product) => {
        if(err) console.log(err);
        res.send(_product);
    });
};

module.exports = {
    getAll, 
    getById
}

//Perhaps not best syntax, hard to test, but this good for me at the moment! 
//For practice, given size of the project controller router split is not deadly needed