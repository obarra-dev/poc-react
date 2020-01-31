import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {getCustomerByDNI} from './../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import { dispatchFetchCustomers, dispatchUpdateCustomers, dispatchDeleteCustomers } from '../actions';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {
    handleSubmit = values => {
        const {id} = values;
        return this.props.dispatchUpdateCustomers(id, values).then(res => {
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

    handleDelete = () =>{
        this.props.dispatchDeleteCustomers("1000001");
    }

    renderMyDynamicComponent = (isActionEdit, isActionDelete) =>{
        const MyDynamicComponent = isActionEdit? CustomerEdit: CustomerData;
        return <MyDynamicComponent 
                    { ...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                    isActionDelete={!!isActionDelete}
                    onDelete={this.handleDelete}/>  
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match: isActionEdit}) => (
                <Route path="/customers/:dni/delete" children={
                    ({match: isActionDelete}) => {
                        return this.renderMyDynamicComponent(isActionEdit, isActionDelete);
                    }
                }></Route>
            )
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
    {
        dispatchFetchCustomers,
        dispatchUpdateCustomers,
        dispatchDeleteCustomers})(CustomerContainer));