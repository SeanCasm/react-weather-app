import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coords: {
    lat: 0,
    lon: 0,
  },
  name: "",
  status: "",
  message: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    onLocationLoadComplete: (state, { payload }) => {
      state.coords = payload.coords;
      state.name = payload.name;
      state.status = "Completed";
    },
    onLocationUpdateComplete: (state, { payload }) => {
      state.name = payload.name;
    },
    onLocationError: (state, { payload }) => {
      state.status = "Error";
      state.message = "No se ha podido obtener su ubicación.";
    },
    onLocationReset: (state, { payload }) => {
      state = initialState;
    },
  },
});

export const {
  onLocationLoadComplete,
  onLocationUpdateComplete,
  onLocationError,
  onLocationReset,
} = locationSlice.actions;
