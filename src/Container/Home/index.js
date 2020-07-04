import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Hero from "./Hero";
import Features from "./Features";

const styles = (theme) => ({
  root: {},
});

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Hero />
      <Features />
    </Container>
  );
};

export default Home;
