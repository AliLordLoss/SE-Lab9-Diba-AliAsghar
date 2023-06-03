import AxiosInstance from "./base";

export const getRandom = (min, max) => {
  return AxiosInstance.get("/random/range", {
    params: {
      min,
      max,
    },
  });
};
