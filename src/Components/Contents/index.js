import React from 'react';
import MarkDown from "react-markdown";
import { Element } from "react-scroll";

// Code credit goes to https://github.com/shyaniv7
const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const HeadingRenderer = props => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');

  const headerTag = React.createElement('h' + props.level, { id: slug }, props.children);

  return <Element name={slug}>{headerTag}</Element>
};

const Contents = props => {
  const { docs } = props;

  return (
    <div className="markdown-docs">
      <MarkDown source={docs} renderers={{ heading: HeadingRenderer }} />
    </div>
  )
}

export default Contents;