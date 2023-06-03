import { RandomApi } from "./base";

export const getRandom = (min, max) => {
  return RandomApi.get("/range", {
    params: {
      min,
      max,
    },
  });
};
