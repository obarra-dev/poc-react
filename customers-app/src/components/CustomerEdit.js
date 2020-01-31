import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import { setPropsAsInitial } from '../helper-hoc/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { Prompt } from 'react-router-dom';
import { Component } from 'react';

const isRequired = value => (
    !value && "This field is required"
);

const isNumber = value => (
    isNaN(value) && "This field is numeric"
)

const validate = values => {
    const error = {};
    if(values.name && values.name.length<4){
        error.name = "Name has to have 3 or more letter";
    }

    if(values.dni && values.dni.length<4){
        error.dni = "DNI has to have 3 or more letter";
    }

    return error;
}

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const toGrow = (value, previousValue, values) => 
     value && (!previousValue?value: (value > previousValue? value : previousValue));

// TODO fix para que se active la validacion solo cuando se sale del campo
const MyField = ({input, meta, name, label, type}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={type}/>
        {
            meta.touched && meta.error &&  <span>{meta.error}</span>
        }
    </div>
);

// Field generan un action creator que modificanel estado 
// TODO  CustomEdit se paso de function Component to Class component to use 'reg', TODO volver a function component 
class CustomerEdit extends Component {

    componentDidMount() {
        if(this.txt){
            this.txt.focus();
        }
    }
  
    renderMyField =  ({input, meta, name, label, type, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={type} ref={withFocus && (txt => this.txt = txt)}/>
            {
                meta.touched && meta.error &&  <span>{meta.error}</span>
            }
        </div>
    );

    render(){
        const {name, age, dni, onBack, handleSubmit, submitting, pristine} = this.props;
        return (
            <div>
                <h2>Edit data of customer</h2>
                <form onSubmit={handleSubmit}>
                        <Field withFocus name="name" type="text" label="Name: "
                            component={this.renderMyField} validate={isRequired} 
                            format={toLower} parse={toUpper}></Field>
                        <Field name="dni" type="text" label="DNI: "
                            component={this.renderMyField} validate={[isRequired, isNumber]}></Field>
                        <Field name="age" type="number" label="Age: "
                            component={this.renderMyField} validate={[isRequired, isNumber]}
                            parse={toNumber} normalize={toGrow}></Field>
                        <CustomerActions>
                            <button type="submit" disabled={pristine || submitting}>Save</button>
                            <button type="button" disabled={submitting} onClick={onBack}>Cancel</button>
                        </CustomerActions>
                        <Prompt when={!pristine ||!submitting}
                            message="are you sure?">
                        </Prompt>
                </form>
            </div>
        );
    }
    
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    dni: PropTypes.string,
};

const CustomerEditForm = reduxForm({
    form: 'CustomerEdit',
    validate    
})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);