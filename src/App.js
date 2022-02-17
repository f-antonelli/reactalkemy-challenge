import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DishesProvider } from "context/DishesContext";
import Home from "pages/Home";
import { MenuProvider } from "context/MenuContext";

function App() {
  return (
    <BrowserRouter>
    <MenuProvider>
      <DishesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DishesProvider>
    </MenuProvider>
    </BrowserRouter>
  );
}

export default App;
