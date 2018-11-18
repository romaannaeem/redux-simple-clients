import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makePayment } from '../actions';

class PaymentBar extends Component {
  state = { paymentAmount: '' };

  onFormSubmit = e => {
    e.preventDefault();

    const paymentAmount = parseInt(this.state.paymentAmount);

    this.props.onSubmit(paymentAmount);
    this.setState({ paymentAmount: '' });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Add Payment</label>
          <input
            type="number"
            value={this.state.paymentAmount}
            onChange={e =>
              this.setState({ paymentAmount: e.target.value.replace(/\D/, '') })
            }
          />
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { makePayment }
)(PaymentBar);
