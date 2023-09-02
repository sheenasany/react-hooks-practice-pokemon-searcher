import React from "react";

function Search({ setSearchPoke }) {

  const onSearch = (e) => {
    setSearchPoke(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={e => onSearch(e)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
