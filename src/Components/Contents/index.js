import React from 'react'

const Contents = props => {
  const { content } = props;
  console.log(content);
  return (
    <div className="content-page">
      {content && content.map(val => {
        return (
          <div key={val.key} id={val.key} className="each-content">
            <h2 className="main-title">{val.title}</h2>
            <p className="main-subtitle">{val.subtitle}</p>
            {val.contents && val.contents.map((item, index) => {
              return (
                <div className="content-content" key={index}>
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-text">{item.text}</p>
                  {item.code && (<code className="content-code">{item.code}</code>)}
                  {item["further-reading"] && <a className="content-further-reading-url" href={item["further-reading"].url}>{item["further-reading"].text}</a>}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Contents;