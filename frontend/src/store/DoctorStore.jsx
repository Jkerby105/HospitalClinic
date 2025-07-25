import React from "react";
import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

export const DoctorStore = create((set, get) => ({

// Works Properly
  getDoctorById: async () => {
    try {
      // Fetching doctor information from the backend
      // Assuming the backend endpoint is set up to return the doctor's info
      // when the user is authenticated
      console.log("Fetching doctor information...");
      const response = await axios.get("http://localhost:8080/doctor/info", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching doctor by ID:", error);
      toast.error("Failed to fetch doctor data");
    }
  },
  getDoctorUpcomingAppointments: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctor/upComingAppointments",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching upcoming appointments:", error);
      toast.error("Failed to fetch upcoming appointments");
    }
  },

  getDoctorNoReportAppointments: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctor/missingReportsAppointments",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching appointments with no report:", error);
      toast.error("Failed to fetch appointments with no report");
    }
  },
  getDoctorAppointments: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctor/allAppointments",
        {
          withCredentials: true,
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Error fetching past appointments:", error);
      toast.error("Failed to fetch past appointments");
    }
  },
  // works properly
  getDoctorAvailability: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctor/Availability",
        {
          withCredentials: true,
        }
      );

      console.log("Doctor availability fetched successfully:");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching doctor availability:", error);
      toast.error("Failed to fetch doctor availability");
    }
  },
  getAppointmentInfo: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctor//info/Report",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching appointment info:", error);
      toast.error("Failed to fetch appointment info");
    }
  },
  updateDoctorAvailability: async (availability) => {
    try {

      console.log("Updating doctor availability...");
      console.log(availability);
      const response = await axios.put(
        "http://localhost:8080/doctor/Availability",
        availability,
        {
          withCredentials: true,
        }
      );
      console.log("Availability updated successfully:", response.data);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const data = await response.json();
      // set({ availability: data });
      toast.success("Availability updated successfully");
    } catch (error) {
      console.error("Error updating availability:", error);
      toast.error("Failed to update availability");
    }
  },
}));
