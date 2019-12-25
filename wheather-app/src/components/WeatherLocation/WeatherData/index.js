import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    WINDY,
    RAIN,
    SNOW
} from './../../../constants/weathers';



const WeatherData = ()=>(
    <div>
        <WeatherTemperature temperature={45} state={SUN}></WeatherTemperature>
        <WeatherExtraInfo  humidity="55" wind="90"></WeatherExtraInfo>
    </div>
);

export default WeatherData;
