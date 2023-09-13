const mongoose = require("mongoose");
const app = require("./app");

const PORT = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/book-management-service")
  .then((client) => app.listen(PORT, () => console.log("server running")))
  .catch((err) => console.log(err));
