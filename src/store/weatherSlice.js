import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherToday: {},
  statusToday: "",
  statusWeek: "",
  errorMessage: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    onLoadTodayComplete: (state, { payload }) => {
      state.weatherToday = payload;
      state.statusToday = "Completed";
      state.errorMessage = "";
    },
    onLoadWeekComplete: (state, { payload }) => {
      state.statusWeek = "Completed";
      state.errorMessage = "";
    },
    onLoadTodayError: (state, { payload }) => {
      state.statusToday = "Error";
      state.errorMessage = payload;
    },
    onLoadWeeekError: (state, { payload }) => {
      state.statusWeek = "Error";
      state.errorMessage = payload;
    },
    onWeatherReset: (state, { payload }) => {
      state = initialState;
    },
  },
});

export const {
  onLoadTodayComplete,
  onLoadWeekComplete,
  onLoadTodayError,
  onLoadWeeekError,
  onWeatherReset,
} = weatherSlice.actions;
