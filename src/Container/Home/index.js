import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import Dropdown from "react-dropdown";

import Error from "../../Components/Error";

import Loading from "../../Components/Loading";

import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Contents from "../../Components/Contents";

const Home = props => {
  const { contents, docs, versions, selectedVersion, changeVersion, loading, error } = props;

  const buildPage = () => {
    if (loading) return <Loading />

    if (error) return <Error error={error} />
    return (
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3"><Navigation navLinks={contents["contents"]} /></div>
        <div className="col-12 col-md-8 col-lg-9"><Contents docs={docs} /></div>
        <button className="scroll-to-top" onClick={() => scroll.scrollToTop()}>Top</button>
      </div>
    )
  }

  const renderDropdown = () => {
    return (
      <div className="col-12 version-box">
        <p><strong>NeuralPy Version:</strong></p>
        <Dropdown options={versions} value={selectedVersion} onChange={changeVersion} />
      </div>
    )
  }

  return (
    <div className="container">
      {renderDropdown()}
      <Header />
      {buildPage()}
    </div>
  )
}

export default Home;