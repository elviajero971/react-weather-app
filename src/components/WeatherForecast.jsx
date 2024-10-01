import React from 'react';
import {getIconPath} from "../utils.js";
import {roundNumber} from "../utils.js";

const WeatherForecast = ({ weatherForecast }) => {
    const listWeatherForecast = weatherForecast.list;

    console.log("listWeatherForecast", listWeatherForecast);

    // Get today's date and set the time to midnight for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter forecasts to only include those after today at 12:00 PM
    const filteredForecasts = listWeatherForecast.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt);

        // Check if the forecast is for after today
        const isAfterToday = forecastDate > today;

        // Check if the forecast time is at 12:00 PM
        const isAtNoon = forecastDate.getHours() === 12;

        return isAfterToday && isAtNoon;
    });

    // make a function that transform the icon name to the correct path


    const forecastElements = filteredForecasts.map((forecast) => (
        <div
            key={forecast.dt}
            className="flex flex-col items-center p-4 m-2 bg-blue-100 text-blue-900 rounded-md shadow-md min-w-[180px]"
        >
            <p className="text-md font-semibold">{new Date(forecast.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img
                className="w-10 h-10"
                src={getIconPath(forecast.weather[0].icon)}
                alt="weather icon"
            />
            <p className="text-sm font-bold">Temp: {forecast.main.temp} °C</p>
            <div className="flex gap-2">
                <p className="text-xs">Wind {roundNumber(forecast.wind.speed * 3.6)} km/h</p>
                <img
                    className="w-4 h-4 transform"
                    style={{ transform: `rotate(${forecast.wind.deg}deg)` }}
                    src="/icons/arrow.png"
                    alt="wind direction"
                />
            </div>

        </div>
    ));

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">5 days forecast</h2>
            <div className="forecast-carousel flex space-x-4 overflow-x-scroll no-scrollbar p-2">
                {forecastElements}
            </div>

        </div>
    );
};

export default WeatherForecast;
