import axios from "axios";

const BASE_URL = "https://lightseen.ir/crypto/index.php";

export const getCurrency = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
