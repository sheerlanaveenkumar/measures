import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "accept": "application/json",
    "x-client-iana-timezone": "America/Los_Angeles",
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
