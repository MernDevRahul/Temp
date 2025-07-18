import axios from 'axios';

const instance = axios.create({
    // baseURL : import.meta.env.VITE_MODE == "dev" ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PROD_URL
    baseURL : import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api" 
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    
    return config;
  });
  
  export default instance;