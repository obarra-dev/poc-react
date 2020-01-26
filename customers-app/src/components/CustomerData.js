import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions'

const CustomerData = ({name, dni, age, onBack}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Customer Data</h2>
                <div><strong>Name: </strong><i>{name}</i></div>
                <div><strong>DNI: </strong><i>{dni}</i></div>
                <div><strong>Age: </strong><i>{age}</i></div>
            </div>
            <CustomerActions>
                        <button onClick={onBack}>Volver</button>
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired, 
    onBack: PropTypes.func.isRequired,   
};

export default CustomerData;