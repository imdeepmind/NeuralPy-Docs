import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {},
});

const useStyles = makeStyles(styles);

const Installation = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      
    </Container>
  );
};

export default Installation;
