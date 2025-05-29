import React from 'react'
import { Outlet } from 'react-router'
import { PatientNav } from '../../components/navigation/PatientNav'

export const PatientRoot = () => {
  return (
    <>
     <PatientNav/>
     <Outlet/>
    </>
  )
}
