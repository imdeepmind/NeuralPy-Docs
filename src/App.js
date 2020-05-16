import React, { useState, useEffect } from 'react';
import Axios from "axios";

import Home from "./Container/Home";

const url = "https://raw.githubusercontent.com/imdeepmind/NeuralPy/documentation-changes/docs/contents.json";

const App = (props) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = async () => {
    setLoading(true);
    try {
      if (!content) {
        const data = await Axios.get(url);

        if (data && data.data) {
          setContent(data.data);
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
      content={content || {}}
      loading={loading}
      error={error}
    />
  );
}

export default App;
