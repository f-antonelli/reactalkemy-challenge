import { Navigate } from "react-router-dom";
import { useAuth } from "context/authContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (token === null) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
