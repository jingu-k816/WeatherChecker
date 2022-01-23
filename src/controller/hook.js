import { useState } from "react";
import weatherRepository from "../data/repository";

const useWeather = () => {  
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  const fetchWeather = async (city) => {
    const response = await weatherRepository.retrieveCurrentWeather(city);
    setWeatherData(response.data);
  };

  const fetchForecast = async (city) => {
    const response = await weatherRepository.retrieveWeatherForecast(city);
    setForecastData(response.data);
  }

  return {
    weatherData,
    forecastData,
    fetchWeather,
    fetchForecast,
  }
};

export default useWeather;