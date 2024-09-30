import React from 'react';
import {roundNumber} from "../utils.js";
const Temperature = ({ tempMax, tempMin, feelsLike }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4 w-full text-center">

            <div className="p-2 bg-white rounded-md shadow-md">
                <p className="text-sm text-gray-600">Max Temp</p>
                <p className="text-xl font-semibold">{roundNumber(tempMax)}°C</p>
            </div>
            <div className="p-2 bg-white rounded-md shadow-md">
                <p className="text-sm text-gray-600">Min Temp</p>
                <p className="text-xl font-semibold">{roundNumber(tempMin)}°C</p>
            </div>
            <div className="p-2 bg-white rounded-md shadow-md col-span-2">
                <p className="text-sm text-gray-600">Feels Like</p>
                <p className="text-xl font-semibold">{roundNumber(feelsLike)}°C</p>
            </div>
        </div>
    );
};

export default Temperature;
