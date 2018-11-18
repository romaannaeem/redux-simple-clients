import { combineReducers } from 'redux';

const tempClientReducer = () => {
  return [
    { name: 'Alex' },
    { name: 'Jane' },
    { name: 'Bill' },
    { name: 'Arlene' }
  ];
};

const clientReducer = (listOfClients = [], action) => {
  if (action.type === 'ADD_CLIENT') {
    return [...listOfClients, action.payload];
  } else if (action.type === 'DELETE_CLIENT') {
    return listOfClients.filter(name => name !== action.payload);
  }

  return listOfClients;
};

const selectedClientReducer = (selectedClient = null, action) => {
  if (action.type === 'CLIENT_SELECTED') {
    return action.payload;
  }

  return selectedClient;
};

const paymentHistoryReducer = (oldListOfPayments = [], action) => {
  if (action.type === 'PAYMENT_MADE')
    return [...oldListOfPayments, action.payload];

  return oldListOfPayments;
};

const refundHistoryReducer = (oldListOfRefunds = [], action) => {
  if (action.type === 'PAYMENT_REFUND')
    return [...oldListOfRefunds, action.payload];

  return oldListOfRefunds;
};

const accountingReducer = (balance = 0, action) => {
  if (action.type === 'PAYMENT_MADE')
    return balance + action.payload.amountOfMoneyToCollect;

  if (action.type === 'PAYMENT_REFUND')
    return balance - action.payload.amountOfMoneyToRefund;

  return balance;
};

export default combineReducers({
  clients: clientReducer,
  selectedClient: selectedClientReducer,
  paymentHistory: paymentHistoryReducer,
  refundHistory: refundHistoryReducer,
  bankBalance: accountingReducer
});
