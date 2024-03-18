import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">
            <a style={{ color: "#312ECB" }}>Smart</a>Leave.
          </span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="notification">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </div>
          <div class="avatar">
            {user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}
          </div>
          <span className="navbarName">
            {user.firstName}
            <p>{user.Role === "vp" ? "Vice Principal" : user.Rols}</p>
          </span>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
