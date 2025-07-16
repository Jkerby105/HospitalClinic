import React, {useEffect} from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../../store/AuthStore";
import { DriverNav } from "../../components/navigation/DriverNav";

export const DriverRoot = () => {
  // const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  // const userRole = AuthStore((state) => state.role);
  // const checkingAuth = AuthStore((state) => state.checkingAuth);
  

  //   useEffect(() => {
  //     checkingAuth(); 
  //   }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to="/Login" replace />;
  // }

  // if (userRole !== "driver") {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <>
      <DriverNav />
      <Outlet />
    </>
  );
};
