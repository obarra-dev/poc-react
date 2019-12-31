import moment from 'moment';
import transformWeather from './transformWeather';

//TODO filtra pero la hora no es ni 6 ni 12 ni 18 ver xq
const transformForecast = data => {
   return data.list.filter( item => 
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
        ).map(item => ({
            day: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }));
}

export default transformForecast;