import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, loading, error, onEdit }) => {
  // Skeleton-like loading state for better UX
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Graceful error handling for failed API requests
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center my-10">
        {error}
      </div>
    );
  }

  // Empty state handling when no search results match or data is missing
  if (employees.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">No employees found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Render individual cards for each employee in the dataset */}
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default EmployeeList;
