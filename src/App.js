import React, { useState, useEffect } from 'react';
import Axios from "axios";

import Home from "./Container/Home";

const contentUrl = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/master/docs/contents.json";
const docUrl = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/master/docs/DOCS.md";

const getDocumentationContents = async () => {
  const content = await Axios.get(contentUrl);
  const docs = await Axios.get(docUrl);

  if (!(content && content.data)) {
    throw new Error("Not able to load the contents catalog");
  }

  if (!(docs && docs.data)) {
    throw new Error("Not able to load the documentation markdown files");
  }

  return { 'contents': content.data, 'docs': docs.data };
}

const setDataOnLocalStorage = (contents, docs) => {
  const data = {
    contents, docs
  }

  localStorage.setItem('documentation', JSON.stringify(data));
  localStorage.setItem('documentation_created_at', +new Date());
}

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('documentation'));
}

const doWeNeedToLoadNewDocumentation = () => {
  const created_at = localStorage.getItem('documentation_created_at');

  const currentTime = +new Date();

  return currentTime - created_at > 259200 * 1000;
}

const loadDocumentationData = async () => {
  let data = null;

  if (doWeNeedToLoadNewDocumentation()) {
    data = await getDocumentationContents();
    setDataOnLocalStorage(data.contents, data.docs);
  } else {
    data = getDataFromLocalStorage();
  }

  return { 'contents': data.contents, 'docs': data.docs };
}

const App = () => {
  const [contents, setContent] = useState(null);
  const [docs, setDocs] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = async () => {
    setLoading(true);
    try {
      if (!contents) {
        const { contents, docs } = await loadDocumentationData();

        setContent(contents);
        setDocs(docs);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Home
      contents={contents || {}}
      docs={docs}
      loading={loading}
      error={error}
    />
  );
}

export default App;
