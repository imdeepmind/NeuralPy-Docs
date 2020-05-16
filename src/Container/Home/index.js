import React from 'react';

import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Contents from "../../Components/Contents";

const Home = props => {
  console.log(props);
  return (
    <div className="container">
      <Header />
      <div className="row">
        {/* <div className="col-12 col-md-4 col-lg-3"><Navigation /></div> */}
        {/* <div className="col-12 col-md-8 col-lg-9"><Contents /></div> */}
      </div>
    </div>
  )
}

export default Home;