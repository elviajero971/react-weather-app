import React from 'react';

const WeatherForecast = ({ weatherForecast }) => {
    const listWeatherForecast = weatherForecast.list;

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
        <div
            key={forecast.dt}
            className="flex flex-col items-center p-4 m-2 bg-white rounded-md shadow-md min-w-[180px]"
        >
            <p className="text-md font-semibold">{new Date(forecast.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img
                className="w-10 h-10"
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt="weather icon"
            />
            <p className="text-sm font-bold">Temp: {forecast.main.temp} °C</p>
            <p className="text-xs">
                Wind: {forecast.wind.speed} m/s
            </p>
            <p className="text-xs">
                Direction: {forecast.wind.deg}°
            </p>
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
