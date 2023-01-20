import React, { useState } from "react";
import PropTypes from "prop-types";
export const Dropdown = ({ options, setNewHourlyWeather }) => {
  const [hours, setHours] = useState(12);
  const handleSelection = (item) => {
    console.log(item);
    setHours(item);
    setNewHourlyWeather(item);
  };
  return (
    <div className="dropdown d-inline">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        placeholder={options[0]}
      >
        {hours}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {options.map((item, idx) => {
          return (
            <li key={idx}>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleSelection(item);
                }}
                key={idx}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Dropdown.propTypes = {
  options: PropTypes.array,
  setNewHourlyWeather: PropTypes.func,
};
