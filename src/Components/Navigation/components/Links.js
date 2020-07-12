import React from "react";
import { Link } from "react-scroll";

const Links = ({ contents }) => {
  const buildLink = (links) => {
    return (
      <ul>
        {links &&
          links.map((val) => {
            return (
              <li key={val.id}>
                <Link
                  to={val.id}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
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
