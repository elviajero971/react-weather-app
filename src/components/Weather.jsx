import React from 'react';
import {roundNumber} from "../utils.js";
import {getIconPath} from "../utils.js";

const Weather = ({ temp, weatherDescription, weatherIcon }) => {
    return (
        <div className="text-center">
            <p className="text-sm text-gray-700 capitalize">{weatherDescription}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                    className="w-24 h-24 mx-auto"
                    src={getIconPath(weatherIcon)}
                    alt="weather icon"
                />
                <p className="text-4xl font-semibold flex justify-center items-center">{roundNumber(temp)}°C</p>
            </div>
        </div>
    );
};

export default Weather;
