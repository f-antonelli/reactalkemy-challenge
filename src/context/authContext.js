//  react
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);

  if (!context) throw new Error("There ir not auth provider");
  return context;
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");

  const login = ({ data }) => {
    setIsLogged(true);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <authContext.Provider value={{ login, token, isLogged }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
export default authContext;
