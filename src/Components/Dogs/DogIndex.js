import React, { Component } from "react";
import { Button, Container, Row } from "reactstrap"

class DogIndex extends Component {
  constructor(){
    super()
    this.state = { 
      imageURL: ""
    }
  }

  dogFetch = (e) => {
    e.preventDefault()
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {
    this.setState({
      imageURL: res.message
    })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() { 
    return (
        <Container>
                    <Row>
                        <Button
                            outline
                            color="info"
                            style={{ display: "block", margin: "5px auto" }}
                            onClick={this.dogFetch}
                        >
                            Fetch!
                        </Button>
                    </Row>
            <Row>
                <img
                    alt=""
                    style={{
                        maxHeight: "500px",
                        maxWidth: "375px",
                        display: "block",
                        margin: "auto",
                    }}
                    src={this.state.imageURL}
                />
            </Row>
        </Container>
    );
  }
}

export default DogIndex;
