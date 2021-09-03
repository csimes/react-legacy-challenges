import React, { Component } from 'react'
import { Input, Button, ListGroup, ListGroupItem } from "reactstrap"

class ToDoList extends Component {
  constructor(){
    super()
      this.state = {
        taskList : [""],
        task: ""
        }
  }

  inputHandler(e){
    this.setState({task : e.target.value})
  }

  addTask = (e) => {
    e.preventDefault()
    this.setState({
      taskList : [...this.state.taskList, this.state.task]
    })
  }

  render() { 
    return (
        <div>
            <Input
                type="text"
                placeholder="Enter Task"
                onChange={(e) => this.inputHandler(e)}
                value={this.state.task}
            />
            <Button
                outline
                color="success"
                style={{ display: "block", margin: "5px auto" }}
                onClick={this.addTask}
            >
                Add Task
            </Button>
            <ListGroup>
                {this.state.taskList.map((task) => (
                    <ListGroupItem>{task}</ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
  }
}

export default ToDoList;