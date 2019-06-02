import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Word.
          </p>
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
