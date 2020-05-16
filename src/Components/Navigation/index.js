import React, { useState, useEffect } from "react";

const buildLink = links => {
  return (
    <ul>
      {links && links.map(val => {
        return (
          <li key={val.link}>
            <a href={val.link}>{val.title}</a>
            {val.urls && val.urls.length > 0 && buildLink(val.urls)}
          </li>
        )
      })}
    </ul>
  )
}

const Navigation = ({ navLinks }) => {
  const [key, setKey] = useState("");
  const [links, setLinks] = useState([]);

  const searchList = (list, key) => {
    let searchedResults = [];

    list.forEach(item => {
      const title = item.title.toLowerCase();

      const result = title.search(key);

      result >= 0 && searchedResults.push(item);

      if (item.urls && result < 0) {
        const childResults = searchList(item.urls, key);
        
        searchedResults = childResults.length > 0 ? searchedResults.concat(childResults) : searchedResults;
      }
    });

    return searchedResults;
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setKey(value);

    if (value && value.length > 2) {
      const searchedResults = searchList(navLinks, value);

      setLinks(searchedResults);
    } else {
      setLinks(navLinks);
    }
  }

  useEffect(() => {
    setLinks(navLinks)
  }, [navLinks]);
  return (
    <nav className="navigation">
      <input type="search" className="nav-search" placeholder="Search the documentation" value={key} onChange={handleSearch} />
      {buildLink(links)}
    </nav>
  )
}

export default Navigation;