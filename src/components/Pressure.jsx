import React from 'react';

const Pressure = ({ pressure }) => {
    return (
        <div className="p-2 bg-blue-100 rounded-md shadow-md text-center text-blue-900">
            <p className="text-sm">Pressure</p>
            <p className="text-xl font-semibold">{pressure} hPa</p>
        </div>
    );
};

export default Pressure;
