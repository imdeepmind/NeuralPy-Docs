import React, { useState, useEffect } from "react";

import { LoadContentsAPI } from "../../APIs";

import Search from "./components/Search";
import Links from "./components/Links";

const Navigation = () => {
  const [contents, setContents] = useState([]);
  const [backupContents, setBackupContents] = useState([]);

  useEffect(() => {
    const addLinks = (links, id) => {
      return {
        ...links,
        url: `/${id}#${links.id}`,
        contents:
          links.contents && links.contents.length > 0
            ? links.contents.map((val) => addLinks(val, id))
            : null,
      };
    };

    const buildLinks = (links) => {
      const contents = links.contents;

      return contents.map((val) => addLinks(val, val.id));
    };

    const loadContents = async () => {
      try {
        const data = await LoadContentsAPI();
        const links = buildLinks(data);

        setContents(links);
        setBackupContents(links);
      } catch (error) {
        //TODO
      }
    };

    loadContents();
  }, []);

  const searchList = (list, key) => {
    let searchedResults = [];

    list.forEach((item) => {
      const title = item.title.toLowerCase();
      key = key.toLowerCase();

      const result = title.search(key);

      result >= 0 && searchedResults.push(item);

      if (item.contents && result < 0) {
        const childResults = searchList(item.contents, key);

        searchedResults =
          childResults.length > 0
            ? searchedResults.concat(childResults)
            : searchedResults;
      }
    });

    return searchedResults;
  };

  const handleSearch = (value) => {
    if (value && value.length > 2) {
      value = value.toLowerCase();
      const searchedResults = searchList(backupContents, value);

      setContents(searchedResults);
    } else {
      setContents(backupContents);
    }
  };

  return (
    <nav className="navigation">
      <Search initialValue={""} onChange={handleSearch} />
      <Links contents={contents} />
    </nav>
  );
};

export default Navigation;
