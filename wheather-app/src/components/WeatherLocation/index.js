import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';

const WeatherLocation = ({handlerWeatherLocationOnClick, data, city}) => (
            <div onClick={handlerWeatherLocationOnClick}>
                <Location city={city} ></Location>
                {data? <WeatherData data={data}></WeatherData>: "Cargando..."}
            </div>
);
  

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    handlerWeatherLocationOnClick: PropTypes.func
}

export default WeatherLocation;