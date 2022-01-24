import { Card, CardContent, Typography, styled } from "@mui/material";
import Image from "next/image";
import useWeather from "../controller/hook";

const Root = styled("div")(({theme}) => ({
  [theme.breakpoints.down("lg")]: {
    marginBottom: "1em",
    marginLeft: "3em",
  },
}));

export default function CurrentWeather () {
  const {weatherData} = useWeather();
  const iconURL = `http://openweathermap.org/img/wn/${weatherData && weatherData.weather[0].icon}.png`

  return (
    <Root>
      <Card 
        sx={(theme) => ({ 
          width: "15em", backgroundColor: "rgba(105, 105, 105, 0.4)", 
          height: "17em", textAlign: "center",   
          [theme.breakpoints.down("lg")]: {
            width: "25em", height: "20em", borderRadius: "25px", boxShadow: "5px 7px rgba(105, 105, 105, 1)"
          },
        })}
      >
        { weatherData && 
          <CardContent >
            <Typography variant="h5" sx={(theme) => ({ [theme.breakpoints.down("lg")]: {fontSize: "35px"}})}>{weatherData.name}</Typography>
            <Image 
              src={iconURL} 
              alt="Today's weather icon"
              width={100}
              height={100}
            />
            <div>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.2rem"}})}>Maximum Temperature: {weatherData.main.temp_max} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.2rem"}})}>Minimum Temperature: {weatherData.main.temp_min} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.2rem"}})}>Current Temperature: {weatherData.main.temp} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.2rem"}})}>Feels like: {weatherData.main.feels_like} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.2rem"}})}>Humidity: {weatherData.main.humidity}%</Typography>
            </div>
          </CardContent>
        }
      </Card>
    </Root>
  );
};