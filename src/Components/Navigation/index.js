import React, { useState, useEffect } from "react";

import { LoadContentsAPI } from "../../APIs";

import Search from "./components/Search";
import Links from "./components/Links";

const Navigation = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const loadContents = async () => {
      try{
        const data = await LoadContentsAPI();
      
        setContents(data.contents)
      } catch (error) {
        //TODO
      }
  
    }

    loadContents();
  }, [])

  return (
    <nav className="navigation">
      <Search initialValue={""} />
      <Links contents={contents} />
    </nav>
  )
}

// const Navigation = (props) => {
//   const { navLinks } = props;

//   const [key, setKey] = useState("");
//   const [links, setLinks] = useState([]);

//   const buildLink = links => {
//     return (
//       <ul>
//         {links && links.map(val => {
//           return (
//             <li key={val.id}>
//               <Link to={val.id} spy={true} smooth={true} offset={-10} duration={500} >{val.title}</Link>
//               {val.contents && val.contents.length > 0 && buildLink(val.contents)}
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }

//   const searchList = (list, key) => {
//     let searchedResults = [];

//     list.forEach(item => {
//       const title = item.title.toLowerCase();
//       key = key.toLowerCase();

//       const result = title.search(key);

//       result >= 0 && searchedResults.push(item);

//       if (item.contents && result < 0) {
//         const childResults = searchList(item.contents, key);

//         searchedResults = childResults.length > 0 ? searchedResults.concat(childResults) : searchedResults;
//       }
//     });

//     return searchedResults;
//   }

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setKey(value);

//     if (value && value.length > 2) {
//       const searchedResults = searchList(navLinks, value);

//       setLinks(searchedResults);
//     } else {
//       setLinks(navLinks);
//     }
//   }

//   useEffect(() => {
//     setLinks(navLinks)
//   }, [navLinks]);

//   return (
//     <nav className="navigation">
//       <input type="search" className="nav-search" placeholder="Search the documentation" value={key} onChange={handleSearch} />
//       {buildLink(links)}
//     </nav>
//   )
// }

export default Navigation;