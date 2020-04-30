import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "min(380, 90%)"
  },
  media: {
    height: 200
  },
  excerpt: {
    fontSize: "medium"
  },
  chip: {
    color: theme.palette.common.white
  },
  date: {
    marginRight: "1px"
  },
  social: {
    color: "#00adee",
    "&:hover": {
      color: "#00adee"
    },
    "&:link": {
      color: "#00adee"
    },
    "&:visited": {
      color: "#00adee"
    },
    textDecoration: "none"
  }
}));

const CardPost = props => {
  const classes = useStyles();

  const categories = [
    { id: 25, name: "Info" },
    { id: 26, name: "Politika" },
    { id: 5, name: "Kultura" },
    { id: 27, name: "Tehno" },
    { id: 7, name: "Sport" },
    { id: 28, name: "Magazin" }
  ];

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.post.acf.thumbnail}
          title={props.post.title.rendered}
        />
        <CardContent>
          <Chip
            className={classes.chip}
            label={categories.find(x => x.id === props.post.categories[0]).name}
            color="secondary"
          />
          <Link to={`/post/${props.post.id}`} className={classes.social}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.post.title.rendered}
            </Typography>
          </Link>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {props.post.excerpt.rendered}
          </Typography> */}
          <div
            className={classes.excerpt}
            dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=adriapress.me/post/${
              props.post.id
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </Button>
        <Button size="small" color="secondary">
          <a
            href={`https://twitter.com/intent/tweet?text=adrapress.me/post/${
              props.post.id
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </Button>
        {/* <div className={classes.date}>{props.post.date.slice(0, 10)}</div> */}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.date.slice(0, 10)}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardPost;
