const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HttpError = require("../helpers/httpError");
require("dotenv").config();
const { JWT_SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  const { _id } = await User.findOne({ email });

  const payload = { id: _id };
  const tokenSign = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "23h",
  });
  await User.findByIdAndUpdate(_id, { token: tokenSign });

  const { token } = await User.findOne({ email });

  res.status(201).json({
    token,
    user: {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });
};

module.exports = {
  signup,
};
