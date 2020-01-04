import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({name, age, dni}) => {
    return (
        <div>
            <h2>Edit data of customer</h2>
            <h3>Name: {name} / DNI: {dni} /Age:{age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    dni: PropTypes.string,
};

export default CustomerEdit;