// create web server 
// create a route to get all comments
// create a route to get one comment
// create a route to create a comment
// create a route to update a comment
// create a route to delete a comment

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getOneComment);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;