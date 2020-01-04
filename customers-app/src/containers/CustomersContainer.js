import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';
import AppFrame from '../components/AppFrame';

const customers = [{
    "dni": "1000001",
    "name": "Omar",
    "age": 29
  },
  {
    "dni": "1000002",
    "name": "Maru",
    "age": 23
  }];

class CustomersContainer extends Component {

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
                    body={this.renderBody(customers)}>
                </AppFrame>

            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);