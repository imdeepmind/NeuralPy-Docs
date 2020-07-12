import React from "react";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Contents from "./Components/Contents";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const NeuralPy = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <Navigation />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <Switch>
              <Route path={"/docs/:page_name"} component={Contents} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NeuralPy;
