import axios from "axios";

export const apiCall = {
  baseUrl: import.meta.env.VITE_APP_API_URL || "http://localhost:3000",
  get: async (endpoint: string, params?: string) => {
    const response = await axios.get(
      `${apiCall.baseUrl}${endpoint}${params && `?${params}`}`
    );
    return response;
  },
};
