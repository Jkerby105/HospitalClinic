import React from "react";
import { redirect } from "react-router";
import { AuthStore } from "../store/AuthStore";

export async function checkAuthLoader() {
  const checkAuth = AuthStore.getState().checkingAuth;

  await checkAuth(); // run the Zustand function

  const { isAuthenticated, role } = AuthStore.getState();

  if (!isAuthenticated) {
    return redirect("/Login");
  }

   // Check if the role is one of the allowed roles
  // If not, redirect to the home page
  // This is a simple check, you can expand it based on your requirements

  // might change this to a more complex logic later
  // or use a more sophisticated role management system
  if (
    role !== "ROLE_PATIENT" &&
    role !== "ROLE_ADMIN" &&
    role !== "ROLE_DOCTOR" &&
    role !== "ROLE_Driver"
  ) {
    return redirect("/");
  }


  return null; // everything OK
}
