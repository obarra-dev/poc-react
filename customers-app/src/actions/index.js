import {createAction} from 'redux-actions';
import {FETCH_CUSTOMERS} from './../constants/index'
import {apiGet} from './../api';
import {urlCustomers} from './../api/urls';


export const dispatchFetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));