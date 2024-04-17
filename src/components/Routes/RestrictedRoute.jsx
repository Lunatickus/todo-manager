import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { user } = useUser();

  return user ? <Navigate to={redirectTo} replace /> : Component;
};