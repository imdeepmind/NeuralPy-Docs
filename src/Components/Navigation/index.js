import React from "react";

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
  return (
    <nav>
      {buildLink(navLinks)}
    </nav>
  )
}

export default Navigation;