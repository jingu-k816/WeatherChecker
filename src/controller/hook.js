import { useRecoilState } from "recoil";
import { weatherDataState, forecastDataState } from "./state";
import weatherRepository from "../data/repository";

const useWeather = () => {  
  const [weatherData, setWeatherData] = useRecoilState(weatherDataState);
  const [forecastData, setForecastData] = useRecoilState(forecastDataState);

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