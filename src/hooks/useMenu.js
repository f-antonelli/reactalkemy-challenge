import { useState } from "react";

export function useMenu() {
  const [menu, setMenu] = useState([]);
  console.log(menu);

  const addDish = (dish) => {
   const itemsInMenu = menu.find(e => e.id === menu.id) 
   
   itemsInMenu
   ? console.log('item ya esta en el menu')
   : setMenu([...menu, dish]);
  };

  return [addDish];
}
