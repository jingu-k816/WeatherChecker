import { Typography } from "@mui/material";
import useWeather from "../controller/hook";

export default function Error () {
  const {error} = useWeather();
  
  return (
    <Typography>{error && error.includes(404) ? "Oops!, The city does not exist. Please input correct city name!" : "Server Error, Please try again!"}</Typography>
  );
}