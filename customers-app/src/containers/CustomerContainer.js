import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import {getCustomerByDNI} from './../selectors/customers';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header={`Customer Data - ${this.props.dni}`} 
                    body={<p>Age {this.props.customer.age}</p>}></AppFrame>
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