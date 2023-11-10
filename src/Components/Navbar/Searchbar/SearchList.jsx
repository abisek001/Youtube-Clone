import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";

function SearchList({ Suggestion }) {
  return (
    <div className="searchList_Container">
      {Suggestion.map((item) => {
        return (
          <p className="itemTitle" key={item}>
            <FaSearch />
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default SearchList;
