import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtrainfo humidity={humidity} wind={wind}></WeatherExtrainfo>
    </div>
)

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),

}

export default WeatherData