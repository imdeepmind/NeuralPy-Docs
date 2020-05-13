import React from 'react';

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div class="row">
        <div class="col-12 col-md-3">
          <nav>
            <ul>
              <li>
                <a href="#">Introduction</a>
                <ul>
                  <li>
                    <a href="#">Introduction</a>
                    <ul>
                      <li>
                        <a href="#">Introduction</a>
                      </li>
                      <li>
                        <a href="#">Introduction</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Introduction</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Introduction</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-12 col-md-9">
          <p>Context goes here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
