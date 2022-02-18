import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const addDish = (dish) => {
    const itemsInMenu = menu.find((e) => e.id === dish.id);

    if (itemsInMenu) console.log("el plato ya existe");
    else if (menu.length >= 4) console.log("El menu esta lleno");
    else setMenu([...menu, dish]);
  };

  const removeDish = (dish) => {
    console.log(dish);
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
