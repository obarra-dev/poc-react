import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import {getCity, getForecastData} from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && <ForecastExtended 
            city={this.props.city}  
            forecastData={this.props.forecastData}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

// mapStateToProps  = state => ({city: state.city}); idem to mapStateToProps = ({city}) => ({city});
const mapStateToProps = state => ({city: getCity(state),forecastData: getForecastData(state)})

export default connect(mapStateToProps, null)(ForecastExtendedContainer);