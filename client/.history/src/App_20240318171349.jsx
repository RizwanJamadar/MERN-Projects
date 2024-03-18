import React from "react";
import "./app.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import AddEmployee from "./pages/Employees/AddEmployee.jsx";
import ShowEmployee from "./pages/Employees/ShowEmployee.jsx";
import AddDepartment from "./pages/Department/AddDepartment.jsx";
import ShowDepartment from "./pages/Department/ShowDepartment.jsx";
import ShowLeaveList from "./pages/Leave/ShowLeaveList.jsx";
import AllLeaves from "./pages/Leave/AllLeaves.jsx";
import ManageUser from "./pages/Manage/ManageUser.jsx";
import AddList from "./pages/Leave/AddList";
import RequestLeave from "./pages/Leave/RequestLeave.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import ApplyLeave from "./pages/Leave/ApplyLeave.jsx";
import RecommandLeave from "./pages/Recommendation/RecommandLeave.jsx"



function App (){
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

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

const user = JSON.parse(localStorage.getItem("currentUser"));

const ProtectedRouteAdmin = ({children}) =>{
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    return children
  }

  return <Navigate to="/login"/>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:
        <ProtectedRouteAdmin>
          {user && user?.Role == "Professor" ? <UserDashboard/> : <Dashboard />}
        </ProtectedRouteAdmin>,
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
        path:"/applyLeave",
        element:<ApplyLeave/>
      },
      {
        path:"/recommandleave",
        element: <RecommandLeave/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default App;