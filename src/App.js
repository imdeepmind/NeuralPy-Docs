import React, { useState, useEffect, version } from 'react';
import Axios from "axios";

import Home from "./Container/Home";

const App = () => {
  const [contents, setContent] = useState(null);
  const [docs, setDocs] = useState(null);
  const [docVersion, setDocVersion] = useState([{"label": "Latest", "value": "master"}]);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadVersions = async () => {
    try {
      const versionURL = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/master/docs/versions.json";
      const versions = await Axios.get(versionURL);

      if (!versions && version.data) {
        throw new Error("Not able to load the versions list");
      }

      setDocVersion(versions.data);
      loadContent(versions.data);
    } catch (error) {
      setError(error);
    }
  }

  const loadContent = async (versions) => {
    setLoading(true);
    try {
      const selectedDoc = selectedVersion ? selectedVersion.value : versions[0].value;
      const contentUrl = `https://raw.githubusercontent.com/imdeepmind/NeuralPy/${selectedDoc}/docs/contents.json`;
      const docUrl = `https://raw.githubusercontent.com/imdeepmind/NeuralPy/${selectedDoc}/docs/DOCS.md`;
      
      const content = await Axios.get(contentUrl);
      const docs = await Axios.get(docUrl);

      if (!(content && content.data)) {
        throw new Error("Not able to load the contents catalog");
      }
    
      if (!(docs && docs.data)) {
        throw new Error("Not able to load the documentation markdown files");
      }

      setContent(content.data);
      setDocs(docs.data);
      setError(null);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  const changeVersion = (selectedOption) => {
    setSelectedVersion(selectedOption);
  }

  useEffect(() => {
    loadVersions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVersion]);

  return (
    <Home
      contents={contents || {}}
      docs={docs}
      loading={loading}
      error={error}
      versions={docVersion}
      selectedVersion={selectedVersion}
      changeVersion={changeVersion}
    />
  );
}

export default App;
