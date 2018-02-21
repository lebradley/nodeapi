const Product = require('./productModel');
const productRouter = require('express').Router();
const productController = require('./productController');

productRouter.route('/')
    .get(productController.getAll);

productRouter.route('/:id')
    .get(productController.getById);

productRouter.route('/:id')
    .delete(productController.deleteById);

productRouter.route('/:id')
    .put(productController.upateProductById);

productRouter.route('/')
    .post(productController.createNewProduct);

module.exports = productRouter;
