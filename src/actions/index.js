// Action creators
export const addClient = name => {
  return {
    type: 'ADD_CLIENT',
    payload: name
  };
};

export const deleteClient = name => {
  return {
    type: 'DELETE_CLIENT',
    payload: name
  };
};

export const makePayment = (name, amountOfMoneyToCollect) => {
  return {
    type: 'PAYMENT_MADE',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

export const refundPayment = (name, amountOfMoneyToRefund) => {
  return {
    type: 'PAYMENT_REFUND',
    payload: {
      name,
      amountOfMoneyToRefund
    }
  };
};

export const selectClient = client => {
  return {
    type: 'CLIENT_SELECTED',
    payload: client
  };
};
