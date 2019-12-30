import React from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Cordoba, ar',
  'Salta, ar'
];

//TODO estudiar scopes
const onSelectedLocation = city => {
  console.log(`OnSelection: ${city}`);
};

//TODO ver que paso con el tap react de react developer tools, y pasar del dom al react element
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationList cities={cities} 
          onSelectedLocation={onSelectedLocation}/>
      </header>
      <body>
        <div>
          <ForecastExtended city="HOLA MUNDO"/>
        </div>
      </body>
    </div>
  );
}

export default App;
