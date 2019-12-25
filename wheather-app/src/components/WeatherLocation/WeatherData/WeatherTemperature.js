import React from 'react';
import WeatherIcon from 'react-icons-weather';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    WINDY,
    RAIN,
    SNOW
} from './../../../constants/weathers';

const iconsMap = {
    [CLOUD]: 'wi-day-sunny',
    [WINDY]: 'wi-day-fog',
    [SUN]: 'owm'
};

const getWeatherIcon = weatherState =>{
    const iconName = iconsMap[weatherState];
   // debugger;
  // TODO there is a error of prop type with weather icon
    let weatherIcon = <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />;
    if(iconName){
        weatherIcon = <WeatherIcon name={iconName} iconId="200" flip="horizontal" rotate="45" />;
    }else{
        console.log("icon doesn't exist")
    }
    return weatherIcon;
}

const WeatherTemperature = ({temperature, weatherState})=>(
    <div>
        {getWeatherIcon(weatherState)}
        <span>
            {`${temperature} C°`}
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    //todo it is false positive why
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;