import {createSelector} from 'reselect';

export const getCustomers = state => state.customers;
export const getCustomerByDNI = createSelector(
    (state, props) => {
        console.log(props.dni);
        const customer = state.customers.find(c => c.dni === props.dni);
        console.log(customer);
        
        return customer}
        ,
    customer => customer);