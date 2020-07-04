import React from "react";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  Home,
  CloudDownload,
  Description,
  ContactSupport,
  Info,
  LibraryBooks,
  GitHub,
} from "@material-ui/icons";

import logo from "../../Assets/Images/logo.png";

const styles = (theme) => ({
  root: {},
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  links: {
    color: "white",
  },
});

const useStyles = makeStyles(styles);

const Links = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className={classes.logoContainer}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={4} className={[classes.links, classes.logoContainer]}>
          <Typography>
            NeuralPy is a High-Level Keras like deep learning library that works
            on top of PyTorch written in pure Python. NeuralPy can be used to
            develop state-of-the-art deep learning models in a few lines of
            code. It provides a Keras like simple yet powerful interface to
            build and train models.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.links}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CloudDownload />
              </ListItemIcon>
              <ListItemText primary={"Installation"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary={"Documentation"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactSupport />
              </ListItemIcon>
              <ListItemText primary={"Support"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary={"Blogs & Tutorials"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary={"GitHub"} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Links;
