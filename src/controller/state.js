import { atom } from "recoil";

export const weatherDataState = atom({
  key: "weatherDataState",
  default: null
});

export const forecastDataState = atom({
  key: "forecastDataState",
  default: null
});

export const errorState = atom({
  key: "errorState",
  default: null
});

export const filteredForecastDataState = atom({
  key: "filteredForecastDataState",
  default: null
});

