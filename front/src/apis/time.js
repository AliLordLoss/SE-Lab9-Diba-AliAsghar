import AxiosInstance from "./base";

export const getISO = () => {
  return AxiosInstance.get("/time/iso");
};

export const getDate = () => {
  return AxiosInstance.get("/time/");
};

export const getTimestamp = () => {
  return AxiosInstance.get("/time/timestamp");
};

export const getYear = () => {
  return AxiosInstance.get("/time/year");
};

export const getMonth = () => {
  return AxiosInstance.get("/time/month");
};

export const getDay = () => {
  return AxiosInstance.get("/time/day");
};

export const getHour = () => {
  return AxiosInstance.get("/time/hour");
};

export const getSecond = () => {
  return AxiosInstance.get("/time/second");
};

export const getMiliSecond = () => {
  return AxiosInstance.get("/time/mili-second");
};
