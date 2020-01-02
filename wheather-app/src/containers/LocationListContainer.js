import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    //TODO estudiar scopes
    onSelectedLocation = city => {
        console.log(`OnSelection: ${city}`);
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.cities} 
                onSelectedLocation={this.onSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}
  
const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});
  

//TODO si se cambio el export de App a AppConnected porque no se cambia en el index
export default connect(null, mapDispatchToProps)(LocationListContainer);
  