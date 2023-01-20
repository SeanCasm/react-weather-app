import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useCityLocation } from "../../hooks/useCityLocation";
import { SearchList } from "./SearchList";
import { onLocationLoadComplete } from "../../store/locationSlice";
export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, getValues, setValue, handleSubmit } = useForm({
    defaultValues: {
      city: "",
      select: {},
    },
  });
  const { locations, getListOfLocations } = useCityLocation();
  const [hideSearch, setHideSearch] = useState(true);

  const onSubmit = () => {
    if (getValues("city") === "") return;

    getListOfLocations(getValues("city"));
  };
  const handleSearch = ({ lat, lon }) => {
    dispatch(onLocationLoadComplete({ coords: { lat, lon }, name: "" }));
    handleCancel();
    if (location.pathname.includes("home")) {
      navigate(`../weather/${lat}/${lon}`);
    } else if (location.pathname.includes("weather")) {
      navigate(`weather/${lat}/${lon}`, { replace: true });
    }
  };
  const handleCancel = () => {
    setValue("city", "");
    setHideSearch(true);
  };

  useEffect(() => {
    if (locations.length > 0) {
      setHideSearch(false);
    } else {
      setHideSearch(true);
    }
  }, [locations]);

  return (
    <section>
      <div className="search d-flex">
        <form onSubmit={handleSubmit(onSubmit)} className="dropdown">
          <input
            placeholder="Buscar ciudad"
            {...register("city", { required: true })}
          />
          <button className="btn-no-decoration" type="submit">
            <AiOutlineSearch />
          </button>
          <button
            className="btn-no-decoration"
            hidden={getValues("city") === ""}
            onClick={handleCancel}
          >
            <GiCancel />
          </button>
        </form>
      </div>
      {locations.length > 0 && (
        <SearchList
          hide={hideSearch}
          locations={locations}
          handleSearch={handleSearch}
        />
      )}
    </section>
  );
};
