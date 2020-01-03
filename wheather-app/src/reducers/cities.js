import {createSelector} from "reselect";
import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from "../actions";

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:{
            const {city, forecastDataTransformed} = action.payload;
            return { ...state, [city]: { ...state[city], forecastDataTransformed}};    
        } 
        case GET_WEATHER_CITY:{
            const {city} = action.payload;
            return {...state, [city]:{...state[city], weather:null}};
        }case SET_WEATHER_CITY:{
            const {city, data} = action.payload;
            return {...state, [city]:{...state[city], weather:data}};
        }
        default:
            return state;
    }
}

//export const getForecastData = (cities, city) => cities[city] && cities[city].forecastDataTransformed;
export const getForecastData = createSelector(
    (cities, city) => cities[city] && cities[city].forecastDataTransformed,
     forecastDataTransformed => forecastDataTransformed);

const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({key, name: key, data: value.weather})));

export const getCitiesWeather = createSelector(state => fromObjToArray(state), cities => cities);