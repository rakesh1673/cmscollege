import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { People,Phone,PermMedia,PanoramaFishEye,Home,Info } from "@material-ui/icons";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerCompo = (props) => {
  const { classes } = props;

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
     <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
           
            className={classes.root}
          >
            <Link to='/' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            </Link>
            <Link to='/services' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <PanoramaFishEye />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            </Link>
            <Link to='/projects' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <PermMedia />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            </Link>
            <Link to='/clients' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Our Clients" />
            </ListItem>
            </Link>
            <Link to='/products' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            </Link>
            <Divider/>
            <Link to='/aboutus' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            </Link>
            <Link to='/contact' style={{color:'#000'}}>
            <ListItem button>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            </Link>
      </List>
    </div>
  );
  return (
    <Drawer
      anchor="right"
      open={props.left}
      onClose={props.toggleDrawerHandler}
    >
      {sideList("left")}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerCompo);