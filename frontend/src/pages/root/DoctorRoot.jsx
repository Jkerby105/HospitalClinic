import React from 'react'
import { Outlet } from 'react-router'
import { DoctorNav } from '../../components/navigation/DoctorNav'

export const DoctorRoot = () => {
  return (
    <>
        <DoctorNav/>
        <Outlet/>
    </>
  )
}
