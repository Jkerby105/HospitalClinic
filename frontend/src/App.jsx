import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import { ErrorPage } from "./pages/error/ErrorPage";
import { ContactPage } from "./components/other/ContactPage";
import { FooterPage } from "./components/other/FooterPage";
import { AboutUsPage } from "./components/other/AboutUsPage";
import { PrivacyPolicy } from "./components/other/PrivacyPolicy";
// - ------------------------------------------------------------------
import { CreateAccount } from "./components/patient/CreateAccount";
import { CreateAccounts } from "./components/admin/CreateAccounts";
// - ------------------------------------------------------------------
import { checkAuthLoader } from "./utils/checkAuthLoader";

// Root
import { LoginCreateRoot } from "./pages/root/LoginCreateRoot";
import { LandingPage } from "./pages/root/LandingPage";
import { AdminRoot } from "./pages/root/AdminRoot";
import { DriverRoot } from "./pages/root/DriverRoot";
import { PatientRoot } from "./pages/root/PatientRoot";
import { DoctorRoot } from "./pages/root/DoctorRoot";

// Admin
import { AdminHomePage } from "./pages/admin/AdminHomePage";
import { CreateAccountsPage } from "./pages/admin/create/CreateAccountsPage";
import { EditAccountPage } from "./pages/admin/create/EditAccountPage";
import { AdminViewAdminsPage } from "./pages/admin/AdminViewAdminsPage";
import { AdminViewDoctorPage } from "./pages/admin/AdminViewDoctorPage";
import { AdminViewDriversPage } from "./pages/admin/AdminViewDriversPage";
import { AdminViewPatientPage } from "./pages/admin/AdminViewPatientPage";
import { AdminViewVehiclesPage } from "./pages/admin/AdminViewVehiclesPage";
import { AdminViewAppointmentPage } from "./pages/admin/AdminViewAppointmentPage";
import { AdminViewDoctorAvailabilityPage } from "./pages/admin/AdminViewDoctorAvailabilityPage";
import { ViewDoctor } from "./pages/admin/create/ViewDoctor";
import { ViewDriver } from "./pages/admin/create/ViewDriver";
import { ViewAdmin } from "./pages/admin/create/ViewAdmin";
import { ViewVehicle } from "./pages/admin/create/ViewVehicle";

// Doctor
import { DoctorHomePage } from "./pages/doctor/DoctorHomePage";
import { DoctorViewDayPage } from "./pages/doctor/DoctorViewDayPage";
import { DoctorViewReportPage } from "./pages/doctor/DoctorViewReportPage";
// import { DoctorViewOneReportPage } from "./pages/doctor/DoctorViewOneReportPage";

// Driver
import { DriverHomePage } from "./pages/driver/DriverHomePage";
// import { DriverViewTwoPage } from "./pages/driver/DriverViewTwoPage";

// Patient
import { CreateAccountPage } from "./pages/loginCreate/CreateAccountPage";
import { PatientAccountCreatePate } from "./pages/patient/PatientAccountCreatePate";
import { LoginPage } from "./pages/loginCreate/LoginPage";
import { PatientAppointmentPage } from "./pages/patient/PatientAppointmentPage";
import { PatientPastAppointmentPage } from "./pages/patient/PatientPastAppointmentPage";
// import { PatientAppointmentReportPage } from "./pages/patient/PatientAppointmentReportPage";
// import { PatientFindAppointmentPage } from "./pages/patient/PatientFindAppointmentPage";
import { PatientHomePage } from "./pages/patient/PatientHomePage";
import { PatientInfoPage } from "./pages/patient/PatientInfoPage";

function App() {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      element: <LoginCreateRoot />,
      path: "/",
      children: [
        { index: true, element: <LandingPage /> },
        { path: "Login", element: <LoginPage /> },
        // { path: "CreateAccount", element: <CreateAccountPage /> },
        { path: "AboutUs", element: <AboutUsPage /> },
        { path: "Contact", element: <ContactPage /> },
        { path: "Footer", element: <FooterPage /> },
        { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
        // { path: "create-Account", element: <CreateAccount /> },
         { path: "past-appointments", element: <PatientPastAppointmentPage /> },
        { path: "appointment", element: <PatientAppointmentPage /> },
        { path: "create-account", element: <PatientAccountCreatePate /> },
        { path: "edit-account/:id", element: <EditAccountPage /> },
      ],
    },

    {
      errorElement: <ErrorPage />,
      loader: checkAuthLoader,
      element: <AdminRoot />,
      path: "admin",
      children: [
        { index: true, element: <AdminHomePage /> },

        // -------------------------- \\
        { path: "admins", element: <AdminViewAdminsPage /> },
        { path: "doctors", element: <AdminViewDoctorPage /> },
        { path: "drivers", element: <AdminViewDriversPage /> },
        { path: "patients", element: <AdminViewPatientPage /> },
        { path: "vehicles", element: <AdminViewVehiclesPage /> },
        // -------------------------- \\

        { path: "appointments", element: <AdminViewAppointmentPage /> },

        // -------------------------- \\
        { path: "create-accounts", element: <CreateAccountsPage /> },
        // {path: "edit-account/:id", element: <EditAccountPage /> },
        // -------------------------- \\

        { path: "availability", element: <AdminViewDoctorAvailabilityPage /> },

        // -------------------------- \\
        { path: "view-doctor/:id", element: <ViewDoctor /> },
        { path: "view-driver/:id", element: <ViewDriver /> },
        { path: "view-admin/:id", element: <ViewAdmin /> },
        { path: "view-vehicle/:id", element: <ViewVehicle /> },
        // -------------------------- \\
      ],
    },

    {
      errorElement: <ErrorPage />,
       loader: checkAuthLoader,
      element: <DoctorRoot />,
      path: "doctor",
      children: [
        { index: true, element: <DoctorHomePage /> },
        { path: "view-day/", element: <DoctorViewDayPage /> },
        { path: "view-report", element: <DoctorViewReportPage /> },
        // {path: "view-doctor/:id", element: <ViewDoctor /> },
        // { path: "view-report/:id", element: <DoctorViewOneReportPage /> },
      ],
    },

    {
      errorElement: <ErrorPage />,
      loader: checkAuthLoader,
      element: <DriverRoot />,
      path: "driver",
      children: [
        { index: true, element: <DriverHomePage /> },
        // { path: "view-two/:id", element: <DriverViewTwoPage /> },
      ],
    },

    {
      errorElement: <ErrorPage />,
      element: <PatientRoot />,
      loader: checkAuthLoader,
      path: "patient",
      children: [
        { index: true, element: <PatientHomePage /> },
        // { path: "appointment", element: <PatientAppointmentPage /> },
        // { path: "past-appointments", element: <PatientPastAppointmentPage /> },
        // { path: "appointment-report/:id", element: <PatientAppointmentReportPage /> },
        // { path: "find-appointment", element: <PatientFindAppointmentPage /> },
        { path: "info", element: <PatientInfoPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
