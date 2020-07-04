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
  root: {
  },
});

const useStyles = makeStyles(styles);

const GitHub = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
        <Typography gutterBottom variant="h4" component="h2" align={"center"}>
        Some Stats
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3" align="center">
                69
              </Typography>
              <Typography align="center">Stars</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3" align="center">
                4
              </Typography>
              <Typography align="center">Open Issues</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3" align="center">
                MIT
              </Typography>
              <Typography align="center">License</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GitHub;
