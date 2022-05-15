import React, { Component } from "react";
import { Container } from "reactstrap";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const taskList = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];
export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      taskList: taskList,
    };
  }

  addToDo = (task) => {
    taskList.push({ task, isComplete: false });
    this.setState({ taskList: taskList });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  toggleTask = (taskId) => {
    const toDoItem = taskList[taskId];
    toDoItem.isCompleted = !toDoItem.isCompleted;
    this.setState({ taskList });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  removeTask = (taskId) => {
    taskList.splice(taskId, 1);
    this.setState({ taskList: taskList });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  editTask = (taskId, task) => {
    const taskItem = taskList[taskId];
    taskItem.task = task;
    this.setState({ taskList });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  render() {
    return (
      <Container className="App">
        <br />
        <h1 className="App-intro">
          In this challenge your goal is to create a to do list:
        </h1>
        <hr />
        <ul>
          <li>
            ability to accept a task from a user <strong>|</strong>{" "}
            <em>Objective completed</em>!{" "}
            <span role="img" aria-label="checkmark">
              ✅
            </span>
          </li>
          <li>
            ability to add this to the state <strong>|</strong>{" "}
            <em>Objective completed</em>!{" "}
            <span role="img" aria-label="checkmark">
              ✅
            </span>
          </li>
          <li>
            ability to display all of the tasks <strong>|</strong>{" "}
            <em>Objective completed</em>!{" "}
            <span role="img" aria-label="checkmark">
              ✅
            </span>
          </li>
          <li>
            ability to evaluate if a task was completed and update the state{" "}
            <strong>|</strong> <em>Objective completed</em>!{" "}
            <span role="img" aria-label="checkmark">
              ✅
            </span>
          </li>
        </ul>
        <hr />
        <AddToDo addToDo={this.addToDo} />
        <ToDoList
          taskList={this.state.taskList}
          removeTask={this.removeTask}
          editTask={this.editTask}
          toggleTask={this.toggleTask}
        />
      </Container>
    );
  }
}
