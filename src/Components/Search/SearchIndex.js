import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      things: [
        'pen',
        'marker',
        'eraser',
        'notebook',
        'pencil',
        'scissors',
        'highlighter',
        'stapler',
        'paper clip',
        'binder',
        'hole punch',
        'laminator',
        'laminating sheets',
        'protective sheets',
        'index cards',
      ],
      searchTerm: '',
      results: '',
    };
  }

  inputHandler(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  searchFunction = (e) => {
    e.preventDefault();
    this.setState({
      results: this.state.things.map((things) => {
        if (things.includes(this.state.searchTerm)) {
          return <li>{things}</li>;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        {/* Changed to onKeyUp so search term wouldn't stay "stuck" when next search was performed */}
        <Form onKeyUp={this.searchFunction}>
          <Input
            type='text'
            id='search'
            placeholder='Search'
            onChange={(e) => this.inputHandler(e)}
            value={this.state.searchTerm}
          />
        </Form>
        {this.state.searchTerm !== '' && this.state.results !== ''
          ? this.state.results
          : this.state.things.map((thing) => <li>{thing}</li>)}
      </div>
    );
  }
}

export default SearchIndex;
