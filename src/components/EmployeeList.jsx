import EmployeeCard from "./EmployeeCard";

/**
 * Component to display the list of all employees.
 * @param {Object} props - Component props
 * @param {Array} props.employees - List of employees to display
 * @param {boolean} props.loading - Loading state of the employee data
 * @param {string} props.error - Error message if fetch fails
 * @param {Function} props.onEdit - Callback function when an employee is edited
 */
const EmployeeList = ({ employees, loading, error, onEdit }) => {
  // Show loading indicator
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center my-10">
        {error}
      </div>
    );
  }

  // Show message if no employees found
  if (employees.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">No employees found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default EmployeeList;
