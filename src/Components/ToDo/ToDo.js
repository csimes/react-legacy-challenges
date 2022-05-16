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
        <h1 className="App-intro">To Do Challenge </h1>

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
