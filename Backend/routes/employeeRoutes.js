const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/employees", getAllEmployees);

router.post("/employees/add", addEmployee);

router.put("/employees/update/:id", updateEmployee);

router.delete("/employees/delete/:id", deleteEmployee);

module.exports = router;
