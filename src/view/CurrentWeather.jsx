import { Card, CardContent, Typography } from "@mui/material";
import useWeather from "../controller/hook";

export default function CurrentWeather () {
  const {weatherData} = useWeather();

  console.log("weatherdata in current weather component: ", weatherData && weatherData);

  return (
    <Card sx={{ width: "15em", backgroundColor: "rgba(105, 105, 105, 0.4)", height: "20em"}}>
      { weatherData && 
        <CardContent>
            <Typography variant="h5">{weatherData.name}</Typography>
            
        </CardContent>
      }
    </Card>
  );
};