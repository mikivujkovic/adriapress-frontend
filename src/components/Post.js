import React from "react";

const Post = props => {
  return <p>Post {props.match.params.id}</p>;
};

export default Post;
