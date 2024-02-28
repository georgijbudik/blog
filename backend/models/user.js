const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../helpers/handleMongooseError");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },

    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
  token: Joi.string().default(null),
});

const loginSchema = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().required().email(),
  token: Joi.string().default(null),
});

const schemas = {
  registerSchema,
  loginSchema,
};

module.exports = { schemas, User };
