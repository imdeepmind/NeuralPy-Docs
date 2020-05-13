import React from "react"

const Header = () => {
  return (
    <div class="header">
      <img src={require("../../assets/logo.png")} alt="neuralpy logo" />
      <p>A <strong>Keras</strong> like <strong>deep learning</strong> framework work on top of <strong>PyTorch</strong></p>
    </div>
  )
}

export default Header;