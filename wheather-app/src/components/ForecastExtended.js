import React, {Component} from 'react';
import ForecastItem from './ForecastItem';
import {getURLForecastByCity} from './../services/getURLsOpenWeather'
import transformForecast from './../services/transformForecast';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData:null};
    }

    componentDidMount() {
        this.updateForecastByCity(this.props.city);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateForecastByCity(nextProps.city);
        }
    }

    
    updateForecastByCity = city => {
        const endpoint = getURLForecastByCity(this.props.city);
        fetch(endpoint).then(reponse => (reponse.json())).then(
            forecastData => {
                console.log(forecastData);
                const forecastDataTransformed = transformForecast(forecastData);
                this.setState({forecastData: forecastDataTransformed});
            }
        );
    }

    //TODO investigar xq se invoca con padentesis este tipo de metodos y cual es la mejor forma de declarar funciones
    renderForecastItemWithDays(forecastData){
        return forecastData.map(forecast => 
            (<ForecastItem 
                key={`${forecast.day}${forecast.hour}`} 
                day={forecast.day} 
                hour={forecast.hour} 
                data={forecast.data}/>));
    };

    renderProgress(){
        return <h2>Rendering</h2>;
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2>{city}</h2>
                {forecastData? this.renderForecastItemWithDays(forecastData): this.renderProgress()}
            </div>
         );
    };
};

export default ForecastExtended;