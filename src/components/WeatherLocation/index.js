import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress'
import { PropTypes } from 'prop-types'
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
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
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <LinearProgress></LinearProgress>}
            </div>
        )
    };

};
WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;