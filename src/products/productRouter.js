const Product = require('./productModel');
const productRouter = require('express').Router();
const productController = require('./productController');

productRouter.route('/')
    .get(productController.getAll);

productRouter.route('/:id')
    .get(productController.getById);

productRouter.route('/:id')
    .delete((req, res) => {
        Product.findByIdAndRemove({ _id: req.params.id}, (err) => {
            if (err) return console.log(err);
            res.send('deleted!');
        });
    });

productRouter.put((req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id}, {$set: req.body}, (err, product) => {
            if(err) console.log(err);
            console.log('Result: ' + product);
            res.send('done');
        });
    });

productRouter.route('/')
    .post((req, res) => {
        let product = new Product(req.body);
        product.save((err, product) => {
            if(err) return console.log(err);
            res.send(product);
        });
    });

module.exports = productRouter;
