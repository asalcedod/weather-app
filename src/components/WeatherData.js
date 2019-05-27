import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
        <WeatherExtrainfo humidity={"80"} wind={"60 m/s"}></WeatherExtrainfo>
    </div>
)

export default WeatherData