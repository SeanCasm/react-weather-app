import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  onLoadWeekComplete,
  onLoadTodayComplete,
  onLoadTodayError,
  onLoadWeeekError,
} from "../store/weatherSlice";
import { onLocationUpdateComplete } from "../store/locationSlice";
import { weatherForecastApi, weatherApi } from "../api/weatherApi";

export const useWeather = () => {
  const dispatch = useDispatch();

  const [dailyWeather, setDailyWeather] = useState([]);
  const [dayHourlyWeather, setDayHourlyWeather] = useState([]);

  const getCurrentWeather = async (params = {}) => {
    await weatherApi
      .get(`${process.env.REACT_APP_OPEN_WEATHER}`, { params })
      .then(({ data }) => {
        dispatch(onLocationUpdateComplete({ name: data.name }));
        dispatch(onLoadTodayComplete(data));
      })
      .catch((err) => {
        dispatch(onLoadTodayError("No se ha conseguido el clima actual"));
        console.log(err);
      });
  };
  const getWeatherForecast = async (params = {}) => {
    await weatherForecastApi
      .get(`${process.env.REACT_APP_OPEN_WEATHER_FORECAST}`, { params })
      .then(({ data }) => {
        data.current.temp = {
          max: data.daily[0].temp.max,
          min: data.daily[0].temp.min,
        };
        setDailyWeather(data.daily);
        dispatch(onLoadWeekComplete());
        setDayHourlyWeather(data.hourly.splice(0, 24));
      })
      .catch((err) => {
        dispatch(
          onLoadWeeekError("No se ha conseguido la lista semanal del clima")
        );
        console.log(err);
      });
  };

  const getWeatherIcon = (icon = "") => {
    const dayIcon = icon.substring(0, icon.length - 1) + "d";
    return `http://openweathermap.org/img/wn/${dayIcon}.png`;
  };

  return {
    getWeatherIcon,
    dayHourlyWeather,
    dailyWeather,
    getCurrentWeather,
    getWeatherForecast,
  };
};
