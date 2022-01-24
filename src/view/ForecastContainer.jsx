
import { useEffect } from "react";
import useWeather from "../controller/hook";
import Forecast from "./Forecast";
import { styled } from "@mui/material";

const Root = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export default function ForecastContainer() {
  const { forecastData, filteredForecastData, fetchFilteredForecast } = useWeather();

  useEffect(() => {
    fetchFilteredForecast();
  },[forecastData]);

  return (
    <Root>    
      {filteredForecastData && filteredForecastData.map((dayForecast, idx) => {
        return (
          <Forecast key={idx} forecast={dayForecast}/>
        );
      })}
    </Root>
  );
}