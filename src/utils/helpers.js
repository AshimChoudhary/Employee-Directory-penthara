/**
 * Capitalizes every word in a string.
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

/**
 * Validates employee data structure.
 * @param {Object} employee - Employee object to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const validateEmployee = ({ name, role, department }) => {
  // Check if all primary fields are non-empty
  return name.trim() !== "" && role.trim() !== "" && department.trim() !== "";
};
