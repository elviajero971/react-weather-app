import React from "react";

const DayOfTheWeek = ({ date }) => {
    // get the day of the week
    const getDayOfWeek = new Date(date * 1000).toLocaleDateString("en-US", { weekday: "long" });

    console.log(getDayOfWeek);
    return (
        <div className="p-2 text-center">
            <p className="text-xl font-semibold">{getDayOfWeek}</p>
        </div>
    );
}

export default DayOfTheWeek;