import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchItem, setSearchItem] = useState(false);
  const Suggestion = [
    "The Marvel",
    "Iron man",
    "Spider man",
    "Hulk",
    "Avenger",
    "Super man",
    "Bat man"
  ].filter(i => i.toUpperCase().includes(searchQuery.toUpperCase()));

  return (
    <div className="search_Container">
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search"
          className="searchInput"
          aria-label="Search"
          value={searchQuery}
          onChange={i => setSearchQuery(i.target.value)}
          onClick={(e) => setSearchItem(true)}
        />
        {console.log(searchQuery)}
      </div>
      <div className="searchIcon_Box">
        <FaSearch
          className="searchIcon"
          onClick={(e) => setSearchItem(false)}
        />
      </div>
      <BsMicFill className="micIcon" />
      {searchQuery && searchItem && (
        <SearchList Suggestion={Suggestion} setSearchQuery={setSearchQuery} />
      )}
    </div>
  );
}

export default Searchbar;
