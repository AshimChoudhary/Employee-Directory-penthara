// API Service for all the functions for Employees
import axios from "axios";

// Base URL for the employee API
const API_BASE = "http://localhost:5000/api";

export const fetchEmployees = () => axios.get(`${API_BASE}/employees`);

export const createEmployee = (data) =>
  axios.post(`${API_BASE}/employees/add`, data);

export const updateEmployee = (id, data) =>
  axios.put(`${API_BASE}/employees/update/${id}`, data);

export const deleteEmployee = (id) =>
  axios.delete(`${API_BASE}/employees/delete/${id}`);
