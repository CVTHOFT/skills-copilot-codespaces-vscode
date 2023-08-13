// Create web server

const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

router.get('/', commentController.getComment);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;
