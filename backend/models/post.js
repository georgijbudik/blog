const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const Joi = require("joi").extend(require("@joi/date"));

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

postSchema.post("save", handleMongooseError);

const Post = model("post", postSchema);

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  date: Joi.string().date().format("DD-MM-YYYY").utc(),
});

module.exports = {
  Post,
  addSchema,
};
