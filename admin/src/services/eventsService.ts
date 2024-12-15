import axios from "axios";
import { EventInterface } from "../types/EventInterface";

const API_URL = `${import.meta.env.VITE_API_URL}/events`;

export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.events;
  } catch (error) {
    throw error;
  }
};

export const getEventById = async (eventId: number) => {
  try {
    const response = await axios.get(`${API_URL}/${eventId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (eventData: EventInterface) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (
  eventId: number,
  eventData: EventInterface
) => {
  try {
    const response = await axios.put(`${API_URL}/${eventId}`, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${eventId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
