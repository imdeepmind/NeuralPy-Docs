import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Container/Home";
import Installation from "./Container/Installation";
import Error from "./Container/Error";

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/installation" component={Installation} />
        <Route path="*" component={Error} />
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
