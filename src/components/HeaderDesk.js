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
import { makeStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    width: "100vw"
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
  upperHeader: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    flex: 1,
    width: "100%"
  },
  lowerHeader: {
    display: "flex",
    flex: 1,
    width: "100vw",
    backgroundColor: "#00adee",
    fontSize: "large",
    justifyContent: "space-between",
    padding: "5px",
    margin: "20 0 0 0"
  },
  logo: {
    flexGrow: 1,
    alignSelf: "center"
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    fontSize: "large"
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1.2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    color: "#fff",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
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

export default function HeaderDesk(props) {
  const classes = useStyles();
  const barHeight = 100;
  const logoHeight = 30;

  const [searchValue, setSearchValue] = useState("");

  let history = useHistory();

  const handleSearch = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      setSearchValue("");
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
              <div className={classes.upperHeader}>
                <MoreVertIcon
                  color="primary"
                  style={{ fontSize: logoHeight }}
                  disabled
                />
                <div className={classes.logo}>
                  <Link to="/">
                    <img src={logo} alt="logo" style={{ height: barHeight }} />
                  </Link>
                </div>
                <img
                  src={loginIcon}
                  alt="login"
                  style={{ height: logoHeight }}
                />
              </div>
              <div className={classes.lowerHeader}>
                <Button color="primary" size="large">
                  <Link to="/category/25" className={classes.link}>
                    Info
                  </Link>
                </Button>
                <Button color="primary" size="large">
                  <Link to="/category/26" className={classes.link}>
                    Politika
                  </Link>
                </Button>
                <Button color="primary" size="large">
                  <Link to="/category/5" className={classes.link}>
                    Kultura
                  </Link>
                </Button>
                <Button color="primary" size="large">
                  <Link to="/category/27" className={classes.link}>
                    Tehno
                  </Link>
                </Button>
                <Button color="primary" size="large">
                  <Link to="/category/7" className={classes.link}>
                    Sport
                  </Link>
                </Button>
                <Button color="primary" size="large">
                  <Link to="/category/28" className={classes.link}>
                    Magazin
                  </Link>
                </Button>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Pretraga…"
                    value={searchValue}
                    onChange={e => {
                      setSearchValue(e.target.value);
                    }}
                    onKeyPress={handleSearch}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
