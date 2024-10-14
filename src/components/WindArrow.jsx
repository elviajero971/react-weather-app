import React from "react";
import windIcon from "../assets/icons/arrow.png";

// Arrow component that accepts a degree for rotation
const WindArrow = ({ degree }) => {
    return (
        <div className="relative flex items-center justify-center h-24 w-24">
            <img
                src={windIcon}
                className="absolute w-14 h-14 transform"
                style={{ transform: `rotate(${degree}deg)` }}

            />
            <div className="absolute w-full h-full rounded-full border border-gray-300"></div>
            {/* Cardinal directions */}
            <div className="absolute top-1 text-xs">N</div>
            <div className="absolute bottom-1 text-xs">S</div>
            <div className="absolute left-1 text-xs">W</div>
            <div className="absolute right-1 text-xs">E</div>
        </div>
    );
};

export default WindArrow;
