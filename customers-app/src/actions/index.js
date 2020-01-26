import {createAction} from 'redux-actions';
import {FETCH_CUSTOMERS, UPDATE_CUSTOMER} from './../constants/index';
import {apiGet, apiPut} from './../api';
import {urlCustomers} from './../api/urls';


export const dispatchFetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));

//TODO xq hace falta los padentecis al final?
export const dispatchUpdateCustomers = createAction(UPDATE_CUSTOMER,
    (id, customer) => apiPut(urlCustomers, id, customer)());