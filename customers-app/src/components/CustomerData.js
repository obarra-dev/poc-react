import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions'

const CustomerData = ({id, name, dni, age, onBack, isActionDelete, onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Customer Data</h2>
                <div><strong>Name: </strong><i>{name}</i></div>
                <div><strong>DNI: </strong><i>{dni}</i></div>
                <div><strong>Age: </strong><i>{age}</i></div>
            </div>
            <CustomerActions>
                        <button onClick={onBack}>Go Back</button>
                        {isActionDelete && <button onClick={() => onDelete(id)}>Delete</button>}
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number, 
    onBack: PropTypes.func,   
};

export default CustomerData;