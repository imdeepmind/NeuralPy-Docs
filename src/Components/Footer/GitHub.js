import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {},
});

const useStyles = makeStyles(styles);

const GitHub = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            align="center"
            color="primary"
          >
            69
          </Typography>
          <Typography align="center" color="primary">
            Stars
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            align="center"
            color="primary"
          >
            4
          </Typography>
          <Typography align="center" color="primary">
            Open Issues
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            gutterBottom
            color="primary"
            variant="h3"
            component="h3"
            align="center"
          >
            MIT
          </Typography>
          <Typography align="center" color="primary">
            License
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GitHub;
