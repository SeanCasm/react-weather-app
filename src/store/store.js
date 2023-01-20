import { configureStore } from "@reduxjs/toolkit";
import { locationSlice } from "./locationSlice";
import { weatherSlice } from "./weatherSlice";
export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    location: locationSlice.reducer,
  },
});
