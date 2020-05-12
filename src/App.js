import React from 'react';
function App() {
  return (
    <div className="App">
      <div class="header">
        <img src={require("./assets/logo.png")} alt="neuralpy logo" />
        <p>A <strong>Keras</strong> like <strong>deep learning</strong> framework work on top of <strong>PyTorch</strong></p>
      </div>
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
