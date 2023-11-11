import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";

function Searchbar() {
  const [searchQurey, setSearchQurey] = useState("");
  const [searchItem, setSearchItem] = useState(false);
  const Suggestion = [
    "The Marvel",
    "Iron man",
    "Spider man",
    "Hulk",
    "Avernger",
    "Super man",
    "Bat man",
  ].filter((i) => i.toUpperCase().includes(searchQurey.toUpperCase()));
  return (
    <div className="search_Container">
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search"
          className="searchInput"
          aria-label="Search"
          value={searchQurey}
          onChange={(i) => setSearchQurey(i.target.value)}
          onClick={(e) => setSearchItem(true)}
        />
      </div>
      <div className="searchIcon_Box">
        <FaSearch
          className="searchIcon"
          onClick={(e) => setSearchItem(false)}
        />
      </div>
      <BsMicFill className="micIcon" />
      {searchQurey && searchItem && (
        <SearchList Suggestion={Suggestion} setSearchQurey={setSearchQurey} />
      )}
    </div>
  );
}

export default Searchbar;
