import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.sampleapis.com/countries/countries', // Replace with your API base URL
});

export const fetchApiData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw new Error('Failed to fetch API data');
  }
};
