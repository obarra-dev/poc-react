import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationOnClick = city => {
        onSelectedLocation(city);
    };

    const stringToComponent = cities =>{
        console.log(cities);
        
        return  cities.map(city =>
             <WeatherLocation 
                key={city}
                city={city}
                handlerWeatherLocationOnClick={()=> handlerWeatherLocationOnClick(city)}/>)
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