import { useRecoilState } from "recoil";
import { weatherDataState, forecastDataState, errorState } from "./state";
import weatherRepository from "../data/repository";

const useWeather = () => {  
  const [weatherData, setWeatherData] = useRecoilState(weatherDataState);
  const [forecastData, setForecastData] = useRecoilState(forecastDataState);
  const [error, setError] = useRecoilState(errorState);

  const fetchWeather = async (city) => {
    const response = await weatherRepository.retrieveCurrentWeather(city);
    if (response.status !== 200) {
      setError(response.message);
    } else {
      setWeatherData(response.data);
      setError("");
    }
  };

  const fetchForecast = async (city) => {
    const response = await weatherRepository.retrieveWeatherForecast(city);
    if (response.status !== 200) {
      setError(response.message);
    } else {
      setForecastData(response.data);
      setError("");
    }
  };

  return {
    weatherData,
    forecastData,
    error,
    fetchWeather,
    fetchForecast,
  };
};

export default useWeather;