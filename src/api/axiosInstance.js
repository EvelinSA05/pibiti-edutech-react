import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://686ec79091e85fac429ef657.mockapi.io/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;