import React from "react";
import WindArrow from "./WindArrow"; // Import the WindArrow component

const Wind = ({ windSpeed, windDirection }) => {

    const roundWindSpeed = Math.round(windSpeed * 3.6);
    return (
        <div className="flex flex-col bg-blue-100 text-blue-900 p-4 rounded-lg">
            {/* Wind Speeds */}
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">Wind</div>
                <div className="text-4xl font-bold">
                    {roundWindSpeed} <span className="text-lg">KM/H</span>
                </div>
            </div>
            <div className="flex justify-center items-center mt-4">
                <WindArrow degree={windDirection}/>
            </div>
        </div>
    );
};

export default Wind;
