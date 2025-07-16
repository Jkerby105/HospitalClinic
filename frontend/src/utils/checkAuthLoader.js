import React from 'react'
import { redirect } from 'react-router'
import { AuthStore } from '../store/AuthStore'

export async function checkAuthLoader () {

 const checkAuth = AuthStore.getState().checkingAuth;

  await checkAuth(); // run the Zustand function

  const { isAuthenticated, role } = AuthStore.getState();

  if (!isAuthenticated) {
    return redirect("/Login");
  }

  if (role !== "ROLE_PATIENT") {
    return redirect("/");
  }

  return null; // everything OK
}
