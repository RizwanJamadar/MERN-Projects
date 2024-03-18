import React from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import AddEmployee from "./pages/Employees/AddEmployee.jsx";
import ShowEmployee from "./pages/Employees/ShowEmployee.jsx";
import AddDepartment from "./pages/Department/AddDepartment.jsx";
import ShowDepartment from "./pages/Department/ShowDepartment.jsx";
import ShowLeaveList from "./pages/Leave/ShowLeaveList.jsx";
import AllLeaves from "./pages/Leave/AllLeaves.jsx";
import ManageUser from "./pages/Manage/ManageUser.jsx";
import AddList from "./pages/Leave/AddList";
import RequestLeave from "./pages/Leave/RequestLeave.jsx";
import ApplyLeave from "./pages/Leave/ApplyLeave.jsx";
import RecommandLeave from "./pages/Recommendation/RecommandLeave.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

var dashboardRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<dashboardRoute>
              {user && user.Role === "Professor" ? <UserDashboard /> : <Dashboard />}
            </dashboardRoute>,
        },
        {
          path: "/addEmployee",
          element: <AddEmployee />,
        },
        {
          path: "/showEmployees",
          element: <ShowEmployee />,
        },
        {
          path: "/addDepartment",
          element:<AddDepartment />,
        },
        {
          path: "/showDepartment",
          element: <ShowDepartment />,
        },
        {
          path: "/showLeaveList",
          element: <ShowLeaveList />,
        },
        {
          path: "/allLeaves",
          element: <RequestLeave />,
        },
        {
          path: "/allLeaves/:category",
          element: <AllLeaves />,
        },
        {
          path: "/manageAdmins",
          element: <ManageUser />,
        },
        {
          path: "/addLeaveList",
          element: <AddList />,
        },
        {
          path: "/applyLeave",
          element: <ApplyLeave />,
        },
        {
          path: "/recommandleave",
          element: <RecommandLeave />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
