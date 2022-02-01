import React from 'react';
import CatIndex from './CatIndex';
import { Container } from 'reactstrap';

const Cats = () => {
  return (
    <Container className='App'>
      <br />
      <p className='App-intro'>
        To complete this challenge, complete and fix the existing code to have
        it do the following:
      </p>

      <hr />

      <ul>
        <li>
          Render the list of cat breeds to the screen <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Use props correctly <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Use .map() correctly <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          Ensure there are no errors <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
      </ul>
      <hr />
      <CatIndex />
    </Container>
  );
};

export default Cats;
