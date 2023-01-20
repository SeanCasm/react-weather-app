import React, { useEffect } from "react";
import { TodayCard } from "./TodayCard";
import { WeekContainer } from "./Week/WeekContainer";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";
import { useCityLocation } from "../hooks/useCityLocation";
import { useParams } from "react-router-dom";

export const Weather = () => {
  const params = useParams();
  const { status, message, coords, name } = useSelector(
    (state) => state.location
  );

  const { getLocation } = useCityLocation();

  useEffect(() => {
    getLocation(params);
  }, []);

  return (
    <main className="container mt-5">
      {status === "" && <Spinner message={message} />}
      {status === "Completed" && (
        <section className="mt-2">
          <TodayCard coords={coords} />
        </section>
      )}
      {status === "Completed" && (
        <WeekContainer coords={coords} locationName={name} />
      )}
    </main>
  );
};
