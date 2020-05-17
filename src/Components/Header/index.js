import React from "react"

const Header = () => {
  return (
    <div className="header">
      <img src={require("../../Assets/logo.png")} alt="neuralpy logo" />
      <p>A <strong>Keras</strong> like <strong>deep learning</strong> framework works on top of <strong>PyTorch</strong></p>
    </div>
  )
}

export default Header;