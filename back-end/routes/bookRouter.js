var express = require("express");
const bookController = require("../controller/bookController");
var router = express.Router();

/* GET home page. */
router
  .get("/", bookController.getAllBooks)
  .get("/:bookId", bookController.getBookById)
  .post("/", bookController.postBook)
  .put("/:bookId", bookController.putBookById)
  .delete("/:bookId", bookController.deleteBookById);

module.exports = router;
