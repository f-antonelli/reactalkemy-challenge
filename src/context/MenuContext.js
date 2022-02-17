import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  console.log(menu);

  const addDish = (dish) => {
    console.log(dish);
    setMenu([...menu, dish]);
  };



  return <MenuContext.Provider value={addDish}>{children}</MenuContext.Provider>;
};

export { MenuProvider };
export default MenuContext;
