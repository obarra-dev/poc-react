const url_base_open_weather = 'https://api.openweathermap.org/data/2.5/weather';
const location = 'Salta,ar';
const api_key = '46591748b4198f072f314bf7e9b8049d';

export const api_open_weather = `${url_base_open_weather}?q=${location}&appid=${api_key}`;
