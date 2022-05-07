import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { isUserLoggedIn } from "../services/jwt/jwtService";

const ProtectedRoutes = () => {
  const isAuth = isUserLoggedIn();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

const AuthRoutes = () => {
  const isAuth = isUserLoggedIn();
  return isAuth ? <Navigate to={"/"} /> : <Outlet />;
};

const RootRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default RootRoutes;
