let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {type: String, unique: true},
    type: String, 
    price: Number,
    instock: Boolean
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;