import React from 'react'
import { Outlet } from 'react-router'
import { AdminNav } from '../../components/navigation/AdminNav'

export const AdminRoot = () => {
  return (
        <>
            <AdminNav/>
            <Outlet/>
        </>
  )
}
