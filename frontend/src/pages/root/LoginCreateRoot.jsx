import React from 'react'
import { Outlet } from 'react-router'
import { LoginCreateNav } from '../../components/navigation/LoginCreateNav'

export const LoginCreateRoot = () => {
  return (
    <>
    <LoginCreateNav/>
    <Outlet/>
    </>
  )
}
