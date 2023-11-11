import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";

function SearchList({ Suggestion, setSearchQurey }) {
  return (
    <div className="searchList_Container">
      {Suggestion.map((item) => {
        return (
          <p
            className="itemTitle"
            key={item}
            onClick={(i) => setSearchQurey(i)}
          >
            <FaSearch className="recent_Search_Logo" />
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default SearchList;
