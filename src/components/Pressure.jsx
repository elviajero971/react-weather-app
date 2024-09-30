import React from 'react';

const Pressure = ({ pressure }) => {
    return (
        <div className="p-2 bg-white rounded-md shadow-md text-center">
            <p className="text-sm text-gray-600">Pressure</p>
            <p className="text-xl font-semibold">{pressure} hPa</p>
        </div>
    );
};

export default Pressure;
