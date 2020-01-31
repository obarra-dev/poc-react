import {createAction} from 'redux-actions';
import {FETCH_CUSTOMERS, UPDATE_CUSTOMER, INSERT_CUSTOMER, DELETE_CUSTOMER} from './../constants/index';
import {apiGet, apiPut, apiPost, apiDelete} from './../api';
import {urlCustomers} from './../api/urls';


export const dispatchFetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));

//TODO xq hace falta los padentecis al final?
export const dispatchUpdateCustomers = createAction(UPDATE_CUSTOMER,
    (id, customer) => apiPut(urlCustomers, id, customer)());


export const dispatchInsertCustomers = createAction(INSERT_CUSTOMER,
    customer => apiPost(urlCustomers, customer)());
    
export const dispatchDeleteCustomers = createAction(DELETE_CUSTOMER,
    id => apiDelete(urlCustomers, id)());