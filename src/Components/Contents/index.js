import React, { useState, useEffect } from "react";

import Documentation from "./components/Documentation";
import Loading from "../Loading";
import Error from "../Error";

import { LoadDocsAPI } from "../../APIs";

const Contents = (props) => {
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = props.match.params["page_name"];
  const hash = props.location.hash;

  useEffect(() => {
    const loadDocs = async () => {
      try {
        setLoading(true);
        const data = await LoadDocsAPI(url);

        setDocs(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    loadDocs();
  }, [url]);

  if (loading)
    return (
      <div className="loading-page">
        <Loading />
      </div>
    );

  if (error) return <Error error={error} />;

  return <Documentation docs={docs} hash={hash} />;
};

export default Contents;
