// src/lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: "https://backend-pinayflix-production.up.railway.app/api",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
