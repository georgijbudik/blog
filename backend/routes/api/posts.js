const express = require("express");
const { getPosts, addPost } = require("../../controllers/posts");
const authenticate = require("../../middlewares/authenticate");
const router = express.Router();

router.get("/", authenticate, getPosts);

router.post("/add", authenticate, addPost);

module.exports = router;
