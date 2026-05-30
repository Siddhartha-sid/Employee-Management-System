# 🗂️ Employee Management System

A role-based task management application built with React.js where 
Admins assign tasks to Employees and track their progress in real time.

🔗 **Live Demo:** [your-app.vercel.app](https://your-app.vercel.app)

---

## 🖼️ Screenshots

> Add screenshots here after deployment
> (Admin Dashboard / Employee Dashboard / Login Page)

---

## ✨ Features

**Admin**
- Secure login with role-based redirect
- Create and assign tasks to any employee
- Set task title, description, category, and due date
- View all employees with their task counts (New / Active / Completed / Failed)

**Employee**
- Secure login with personal dashboard
- View assigned tasks by status
- Accept new tasks → mark as Completed or Failed
- Real-time task counter updates

**General**
- Persistent login session via LocalStorage
- Protected routes — Admin and Employee see different dashboards
- Auto-redirect based on role on login/refresh

---

## 🛠️ Tech Stack

| Technology      | Usage                        |
|-----------------|------------------------------|
| React.js        | UI & component architecture  |
| React Router v6 | Protected role-based routing |
| Context API     | Global auth & state management |
| LocalStorage    | Session + data persistence   |
| Vite            | Build tool & dev server      |
| CSS             | Custom styling               |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
