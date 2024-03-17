import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

const Navbar = () => {
  const user ={
    fname:"Rizwan",
    lname:"Jamadar",
    Role:"Assistant Professor"
  };

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
          <div class="avatar">
            {user.fname.charAt(0).toUpperCase() + user.lname.charAt(0).toUpperCase()}
          </div>
          <span className="navbarName">
            {user.fname}
            <p>{user.Role}</p>
          </span>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
