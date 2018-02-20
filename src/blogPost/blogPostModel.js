const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogPostSchema = new Schema({
    title: {type: String, unique: true},
    category: String, 
    content: String,
    score: Number
});

let BlogPost = mongoose.model('blogPost', blogPostSchema);

module.exports = BlogPost;