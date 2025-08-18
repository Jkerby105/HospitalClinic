import React from "react";
import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const PatientStore = create((set, get) => ({
  getPatientById: async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/patient/info/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching patient by ID:", error);
      toast.error("Failed to fetch patient data");
    }
  },

  getDoctors: async () => {
    try {
      console.log("Fetching doctors...");
      const response = await axios.get(
        "http://localhost:8080/patient/Doctors",
        {
          withCredentials: true,
        }
      );
      console.log("Fetched doctors:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to fetch doctors");
    }
  },
  getDoctorsAvailability: async (selectedDoctor, selectedDay) => {
    console.log("backend");
    console.log(selectedDay);
    console.log(selectedDoctor);
    try {
      const response = await axios.get(
        "http://localhost:8080/patient/availability",
        {
          params: {
            doctorId: selectedDoctor,
            dayOfWeek: selectedDay,
          },
          withCredentials: true,
        }
      );

      console.log("Availability response:");
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching availability:", error);
      toast.error("Failed to fetch availability");
    }
  },
  updatePatient: async (patient) => {
    try {
      console.log("Updating Patient...");
      const response = await axios.post(
        "http://localhost:8080/patient/Doctors",
        patient,
        {
          withCredentials: true,
        }
      );
      console.log("Update patient:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating patient:", error);
      toast.error("Failed to update patient");
    }
  },
  getUpcomingAppointment: async () => {
    try {
      console.log("Fetching upcoming appointments...");
      const response = await axios.get(
        "http://localhost:8080/patient/Doctors",
        {
          withCredentials: true,
        }
      );
      console.log("Fetched upcoming appointments:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching upcoming appointments:", error);
      toast.error("Failed to fetch upcoming appointments");
    }
  },
  getPastAppointments: async () => {
    try {
      console.log("Fetching past appointments...");
      const response = await axios.get(
        "http://localhost:8080/patient/Doctors",
        {
          withCredentials: true,
        }
      );
      console.log("Fetched past appointments:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching past appointments:", error);
      toast.error("Failed to fetch past appointments");
    }
  },
// postAppointment: async (appointment) => {
//   console.log("Posting appointment:", appointment);

//   try {
//     const response = await axios.post(
//       "http://localhost:8080/patient/appointment",
//       {
//         doctor: { id: appointment.doctorId },   // doctor_id → doctor {id: …}
//         appointmentDay: appointment.appointmentDay, // appointment_day → appointmentDay
//         startTime: appointment.startTime,       // start_time → startTime
//         reasonForVisit: appointment.reasonForVisit, // reason_for_visit → reasonForVisit
//         pickupAddressLine: appointment.pickupAddressLine,
//         pickupCity: appointment.pickupCity,
//         pickupState: appointment.pickupState,
//         pickupZipCode: appointment.pickupZipCode,
//         pickupNotes: appointment.pickupNotes,
//         pickedUp: appointment.pickedUp,
//         appointmentType: "SCHEDULED",        // required enum → adjust as needed
//         status: "PENDING"                       // required enum → adjust as needed
//       },
//       { withCredentials: true }
//     );
//     console.log("Posted appointment:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting appointment:", error);
//     toast.error("Failed to post appointment");
//   }
// }
postAppointment: async (appointment) => {
  console.log("Posting appointment:", appointment);

  const appointmentData = {
    doctorId: Number(appointment.doctor_id), 
    appointmentDay: appointment.appointment_day, 
    startTime: appointment.start_time, 
    reasonForVisit: appointment.reason_for_visit, 
    pickupAddressLine: appointment.pickup_address_line,
    pickupCity: appointment.pickup_city,
    pickupState: appointment.pickup_state,
    pickupZipCode: appointment.pickup_zip_code,
    pickupNotes: appointment.pickup_notes,
    pickedUp: appointment.picked_up, 
    appointmentType: "SCHEDULED", 
    status: "PENDING",
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/patient/appointment",
      appointmentData,
      { withCredentials: true }
    );
    console.log("Posted appointment:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting appointment:", error);
    toast.error("Failed to post appointment");
  }
}

}));
