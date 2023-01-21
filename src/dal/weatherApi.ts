import axios from "axios";
import { WeatherApiType } from "../types/WeatherApiType";

const API_KEY = "8dbddb10d9e001a4cf545d6cbba316d9";

export const getWeatherApi = (name: string) => {
  return axios.get<WeatherApiType>(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
  );
};

export const getOneCallApiType = (
  lat: number | undefined,
  lon: number | undefined
) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${API_KEY}`
  );
};
