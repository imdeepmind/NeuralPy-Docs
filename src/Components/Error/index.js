import React from 'react'

const Error = (props) => {
  const { error } = props;

  return (
    <div className="error-page">
      <h2>{error.message || String(error) || "Something went wrong with the documentation"}</h2>
      <p>Please refresh the page and check your internet connection. If this issue still exists, then please contact with the site admin <br /><a href="mailto:abhishek.chatterjee97@protonmail.com">Abhishek Chatterjee</a></p>
    </div>
  )
}

export default Error;