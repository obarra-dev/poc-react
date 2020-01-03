import {combineReducers} from 'redux';
import {createSelector} from "reselect";
import {city} from './city';
import {cities, getForecastData as _getForecastData} from './cities';


export default combineReducers({
    cities,
    city
});

//export const getCity = state => state.city;
export const getCity = createSelector(state => state.city, city => city);

//export const getForecastData = state => (_getForecastData(state.cities, getCity(state)));
export const getForecastData = createSelector(state => state.cities, getCity, _getForecastData)