import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';

const CustomerEdit = ({name, age, dni}) => {
    return (
        <div>
            <h2>Edit data of customer</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    dni: PropTypes.string,
};

export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);