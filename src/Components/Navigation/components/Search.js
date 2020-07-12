import React, { useState, useEffect } from "react";

const Search = ({ initialValue, onChange }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    initialValue && setQuery(initialValue);
  }, [initialValue]);

  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type="search"
      className="nav-search"
      placeholder="Search the documentation"
      value={query}
      onChange={handleSearch}
    />
  );
};

export default Search;
