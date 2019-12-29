import {url_base_open_weather, api_key} from '../constants/api-url';

const getURLWeatherByCity = city =>{
    return `${url_base_open_weather}?q=${city}&appid=${api_key}`;
}

export default getURLWeatherByCity;