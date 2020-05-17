import React from 'react';
import Highlight from "react-highlight";
import { Element } from 'react-scroll'
 
const Contents = props => {
  const { content } = props;
  
  return (
    <div className="content-page">
      {content && content.map(val => {
        return (
          <Element key={val.key} name={`#${val.key}`} className="each-content">
            <h2 className="main-title">{val.title}</h2>
            <p className="main-subtitle">{val.subtitle}</p>
            {val.contents && val.contents.map((item, index) => {
              return (
                <div className="content-content" key={index}>
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-text">{item.text}</p>
                  {item.code && (
                    <>
                      <h5 className="content-subject-title">Example Code</h5>
                      <Highlight className="content-code" language="javascript">
                        {`${item.code}`}
                      </Highlight>
                    </>
                  )}
                  {item.links && (
                    <>
                      <h5 className="content-subject-title">Further Readings</h5>
                      <ul className="content-links">
                      {item.links.map((link, index) => {
                        return (
                          <li key={index}><a className="content-links-item" href={link.url}>{link.title}</a></li>
                        )
                      })}
                      </ul>
                    </>
                  )}
                </div>
              )
            })}
          </Element>
        )
      })}
    </div>
  )
}

export default Contents;