import { useState } from "react";
import { useDispatch } from "react-redux";
import { coordsByLocationNameApi } from "../api/weatherApi";
import {
  onLocationLoadComplete,
  onLocationError,
} from "../store/locationSlice";

export const useCityLocation = () => {
  const dispatch = useDispatch();
  const [locations, setLocations] = useState([]);

  const browserGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(dispatchLocation);
    } else {
      dispatch(
        onLocationError(
          "Ha ocurrido un error, puede que la geolocalización no sea soportada por el navegador"
        )
      );
      console.log("Geolocalización no soportada por el navegador");
    }
  };

  const dispatchLocation = ({ coords }) => {
    const { latitude, longitude } = coords;
    dispatch(
      onLocationLoadComplete({
        coords: { lat: latitude, lon: longitude },
        name: "",
      })
    );
  };
  const getLocation = ({ lat, lon }) => {
    lat = Number(lat);
    lon = Number(lon);
    dispatch(
      onLocationLoadComplete({
        coords: { lat, lon },
        name: "",
      })
    );
  };

  const getListOfLocations = async (q = "") => {
    await coordsByLocationNameApi
      .get(`${process.env.REACT_APP_COORDS_LOCATIONNAME}`, { params: { q } })
      .then(({ data }) => {
        setLocations(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    browserGeolocation,
    locations,
    getListOfLocations,
    getLocation,
  };
};
