import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {getCustomerByDNI} from './../selectors/customers';
import { Route } from 'react-router-dom';

class CustomerContainer extends Component {
    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                const MyDynamicComponent = match? CustomerEdit: CustomerData;
                return <MyDynamicComponent { ...this.props.customer}/>

            }
        }></Route>
    )

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

export default connect(mapStateToProps, null)(CustomerContainer);