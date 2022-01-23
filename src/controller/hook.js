import { useRecoilState } from "recoil";
import { weatherDataState, forecastDataState, errorState, filteredForecastDataState } from "./state";
import weatherRepository from "../data/repository";
import getEachDayForFiveDaysForecast from "../data/helpers";

const useWeather = () => {  
  const [weatherData, setWeatherData] = useRecoilState(weatherDataState);
  const [forecastData, setForecastData] = useRecoilState(forecastDataState);
  const [filteredForecastData, setFilteredForecastData] = useRecoilState(filteredForecastDataState);
  const [error, setError] = useRecoilState(errorState);

  const fetchWeather = async (city) => {
    const response = await weatherRepository.retrieveCurrentWeather(city);
    if (response.status !== 200) {
      setError(response.message);
      setWeatherData(null);
    } else {
      setWeatherData(response.data);
      setError("");
    }
  };

  const fetchForecast = async (city) => {
    const response = await weatherRepository.retrieveWeatherForecast(city);
    if (response.status !== 200) {
      setError(response.message);
      setForecastData(null);
    } else {
      setForecastData(response.data);
      setError("");
    }
  };

  const fetchFilteredForecast = () => {
    setFilteredForecastData(getEachDayForFiveDaysForecast(forecastData.list));
  }

  return {
    weatherData,
    forecastData,
    filteredForecastData,
    error,
    fetchWeather,
    fetchForecast,
    fetchFilteredForecast,
  };
};

export default useWeather;