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

  const renderParagraphTitle = (title, index) => {
    return <h4 key={index} className="para-title">{title}</h4>
  }

  const renderParagraphText = (text, index) => {
    return <p key={index} className="para-text">{text}</p>
  }

  const renderParagraphList = (list, index) => {
    return (<ul key={index}>
      {list.map((item, i) => {
        return <li key={i}>{item}</li>
      })}
    </ul>)
  }

  const renderParagraphCode = (code, index) => {
    return (
      <Highlight key={index} className="content-code" language="javascript">
        {`${code}`}
      </Highlight>
    )
  }

  const renderParagraphs = paragraphs => {
    const paragraphItems = [];

    paragraphs && paragraphs.forEach((item, index) => {
      if (item["title"]) {
        paragraphItems.push(renderParagraphTitle(item["title"], index));
      } else if (item["text"]) {
        paragraphItems.push(renderParagraphText(item["text"], index));
      } else if (item["list"]) {
        paragraphItems.push(renderParagraphList(item["list"], index));
      } else if (item["code"]) {
        paragraphItems.push(renderParagraphCode(item["code"], index));
      }
    });

    return paragraphItems;
  }

  const renderFurtherReadings = furtherReadings => {
    return furtherReadings && furtherReadings.length > 0 ? (
      <>
        <h5 className="content-subject-title">Further Readings</h5>
        <ul className="content-links">
          {furtherReadings.map((item, index) => {
            return (
              <li key={index}><a className="content-links-item" href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
      </>
    ) : null;
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
          {renderFurtherReadings(item.further_readings)}
          {item.contents && buildContent(item.contents)}
        </Element>
      );
      itemsToRender.push(childItems);
    });

    return itemsToRender;
  }

  return (
    <div className="content-page">
      {buildContent(content)}
    </div>
  )
}

export default Contents;