export const capitalize = (s = "") => {
  return s[0].toUpperCase() + s.substring(1, s.length);
};

export const getHourMinutes = () => {
  const d = new Date();
  const options = { hour: "numeric", minute: "numeric" };
  return d.toLocaleString("es-ES", options);
};

export const getTimeFromOW = (dt = 0) => {
  const date = new Date(dt * 1000);
  const options = { hour: "numeric", minute: "numeric" };
  return date.toLocaleString("es-ES", options);
};
export const getDayFromOW = (dt = 0) => {
  const date = new Date(dt * 1000);
  return date.toLocaleString("es-ES", { day: "2-digit", month: "short" });
};

export const getDayText = (dt = 0) => {
  const forecastDate = new Date(dt * 1000);
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  return dayNames[forecastDate.getDay()];
};
export const getCurrentDayText = () => {
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const today = new Date();
  return dayNames[today.getDay()];
};
