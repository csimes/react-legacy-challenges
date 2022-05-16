import React from "react";
import { Container } from "reactstrap";
import DogIndex from "./DogIndex";

const Dogs = () => {
  return (
    <Container className="App">
      <h1 className="App-intro">Dog Challenge </h1>
      <DogIndex />
    </Container>
  );
};

export default Dogs;
