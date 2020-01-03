import { SET_FORECAST_DATA } from "../actions";

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, forecastDataTransformed} = action.payload;
            return { ...state, [city]: {forecastDataTransformed}};
        default:
            return state;
    }
}

export const getForecastData = (cities, city) => cities[city] && cities[city].forecastDataTransformed;