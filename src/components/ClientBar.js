import React, { Component } from 'react';

class AddClientBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Add A Client</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddClientBar;
