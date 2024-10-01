import React from 'react';

const Humidity = ({ humidity }) => {
    return (
        <div className="p-2 bg-blue-100 rounded-md shadow-md text-center text-blue-900">
            <p className="text-sm">Humidity</p>
            <p className="text-xl font-semibold">{humidity} %</p>
        </div>
    );
};

export default Humidity;