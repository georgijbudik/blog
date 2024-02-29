const dayjs = require("dayjs");
const { Post } = require("../models/post");

const getPosts = async (req, res) => {
  const result = await Post.find();
  res.json(result);
};

const addPost = async (req, res) => {
  const { firstName, lastName } = req.user;
  const { title, description } = req.body;

  const newPost = {
    title,
    description,
    date: dayjs(new Date()).format("DD/MM/YYYY"),
  };
  const result = await Post.create({
    ...newPost,
    userFirstName: firstName,
    userLastName: lastName,
  });

  res.status(201).json(result);
};

module.exports = {
  getPosts,
  addPost,
};
