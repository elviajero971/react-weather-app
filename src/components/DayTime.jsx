import React from 'react';

const DayTime = ({ sunrise, sunset }) => {

    // get time with only hours and minutes for sunrise and sunset

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString().slice(0, -3);

    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString().slice(0, -3);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="p-2 bg-blue-100 rounded-md shadow-md text-blue-900 text-center">
                <p className="text-sm">Sunrise</p>
                <p className="text-xl font-semibold">{sunriseTime}</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-md shadow-md text-blue-900 text-center">
                <p className="text-sm">Sunset</p>
                <p className="text-xl font-semibold">{sunsetTime}</p>
            </div>
        </div>
    );
};

export default DayTime;
