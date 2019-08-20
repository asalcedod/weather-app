import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strToComponents = cities => {
        return (
            cities.map((city, index) => <WeatherLocation city={city} key={index} onWeatherLocationClick={() => handleWeatherLocationClick(city)}></WeatherLocation>)
        )
    };
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;