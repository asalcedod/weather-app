import React from 'react';

const WeatherExtrainfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtrainfo;