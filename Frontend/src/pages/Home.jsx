import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

const Home = () => {
  // State management for employee data and UI transitions
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState("");

  // Initial data fetch on component mount
  useEffect(() => {
    loadEmployees();
  }, []);

  // Retrieves employee list from the backend API
  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        "Failed to load employees. Make sure the backend is running.....",
      );
    } finally {
      setLoading(false);
    }
  };

  // Simple ephemeral notification system
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  // Handles both Create and Update operations based on whether an employee is selected
  const handleSubmit = async (formData) => {
    try {
      if (selectedEmployee) {
        const { data } = await updateEmployee(selectedEmployee.id, formData);
        setEmployees((prev) => prev.map((e) => (e.id === data.id ? data : e)));
        showToast("Employee updated");
      } else {
        const { data } = await createEmployee(formData);
        setEmployees((prev) => [...prev, data]);
        showToast("Employee added successfully");
      }
      closeForm();
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      showToast("Something went wrong. Please try again.");
    }
  };

  // Deletion logic with native confirmation prompt
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee data?"))
      return;

    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((e) => e.id !== id));
      showToast("Employee deleted successfully");
      closeForm();
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      showToast("Failed to delete employee. Please try again.");
    }
  };

  const openAddForm = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const openEditForm = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  // Real-time client-side filtering based on search query
  const filteredEmployees = employees.filter((emp) => {
    const q = searchQuery.toLowerCase();
    return (
      emp.name.toLowerCase().includes(q) ||
      emp.department.toLowerCase().includes(q) ||
      emp.role.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Employee Directory
          </h1>
          <button
            onClick={openAddForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Add Employee
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6">
          <SearchBar query={searchQuery} onSearch={setSearchQuery} />

          <EmployeeList
            employees={filteredEmployees}
            loading={loading}
            error={error}
            onEdit={openEditForm}
          />
        </div>
      </main>

      {showForm && (
        <EmployeeForm
          employee={selectedEmployee}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          onClose={closeForm}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl">
          {toast}
        </div>
      )}
    </div>
  );
};

export default Home;
