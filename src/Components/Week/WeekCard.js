import React from "react";
import PropTypes from "prop-types";
import { capitalize, getDayFromOW, getDayText } from "../../helpers/Utils";
import { useWeather } from "../../hooks/useWeather";

export const WeekCard = ({ dayWeather, selectDay, idx }) => {
  const { getWeatherIcon } = useWeather();
  const handleCardSelect = () => {
    selectDay(idx);
  };
  return (
    <div className="card-simple " onClick={handleCardSelect}>
      <header>
        <h5 className="p-remark">{getDayText(dayWeather.dt)}</h5>
        <p className="p-scn">{getDayFromOW(dayWeather.dt)}</p>
      </header>
      <div className="d-flex flex-column align-items-center">
        <div className="weather-display">
          <img
            src={getWeatherIcon(dayWeather.weather[0].icon)}
            style={{ width: 64 }}
            alt="Imagen del clima"
          ></img>
        </div>
        <section>
          <div>
            <p>
              {dayWeather && capitalize(dayWeather?.weather[0]?.description)}
            </p>
          </div>
          <footer className="card-temp">
            <div>
              <p className="max p-remark">{dayWeather?.temp.max}°</p>
            </div>
            <div>
              <p className="min p-remark">{dayWeather?.temp.min}°</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};
WeekCard.propTypes = {
  dayWeather: PropTypes.object,
  selectDay: PropTypes.func,
  idx: PropTypes.number,
};
