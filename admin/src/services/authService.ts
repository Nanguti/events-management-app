import axios from "axios";

// Define the base API URL (adjust it according to your Laravel backend setup)
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/register";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "An unexpected error occurred";
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "An unexpected error occurred";
  }
};
