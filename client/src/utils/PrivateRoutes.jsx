import React from "react";
import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes({ children, ...rest }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let auth = { token: cookies?.AuthToken };
  return <div>{auth.token ? <Outlet /> : <Navigate to="/login" />}</div>;
}
