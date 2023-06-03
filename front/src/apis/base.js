import axios from "axios";

export const RandomApi = axios.create({
  baseURL: "http://localhost:8000",
});

export const TimeApi = axios.create({
  baseURL: "http://localhost:8001",
});
