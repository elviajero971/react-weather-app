import React from "react";

// Arrow component that accepts a degree for rotation
const WindArrow = ({ degree }) => {
    return (
        <div className="relative flex items-center justify-center h-24 w-24">
            <div
                className="absolute w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-black transform"
                style={{ transform: `rotate(${degree}deg)` }}
            ></div>
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
