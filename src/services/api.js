import axios from "axios";

const BASE_URL = "https://nikan46.ir/api/currency.php";

export const getCurrency = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
