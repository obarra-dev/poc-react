import {createAction} from 'redux-actions';
import {FETCH_CUSTOMERS} from './../constants/index'

const  customers = [{
    "dni": "1000001",
    "name": "Omar",
    "age": 29
  },
  {
    "dni": "1000002",
    "name": "Maru",
    "age": 23
  }];

export const dispatchFetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);