import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import {getURLWeatherByCity} from '../../services/getURLsOpenWeather'
import { SUN } from '../../constants/weathers';
import transformWeather from './../../services/transformWeather';

const firstData = {
    //TODO si city se elimina no tira error de validacion xq
    city: 'Cordoba',
    temperature: 29,
    weatherState: SUN,
    humidity: '30',
    wind: '28'
};

const secondData = {
    //TODO si city se elimina no tira error de validacion xq
    city: 'Salta',
    temperature: 26,
    weatherState: SUN,
    humidity: '27',
    wind: '25'
};


class WeatherLocation extends Component{

    constructor(props){
        console.log("constructor...");
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount...");
        this.handlerButtonUpdate();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate...");
    }
    
    componentWillMount() {
        console.log("componentWillMount...");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate...");
    }
    
    handlerButtonUpdate = () => {
        const endpoint = getURLWeatherByCity(this.state.city);
        fetch(endpoint)
            .then(resolve => {return resolve.json()})
            .then(data => {
                console.log(data);
                this.setState({
                    data: transformWeather(data)
                });
            })
        /** 
        if(this.state.city ===firstData.city){
            this.setState({
                city: secondData.city,
                data: secondData
            });
        }else{
            this.setState({
                city: firstData.city,
                data: firstData
            });
        }
        */
    }

    render(){
        console.log("render...");
        const {handlerWeatherLocationOnClick} = this.props;
        const {data, city} = this.state;
        return (
            <div onClick={handlerWeatherLocationOnClick}>
                <Location city={city} ></Location>
                {data? <WeatherData data={data}></WeatherData>: "Cargando..."}
                
                <button onClick={this.handlerButtonUpdate}>Update</button>
            </div>
        );
    }
    
};

WeatherLocation.propTypes = {
    firstData: PropTypes.shape( {
            city: PropTypes.string.isRequired,
            temperature:PropTypes.number.isRequired,
            weatherState:PropTypes.string.isRequired,
            humidity: PropTypes.string.isRequired,
            wind:PropTypes.string.isRequired,
        }
    ),
    city: PropTypes.string.isRequired,
    handlerWeatherLocationOnClick: PropTypes.func
}

export default WeatherLocation;