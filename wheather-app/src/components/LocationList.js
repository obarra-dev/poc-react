import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationOnClick = city => {
        onSelectedLocation(city);
    };

    const stringToComponent = cities =>{
        return  cities.map(city =>
             <WeatherLocation 
                key={city.key}
                city={city.name} 
                data={city.data}
                handlerWeatherLocationOnClick={()=> handlerWeatherLocationOnClick(city.key)}/>)
    };
    
  return  (
    <div>
        {stringToComponent(cities)}
    </div>
)
    };

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
};

export default LocationList;