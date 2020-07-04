import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {},
});

const useStyles = makeStyles(styles);

const Features = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h4" component="h2" align={"center"}>
        Key Features
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Easy Interface
              </Typography>
              <Typography>
                PyTorch is an open-source machine learning framework that
                accelerates the path from research prototyping to production
                deployment developed by Facebook runs on both CPU and GPU.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Easy Interface
              </Typography>
              <Typography>
                PyTorch is an open-source machine learning framework that
                accelerates the path from research prototyping to production
                deployment developed by Facebook runs on both CPU and GPU.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Easy Interface
              </Typography>
              <Typography>
                PyTorch is an open-source machine learning framework that
                accelerates the path from research prototyping to production
                deployment developed by Facebook runs on both CPU and GPU.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Easy Interface
              </Typography>
              <Typography>
                PyTorch is an open-source machine learning framework that
                accelerates the path from research prototyping to production
                deployment developed by Facebook runs on both CPU and GPU.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
