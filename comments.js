// create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true});

// create schema
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    name: String,
    comment: String,
    timestamp: String
});

// create model
var Comment = mongoose.model('Comment', commentSchema);

// create router
var router = express.Router();

// middleware for all requests
router.use(function(req, res, next) {
    console.log('Request received.');
    next();
});

// test route
router.get('/', function(req, res) {
    res.json({ message: 'API working!' });
});

// routes that end in /comments
router.route('/comments')
    .post(function(req, res) {
        var comment = new Comment();
        comment.name = req.body.name;
        comment.comment = req.body.comment;
        comment.timestamp = req.body.timestamp;

        comment.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Comment created!' });
        });
    })
    .get(function(req, res) {
        Comment.find(function(err, comments) {
            if (err) {
                res.send(err);
            }
            res.json(comments);
        });
    });

// routes that end in /comments/:comment_id
router.route('/comments/:comment_id')
    .get(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    })
    .put(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err) {
                res.send(err);
            }
            comment.name = req.body.name;
            comment.comment = req.body.comment;
            comment.timestamp = req.body.timestamp;

            comment.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Comment updated!' });
            });
        });
    })
    .delete(function(req, res) {
        Comment.delete

    });