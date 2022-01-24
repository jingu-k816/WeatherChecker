import { styled, Typography } from "@mui/material";
import useWeather from "../controller/hook";
import getForecastStats from "../data/helpers";

const Root = styled("div")(() => ({
  marginLeft: "5em"
}))

export default function ForecastStats () {
  const { filteredForecastData } = useWeather();

  return (
    <Root>
      {filteredForecastData && 
        <>
          <Typography sx={{ marginBottom: "10px"}}>Maximum Temperature in 5 days: {getForecastStats.getMaximumTemp(filteredForecastData)} &#8451;</Typography>
          <Typography sx={{ marginBottom: "10px"}}>Minimum Temperature in 5 days: {getForecastStats.getMinimumTemp(filteredForecastData)} &#8451;</Typography>
          <Typography sx={{ marginBottom: "10px"}}>Mean Temperature in 5 days: {getForecastStats.getMeanTemp(filteredForecastData)} &#8451;</Typography>
          <Typography sx={{ marginBottom: "10px"}}>Mode Temperature in 5 days: {getForecastStats.getModeTemp(filteredForecastData)} {Number(getForecastStats.getModeTemp(filteredForecastData)) ? "\u00b0C" : null}</Typography>
        </>
      }
    </Root>
  );
};