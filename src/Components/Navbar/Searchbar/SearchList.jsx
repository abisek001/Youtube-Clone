import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";

function SearchList({ Suggestion, setSearchQuery }) {
  return (
    <div className="searchList_Container">
      {Suggestion.map((item) => {
        return (
          <p
            className="itemTitle"
            key={item}
            onClick={() => setSearchQuery(String(item))} 
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
