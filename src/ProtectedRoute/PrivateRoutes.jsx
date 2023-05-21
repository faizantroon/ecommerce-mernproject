import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const { id } = props;
  return id ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
