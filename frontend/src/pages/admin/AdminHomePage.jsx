import React from 'react';
import {
  DashboardWrapper,
  DashboardHeader,
  CardGrid,
  Card,
  CardTitle,
  CardDescription,
  ViewButton
} from '../../styles/admin/AdminDashBoardStyle';

import { useNavigate } from 'react-router';



export const AdminHomePage = () => {
  const navigate = useNavigate();

  const entities = [
    {
      title: "Admins",
      description: "Manage system administrators",
      route: "/admin/admins"
    },
    {
      title: "Doctors",
      description: "Manage all registered doctors",
      route: "/admin/doctors"
    },
    {
      title: "Patients",
      description: "View and manage patient profiles",
      route: "/admin/patients"
    },
    {
      title: "Drivers",
      description: "Manage patient driver data",
      route: "/admin/drivers"
    },
    {
      title: "Vehicles",
      description: "View and assign medical transport",
      route: "/admin/vehicles"
    },
    {
      title: "Appointments",
      description: "Track scheduled appointments",
      route: "/admin/appointments"
    },
    {
      title: "Doctor Availability",
      description: "Set or update doctor schedules",
      route: "/admin/availability"
    },
    // {
    //   title: "Doctor Reports",
    //   description: "Review submitted doctor reports",
    //   route: "/admin/reports"
    // },
  ];

  return (
    <DashboardWrapper>
      <DashboardHeader>Admin Dashboard</DashboardHeader>
      <CardGrid>
        {entities.map((entity, idx) => (
          <Card key={idx}>
            <CardTitle>{entity.title}</CardTitle>
            <CardDescription>{entity.description}</CardDescription>
            <ViewButton onClick={() => navigate(entity.route)}>View</ViewButton>
          </Card>
        ))}
      </CardGrid>
    </DashboardWrapper>
  );
};


