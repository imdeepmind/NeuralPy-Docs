import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const SideBar = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();

  const handleChange = () => setOpen((open) => !open);

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={handleChange}
      onKeyDown={handleChange}
      className={classes.list}
    >
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
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"left"} open={open} onClose={handleChange}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
