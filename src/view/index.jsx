import { Typography, styled } from "@mui/material";
import useWeather from "../controller/hook";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";


const Root = styled("div")(() => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function WeatherChecker () {  
  return (
    <Root>
      <Typography variant="h3" sx={{ marginTop: "1em", textAlign: "center"}}>Weather Tracker</Typography>
      <SearchBar />
      <CurrentWeather />
    </Root>
  );
};