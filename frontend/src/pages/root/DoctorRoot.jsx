import React, {useEffect} from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../../store/AuthStore";
import { DoctorNav } from "../../components/navigation/DoctorNav";

export const DoctorRoot = () => {
  // const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  // const userRole = AuthStore((state) => state.role);
  //   const checkingAuth = AuthStore((state) => state.checkingAuth);

  //     useEffect(() => {
  //       checkingAuth();
  //     }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to="/Login" replace />;
  // }

  // if (userRole !== "doctor") {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <>
      <DoctorNav />
      <Outlet />
    </>
  );
};
