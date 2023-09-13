const Book = require("./../model/Book");
exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((books) => res.status(200).json({ status: "SUCCESS", data: books }))
    .catch((err) => {
      next(err);
    });
};
exports.getBookById = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const err = new Error("No book");
        throw err;
      }

      res.status(200).json({ status: "SUCCESS", data: book });
    })
    .catch((err) => {
      next(err);
    });
};
exports.postBook = (req, res, next) => {
  const { title, author, genre, publicationDate } = req.body;
  const book = new Book({
    title,
    author,
    genre,
    publicationDate,
  });
  book
    .save()
    .then((book) => res.status(201).json({ status: "SUCCESS", data: book }))
    .catch((err) => {
      next(err);
    });
};
exports.putBookById = (req, res, next) => {
  const bookId = req.params.bookId;
  const { title, author, genre, publicationDate } = req.body;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const err = new Error("No book");
        throw err;
      }
      book.title = title;
      book.author = author;
      book.genre = genre;
      book.publicationDate = publicationDate;
      return book.save();
    })
    .then((book) => {
      res.status(200).json({ status: "SUCCESS", data: book });
    })
    .catch((err) => {
      next(err);
    });
};
exports.deleteBookById = (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const err = new Error("No book");
        throw err;
      }

      return Book.findByIdAndDelete(bookId);
    })
    .then((book) => {
      res.status(204).json({});
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
