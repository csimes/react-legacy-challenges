import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
    };
  }

  inputHandler = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className='task-input'
          placeholder='Enter to do item here'
          onChange={this.inputHandler}
          value={this.state.task}
          autoFocus /* input field will focus on mount */
        />
        <Button
          className='task-btn'
          // disable button while task field is empty to prevent adding "blank" tasks
          disabled={this.state.task === '' ? true : false}
          color='success'
        >
          Add Task
        </Button>
      </form>
    );
  }
}
