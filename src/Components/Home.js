import React, { useEffect, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { getHourMinutes } from "../helpers/Utils";
import { useNavigate } from "react-router-dom";
import { Info } from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { onLocationReset } from "../store/locationSlice";
import { onWeatherReset } from "../store/weatherSlice";
import { useCityLocation } from "../hooks/useCityLocation";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { browserGeolocation } = useCityLocation();
  const { coords } = useSelector((state) => state.location);
  const [hour, setHour] = useState("");
  const [hideInfo, setHideInfo] = useState(true);
  useEffect(() => {
    dispatch(onLocationReset());
    dispatch(onWeatherReset());
    browserGeolocation();
    setHour(getHourMinutes);
  }, []);
  const handleNavigate = () => {
    navigate(`../weather/${coords.lat}/${coords.lon}`);
  };
  const handleClose = () => {
    setHideInfo(true);
  };
  const handleInfoPanel = () => {
    setHideInfo(!hideInfo);
  };
  return (
    <>
      <main className="container mt-5">
        <section>
          <header className="d-flex align-items-center">
            <h3>El tiempo en cualquier parte del mundo.</h3>
            <button className="button button-info" onClick={handleInfoPanel}>
              <HiOutlineInformationCircle style={{ width: 24, height: 24 }} />
            </button>
          </header>
          <div className="mt-5">
            <h4>
              Puede utilizar el buscador para encontrar ciudades y consultar
              sobre el clima actual y futuro.
            </h4>
          </div>
          <div className="mt-4">
            <h5>
              También se cuenta con la geolocalización de su navegador para
              consultar inmediatamente el clima en su ciudad actual
            </h5>
          </div>
          <section className="text-center mt-3"></section>
          <button className="button button-principal" onClick={handleNavigate}>
            Ver mi ciudad
          </button>
          <div className="mt-3">
            <span>Son las {hour} horas en su localidad</span>
          </div>
        </section>
      </main>
      {!hideInfo && <Info setClose={handleClose} />}
    </>
  );
};
