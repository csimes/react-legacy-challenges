import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardGroup,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import cat from "../Assets/catimage.jpg";
import dog from "../Assets/dogimage.jpg";
import search from "../Assets/searchimage.jpg";
import task from "../Assets/taskimage.jpg";

const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: 5 }}>Welcome!</h1>
        <p>
          This is a simple React app that covers different parts of React Legacy
          code and the accompanying logic.{" "}
        </p>
        <p>
          Some areas covered include debugging, writing logic, fetching and
          displaying the fetched data, and creating a simple to do list.
        </p>
        <p>
          Below is the list of mini projects included in this challenge, as well
          as their objectives.
        </p>
      </div>
      s
      <CardGroup>
        <Card>
          <CardImg alt="Cat on stairs" src={cat} />
          <CardBody>
            <CardTitle tag="h5">Cat Challenge</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Challenge Objectives
            </CardSubtitle>
            <CardText>
              <ul>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Render the list of cat breeds to the screen
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Use props correctly
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Use .map() correctly
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Ensure there are no errors
                </li>
              </ul>
            </CardText>
            <Button>
              <Link to="/cats">Go to Challenge Page</Link>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Magnifying glass" src={search} />
          <CardBody>
            <CardTitle tag="h5">Search Challenge</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Challenge Objectives
            </CardSubtitle>
            <CardText>
              <ul>
                <li>
                  ability to accept a search term from a user <strong>|</strong>{" "}
                  <em>Objective completed</em>!{" "}
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                </li>
                <li>
                  ability to filter the array in the state by that term{" "}
                  <strong>|</strong> <em>Objective completed</em>!{" "}
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                </li>
                <li>
                  ability to display only the terms that match the search, or
                  all if no search term is provided <strong>|</strong>{" "}
                  <em>Objective completed</em>!{" "}
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                </li>
              </ul>
            </CardText>
            <Button>
              <Link to="/search">Go to Challenge Page</Link>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Black pug with sweater against yellow background"
            src={dog}
          />
          <CardBody>
            <CardTitle tag="h5">Dog Challenge</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Challenge Objectives
            </CardSubtitle>
            <CardText>
              <ul>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Fetch a random image from this api:{" "}
                  <a href="https://dog.ceo/dog-api/">here</a>
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>{" "}
                  Save this image URL to the state of the DogIndex component
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Render the image to the screen
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Have a button that fetches a new image
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Make sure to include some good practice error handling
                </li>
              </ul>
            </CardText>
            <Button>
              <Link to="/dogs">Go to Challenge Page</Link>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Open notebook with pen laid across it" src={task} />
          <CardBody>
            <CardTitle tag="h5">To Do Challenge</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Challenge Objectives
            </CardSubtitle>
            <CardText>
              <ul>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>{" "}
                  Accept a task from a user
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Add user's task to the state
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Display all of the tasks
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✅
                  </span>
                  Evaluate if a task was completed and update the state
                </li>
              </ul>
            </CardText>
            <Button>
              <Link to="todo">Go to Challenge Page</Link>
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Home;
