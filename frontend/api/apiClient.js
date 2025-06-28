import axios from 'axios';
import Constants from 'expo-constants';

const localhost = Constants.expoConfig?.hostUri?.split(':')[0] || 'localhost';
const baseURL = `http://${localhost}:3001`;

const API = axios.create({ baseURL });

// Login request
export const loginUser = async (creds) => {
  const response = await API.post('/login', creds);
  if (!response.data?.user) throw new Error('Invalid response');
  return response.data.user;
};

export const fetchDashboardData = async () => {
  const response = await API.get('/dashboard');
  return response.data;
};

export const fetchShipmentHistory = async () => {
  const response = await API.get('/shipments');
  return response.data;
};
