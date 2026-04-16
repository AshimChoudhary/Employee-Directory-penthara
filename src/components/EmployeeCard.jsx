const departmentColors = {
  Engineering: "bg-blue-100 text-blue-700",
  Product: "bg-green-100 text-green-700",
  Design: "bg-pink-100 text-pink-700",
  "Human Resources": "bg-yellow-100 text-yellow-700",
  Marketing: "bg-purple-100 text-purple-700",
  Finance: "bg-cyan-100 text-cyan-700",
};

// Generates two initials from a name to display as an avatar fallback
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const EmployeeCard = ({ employee, onEdit }) => {
  const { name, role, department } = employee;

  // Applies a consistent color scheme based on the employee's department
  const badgeColor =
    departmentColors[department] || "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Placeholder avatar with initials */}
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
          {getInitials(name)}
        </div>
        <div className="overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-500 truncate">{role}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}
        >
          {department}
        </span>
        <button
          onClick={() => onEdit(employee)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
