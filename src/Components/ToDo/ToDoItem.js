import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.toDoItem.task,
      isEditing: false,
    };
  }

  setEditingState = (isEditing) => {
    this.setState({ isEditing });
  };

  removeTask = () => {
    this.props.removeTask(this.props.id);
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <ListGroup>
        {this.state.isEditing ? (
          <>
            <ListGroupItem>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autofocus
                />
              </form>
              <Button color="success" onClick={this.handleSubmit} type="submit">
                Save
              </Button>
              <Button
                color="primary"
                onClick={() => this.setEditingState(false)}
                type="button"
              >
                Cancel
              </Button>
            </ListGroupItem>
          </>
        ) : (
          <>
            <ListGroupItem>
              {this.props.toDoItem.task}
              <br />
              <Button
                color="warning"
                onClick={() => this.setEditingState(true)}
              >
                Edit
              </Button>
              <Button color="danger" onClick={this.removeTask}>
                Delete
              </Button>
            </ListGroupItem>
          </>
        )}
      </ListGroup>
    );
  }
}
