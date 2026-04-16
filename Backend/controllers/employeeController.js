const { randomUUID } = require("crypto");

// In-memory data store for employees (cleared on server restart)
let employees = [
  {
    id: randomUUID(),
    name: "Ashim Choudhary",
    role: "Frontend Developer",
    department: "Engineering",
  },
  {
    id: randomUUID(),
    name: "Sujal",
    role: "Product Manager",
    department: "Product",
  },
  {
    id: randomUUID(),
    name: "Umesh",
    role: "UI/UX Designer",
    department: "Design",
  },
  {
    id: randomUUID(),
    name: "Vineet",
    role: "Backend Developer",
    department: "Engineering",
  },
  {
    id: randomUUID(),
    name: "Shivanshu",
    role: "HR Specialist",
    department: "Human Resources",
  },
];

const getAllEmployees = (req, res) => {
  res.json(employees);
};

// Processes new employee creation; validates payload before persistence
const addEmployee = (req, res) => {
  const { name, role, department } = req.body;

  if (!name || !role || !department) {
    return res
      .status(400)
      .json({ error: "All fields (name, role, department) are required." });
  }

  const newEmployee = { id: randomUUID(), name, role, department };
  employees.push(newEmployee);

  res.status(201).json(newEmployee);
};

// Updates an existing record; requires complete payload and matching ID
const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, role, department } = req.body;

  if (!name || !role || !department) {
    return res
      .status(400)
      .json({ error: "All fields (name, role, department) are required." });
  }

  const index = employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found." });
  }

  employees[index] = { id, name, role, department };
  res.json(employees[index]);
};

// Removes an employee record; returns 204 No Content upon success
const deleteEmployee = (req, res) => {
  const { id } = req.params;

  const index = employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found." });
  }

  employees.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
