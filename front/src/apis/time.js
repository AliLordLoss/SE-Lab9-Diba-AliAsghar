import { TimeApi } from "./base";

export const getISO = () => {
  return TimeApi.get("/iso");
};

export const getDate = () => {
  return TimeApi.get("/");
};

export const getTimestamp = () => {
  return TimeApi.get("/timestamp");
};

export const getYear = () => {
  return TimeApi.get("/year");
};

export const getMonth = () => {
  return TimeApi.get("/month");
};

export const getDay = () => {
  return TimeApi.get("/day");
};

export const getHour = () => {
  return TimeApi.get("/hour");
};

export const getSecond = () => {
  return TimeApi.get("/second");
};

export const getMiliSecond = () => {
  return TimeApi.get("/mili-second");
};
