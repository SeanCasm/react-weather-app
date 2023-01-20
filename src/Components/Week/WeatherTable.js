import React from "react";
import PropTypes from "prop-types";
import { capitalize, getTimeFromOW } from "../../helpers/Utils";
import { useWeather } from "../../hooks/useWeather";

export const WeatherTable = ({ hourlyWeather = [] }) => {
  const { getWeatherIcon } = useWeather();
  return (
    <div className="table-responsive">
      <table className="table table-striped mt-3">
        <tbody>
          {hourlyWeather.map((item, idx) => {
            return (
              <tr key={idx} className="text-center">
                <th scope="row">{getTimeFromOW(item.dt)}</th>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <div className="weather-display">
                      <img
                        src={getWeatherIcon(item.weather[0].icon)}
                        alt="Imagen del clima"
                      />
                    </div>
                    <div>
                      <p className="p-scn">
                        {capitalize(item.weather[0].description)}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="p-scn">{item.temp}°</p>
                </td>
                <td>Sensación: {item.feels_like}°</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
WeatherTable.propTypes = {
  hourlyWeather: PropTypes.array,
};
