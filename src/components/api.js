// src/api.js
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
});
export const getPositions = () => api.get("/positions");
export const getStatus = () => api.get("/status");