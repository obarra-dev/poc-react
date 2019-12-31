import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Cordoba, ar',
  'Salta, ar'
];


class App extends Component{
  constructor(){
    super();
    this.state = {city: null};
  }

  //TODO estudiar scopes
  onSelectedLocation = city => {
    console.log(`OnSelection: ${city}`);
    this.setState({city});
    this.props.dispatchSetCity(city);
  };

//TODO ver que paso con el tap react de react developer tools, y pasar del dom al react element
//TODO ver la diferencia entre class App  y function App
  render(){
    const {city} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <LocationList cities={cities} 
            onSelectedLocation={this.onSelectedLocation}/>
        </header>
        <body>
          <div>
            {city &&  <ForecastExtended city={city}/>}
          </div>
        </body>
      </div>
    );
  }
  
}

App.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToProps)(App);

//TODO si se cambio el export de App a AppConnected porque no se cambia en el index
export default AppConnected;
