import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import GitHub from "./GitHub";
import Links from "./Links";

import { getRepoData } from "../../APIs";

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
  const [repoData, setRepoData] = useState({
    'stars': 0,
                'open_issues': 0,
                'license': 0
  });
  const classes = useStyles();

  const loadRepoData = async () => {
    const result = await getRepoData();

    setRepoData(result);
  }

  useEffect(() => {
    loadRepoData();
  }, []);

  return (
    <div className={classes.root}>
      <GitHub repoData={repoData} />
      <Links />
      <div>
        <Typography align="center" className={classes.text}>Copyright &copy; 2020 Abhishek Chatterjee (imdeepmind) </Typography>
      </div>
    </div>
  );
};

export default Footer;
