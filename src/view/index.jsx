import { Typography, styled } from "@mui/material";
import useWeather from "../controller/hook";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";
import Error from "./Error";
import ForecastContainer from "./ForecastContainer";
import ForecastStats from "./ForecastStats";

const Root = styled("div")(() => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const MiddleWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "2em",
}));

export default function WeatherChecker () {  
  const { weatherData, forecastData, error } = useWeather();

  return (
    <Root>
      <Typography variant="h3" sx={{ marginTop: "0.8em", textAlign: "center" }}>Weather Tracker</Typography>
      <SearchBar />
      <MiddleWrapper>
        {weatherData && <CurrentWeather />}
        {forecastData && <ForecastStats />}
      </MiddleWrapper>
      {error && <Error />}
      {forecastData && <ForecastContainer />}
    </Root>
  );
};