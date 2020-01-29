import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';
import AppFrame from '../components/AppFrame';
import {dispatchFetchCustomers} from './../actions'
import { getCustomers } from '../selectors/customers';


class CustomersContainer extends Component {

    componentDidMount() {
        if(this.props.customers.length === 0){
            this.props.dispatchFetchCustomers();
        }
    }
    

    handleOnClick = () =>{
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers}
                urlPath={'customers'}>
            </CustomersList>
            
            <CustomerActions>
                <button onClick={this.handleOnClick}>Add New Customer</button>
            </CustomerActions>
        </div>
    )


    render() {
        return (
            <div>
                <AppFrame header={'List of Customers'} 
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>

            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

CustomersContainer.defaultProps = {

    customers : [{
        "dni": "10000",
        "name": "Nobody",
        "age": 0
      }]
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

/* 
const mapDipatchToProps = dispatch => (
    {
        dispatchFetchCustomers: () => dispatch(dispatchFetchCustomers())
    }
)
*/

//con creationAction el mapeo clasico igual a 
//const mapDipatchToProps = {dispatchFetchCustomers};


// incluso se puede no usar const mapDipatchToProps =
//TODO xq se puede usar asi? se usa destructuring
export default withRouter(connect(mapStateToProps, {dispatchFetchCustomers})(CustomersContainer));