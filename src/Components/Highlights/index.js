import React from "react";

const Highlights = () => {
  return (
    <div className="highlights">
      <h2>Key Features</h2>
      <div className="row">
        <div className="col-12 col-sm-3">
          <h3>Easy Interface</h3>
          <p>
            NeuralPy provides a Keras like Hight-Level API that simple yet
            powerful and can be used for making state-of-the-art models.
          </p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Works on top of PyTorch</h3>
          <p>
            NeuralPy works on top of PyTorch. It wraps different methods
            provided by the PyTorch in a simple APIs. As it works on top of
            PyTorch, it is extremely efficient in performing mathematical
            calculations and can work on CPU and GPU.
          </p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>NeuralPy as Helper Library</h3>
          <p>
            NeuralPy can also be used with the existing PyTorch models. It can
            work as a helper library and reduce the boilerplate code that is
            needed for training a PyTorch model.
          </p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Cross Compatible with Pytorch Models</h3>
          <p>
            NeuralPy models are just PyTorch model with some additional methods and functionality. Because of this, NeuralPy models are compatible with PyTorch. So we can create the 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
