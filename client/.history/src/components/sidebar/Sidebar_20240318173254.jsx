import React, { useState } from "react";
import { menuItems, userMenu } from "../../constant.js";
import "./sidebar.css";
import NavButton from "../navButton/NavButton.jsx";
import SubMenu from "../navButton/subMenu.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item !== activeItem ? item : "");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const menuItem = user && user.Role === "Professor" ? userMenu : menuItems;

  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      const res = await axios.post("http://localhost:8800/api/auth/logout")
      setMessage(res.data)
      setOpen(true)
      localStorage.setItem("currentUser", null)
      navigate("/login")
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
