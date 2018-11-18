import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClient, deleteClient } from '../actions';

class ClientList extends Component {
  state = { term: '' };
  renderList() {
    return this.props.clients.map(client => {
      return (
        <div className="item" key={client}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectClient(client)}
            >
              Select
            </button>
            <button
              className="ui negative basic button"
              onClick={() => this.deleteCurrentClient(client)}
            >
              Delete
            </button>
          </div>
          <div className="content">{client}</div>
        </div>
      );
    });
  }

  deleteCurrentClient(client) {
    this.props.deleteClient(client);
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { clients: state.clients };
};

export default connect(
  mapStateToProps,
  { selectClient, deleteClient }
)(ClientList);
