import React from "react";
import { Typography, makeStyles, Button, Grid } from "@material-ui/core";

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
  buttonBox: {
      display: "flex"
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
      <Typography align="center">
        A Keras like Deep Learning Library that works on top of PyTorch
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} justify="center" className={classes.buttonBox}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} justify="center" className={classes.buttonBox}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Installation
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} justify="center" className={classes.buttonBox}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Documentation
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
