import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import GitHub from "./GitHub";
import Links from "./Links";

const styles = (theme) => console.log(theme) || ({
  root: {
      width: "100%",
      backgroundColor: theme.palette.common.black,
      paddingTop: 100,
      paddingBottom: 100
  },
  text: {
    color: "white"
  }
});

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GitHub />
      <Links />
      <div>
        <Typography align="center" className={classes.text}>Copyright &copy; 2020 Abhishek Chatterjee (imdeepmind) </Typography>
      </div>
    </div>
  );
};

export default Footer;
