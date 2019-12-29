import React from 'react';
import LocationList from './components/LocationList'
import './App.css';


//TODO ver que paso con el tap react de react developer tools, y pasar del dom al react element
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationList/>
      </header>
    </div>
  );
}

export default App;
