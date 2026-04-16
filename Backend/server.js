const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = 5000;

// Middleware stack: CORS for cross-origin frontend requests, JSON body parsing
app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
