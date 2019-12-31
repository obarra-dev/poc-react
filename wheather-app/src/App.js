import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import {store} from './store';
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

    store.dispatch(setCity(city));
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

export default App;
