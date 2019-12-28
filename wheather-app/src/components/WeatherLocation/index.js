import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import {api_open_weather} from '../../constants/api-url'
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

    constructor(){
        console.log("constructor...");
        super();
        this.state = {
            city: firstData.city,
            data: firstData
        }
    }

    componentDidMount() {
        console.log("componentDidMount...");
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
        console.log("invoking: " + api_open_weather);
        fetch(api_open_weather)
            .then(resolve => {return resolve.json()})
            .then(data => {
                console.log(data);
                debugger;
                this.setState({
                    data: transformWeather(data)
                });
            })
        
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
        
    }

    render(){
        console.log("render...");
        return (
            <div>
                <Location city={this.state.city} ></Location>
                <WeatherData data={this.state.data}></WeatherData>
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
    )
}

export default WeatherLocation;