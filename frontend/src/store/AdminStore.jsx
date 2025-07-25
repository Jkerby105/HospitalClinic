import axios from 'axios';
import React from 'react'
import  {create} from 'zustand'
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8080";

export const AdminStore = create((set, get) => ({
  admins: [],
  doctors: [],
  drivers: [],
  vehicles: [],
  patients: [],
  appointments: [],
  

  getAllAdmin: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/admins`, {
        withCredentials: true,
      });
      console.log("Admin data fetched successfully:", response.data);
      set({ admins: response.data });
    } catch (error) {
      console.error("Error fetching admin data:", error);
      toast.error("Failed to fetch admin data");
    }
  },
  getAllDoctors: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-all-doctors`, {
        withCredentials: true,
      });
      console.log("Doctor data fetched successfully:", response.data);
      set({ doctors: response.data });
    } catch (error) {
      console.error("Error fetching doctor data:", error);
      toast.error("Failed to fetch doctor data");
    }
  },
  getAllDrivers: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-all-drivers`, {
        withCredentials: true,
      });
      console.log("Driver data fetched successfully:", response.data);
      set({ drivers: response.data });

    }catch (error) {
      console.error("Error fetching driver data:", error);
      toast.error("Failed to fetch driver data");
    }
  },
  getAllVehicles: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-all-vehicles`, {
        withCredentials: true,
      });
      console.log("Vehicle data fetched successfully:", response.data);
      set({ vehicles: response.data });
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
      toast.error("Failed to fetch vehicle data");
    }
  },
  getAllPatients: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-all-patients`, {
        withCredentials: true,
      });
      console.log("Patient data fetched successfully:", response.data);
      set({ patients: response.data });
    } catch (error) {
      console.error("Error fetching patient data:", error);
      toast.error("Failed to fetch patient data");
    }
  },
  getAllAppointments: async () => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-all-appointments`, {
        withCredentials: true,
      });
      console.log("Appointment data fetched successfully:", response.data);
      set({ appointments: response.data });
    } catch (error) {
      console.error("Error fetching appointment data:", error);
      toast.error("Failed to fetch appointment data");
    }
  },
  getOneAdmin: async (id) => {
    console.log("Fetching single admin data for ID:", id);
    try{
      const response = await axios.get(`${BASE_URL}/admin/oneAdmin/${id}`, {
        withCredentials: true,
      });
      console.log("Single admin data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single admin data:", error);
      toast.error("Failed to fetch single admin data");
    }
  },
  getOneDoctor: async (id) => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-doctor/${id}`, {
        withCredentials: true,
      });
      console.log("Single doctor data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single doctor data:", error);
      toast.error("Failed to fetch single doctor data");
    }
  },
  getOneDriver: async (id) => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-driver/${id}`, {
        withCredentials: true,
      });
      console.log("Single driver data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single driver data:", error);
      toast.error("Failed to fetch single driver data");
    }
  },
  getOneVehicle: async (id) => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-vehicle/${id}`, {
        withCredentials: true,
      });
      console.log("Single vehicle data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single vehicle data:", error);
      toast.error("Failed to fetch single vehicle data");
    }
  },
  getOnePatient: async (id) => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-patient/${id}`, {
        withCredentials: true,
      });
      console.log("Single patient data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single patient data:", error);
      toast.error("Failed to fetch single patient data");
    }
  },
  getOneAppointment: async (id) => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/get-appointment/${id}`, {
        withCredentials: true,
      });
      console.log("Single appointment data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching single appointment data:", error);
      toast.error("Failed to fetch single appointment data");
    }
  },

}));
