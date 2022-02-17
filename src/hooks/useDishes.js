import { useContext, useEffect, useState } from "react";
import getDishes from "services/getDishes";
import DishesContext from "context/DishesContext";

export function useDishes({keyword, typeDish} = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  const { dishes, setDishes } = useContext(DishesContext);

  useEffect(
    function () {
      setLoading(true);
      getDishes({keyword, typeDish}).then((dish) => {
        setDishes(dish);
        setLoading(false);
      });
    },
    [setDishes, keyword, typeDish]
  );

  return { loading, dishes };
}
