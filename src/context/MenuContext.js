const { createContext, useState } = require("react");

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  console.log(menu)

  const addDish = (dish) => {
    console.log(dish)
    setMenu([...menu, dish]);
  }

  const data = {
    menu,
    addDish
  }

  return (
    <MenuContext.Provider value={(data)}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
