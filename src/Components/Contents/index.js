import React, { Fragment } from 'react';
import Highlight from "react-highlight";
import { Element } from 'react-scroll';

const Contents = props => {
  const { content } = props;

  const renderTitle = title => {
    return title ?
      <h2 className="main-title">{title}</h2>
      : null;
  }

  const renderSubtitle = subtitle => {
    return subtitle ? <p className="main-subtitle">{subtitle}</p> : null;
  }

  const renderSupportedArguments = supportedArguments => {
    return supportedArguments && supportedArguments.length > 0 ? (
      <p>
        {supportedArguments.map(item => {
          return (
            <Fragment key={item.name}>
              <span>{item.name}</span>
              {item.default ?
                <>
                  <span>=</span>
                  <span>{item.default}</span>
                </> : null}
            </Fragment>
          )
        })}
      </p>
    ) : null;
  }

  const renderParagraphTitle = title => {
    return <h4 className="para-title">{title}</h4>
  }

  const renderParagraphs = paragraphs => {
    const paragraphItems = [];

    return paragraphs && paragraphs.map(item => {
      if (item["title"]) {
        paragraphItems.push(renderParagraphTitle(item["title"]))
      }
    })
  }

  const buildContent = contents => {
    const itemsToRender = [];

    contents && contents.forEach(item => {
      const childItems = (
        <Element key={item.id} name={item.id} className="each-content">
          {renderTitle(item.title)}
          {renderSupportedArguments(item.supported_arguments)}
          {renderSubtitle(item.subtitle)}
          {renderParagraphs(item.paragraphs)}
        </Element>
      );
      itemsToRender.push(childItems);
    });

    return itemsToRender[0];
  }

  return (
    <div className="content-page">
      {buildContent(content)}







      {/* 

      {content && content.map(val => {
        return (
          <Element key={val.key} name={`#${val.key}`} className="each-content">


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
      })} */}
    </div>
  )
}

export default Contents;