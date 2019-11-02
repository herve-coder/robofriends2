import React from "react";
import "./Searchbar.css";
const Searchbar = ({ SearchChange }) => {
  return (
    <form>
      <input
        className="pa3 mb3 input"
        type="search"
        placeholder="Search robots"
        onChange={SearchChange}
      ></input>
    </form>
  );
};

export default Searchbar;
