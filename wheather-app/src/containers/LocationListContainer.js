import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setSelectedCity} from './../actions';
import LocationList from './../components/LocationList';
import {getCity} from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const {city, dispatchSetCity} = this.props;
        dispatchSetCity(city);
    }
    

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
    dispatchSetCity: payload => dispatch(setSelectedCity(payload))
});

const mapStateToProps = state => ({
    city: getCity(state)
});
  

//TODO si se cambio el export de App a AppConnected porque no se cambia en el index
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
  