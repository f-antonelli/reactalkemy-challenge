import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DishesProvider } from "context/DishesContext";
import Home from "pages/Home";

function App() {
  return (
    <BrowserRouter>
      <DishesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DishesProvider>
    </BrowserRouter>
  );
}

export default App;
