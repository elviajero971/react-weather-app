import React from 'react';

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

    const forecastElements = filteredForecasts.map((forecast) => (
        <div key={forecast.dt} className="flex border-2 border-blue-500">
            <p className="border-2 border-red-400">{forecast.dt_txt}</p>
            <p className="border-2 border-red-400">{forecast.weather[0].main}</p>
            <p className="border-2 border-red-400">{forecast.weather[0].description}</p>
            <img
                className="w-10 h-10"
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt="weather icon"
            />
            <p className="border-2 border-red-400">Temperature {forecast.main.temp} °C</p>
            <p className="border-2 border-red-400">Max {forecast.main.temp_max} °C</p>
            <p className="border-2 border-red-400">Min {forecast.main.temp_min} °C</p>
            <p className="border-2 border-red-400">Feels like {forecast.main.feels_like} °C</p>
            <p className="border-2 border-red-400">
                Wind {forecast.wind.speed} m/s, direction {forecast.wind.deg}
            </p>
            <p className="border-2 border-red-400">Pressure {forecast.main.pressure} hPa</p>
        </div>
    ));

    return (
        <div>
            Weather Forecast
            {forecastElements}
        </div>
    );
};

export default WeatherForecast;
