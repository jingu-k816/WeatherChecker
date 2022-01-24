import { useState } from "react";
import { Button, TextField, styled } from "@mui/material";
import {Search} from "@mui/icons-material";
import useWeather from "../controller/hook";

const Root = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "3em",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "3em",
    marginRight: "3em"
  },
}));

export default function SearchBar () {
  const [cityName, setCityName] = useState("");
  const { fetchWeather, fetchForecast } = useWeather();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(cityName);
    fetchForecast(cityName);
  }

  return(
    <Root>
      <TextField
        sx={{ width:"30em"}}
        variant="standard"
        placeholder="Type the city you want to search"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter") ? handleSubmit(e) : null}
        InputProps={{
          style: {
            fontSize: "25px"
          }
        }}  
      />
      <Button
        onClick={handleSubmit}
      >
        <Search />
      </Button>
    </Root>
  )
}