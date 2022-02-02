import React from 'react';
import { Container } from 'reactstrap';
import ToDoList from './ToDoList';

const ToDo = () => {
  return (
    <Container className='App'>
      <br />
      <h1 className='App-intro'>
        In this challenge your goal is to create a to do list:
      </h1>
      <hr />
      <ul>
        <li>
          ability to accept a task from a user <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          ability to add this to the state <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          ability to display all of the tasks <strong>|</strong>{' '}
          <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
        <li>
          ability to evaluate if a task was completed and update the state{' '}
          <strong>|</strong> <em>Objective completed</em>!{' '}
          <span role='img' aria-label='checkmark'>
            ✅
          </span>
        </li>
      </ul>
      <hr />
      <ToDoList />
    </Container>
  );
};

export default ToDo;
