import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/events`;

export interface EventData {
  id?: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  organizer_name: string;
  category: string;
  registration_link?: string;
  contact_email?: string;
  contact_phone?: string;
  event_image?: string;
  tags?: string;
  max_attendees?: number;
  price?: number;
  agenda?: string;
  sponsors?: string;
  social_links?: string;
  status?: string;
}

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

export const createEvent = async (eventData: EventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (eventId: number, eventData: EventData) => {
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
