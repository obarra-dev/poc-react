import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import {accessControl} from './../helper-hoc/accessControl';
import {CUSTOMER_LIST } from './../constants/permissions';

const CustomersList = ({customers, urlPath}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(customer => <CustomerListItem
                        key={customer.dni}
                        dni={customer.dni}
                        name={customer.name}
                        deleteAction={'Delete'}
                        editAction={'Edit'}
                        urlPath={urlPath}>
                    </CustomerListItem>)
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);