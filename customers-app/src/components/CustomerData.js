import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Customer Data</h2>
                <div><strong>Name: </strong><i>{name}</i></div>
                <div><strong>DNI: </strong><i>{dni}</i></div>
                <div><strong>Age: </strong><i>{age}</i></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,    
};

export default CustomerData;