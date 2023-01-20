import axios from "axios";
export const coordsByLocationNameApi = axios.create({
  baseURL: `${process.env.REACT_APP_COORDS_LOCATIONNAME}`,
});
export const weatherApi = axios.create({
  baseURL: `${process.env.REACT_APP_OPEN_WEATHER}`,
});
export const weatherForecastApi = axios.create({
  baseURL: `${process.env.REACT_APP_OPEN_WEATHER_FORECAST}`,
});
coordsByLocationNameApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: process.env.REACT_APP_API_KEY,
    limit: 10,
  };
  return config;
});
weatherForecastApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: process.env.REACT_APP_API_KEY,
    lang: "es",
    units: "metric",
    exclude: "minutely",
  };
  return config;
});
weatherApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: process.env.REACT_APP_API_KEY,
    lang: "es",
    units: "metric",
  };
  return config;
});
