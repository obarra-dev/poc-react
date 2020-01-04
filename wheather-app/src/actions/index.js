import transformForecast from './../services/transformForecast';
import {getURLForecastByCity} from './../services/getURLsOpenWeather';

import {getURLWeatherByCity} from './../services/getURLsOpenWeather'
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

// action creation
const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const dispatchSetCity = payload => {

   // TODO averiguar quien y como se le pasa la funcion dispatch
    return (dispatch, getState) => {
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].date;
        const now = new Date();
        
        if(date && (now -date) < 1*60*1000){
            return;
        }

        const endpoint = getURLForecastByCity(payload);
        return fetch(endpoint).then(reponse => (reponse.json())).then(
            forecastData => {
                console.log(forecastData);
                const forecastDataTransformed = transformForecast(forecastData);

                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastDataTransformed}));
            }
        );
    } 
};

export const dispatchSetWeather = payload => {
    return dispatch => {
        payload.forEach(city =>{
            dispatch(getWeatherCity(city));
            const endpoint = getURLWeatherByCity(city);
            fetch(endpoint)
              .then(resolve => {return resolve.json()})
              .then(data => {
                  dispatch(setWeatherCity({city, data: transformWeather(data)}));
              })
      
        })
       
    }
};