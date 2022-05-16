import React from "react";
import SearchIndex from "./SearchIndex";
import { Container } from "reactstrap";

const Search = () => {
  return (
    <Container className="App">
      <h1 className="App-intro">Search Challenge</h1>
      <SearchIndex />
    </Container>
  );
};

export default Search;
