import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "./adria-logo-1.png";
import loginIcon from "./LogIn.png";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "40px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    minHeight: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    marginTop: "20px"
  },
  logo: {
    flexGrow: 1,
    height: "50px"
  },
  login: {
    height: "30px"
  },
  menu: {
    fontSize: "30px"
  },
  drawerPaper: {
    backgroundColor: "#00adee",
    width: "70%"
  },
  drawerTitle: {
    fontSize: "xx-large"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar elevation={0}>
          <Toolbar>
            <MoreVertIcon
              color="secondary"
              className={classes.menu}
              onClick={toggleDrawer()}
            />
            <div className={classes.logo}>
              <Link to="/">
                <img src={logo} alt="logo" style={{ height: 50 }} />
              </Link>
            </div>
            <img src={loginIcon} alt="login" className={classes.login} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Button
          color="primary"
          size="large"
          onClick={toggleDrawer()}
          className={classes.drawerTitle}
        >
          <Link to="/" className={classes.link} onClick={toggleDrawer()}>
            ADRIAPRESS
          </Link>
        </Button>
        <Button color="secondary" size="large">
          <Link
            to="/category/25"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Info
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/category/26"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Politika
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/category/5"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Kultura
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/category/27"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Tehno
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/category/7"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Sport
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/category/28"
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Magazin
          </Link>
        </Button>
        <Button color="primary" size="large">
          <Link
            to="/search/ "
            className={classes.link}
            onClick={toggleDrawer()}
          >
            Pretraga
          </Link>
        </Button>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
