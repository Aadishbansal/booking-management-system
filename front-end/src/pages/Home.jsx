import { useContext, useEffect, useState } from "react";
import BookList from "../components/book/Booklist";
import BookContext from "../store/store";
const URL = "http://localhost:8080/api/books";

const Home = () => {
  const ctx = useContext(BookContext);
  const [books, setBooks] = useState();
  const handleSearch = (e) => {
    ctx.filterBook(e.target.value);
    setBooks(ctx.filteredBook);
  };
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.data);
        ctx.populateBook(res.data);
      });
  }, []);
  return (
    <div className="container ">
      <div className="d-flex my-3 col-10 col-lg-8 mx-auto" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          onChange={handleSearch}
          aria-label="Search"
        />
      </div>
      <BookList books={books} />
    </div>
  );
};
export default Home;
