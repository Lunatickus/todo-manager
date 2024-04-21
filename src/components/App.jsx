import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/auth.selectors";
import { refreshUser } from "../redux/auth/authOperations";

const LogInPage = lazy(() => import("../pages/LogInPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ToDosPage = lazy(() => import("../pages/ToDosPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/toDos" component={<LogInPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/toDos" component={<RegisterPage />} />
          }
        />
        <Route
          path="toDos"
          element={
            <PrivateRoute redirectTo="/login" component={<ToDosPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
