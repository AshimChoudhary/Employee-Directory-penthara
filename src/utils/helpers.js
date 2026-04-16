// Formats strings to Title Case for consistent UI display
export const capitalize = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

// Basic structural validation for employee objects
export const validateEmployee = ({ name, role, department }) => {
  // Ensures name, role, and department are present and contain actual characters
  return name.trim() !== "" && role.trim() !== "" && department.trim() !== "";
};
