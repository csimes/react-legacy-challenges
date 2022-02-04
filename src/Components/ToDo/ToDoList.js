import React, { Component } from 'react';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
      task: '',
    };
  }

  inputHandler(e) {
    this.setState({ task: e.target.value });
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      // Add task to top of task list
      taskList: [this.state.task, ...this.state.taskList],
      // Clears input after task added
      task: '',
    });
  };

  removeTask = () => {};

  render() {
    return (
      <div>
        <Input
          type='text'
          placeholder='Add a task'
          onChange={(e) => this.inputHandler(e)}
          value={this.state.task}
        />
        <Button
          outline
          color='success'
          style={{ display: 'block', margin: '5px auto' }}
          onClick={(e) => this.addTask(e)}
        >
          Add Task
        </Button>
        {this.state.taskList.length < 1 ? (
          <h1>No tasks yet. Add one!</h1>
        ) : (
          this.state.taskList.map((task, index) => (
            <ListGroup>
              <ListGroupItem style={{ margin: 'auto 5px' }} key={index}>
                {task}
                <Button
                  color='danger'
                  style={{ margin: 'auto' }}
                  onClick={this.removeTask(task.index)}
                >
                  Complete - Click to Remove Task
                </Button>
              </ListGroupItem>
            </ListGroup>
          ))
        )}
      </div>
    );
  }
}

export default ToDoList;
