import React from 'react';

import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Contents from "../../Components/Contents";

const Home = props => {
  const { contents, loading, error } = props;

  const buildPage = () => {
    if (loading) {
      return null;
    }

    if (error) {
      return null;
    }

    return (
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3"><Navigation navLinks={contents["navigation"]} /></div>
        <div className="col-12 col-md-8 col-lg-9"><Contents /></div>
      </div>
    )
  }

  return (
    <div className="container">
      <Header />
      {buildPage()}
    </div>
  )
}

export default Home;