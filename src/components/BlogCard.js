import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useFloatShadowStyles } from "@mui-treasury/styles/shadow/float";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2)
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fff 0%, #00adee 40%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  content: {
    padding: 24
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  }
}));

const BlogCard = props => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useFloatShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={props.post.acf.thumbnail} />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={props.post.date.slice(0, 10)}
          heading={props.post.title.rendered}
          body={props.post.excerpt.rendered
            .replace(/(<([^>]+)>)/gi, "")
            .slice(0, 100)
            .concat("...")}
        />
        <Button className={buttonStyles}>Pročitaj</Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
