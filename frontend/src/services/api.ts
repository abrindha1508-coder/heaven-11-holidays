import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://heaven11holidays.in/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  destination?: string;
  message: string;
  travel_date?: string;
  total_travelers?: number;
}

export interface EnquiryData {
  name: string;
  phone: string;
  date: string;
  total_travelers?: number;
  packageId?: string;
  packageTitle?: string;
}

/**
 * Submit general contact query or custom quote form to the backend
 */
export const submitContactForm = async (contactData: ContactData) => {
  try {
    const response = await api.post('/contacts', contactData);
    return response.data;
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    throw error.response?.data || new Error('Failed to submit contact form. Please try again.');
  }
};

/**
 * Submit booking enquiry form to the backend
 */
export const submitEnquiryForm = async (enquiryData: EnquiryData) => {
  try {
    const response = await api.post('/enquiries', enquiryData);
    return response.data;
  } catch (error: any) {
    console.error('Error submitting enquiry form:', error);
    throw error.response?.data || new Error('Failed to submit booking enquiry. Please try again.');
  }
};

export default api;
