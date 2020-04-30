import React from "react";
import "./styles.css";
import Header from "./components/Header";
import HeaderDesk from "./components/HeaderDesk";
import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Main";
import Category from "./components/Category";
import Search from "./components/Search";
import Post from "./components/Post";
import Footer from "./components/Footer";

export default function App() {
  const isLarge = useMediaQuery("(min-width:1280px)");
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isLarge ? <HeaderDesk /> : <Header />}
        <div className="appContent">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/category/:id" component={Category} />
            <Route path="/search/:term" component={Search} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
