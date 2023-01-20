import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

export const Logo = ({ logoColor = "white" }) => {
  const version = "v1.0";

  return (
    <section>
      <Link to={"home"}>
        <div className="d-flex">
          <TiWeatherPartlySunny
            color={logoColor}
            style={{ width: 32, height: 32 }}
          />
          <h3 id="title">WeatherApp</h3>
          <div className="align-self-end mx-2">
            <span style={{ color: logoColor }}>{version}</span>
          </div>
        </div>
      </Link>
    </section>
  );
};
