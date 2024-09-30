import React from 'react';

const Humidity = ({ humidity }) => {
    return (
        <div className="p-2 bg-white rounded-md shadow-md text-center">
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-xl font-semibold">{humidity} %</p>
        </div>
    );
};

export default Humidity;