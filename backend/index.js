const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
