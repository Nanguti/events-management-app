import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
  role: string;
}

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user: any) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id: string, user: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
