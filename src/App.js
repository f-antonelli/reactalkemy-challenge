import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DishesProvider } from "context/DishesContext";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <DishesProvider>
        <Routes>
          <Route path="/search/:keyword" element={<SearchResults />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </DishesProvider>
    </BrowserRouter>
  );
}

export default App;
