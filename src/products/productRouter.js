const Product = require('./productModel');
const productRouter = require('express').Router();

productRouter.route('/')
    .get((req, res) => {
    Product.find( (err, products) => {
        if(err) return console.log(err);
        res.send(products);
    });
});

productRouter.route('/:id')
    .get((req, res) => {
        Product.findById({ _id:req.params.id}, (err, product) => {
            if(err) return console.log(err); 
                res.send(product);
        });
    });

productRouter.route('/:id')
    .delete((req, res) => {
        Product.findByIdAndRemove({ _id: req.params.id}, (err) => {
            if (err) return console.log(err);
            res.send('deleted!');
        });
    });
    // .put((req, res) => {
    //     Product.findByIdAndUpdate({ _id: req.params.id}, {$set: req.body}, (err, product) => {
    //         if(err) console.log(err);
    //         console.log('Result: ' + product);
    //         res.send('done');
    //     });
    // });

productRouter.route('/')
    .post((req, res) => {
        let product = new Product(req.body);
        product.save((err, product) => {
            if(err) return console.log(err);
            res.send(product);
        });
    });

module.exports = productRouter;



    //     app.put('/products/:id', (req, res) => {
//         Product.findByIdAndUpdate( { _id: req.params.id}, {$set:req.body}, (err, product) => {
//             if(err) console.log(err);
//             console.log('Result: ' + product);
//             res.send('done')
//         })
//     });
// module.exports = function(app) {
//     app.get('/products', (req, res) => {
//         Product.find( (err, products) => {
//             if(err) return console.log(err);
//             res.send(products);
//         });
//     });
    
//     app.get('/products/:id', (req, res) => {
//         Product.findById({ _id:req.params.id}, (err, product) => {
//             if(err) return console.log(err); 
//             res.send(product);
//         });
//     });
    
//     app.delete('/products/:id', (req, res) => {
//         Product.findByIdAndRemove({ _id:req.params.id}, (err) => {
//             if(err) return console.log(err);
//             res.send('deleted!');
//         });
//     });
    
//     app.post('/products', (req, res) => {
//         let product = new Product(req.body);
//         product.save((err, product) => {
//             if(err) return console.log(err);
//             res.send(product);
//         });
//     });
    
    // req.body must specify what you want to change, but doesn't need to be all the info of the product object
//     // help from https://stackoverflow.com/questions/27108177/mongoose-findbyidandupdate-doesnt-work-with-req-body
//     app.put('/products/:id', (req, res) => {
//         Product.findByIdAndUpdate( { _id: req.params.id}, {$set:req.body}, (err, product) => {
//             if(err) console.log(err);
//             console.log('Result: ' + product);
//             res.send('done')
//         })
//     });
// }
