import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class ToDoItem extends Component {
  removeTask = () => {
    this.props.removeTask(this.props.id);
  };

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          {this.props.toDoItem.task}
          <br />
          <Button color='warning'>Edit</Button>
          <Button color='danger' onClick={this.removeTask}>
            Delete
          </Button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
