import React, { Component } from 'react';
import LocationList from './components/LocationList';
import logo from './logo.svg';
import './App.css';
const cities = [
  "Barranquilla,co",
  "Bogota,co",
  "Antioquia,co",
  "Cali,co",
  "Cartagena,co",
  "Santa Marta,co"
]
class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Word.
          </p>
        <LocationList cities = {cities}></LocationList>
      </div>
    );
  }
}

export default App;
