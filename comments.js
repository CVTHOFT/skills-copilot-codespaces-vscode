// create web server with express
const express = require("express");
const router = express.Router();
// create comment controller
const commentController = require("../controllers/comments_controller");
// create authentication controller
const passport = require("passport");
// create post controller
const postController = require("../controllers/posts_controller");

// create comment route
router.post(
  "/create",
  passport.checkAuthentication,
  commentController.create
);
// create comment destroy route
router.get(
  "/destroy/:id",
  passport.checkAuthentication,
  commentController.destroy
);

module.exports = router;