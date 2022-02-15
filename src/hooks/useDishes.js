import { useContext, useEffect, useState } from "react";
import getDishes from "services/getDishes";
import DishesContext from "context/DishesContext";

export function useDishes({keyword, type} = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  const { dishes, setDishes } = useContext(DishesContext);

  useEffect(
    function () {
      setLoading(true);
      getDishes({keyword, type}).then((dish) => {
        setDishes(dish);
        setLoading(false);
      });
    },
    [setDishes, keyword, type]
  );

  return { loading, dishes };
}
