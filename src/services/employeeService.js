/**
 * API service for employee-related requests.
 * Uses axios for HTTP communication.
 */
import axios from "axios";

// Base URL for the employee API
const API_BASE = "http://localhost:5000/api";

/**
 * Fetches all employees from the server.
 * @returns {Promise} Axios promise with employee list
 */
export const fetchEmployees = () => axios.get(`${API_BASE}/employees`);

/**
 * Creates a new employee on the server.
 * @param {Object} data - Employee data to create
 * @returns {Promise} Axios promise with created employee
 */
export const createEmployee = (data) =>
  axios.post(`${API_BASE}/employees`, data);

/**
 * Updates an existing employee on the server.
 * @param {string} id - ID of the employee to update
 * @param {Object} data - Updated employee details
 * @returns {Promise} Axios promise with updated employee
 */
export const updateEmployee = (id, data) =>
  axios.put(`${API_BASE}/employees/${id}`, data);

/**
 * Deletes an employee from the server.
 * @param {string} id - ID of the employee to delete
 * @returns {Promise} Axios promise
 */
export const deleteEmployee = (id) =>
  axios.delete(`${API_BASE}/employees/${id}`);
