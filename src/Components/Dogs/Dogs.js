import React from 'react';
import { Container } from 'reactstrap';
import DogIndex from './DogIndex';

const Dogs = () => {
  return (
    <Container className='App'>
      <br />
      <h1 className='App-intro'>
        For this challenge, write the logic to accomplish the following:
      </h1>
      <hr />
      <ul>
        <li>
          Fetch a random image from this api:{' '}
          <a href='https://dog.ceo/dog-api/'>here</a> <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Save this image URL to the state of the DogIndex component{' '}
          <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Render the image to the screen <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Have a button that fetches a new image <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Make sure to include some good practice error handling{' '}
          <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
      </ul>
      <hr />
      <DogIndex />
    </Container>
  );
};

export default Dogs;
