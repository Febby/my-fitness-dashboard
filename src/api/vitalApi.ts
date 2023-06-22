import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'hhttps://api.sandbox.tryvital.io/v2/link/connect/demo ',
  headers: {
    'Content-Type': 'application/json',
    'x-vital-api-key': 'sk_us_RL-nVPVW7OrM833J2VxliDIN3vcjKX1vTwCSAHEXJmA', // replace with your actual API key
  },
});

export const fetchFitnessData = async (userId: string) => {
  try {
    const response = await apiClient.get(`https://play.svix.com/in/e_412OZtwD3BcY3ssIguyzsFbOFPw/`); // replace with actual endpoint
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};
