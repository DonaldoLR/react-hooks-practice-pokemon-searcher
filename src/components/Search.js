import React, { useState } from "react";

function Search({ setSearch, searchText }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchText} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
