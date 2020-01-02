import React from 'react';
import ForecastItem from './ForecastItem';

//TODO investigar xq se invoca con padentesis este tipo de metodos y cual es la mejor forma de declarar funciones
// renderForecastItemWithDays(forecastData){ esto funcionaba antes cuando estaba dentro de la class
const renderForecastItemWithDays = forecastData =>{
        return forecastData.map(forecast => 
            (<ForecastItem 
                key={`${forecast.day}${forecast.hour}`} 
                day={forecast.day} 
                hour={forecast.hour} 
                data={forecast.data}/>));
    };

const renderProgress = () =>{
        return <h2>Rendering</h2>;
    }



const ForecastExtended = ({city, forecastData}) =>(
            <div>
                <h2>{city}</h2>
                {forecastData? renderForecastItemWithDays(forecastData): renderProgress()}
            </div>
         );

export default ForecastExtended;