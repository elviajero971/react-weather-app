import {useState, useEffect} from 'react'
import './App.css'
import Search from "./components/Search.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import { WEATHER_API_URL} from "./api.js";
function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState(null);
    const [airPollution, setAirPollution] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(", ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        const weatherForecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );

        const airPollutionFetch = fetch(
            `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );

        Promise.all([currentWeatherFetch, weatherForecastFetch, airPollutionFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const weatherForecastResponse = await response[1].json();
                const airPollutionResponse = await response[2].json();

                setCurrentWeather({ city: searchData.label, ...currentWeatherResponse });
                setWeatherForecast({ city: searchData.label, ...weatherForecastResponse });
                setAirPollution({ city: searchData.label, ...airPollutionResponse });
            })
            .catch(console.log);
    };

    // Fetch default weather for Paris when the app first loads
    useEffect(() => {
        const defaultCity = { label: "Paris", value: "48.8566, 2.3522" }; // Paris coordinates
        handleOnSearchChange(defaultCity);
    }, []);

  return (
      <div className="flex flex-col bg-blue-200 p-4 max-w-lg mx-auto">
          <Search onSearchChange={handleOnSearchChange}/>
          {currentWeather && <CurrentWeather data={currentWeather} airPollutionData={airPollution} />}
          {weatherForecast && <WeatherForecast weatherForecast={weatherForecast}/>}
      </div>
  )
}

export default App
