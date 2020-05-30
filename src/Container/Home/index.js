import React from 'react';
import { animateScroll as scroll } from "react-scroll";

import Error from "../../Components/Error";

import Loading from "../../Components/Loading";

import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Contents from "../../Components/Contents";

const Home = props => {
  const { contents, docs, loading, error } = props;

  const buildPage = () => {
    if (loading) return <Loading />

    if (error) return <Error error={error} />
    return (
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3"><Navigation navLinks={contents["contents"]} /></div>
        <div className="col-12 col-md-8 col-lg-9"><Contents docs={docs}/></div>
        <button className="scroll-to-top" onClick={() => scroll.scrollToTop()}>Top</button>
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