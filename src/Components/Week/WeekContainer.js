import React, { useEffect, useState } from "react";
import { WeekCard } from "./WeekCard";
import { WeatherTable } from "./WeatherTable";
import { Dropdown } from "../Dropdown";
import { Spinner } from "../Spinner";
import { useWeather } from "../../hooks/useWeather";
import { useSelector } from "react-redux";
export const WeekContainer = () => {
  const {
    dailyWeather,
    dayHourlyWeather,
    getDayHourlyWeather,
    getWeatherForecast,
  } = useWeather();
  const { statusWeek } = useSelector((state) => state.weather);
  const { name, coords } = useSelector((state) => state.location);
  const options = [12, 24];
  const [newHourlyWeather, setNewHourlyWeather] = useState([]);

  const handleHourlyDisplay = (amount = 12) => {
    setNewHourlyWeather(dayHourlyWeather.slice(0, amount));
  };

  const setHourlyByDay = (idx) => {
    getDayHourlyWeather(idx);
  };

  useEffect(() => {
    const { lat, lon } = coords;
    getWeatherForecast({ lat, lon });
  }, [coords]);

  useEffect(() => {
    setNewHourlyWeather(dayHourlyWeather.slice(0, 12));
  }, [dayHourlyWeather]);

  return (
    <>
      {statusWeek === "" && <Spinner message="Esperando listado semanal" />}
      {statusWeek === "Completed" && (
        <>
          <section className="mt-5 container mb-5 ">
            <div className="row row-cols-4 justify-content-center mt-3 m-auto text-center">
              {dailyWeather.map((item, idx) => {
                return (
                  idx > 0 && (
                    <WeekCard
                      key={idx}
                      dayWeather={item}
                      idx={idx}
                      selectDay={setHourlyByDay}
                    />
                  )
                );
              })}
            </div>
          </section>
          <hr />
          <section className="mt-5">
            <div>
              <p className="p-remark d-inline">Pronóstico próximas</p>
              {
                <Dropdown
                  options={options}
                  setNewHourlyWeather={handleHourlyDisplay}
                />
              }
              <p className="p-remark d-inline">horas, {name}</p>
            </div>
            <WeatherTable hourlyWeather={newHourlyWeather} />
          </section>
        </>
      )}
    </>
  );
};
