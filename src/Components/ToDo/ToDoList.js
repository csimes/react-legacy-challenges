import React, { Component } from 'react';
export default class ToDoList extends Component {
  removeTask = (item) => {
    const removeItem = this.state.taskList.filter((i) => {
      return i.id !== item;
    });
    this.setState({ removeItem });
    console.log(`Item to be removed: ${removeItem}`);
  };

  render() {
    return (
      <div>
        {/* {this.state.taskList.length < 1 ? (
          <h1>No tasks yet. Add one!</h1>
        ) : (
          this.state.taskList.map((task, index) => (
            <ListGroup key={index}>
              <ListGroupItem>
                {task}
                <br />
                <Button
                  color='danger'
                  onClick={(task) => this.removeTask(task.index)}
                >
                  Complete - Click to Remove Task
                </Button>
              </ListGroupItem>
            </ListGroup>
          ))
        )} */}
      </div>
    );
  }
}
