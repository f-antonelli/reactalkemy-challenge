import axios from "axios";
import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { results = [] } = apiResponse.data;
  const dishes = results.map((dish) => {
    const { image, title, id } = dish;
    return { title, id, image };
  });
  return dishes;
};

export default function getDishes({ type = "all", keyword = "meal" }) {
  const apiURL = `${API_URL}/complexSearch?apiKey=${API_KEY}&query=${keyword}&diet=${type}`;

  return axios.get(apiURL).then(fromApiResponseToGifs);
}
