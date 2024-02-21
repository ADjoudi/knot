import "../assets/css/Search.css";

import search_icon from "../assets/icons/search.svg";

function Search() {
  return (
    <form className="search-container">
      <img src={search_icon} alt="" />
      <input type="text" name="search" id="search" />
    </form>
  );
}

export default Search;
