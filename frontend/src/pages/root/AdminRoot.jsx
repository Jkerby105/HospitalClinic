import React, {useEffect} from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../../store/AuthStore";
import { AdminNav } from "../../components/navigation/AdminNav";

export const AdminRoot = () => {
  // const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  // const userRole = AuthStore((state) => state.role);
  //   const checkingAuth = AuthStore((state) => state.checkingAuth);


  // useEffect(() => {
  //   checkingAuth(); 
  // }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to="/Login" replace />;
  // }

  // if (userRole !== "admin") {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};

// if (allowedRoles && !allowedRoles.includes(userRole)) {
//   return <Navigate to="/" replace />;
// }
