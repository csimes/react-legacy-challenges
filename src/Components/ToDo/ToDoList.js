import React, { Component } from 'react'
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap"

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
  
  removeTask = (task) => {
    this.taskList.splice(task, 1)
    this.setState({taskList: [...this.state.taskList]})
  

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
                {this.state.taskList.map((task) => (
                  <ListGroup>
                    <ListGroupItem style={{margin: "auto 5px"}} key={task}>{task}
                    <Button color="danger" style={{margin: "auto"}} 
                    onClick={(task) => this.removeTask(task)}>
                      Complete - Click to Remove Task
                    </Button>
                    </ListGroupItem>
                  </ListGroup>
                ))
                }
            </div>

    );
  }
}

export default ToDoList;