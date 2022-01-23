import { useEffect, useState } from "react";
import useWeather from "../controller/hook";
import Forecast from "./Forecast";
import { styled } from "@mui/material";
import getEachDayForFiveDaysForecast from "../data/helpers";

const Root = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%"
  },
}));
export default function ForecastContainer() {
  const [forecast, setForecast] = useState();
  const { forecastData } = useWeather();

  useEffect(() => {
    setForecast(getEachDayForFiveDaysForecast(forecastData.list));
  },[forecastData]);

  return (
    <Root>    
      {forecast && forecast.map((dayForecast, idx) => {
        return (
          <Forecast key={idx} forecast={dayForecast}/>
        );
      })}
    </Root>
  );
}