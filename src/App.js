import React, { useState, useEffect, version } from 'react';
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

const App = () => {
  const [contents, setContent] = useState(null);
  const [docs, setDocs] = useState(null);
  const [docVersion, setDocVersion] = useState({"name": "Latest", "id": "master"});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = async () => {
    setLoading(true);
    try {
      if (!contents) {
        const contentUrl = `https://raw.githubusercontent.com/imdeepmind/NeuralPy/${docVersion.id}/docs/contents.json`;
        const docUrl = `https://raw.githubusercontent.com/imdeepmind/NeuralPy/${docVersion.id}/docs/DOCS.md`;
        const versionURL = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/master/docs/versions.json";

        const content = await Axios.get(contentUrl);
        const docs = await Axios.get(docUrl);
        const versions = await Axios.get(versionURL);


        if (!(content && content.data)) {
          throw new Error("Not able to load the contents catalog");
        }
      
        if (!(docs && docs.data)) {
          throw new Error("Not able to load the documentation markdown files");
        }

        if (!versions && version.data) {
          throw new Error("Not able to load the versions list");
        }

        setContent(contents);
        setDocs(docs);
        setDocVersion(versions);
      }
    } catch (error) {
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
