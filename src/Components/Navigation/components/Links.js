import React from "react";
import { Link } from "react-router-dom";

const Links = ({ contents }) => {
  const buildLink = (links) => {
    return (
      <ul>
        {links &&
          links.map((val) => {
            return (
              <li key={val.id}>
                <Link
                  to={val.url}
                >
                  {val.title}
                </Link>
                {val.contents &&
                  val.contents.length > 0 &&
                  buildLink(val.contents)}
              </li>
            );
          })}
      </ul>
    );
  };

  return buildLink(contents);
};

export default Links;
