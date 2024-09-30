import React from 'react';

const CurrentWeather = (currentWeather) => {
    console.log("currentWeather component data", currentWeather.data)

    const date = currentWeather.data.dt
    const newDate = new Date(date*1000)

    const weather = currentWeather.data.weather[0].main
    const weatherDescription = currentWeather.data.weather[0].description
    const weatherIcon = currentWeather.data.weather[0].icon

    const temp = currentWeather.data.main.temp
    const tempMax = currentWeather.data.main.temp_max
    const tempMin = currentWeather.data.main.temp_min
    const feelsLike = currentWeather.data.main.feels_like
    const wind = currentWeather.data.wind.speed
    const windDirection = currentWeather.data.wind.deg
    const pressure = currentWeather.data.main.pressure

    console.log("newDate", newDate)
    console.log("weather", weather)
    console.log("weatherDescription", weatherDescription)
    console.log("weatherIcon", weatherIcon)
    console.log("temp", temp)
    console.log("tempMax", tempMax)
    console.log("tempMin", tempMin)
    console.log("feelsLike", feelsLike)
    console.log("wind", wind)
    console.log("windDirection", windDirection)
    console.log("pressure", pressure)

    return (
        <div className="flex flex-col border-2 border-blue-500">
            <p className="border-2 border-red-400">Current Weather</p>
            <p className="border-2 border-red-400">{newDate.toDateString()}</p>
            <p className="border-2 border-red-400">{weather}</p>
            <p className="border-2 border-red-400">{weatherDescription}</p>
            <img className="w-32 h-32" src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather icon"/>
            <p className="border-2 border-red-400">Temperature {temp} °C</p>
            <p className="border-2 border-red-400">Max {tempMax} °C</p>
            <p className="border-2 border-red-400">Min {tempMin} °C</p>
            <p className="border-2 border-red-400">Feels like {feelsLike} °C</p>
            <p className="border-2 border-red-400">Wind {wind} m/s, direction {windDirection}</p>
            <p className="border-2 border-red-400">Pressure {pressure} hPa</p>
        </div>
    );
};

export default CurrentWeather;