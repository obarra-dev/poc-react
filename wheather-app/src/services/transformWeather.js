import convert from 'convert-units';
import { SUN } from '../constants/weathers';


const getTemperature = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const temperature = getTemperature(temp);

    const {speed} = weather_data.wind;

    const weatherState = getState(weather_data); 

    const transformedData = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return transformedData;
}

export default transformWeather;