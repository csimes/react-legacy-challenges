import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class ToDoItem extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>{this.props.toDoItem.task}</ListGroupItem>
        <ListGroupItem>
          <Button color='warning'>Edit</Button>
          <Button color='danger'>Delete</Button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
