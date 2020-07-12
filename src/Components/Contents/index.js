import React, { useState, useEffect } from 'react';

import Documentation from "./components/Documentation";
import Loading from "../Loading";

import { LoadDocsAPI } from "../../APIs";

const Contents = (props) => {
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = props.match.params["page_name"];

  useEffect(() => {
    const loadDocs = async () => {
      try {
        setLoading(true);
        const data = await LoadDocsAPI(url);

        setDocs(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    loadDocs();
  }, [url]);

  if (loading) return <div className="loading-page"><Loading /></div>

  return <Documentation docs={docs} />
}

export default Contents;