import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DishesProvider } from "context/DishesContext";
import Home from "pages/Home";
import { MenuProvider } from "context/MenuContext";
import { AuthProvider } from "context/authContext";
import ProtectedRoute from "components/ProtectedRoute";
import Login from "components/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <DishesProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </DishesProvider>
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
