import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    "https://67607fab6be7889dc35e25cb.mockapi.io/Products"
  );
  return response.data;
};
