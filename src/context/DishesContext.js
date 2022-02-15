import { createContext, useState } from "react";

const DishesContext = createContext({});

const DishesProvider = ({children}) => {
   const [dishes, setDishes] = useState([]);

  return (
     <DishesContext.Provider value={{dishes, setDishes}}>
        {children}
     </DishesContext.Provider>
  );
};

export { DishesProvider }
export default DishesContext
