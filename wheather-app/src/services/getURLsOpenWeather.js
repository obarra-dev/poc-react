import {url_base_open_weather, url_base_open_forecast, api_key} from '../constants/api-url';

export const getURLWeatherByCity = city =>{
    return `${url_base_open_weather}?q=${city}&appid=${api_key}`;
}

export const getURLForecastByCity = city =>{
    return `${url_base_open_forecast}?q=${city}&appid=${api_key}`;
}
