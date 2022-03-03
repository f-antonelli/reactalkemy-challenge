import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const MenuContext = createContext();

const getMenu = JSON.parse(localStorage.getItem("menu"));
const initialState = getMenu === null ? [] : getMenu;

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  const addDish = (dish) => {
    const itemsInMenu = menu.find((e) => e.id === dish.id);
    const isVegan = menu.filter((item) => item.isVegan === true);
    const notVegan = menu.filter((item) => item.isVegan !== true);

    if (itemsInMenu)
      Swal.fire({
        icon: "error",
        title: "The dish already exists on menu",
      });
    else if (menu.length >= 4) Swal.fire("Menu is full");
    else if (isVegan.length >= 2 && dish.isVegan)
      Swal.fire("Vegan dishes are full");
    else if (notVegan.length >= 2 && !dish.isVegan)
      Swal.fire("Not Vegan dishes are full");
    else setMenu([...menu, dish]);
  };

  const removeDish = (dish) => {
    setMenu(menu.filter((item) => item.id !== dish.id));
  };

  const totalPrice = menu.reduce((acc, curr) => acc + curr.price, 0);
  const totalScore = menu.reduce((acc, curr) => acc + curr.score, 0);
  const totalTime = menu.reduce((acc, curr) => acc + curr.time, 0);

  return (
    <MenuContext.Provider
      value={[
        menu,
        setMenu,
        addDish,
        removeDish,
        totalPrice,
        totalScore,
        totalTime,
      ]}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
