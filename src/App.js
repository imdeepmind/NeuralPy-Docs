import React, { useState, useEffect } from 'react';
import Axios from "axios";

import Home from "./Container/Home";

const contentUrl = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/documentation-changes/docs/contents.json";
const docUrl = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/documentation-changes/docs/DOCS.md";

const App = () => {
  const [contents, setContent] = useState(null);
  const [docs, setDocs] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = async () => {
    setLoading(true);
    try {
      if (!contents) {
        const content = await Axios.get(contentUrl);
        const docs = await Axios.get(docUrl);

        if (content && content.data) {
          setContent(content.data);
        }

        if (docs && docs.data) {
          setDocs(docs.data);
        }
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
