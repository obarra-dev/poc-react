import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Salta,ar"/>
        <WeatherLocation city="Cordoba,ar"/>
        <WeatherLocation city="Buenos Aires,ar"/>
    </div>
);

export default LocationList;