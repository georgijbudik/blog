const { Post } = require("../models/post");

const getPosts = async (req, res) => {
  const result = await Post.find().populate("owner", "firstName", "lastName");
  res.json(result);
};

const addPost = async (req, res) => {
  const { title, description } = req.body;
};

module.exports = {
  getPosts,
  addPost,
};
