import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ToDoItem from "./ToDoItem";
export default class ToDoList extends Component {
  render() {
    return (
      <div>
        {this.props.taskList.length < 1 ? (
          <h1>No tasks yet. Add one!</h1>
        ) : (
          <ListGroup>
            <ListGroupItem>
              {this.props.taskList.map((task, index) => (
                <ToDoItem
                  key={index}
                  toDoItem={task}
                  id={index}
                  removeTask={this.props.removeTask}
                  editTask={this.props.editTask}
                  toggleTask={this.props.toggleTask}
                />
              ))}
            </ListGroupItem>
          </ListGroup>
        )}
      </div>
    );
  }
}
