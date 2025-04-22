import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ searchValue, setSearchValue }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};
