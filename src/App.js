import React from 'react';

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import { navLinks } from "./data";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div class="row">

        <div class="col-12 col-md-3">
          <Navigation navLinks={navLinks} />
        </div>

        <div class="col-12 col-md-9">
          <p>Context goes here</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
