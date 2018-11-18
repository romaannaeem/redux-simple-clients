import React from 'react';
import { connect } from 'react-redux';
import ClientList from './ClientList';
import ClientBar from './ClientBar';
import ClientDetail from './ClientDetail';
import { addClient } from '../actions';

class App extends React.Component {
  renderPaymentHistory() {
    return this.props.paymentHistory.map(payment => {
      return (
        <div className="item" key={payment.name}>
          {payment.name} paid ${payment.amountOfMoneyToCollect}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ClientBar onSubmit={e => this.props.dispatch(addClient(e))} />
        <div>Current Bank Balance: ${this.props.balance}</div>
        <br />
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <ClientList />
            </div>
            <div className="column eight wide">
              <ClientDetail />
            </div>
          </div>
          <div className="ui row">
            <div>Payment History: {this.renderPaymentHistory()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.bankBalance,
    paymentHistory: state.paymentHistory
  };
};

export default connect(mapStateToProps)(App);
