import React, { useState } from "react";
import { menuItems, userMenu } from "../../constant.js";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

import NavButton from "../navButton/NavButton.jsx"

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item !== activeItem ? item : "");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const menuItem = user && user.Role === "Professor" ? userMenu : menuItems;
  
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      const res = await axios.post("http://localhost:8800/api/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/login")
      toast.success(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="leftbar sidebar">
      <div className="leftbarWrapper">
        <>
          {menuItem.map((item) => (
            <div>
              <Link to={item?.outerLink}>
                <NavButton 
                onClick={item.onclick ? handleLogout : handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
                />
                {
                  item.items && (
                  <SubMenu 
                    activeItem={activeItem}
                    handleClick={handleClick}
                    item={item}
                    />
                  )
                }
              </Link>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Sidebar;
