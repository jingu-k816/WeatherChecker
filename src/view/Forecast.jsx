import Image from "next/image";
import { Card, Typography, CardContent, styled } from "@mui/material";

const Root = styled("div")(({theme}) => ({
  marginTop: "2em", 
  marginBottom: "1em", 
  width: "15em", 
  height: "17em", 
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "20em",
    marginBottom: 0,
  },

}));

export default function Forecast({forecast}) {
  const { date, icon, temp, morningTemp, dayTemp, nightTemp, humidity } = forecast;

  const iconURL = `http://openweathermap.org/img/wn/${forecast && icon}.png`

  return (
    <Root>
      <Card sx={(theme) => ({  backgroundColor: "rgba(128, 128, 128, 0.9)", [theme.breakpoints.down("lg")]: { backgroundColor: "rgba(255, 255, 255, 0)"} })}>
        { forecast && 
          <CardContent >
            <Typography variant="h5"><b>{date.toLocaleDateString('en-US', { month: "short", day: 'numeric' })}</b></Typography>
            <Image 
              src={iconURL} 
              alt="weather icon"
              width={100}
              height={100}
            />
            <div>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.4rem", color: "#f2f2f2", marginBottom: "-5px"}})}>Morning Temperature: {morningTemp} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.4rem", color: "#f2f2f2", marginBottom: "-5px"}})}>Day Temperature: {dayTemp} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.4rem", color: "#f2f2f2", marginBottom: "-5px"}})}>Night Temperature: {nightTemp} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.4rem", color: "#f2f2f2", marginBottom: "-5px"}})}>Temperature: {temp} &#8451;</Typography>
              <Typography sx={(theme) => ({ fontSize: "0.8rem", [theme.breakpoints.down("lg")]: { fontSize: "1.4rem", color: "#f2f2f2", marginBottom: "-5px"}})}>Humidity: {humidity}%</Typography>
            </div>
          </CardContent>
        }
      </Card>
    </Root>
  );
};