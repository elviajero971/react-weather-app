import React from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import Wind from './Wind';
import Pressure from './Pressure';
import Humidity from './Humidity';
import DayTime from './DayTime';
import Temperature from './Temperature';
import Weather from './Weather';

const CurrentWeather = ({ data }) => {
    const { dt, weather, main, wind, sys } = data;

    console.log("data", data);

    return (
        <div className="flex flex-col items-center">
            {/* Date */}
            <DayOfTheWeek date={dt} />

            {/* Weather Information */}
            <Weather
                temp={main.temp}
                weatherDescription={weather[0].description}
                weatherIcon={weather[0].icon}
            />

            <div className="my-4 w-full grid grid-cols-2 gap-4">
                <Temperature
                    temp={main.temp}
                    tempMax={main.temp_max}
                    tempMin={main.temp_min}
                    feelsLike={main.feels_like}
                />
                <Wind windSpeed={wind.speed} windDirection={wind.deg} />
            </div>

            {/* Pressure Information */}
            <div className="mt-4 w-full grid grid-cols-2 gap-4">
                <Pressure pressure={main.pressure} />
                <Humidity humidity={main.humidity} />
            </div>

            {/* Sunrise and Sunset (DayTime) */}
            <div className="mt-4 w-full">
                <DayTime sunrise={sys.sunrise} sunset={sys.sunset} />
            </div>
        </div>
    );
};

export default CurrentWeather;
