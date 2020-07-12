import React, { useState, useEffect } from 'react';
import { LoadDocsAPI } from "../../APIs";



import MarkDown from "react-markdown";
import { Element } from "react-scroll";
import Highlight from "react-highlight";
import { Switch, Route } from 'react-router-dom';

// Code credit goes to https://github.com/shyaniv7
// const flatten = (text, child) => {
//   return typeof child === 'string'
//     ? text + child
//     : React.Children.toArray(child.props.children).reduce(flatten, text);
// };

// const HeadingRenderer = props => {
//   const children = React.Children.toArray(props.children);
//   const text = children.reduce(flatten, '');
//   const slug = text.toLowerCase().replace(/\W/g, '-');

//   const headerTag = React.createElement('h' + props.level, { id: slug }, props.children);

//   return <Element name={slug}>{headerTag}</Element>
// };

// const CodeRenderer = ({value}) => {
//   return (
//     <Highlight className="content-code" language="javascript">
//       {`${value}`}
//     </Highlight>
//   )
// }

// const Contents = props => {
//   const { docs } = props;

//   return (
//     <div className="markdown-docs">
//       <MarkDown source={docs} renderers={{ 
//         heading: HeadingRenderer,
//         code: CodeRenderer }} />
//     </div>
//   )
// }

const Contents = (props) => {
  const [docs, setDocs] = useState(null);
  const url = props.match.params["page_name"];

  useEffect(() => {
    const loadDocs = async () => {
      try {
        const data = await LoadDocsAPI(url);

        console.log(data)
      } catch (error) {
        //TODO
      }
    }

    loadDocs();
  }, [url])

  return (
    <div>

    </div>
  )
}

export default Contents;