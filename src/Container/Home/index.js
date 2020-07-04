import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Hero from "./Hero";
import Features from "./Features";
import GitHub from "./GitHub";

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
      <GitHub></GitHub>
    </Container>
  );
};

export default Home;
