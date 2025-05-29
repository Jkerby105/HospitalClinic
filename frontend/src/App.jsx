import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import { ErrorPage } from "./pages/error/ErrorPage";
import { AboutUsPage } from "./components/other/AboutUsPage";

// Root
import { LoginCreateRoot } from "./pages/root/LoginCreateRoot";
import { AdminRoot } from "./pages/root/AdminRoot";
import { DriverRoot } from "./pages/root/DriverRoot";
import { PatientRoot } from "./pages/root/PatientRoot";
import { DoctorRoot } from "./pages/root/DoctorRoot";

// Admin
import { AdminHomePage } from "./pages/admin/AdminHomePage";
import { AdminViewAdminsPage } from "./pages/admin/AdminViewAdminsPage";
import { AdminViewDoctorPage } from "./pages/admin/AdminViewDoctorPage";
import { AdminViewDriversPage } from "./pages/admin/AdminViewDriversPage";
import { AdminViewPatientPage } from "./pages/admin/AdminViewPatientPage";
import { AdminViewVehiclesPage } from "./pages/admin/AdminViewVehiclesPage";
import { AdminCreateAdminPage } from "./pages/admin/create/AdminCreateAdminPage";
import { AdminCreateDoctorPage } from "./pages/admin/create/AdminCreateDoctorPage";
import { AdminCreateDriverPage } from "./pages/admin/create/AdminCreateDriverPage";
import { AdminCreateVehiclePage } from "./pages/admin/create/AdminCreateVehiclePage";

// Doctor
import { DoctorHomePage } from "./pages/doctor/DoctorHomePage";
import { DoctorViewDayPage } from "./pages/doctor/DoctorViewDayPage";
import { DoctorViewReportPage } from "./pages/doctor/DoctorViewReportPage";
import { DoctorViewOneReportPage } from "./pages/doctor/DoctorViewOneReportPage";

// Driver
import { DriverHomePage } from "./pages/driver/DriverHomePage";
import { DriverViewTwoPage } from "./pages/driver/DriverViewTwoPage";

// Patient
import { CreateAccountPage } from "./pages/loginCreate/CreateAccountPage";
import { LoginPage } from "./pages/loginCreate/LoginPage";
import { PatientAppointmentPage } from "./pages/patient/PatientAppointmentPage";
import { PatientAppointmentReportPage } from "./pages/patient/PatientAppointmentReportPage";
import { PatientFindAppointmentPage } from "./pages/patient/PatientFindAppointmentPage";
import { PatientHomePage } from "./pages/patient/PatientHomePage";
import { PatientInfoPage } from "./pages/patient/PatientInfoPage";

function App() {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      element: <LoginCreateRoot />,
      path: "/",
      children: [
        { index: true, element: <LoginPage /> },
        { path: "CreateAccount", element: <CreateAccountPage /> },
        { path: "AboutUs", element: <AboutUsPage /> },
      ],
    },

    {
      errorElement: <ErrorPage />,
      element: <AdminRoot />,
      path: "admin",
      children: [
        { index: true, element: <AdminHomePage /> },
        { path: "view-admins", element: <AdminViewAdminsPage /> },
        { path: "view-doctors", element: <AdminViewDoctorPage /> },
        { path: "view-drivers", element: <AdminViewDriversPage /> },
        { path: "view-patients", element: <AdminViewPatientPage /> },
        { path: "view-vehicles", element: <AdminViewVehiclesPage /> },
        // Use search params  (mode=create/update, id=optional)
        { path: "create-admin", element: <AdminCreateAdminPage /> },
        { path: "create-doctor", element: <AdminCreateDoctorPage /> },
        { path: "create-driver", element: <AdminCreateDriverPage /> },
        { path: "create-vehicle", element: <AdminCreateVehiclePage /> },
      ],
    },

    {
      errorElement: <ErrorPage />,
      element: <DoctorRoot />,
      path: "doctor",
      children: [
        { index: true, element: <DoctorHomePage /> },
        { path: "view-day/:id", element: <DoctorViewDayPage /> }, 
        { path: "view-report", element: <DoctorViewReportPage /> },
        { path: "view-report/:id", element: <DoctorViewOneReportPage /> }, 
      ],
    },

    {
      errorElement: <ErrorPage />,
      element: <DriverRoot />,
      path: "driver",
      children: [
        { index: true, element: <DriverHomePage /> },
        { path: "view-two/:id", element: <DriverViewTwoPage /> }, 
      ],
    },

    {
      errorElement: <ErrorPage />,
      element: <PatientRoot />,
      path: "patient",
      children: [
        { index: true, element: <PatientHomePage /> },
        { path: "appointment/:id", element: <PatientAppointmentPage /> }, 
        { path: "appointment-report/:id", element: <PatientAppointmentReportPage /> }, 
        { path: "find-appointment", element: <PatientFindAppointmentPage /> },
        { path: "info", element: <PatientInfoPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
