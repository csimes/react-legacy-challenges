import React from 'react';
import SearchIndex from './SearchIndex';
import { Container } from 'reactstrap';

const Search = () => {
  return (
    <Container className='App'>
      <br />
      <h1 className='App-intro'>
        In this challenge your goal is to use the existing code to create the
        following:
      </h1>
      <hr />
      <ul>
        <li>
          ability to accept a search term from a user <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          ability to filter the array in the state by that term{' '}
          <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          ability to display only the terms that match the search, or all if no
          search term is provided <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
      </ul>
      <hr />
      <SearchIndex />
    </Container>
  );
};

export default Search;
