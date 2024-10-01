import React from 'react';
import {roundNumber} from "../utils.js";
const Temperature = ({ tempMax, tempMin, feelsLike }) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full text-center text-blue-900">

            <div className="p-2 bg-blue-100 rounded-md shadow-md">
                <p className="text-sm">Max Temp</p>
                <p className="text-xl font-semibold">{roundNumber(tempMax)}°C</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-md shadow-md">
                <p className="text-sm">Min Temp</p>
                <p className="text-xl font-semibold">{roundNumber(tempMin)}°C</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-md shadow-md col-span-2">
                <p className="text-sm">Feels Like</p>
                <p className="text-xl font-semibold">{roundNumber(feelsLike)}°C</p>
            </div>
        </div>
    );
};

export default Temperature;
