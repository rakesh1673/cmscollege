import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  grow: {
    flexGrow: 0.5,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logo: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 15),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

const ToolbarCompo = (props) => {
  console.log("toolbars", props);
  const { classes } = props;
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{padding:'5px',backgroundColor:'white'}}>
        <Toolbar>
          <div>
            {/* <Link to='/'>
            <img
              src="https://www.ecowaytechnologies.com/images/logo.png"
              height="auto"
              width="35%"
            />
            </Link> */}
          </div>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <div className={classes.grow} />
          <div style={{ display: "flex" }}>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
              <Link style={{color:'black', textDecoration:'none'}} to='/'>
              Home
              </Link>
            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
              <Link to='/aboutus' style={{color:'black', textDecoration:'none'}}>
              About Us
              </Link>

            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
              <Link to='/products' style={{color:'black', textDecoration:'none'}}>
              Products
              </Link>
            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
               <Link to='/services' style={{color:'black', textDecoration:'none'}}>
              Services
              </Link>
            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
               <Link to='/clients' style={{color:'black', textDecoration:'none'}}>
              Clients
              </Link>
            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
               <Link to='/projects' style={{color:'black', textDecoration:'none'}}>
              Projects
              </Link>
            </Typography>
            <Typography
              style={{ fontSize: "21px" }}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
               <Link to='/contact' style={{color:'black', textDecoration:'none'}}>
              Contact
              </Link>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <IconButton
              edge="start"
              className={classes.sectionMobile}
              color="inherit"
              aria-label="open drawer"
              onClick={props.openDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(ToolbarCompo);
