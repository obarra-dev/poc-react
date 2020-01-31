import {handleActions} from 'redux-actions';
import {FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER} from './../constants/index'

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload],
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload),
    [UPDATE_CUSTOMER]: (state, action) => {
        debugger;
        const updatedCustomer = action.payload;
        const {id} =  updatedCustomer;
        const customers = state;

        const newCustomers = customers.reduce((acc, customer)=>{
            if(customer.id === id){
                return [...acc, updatedCustomer];
            }else{
                return [...acc, customer];
            }
        }, []);

        return newCustomers;
    },
},[]);