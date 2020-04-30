import React from "react";

const Search = props => {
  return <p>Search: {props.match.params.term}</p>;
};

export default Search;
