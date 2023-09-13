const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const book = new Schema({
  title: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  publicationDate: {
    type: String,
    require: true,
  },
});
const bookModel = mongoose.model("book", book);

module.exports = bookModel;
