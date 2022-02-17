import axios from "axios";
import { API_KEY, API_URL } from "./settings";

const fromApiResponseToDish = (apiResponse) => {
  const { results = [] } = apiResponse.data;
  const dishes = results.map((dish) => {
    const { image, title, id, healthScore, readyInMinutes, pricePerServing, vegan } = dish;
    return { image, title, id, healthScore, readyInMinutes, pricePerServing, vegan };
  });
  return dishes;
};

export default function getDishes({ typeDish = "all", keyword = "meal" }) {
  const apiURL = `${API_URL}/complexSearch?apiKey=${API_KEY}&query=${keyword}&diet=${typeDish}&addRecipeInformation=true`;

  return axios.get(apiURL).then(fromApiResponseToDish);
}
