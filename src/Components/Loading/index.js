import React from 'react'

const Loading = (props) => {
  const { error } = props;

  return (
    <div className="loading-page">
      <h2>Hold right</h2>
      <p>we're loading content for you</p>
    </div>
  )
}

export default Loading;