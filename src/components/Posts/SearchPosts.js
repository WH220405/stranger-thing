//import { useState } from "react";

const SearchPosts = props => {
  const [searchBar, setSearchBar] = [props.searchBar, props.setSearchBar];

  const changeHandle = e => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">SearCh Posts</label>
        <fieldset>
          <input
            id="search"
            type="text"
            value={searchBar}
            onChange={changeHandle}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchPosts;
