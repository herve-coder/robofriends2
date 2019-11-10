import React from "react";
import "./Searchbar.css";
const Searchbar = ({ SearchChange }) => {
  return (
    <form>
      <label for="search" className="f6 b db mb2 white">
        Filter robots here
      </label>
      <input
        id="search"
        className="pa3 mb3 input"
        type="search"
        placeholder="Search robots"
        onChange={SearchChange}
      ></input>
    </form>
  );
};

export default Searchbar;
