import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useWeather } from "../hooks/useWeather";
import { useSelector } from "react-redux";
import { capitalize, getCurrentDayText } from "../helpers/Utils";

export const TodayCard = ({ coords }) => {
  const { getWeatherIcon, getCurrentWeather } = useWeather();
  const { name } = useSelector((state) => state.location);
  const { weatherToday } = useSelector((state) => state.weather);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(getCurrentDayText());
    getCurrentWeather(coords);
  }, [coords.lat]);

  return (
    <main className="card m-auto">
      {weatherToday.dt !== undefined && (
        <>
          <section>
            <p>
              {name}, {today}
            </p>
          </section>
          <div className="d-flex flex-column">
            <div className="align-self-center text-center mt-3">
              <img
                className=" weather-display "
                src={getWeatherIcon(weatherToday?.weather[0].icon)}
                style={{ width: 64 }}
                alt="Imagen del clima"
              />
              <div>
                <p>{capitalize(weatherToday?.weather[0].description)}</p>
              </div>
            </div>
            <section className="card-main-content">
              <div className="mb-3">
                <h1>{weatherToday?.main.temp}°</h1>
                <p>Sensación: {weatherToday?.main.feels_like}°</p>
              </div>
              <footer className="d-flex mt-3">
                <p className="max p-remark">{weatherToday?.main.temp_max}°/</p>
                <p className="min p-remark">{weatherToday?.main.temp_min}°</p>
              </footer>
            </section>
          </div>
        </>
      )}
    </main>
  );
};
TodayCard.propTypes = {
  coords: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
};