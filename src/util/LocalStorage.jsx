const employees = [
  {
    id: 1,
    firstname: "siddhartha",
    email: "emp1@cyber.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI for web app",
        taskDate: "2026-05-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar alignment issue",
        taskDate: "2026-05-18",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with authentication API",
        taskDate: "2026-05-22",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstname: "Murali",
    email: "emp2@cyber.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard components",
        taskDate: "2026-05-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB collections",
        taskDate: "2026-05-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Razorpay payment system",
        taskDate: "2026-05-19",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    firstname: "Gouri Priya",
    email: "emp3@cyber.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO score",
        taskDate: "2026-05-25",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Develop product landing page",
        taskDate: "2026-05-15",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Perform application testing",
        taskDate: "2026-05-23",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    firstname: "Pavan",
    email: "emp4@cyber.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop user authentication APIs",
        taskDate: "2026-05-24",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Improvements",
        taskDescription: "Enhance dashboard UI design",
        taskDate: "2026-05-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy app to cloud server",
        taskDate: "2026-05-18",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    firstname: "Rajesh",
    email: "emp5@cyber.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation",
        taskDate: "2026-05-26",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Refactoring",
        taskDescription: "Optimize old React components",
        taskDate: "2026-05-13",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities in application",
        taskDate: "2026-05-27",
        category: "Cyber Security"
      }
    ]
  }
];

const admin = {
  id: 101,
  username: "Admin Akhil Reddy",
  email: "admin@cyber.com",
  password: "123"
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin }
}