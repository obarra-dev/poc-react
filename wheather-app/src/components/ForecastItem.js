import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherLocation/WeatherData';

const ForecastItem = ({day, hour, data}) =>(
    <div>
        <div>{day} Hour: {hour} Hs</div>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes = {
    day:PropTypes.string.isRequired,
    data: PropTypes.shape( {
        city: PropTypes.string.isRequired,
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity: PropTypes.string.isRequired,
        wind:PropTypes.string.isRequired,
    }
    )
}

export default ForecastItem;