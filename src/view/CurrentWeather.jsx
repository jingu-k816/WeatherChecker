import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import useWeather from "../controller/hook";

export default function CurrentWeather () {
  const {weatherData} = useWeather();
  const iconURL = `http://openweathermap.org/img/wn/${weatherData && weatherData.weather[0].icon}.png`

  return (
    <Card sx={{ marginTop: "2em", width: "15em", backgroundColor: "rgba(105, 105, 105, 0.4)", height: "17em", textAlign: "center"}}>
      { weatherData && 
        <CardContent >
          <Typography variant="h5">{weatherData.name}</Typography>
          <Image 
            src={iconURL} 
            alt="Today's weather icon"
            width={100}
            height={100}
          />
          <div>
            <Typography sx={{ fontSize: "0.8rem"}}>Maximum Temperature: {weatherData.main.temp_max} &#8451;</Typography>
            <Typography sx={{ fontSize: "0.8rem"}}>Minimum Temperature: {weatherData.main.temp_min} &#8451;</Typography>
            <Typography sx={{ fontSize: "0.8rem"}}>Current Temperature: {weatherData.main.temp} &#8451;</Typography>
            <Typography sx={{ fontSize: "0.8rem"}}>Feels like: {weatherData.main.feels_like} &#8451;</Typography>
            <Typography sx={{ fontSize: "0.8rem"}}>Humidity: {weatherData.main.humidity}%</Typography>
          </div>
        </CardContent>
      }
    </Card>
  );
};