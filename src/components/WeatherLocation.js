import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    // Destructuring
    <div>
        <Location city={ 'Colombia' }></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;