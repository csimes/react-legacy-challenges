import React from "react";
import CatIndex from "./CatIndex";
import { Container } from "reactstrap";

const Cats = () => {
  return (
    <Container className="App">
      <h1 className="App-intro">Cat Challenge</h1>
      <CatIndex />
    </Container>
  );
};

export default Cats;
