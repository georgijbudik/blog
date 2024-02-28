const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/api/auth");
const postsRouter = require("./routes/api/posts");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
