const BlogPost = require('./blogPostModel');
const blogRouter = require('express').Router();

blogRouter.route('/')
    .get((req, res) => {
        BlogPost.find( (err, blogs) => {
            if(err) console.log(err);
            res.send(blogs);
        });
    });

blogRouter.route('/:id')
    .get((req, res) => {
        BlogPost.findById({ _id: req.params.id}, (err, blog) => {
            if(err) console.log(err);
            res.send(blog);
        });
    });

module.exports = blogRouter;