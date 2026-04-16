# Employee Directory Application

A full-stack employee management system built with **React**, **Node.js**, **Express**, and **Tailwind CSS**. This application allows users to manage a directory of employees with full CRUD (Create, Read, Update, Delete) functionality and real-time client-side filtering.

## 🚀 Features

- **Full CRUD Operations**: Add, view, update, and delete employee records.
- **Search**: Instantly filter employees by name, role, or department.
- **Department Categorization**: Visual badges with dynamic color coding for different departments.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, optimized for mobile, tablet, and desktop.
- **In-Memory Backend**: A RESTful API built with Express to manage employee data (volatile storage).

## 🛠️ Technology Stack

### Frontend

- **React 19**: Modern UI component architecture.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for API communication.

### Backend

- **Node.js**: JavaScript runtime for the server.
- **Express**: Fast, unopinionated web framework.
- **Crypto (Built-in)**: Used for generating unique identifiers (randomUUID).
- **CORS**: Middleware to enable cross-origin requests.

---

## 📂 Project Structure

```text
.
├── Backend/
│   ├── controllers/      # Route controllers 
│   ├── routes/           # API route definitions
│   ├── server.js         # Entry point for the Node server
│   └── package.json      # Backend dependencies and scripts
│
└── Frontend/             # React APP
    ├── src/
    │   ├── components/   # Reusable UI components 
    │   ├── pages/        # Main page views
    │   ├── services/     # API interaction layer
    │   ├── utils/        # Formatting and validation helpers
    │   └── App.jsx       # Root component
    ├── tailwind.config.js # Tailwind CSS configuration
    └── package.json      # Frontend dependencies and scripts
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (installed with Node.js)

### Installation



1. **Setup the Backend**:

   ```bash
   cd Backend
   npm install
   ```

2. **Setup the Frontend**:
   ```bash
   cd ../Frontend
   npm install
   ```

---

## 🏃 Running the Application

To run the application, you need to start **both** the backend server and the frontend development server.

### 1. Start the Backend Server

From the `Backend` directory:

```bash
npm run dev
# Server will run at http://localhost:5000
```

### 2. Start the Frontend Application

From the `Frontend` directory:

```bash
npm run dev
# Application will run at http://localhost:5173 
```

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints under the `/api` prefix:

| Method     | Endpoint                    | Description                 |
| :--------- | :-------------------------- | :-------------------------- |
| **GET**    | `/api/employees`            | Fetch all employees         |
| **POST**   | `/api/employees/add`        | Add a new employee          |
| **PUT**    | `/api/employees/update/:id` | Update an existing employee |
| **DELETE** | `/api/employees/delete/:id` | Remove an employee record   |

---

