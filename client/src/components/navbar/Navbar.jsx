import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

const Navbar = () => {
  const name = "Rizwan";
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <SchoolRoundedIcon sx={{ fontSize: "32px" }} />
          <span className="logo">
            <a style={{ color: "#312ECB" }}>Tutors</a>Hub.
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
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className="navbarName">
            {name}
            <p>Admin</p>
          </span>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
