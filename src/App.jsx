import {useState} from 'react'
import './App.css'
import Search from "./components/Search.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import { WEATHER_API_URL} from "./api.js";
function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(", ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        const weatherForecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );

        Promise.all([currentWeatherFetch, weatherForecastFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const weatherForecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...currentWeatherResponse });
                setWeatherForecast({ city: searchData.label, ...weatherForecastResponse });
            })
            .catch(console.log);
    };

  return (
      <div className="flex flex-col w-10/12 h-screen">
          <Search onSearchChange={handleOnSearchChange}/>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {weatherForecast && <WeatherForecast weatherForecast={weatherForecast}/>}
      </div>
  )
}

export default App
