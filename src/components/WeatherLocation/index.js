import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import ProgressBar from './ProgressBar';
import './styles.css';


class WeatherLocation extends Component {
    // Destructuring
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        };
    };

    componentDidMount() {
        console.log("ComponentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate")
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })
        });
        
    }
    render() {
        const { city, data } = this.state;
        const {onWeatherLocationClick} = this.props;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <ProgressBar color="black" colorBar="grey"></ProgressBar>}
            </div>
        )
    };
};
WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}
export default WeatherLocation;