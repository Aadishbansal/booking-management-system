import { useState, useEffect, useCallback, useContext } from "react";
import BookContext from "../../store/store";
const Search = (props) => {
  const ctx = useContext(BookContext);

  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    props.onFilter(filter);
  }, [filter]);
  return (
    <div className="d-flex my-3 col-10 col-lg-8 mx-auto" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        value={filter}
        onChange={handleSearch}
        aria-label="Search"
      />
    </div>
  );
};
export default Search;
