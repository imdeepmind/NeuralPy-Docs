import React from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";

import logo from "../../Assets/Images/logo.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 600,
  },
  logo: {
    width: 200,
  },
  buttonsBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
  },
});

const useStyle = makeStyles(styles);

const Hero = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <Typography>
        A Keras like Deep Learning Library that works on top of PyTorch
      </Typography>
      <div className={classes.buttonsBox}>
        <Button variant="outlined" color="primary" className={classes.button}>
          Get Started
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Installation
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Documentation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
