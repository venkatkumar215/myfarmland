import axios from "axios";
import env from "../config/env";

const apiClient = axios.create({
  baseURL: "http://192.168.10.143:3000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: interceptors for auth, logging, etc.

apiClient.interceptors.request.use((request) => {
  console.log("📤 Request:", request.method?.toUpperCase(), request.url);
  console.log("📤 Request:", request.data);
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log(
      "✅ Response from:",
      response.config.url,
      "Status:",
      response.status
    );
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
