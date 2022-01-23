import { Typography, styled } from "@mui/material";
import useWeather from "../controller/hook";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";
import Error from "./Error";
import ForecastContainer from "./ForecastContainer";

const Root = styled("div")(() => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function WeatherChecker () {  
  const { weatherData, forecastData, error } = useWeather();

  return (
    <Root>
      <Typography variant="h3" sx={{ marginTop: "0.8em", textAlign: "center" }}>Weather Tracker</Typography>
      <SearchBar />
      {weatherData && <CurrentWeather />}
      {error && <Error />}
      {forecastData && <ForecastContainer />}
    </Root>
  );
};