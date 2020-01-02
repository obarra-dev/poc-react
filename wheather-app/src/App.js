import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Cordoba, ar',
  'Salta, ar'
];


class App extends Component{

//TODO ver que paso con el tap react de react developer tools, y pasar del dom al react element
//TODO ver la diferencia entre class App  y function App
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <LocationListContainer cities={cities} />
        </header>
        <body>
          <div>
            <ForecastExtendedContainer/>
          </div>
        </body>
      </div>
    );
  }  
}

export default App;
