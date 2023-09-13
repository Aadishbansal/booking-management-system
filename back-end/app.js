const express = require("express");
const logger = require("morgan");

const bookRouter = require("./routes/bookRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/books", bookRouter);

app.use(function (req, res, next) {
  res.status(404).json({ status: "FAIL", message: "Not found" });
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).json({ status: "FAIL", message: err });
});

module.exports = app;
