import transformForecast from './../services/transformForecast';
import {getURLForecastByCity} from './../services/getURLsOpenWeather'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

// action creation
const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {

   // TODO averiguar quien y como se le pasa la funcion dispatch
    return dispatch =>{
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

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
}