import React, {useEffect} from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../../store/AuthStore";
import { PatientNav } from "../../components/navigation/PatientNav";

export const PatientRoot = () => {
  // const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  // const userRole = AuthStore((state) => state.role);
  // const checkingAuth = AuthStore((state) => state.checkingAuth);

  // useEffect(() => {
  //       checkingAuth(); 
  //     }, []);
  
  
  // if (!isAuthenticated) {
  //   return <Navigate to="/Login" replace />;
  // }

  // if (userRole !== "patient") {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <>
      <PatientNav />
      <Outlet />
    </>
  );
};
