import React from 'react';
import { connect } from 'react-redux';
import PaymentBar from './PaymentBar';
import { makePayment, deleteClient } from '../actions';

class ClientDetail extends React.Component {
  render() {
    if (!this.props.client) {
      return <div>Select a client</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <p>Name: {this.props.client}</p>
        <PaymentBar
          onSubmit={amount => {
            this.props.makePayment(this.props.client, amount);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { client: state.selectedClient };
};

export default connect(
  mapStateToProps,
  { deleteClient, makePayment }
)(ClientDetail);
