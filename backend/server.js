const mongoose = require("mongoose");
const app = require("./app");

const { DATABASE_CONNECTION_URL, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DATABASE_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
