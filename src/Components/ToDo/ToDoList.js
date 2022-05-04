import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ToDoItem from './ToDoItem';
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
        {this.props.taskList.length < 1 ? (
          <h1>No tasks yet. Add one!</h1>
        ) : (
          <ListGroup>
            <ListGroupItem>
              {this.props.taskList.map((task, index) => (
                <ToDoItem key={index} toDoItem={task} id={index} />
              ))}
            </ListGroupItem>
          </ListGroup>
        )}
      </div>
    );
  }
}
