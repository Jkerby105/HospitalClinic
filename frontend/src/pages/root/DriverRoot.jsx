import React from 'react'
import { Outlet } from 'react-router'
import { DriverNav } from '../../components/navigation/DriverNav'

export const DriverRoot = () => {
  return (
    <>
    <DriverNav/>
    <Outlet/>
    </>
  )
}
