import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import CardPost from "./Card";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./BlogCard";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: "10px"
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    flexGrow: 1
  },
  pagination: {
    diplay: "flex",
    alignItems: "center",
    justifyItems: "center",
    alignSelf: "center",
    marginTop: "20px"
  },
  content: {
    diplay: "flex",
    alignItems: "center",
    justifyItems: "center",
    alignSelf: "center",
    margin: "0 auto",
    maxWidth: "min(1200px, 90%)"
  }
}));

function Home() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://biohackers.me/wp-json/wp/v2/posts?per_page=10&page=${page}`
      );
      //console.log(result.data);
      // console.log(result.headers);
      setData(result.data);
      setTotal(result.headers["x-wp-total"]);
      setPages(result.headers["x-wp-totalpages"]);
      window.scrollTo(0, 0, { behaviour: "smooth" });
    };

    fetchData();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container justify="center" spacing={5}>
          {data.map(post => (
            <Grid item key={post.id} xs={12} sm={6} lg={4} align="center">
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={pages.toString()}
          color="secondary"
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Home;
