import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const BASE_URL = "http://localhost:8080";

export const AuthStore = create((set, get) => ({
  user: null,
  role: null,
  isAuthenticated: false,
  // isSigningUp: false,
  // isLoginIng: false,

  checkingAuth: async () => {
    console.log("Checking authentication status...");

    try {
      const response = await axios.get(`${BASE_URL}/patient/check-auth`, {
        withCredentials: true,
      });

      console.log("Auth check response:", response);
      console.log(response.data);
      console.log(response.data.role);

      if (response.status === 200 && response.data?.authenticated) {
        // Assuming the response contains user data and role
        console.log("User data from response:", response.data);
        set({
          user: response.data.username,
          isAuthenticated: true,
          role: response.data.role, // ← dynamic
        });
        console.log("User is authenticated:", response.data.username);
      } else {
        set({ isAuthenticated: false, user: null, role: null });
        console.log("User not authenticated");
      }
    } catch (err) {
      set({ isAuthenticated: false, user: null, role: null });
      console.error("Auth check failed:", err);
    }
  },

  login: async (userData) => {
    console.log("Logging in with user data:", userData);
    try {
      const response = await axios.post(`${BASE_URL}/patient/login`, userData, {
        withCredentials: true, // ✅ this sends and allows the browser to store the cookie
      });

      console.log("Login response:", response);
      console.log("User role from response:", response.data.role);
      console.log("User data from response:", response.data);
      console.log(response.data.role + "---------------------------------------------------------");
      console.log(response);

      if (response.status !== 200) {
        throw new Error("Login failed with status: " + response.status);
      }

      toast.success("Login successful!");
      console.log(response);
      set({ user: true, isAuthenticated: true, role: response.data.role });
      return response.data.role; // Return the entity type for further processing

    } catch (err) {
      toast.error("Login failed!");
      console.error(err);
    }
  },
  logout: async (data) => {
    try {
      set({ user: null, isAuthenticated: false });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  createAccount: async (userData, entity) => {
    try {
      console.log("Creating account with data:", entity, userData);

      let response;

      switch (entity) {
        case "admin":
          response = await axios.post(`${BASE_URL}/admin/addAdmin`, userData);
          break;

        case "doctor":
          response = await axios.post(`${BASE_URL}/admin/addDoctor`, userData);
          break;

        case "driver":
          const driverForm = new FormData();
          driverForm.append(
            "driver",
            new Blob([JSON.stringify(userData)], { type: "application/json" })
          );
          driverForm.append("driverImage", userData.driverImage);
          driverForm.append("licenseImage", userData.licenseImage);

          response = await axios.post(
            `${BASE_URL}/admin/addPatientDriver`,
            driverForm,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          break;

        case "vehicle":
          const vehicleForm = new FormData();
          vehicleForm.append(
            "vehicle",
            new Blob([JSON.stringify(userData)], { type: "application/json" })
          );
          vehicleForm.append("image", userData.vehicleImage);

          response = await axios.post(
            `${BASE_URL}/admin/addVehicle`,
            vehicleForm,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          break;

        case "patient":
          response = await axios.post(`${BASE_URL}/patient/register`, userData);
          break;

        default:
          throw new Error("Unknown entity type");
      }

      toast.success("Account created successfully!");
      console.log("response", response);
      console.log("Server response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Failed to create account. Please check the inputs.");
    }
  },
}));
