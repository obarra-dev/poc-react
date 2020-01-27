import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {getCustomerByDNI} from './../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import { dispatchFetchCustomers, dispatchUpdateCustomers } from '../actions';

class CustomerContainer extends Component {
    handleSubmit = values => {
        const {id} = values;
        return this.props.dispatchUpdateCustomers(id, values);
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () =>{
        this.handleOnBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                const MyDynamicComponent = match? CustomerEdit: CustomerData;
                return <MyDynamicComponent 
                    { ...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}/>
            }
        }></Route>
    )

    componentDidMount() {
        if(!this.props.customer){
            this.props.dispatchFetchCustomers();
        }
    }
    

    render() {
        return (
            <div>
                <AppFrame header={`Customer Data - ${this.props.dni}`} 
                    body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {

};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDNI(state, props)
});

export default withRouter(connect(mapStateToProps, 
    {dispatchFetchCustomers, dispatchUpdateCustomers})(CustomerContainer));