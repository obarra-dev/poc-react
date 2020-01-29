import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { Route, withRouter } from 'react-router-dom';
import { dispatchInsertCustomers } from '../actions';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {
    handleSubmit = values => {
        return this.props.dispatchInsertCustomers(values).then(res => {
            if(res.error){
                throw new SubmissionError(res.payload);
            }
        });
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () =>{
        this.handleOnBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
         onSubmitSuccess={this.handleOnSubmitSuccess}
         onBack={this.handleOnBack}/>
    }
    

    render() {
        return (
            <div>
                <AppFrame header={`Customer Data New - ${this.props.dni}`} 
                    body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {

};


export default withRouter(connect(null, 
    {dispatchInsertCustomers})(NewCustomerContainer));