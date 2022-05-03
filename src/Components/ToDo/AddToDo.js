import React, { Component } from 'react';

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
          type='text'
          placeholder='Add a task'
          onChange={this.inputHandler}
          value={this.state.task}
          autoFocus
        />
        <button
          type='submit'
          className='task-btn'
          // disable button while task field is empty to prevent adding "blank" tasks
          disabled={this.state.task === '' ? true : false}
          outline
          color='success'
        >
          Add Task
        </button>
      </form>
    );
  }
}
