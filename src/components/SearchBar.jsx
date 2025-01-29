import React from "react";

const SearchBar = (props) => {
  const { handleQuery, query } = props;

  return (
    <div className="col-6 d-flex justify-content-end searchbarCon">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
        className="searchbar rounded-pill col-12 col-md-8 p-1 px-2"
      />
    </div>
  );
};

export default SearchBar;
