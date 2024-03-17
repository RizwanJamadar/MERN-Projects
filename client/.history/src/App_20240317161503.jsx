import React, { useContext } from "react";
import "./app.css";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import AddEmployee from "./pages/Employees/AddEmployee.jsx";
import ShowEmployee from "./pages/Employees/ShowEmployee.jsx";
import ShowDepartment from "./pages/Department/ShowDepartment.jsx";
import ShowLeaveList from "./pages/Leave/ShowLeaveList.jsx";
import AllLeaves from "./pages/Leave/AllLeaves.jsx";
import ManageUser from "./pages/Manage/ManageUser.jsx";
import AddList from "./pages/Leave/AddList.jsx";
import RequestLeave from "./pages/Leave/RequestLeave.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import ApplyLeave from "./pages/Leave/ApplyLeave.jsx";
import LeaveRecommendation from "./pages/Recommandation/LeaveRecommendation.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

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

const App = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute user={user} />,
        },
        {
          path: "/addEmployee",
          element: <AddEmployee />,
        },
        {
          path: "/showEmployes",
          element: <ShowEmployee />,
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
          path: "/applyleave",
          element: <ApplyLeave />,
        },
        {
          path: "/recommandLeave",
          element: <LeaveRecommendation />,
        },
        {
          path: "/userdashboard",
          element: <UserDashboard />,
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

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return user.Role == "Professor" ? <UserDashboard/> : <Dashboard/>;
};

export default App;
