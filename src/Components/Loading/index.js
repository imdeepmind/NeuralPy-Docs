import React from "react";

import loading from "../../Assets/loader.gif";

const Loading = ({ className }) => {
  return <img className={className} alt="Loading..." src={loading} />;
};

export default Loading;
