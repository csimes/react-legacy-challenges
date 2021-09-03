import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';

class SearchIndex extends Component {
  
  constructor(){
    super()
      this.state = {
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'] ,
        searchTerm: "",
        results: ""
      }
  }
inputHandler(e){
    this.setState({
      searchTerm: e.target.value
    })
  }
  searchFunction = (e) => {
    e.preventDefault();
    this.setState({ 
      things : [...this.state.things],
      results : this.state.things.filter((item) => item === this.state.searchTerm) 
    })
  }

  
  render() {
    return (
        <div>
            <Form onSubmit={this.searchFunction}>
                <Input
                    type="text"
                    id="search"
                    placeholder="Search + Enter"
                    onChange={(e) => this.inputHandler(e)}
                    value={this.state.searchTerm}
                />
            </Form>
            {this.state.searchTerm !== "" && this.state.results !== "" ? 
                <h3> Results: {this.state.results}</h3>
            : 
                this.state.things.map((thing) => <li>{thing}</li>
            )}
        </div>
    );
  }
}

export default SearchIndex;

