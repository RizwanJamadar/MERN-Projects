import React, { useState } from "react";
import { menuItems, userMenu } from "../../constant.js";
import "./sidebar.css";
import NavButton from "../navButton/NavButton.jsx";
import SubMenu from "../navButton/subMenu.jsx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item !== activeItem ? item : "");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const menuItem = user.Role === "Professor" ? userMenu : menuItems;

  return (
    <div className="leftbar sidebar">
      <div className="leftbarWrapper">
        <>
          {menuItem.map((item) => (
            <div>
              <Link to={item?.outerLink}>
                <NavButton 
                onClick={handleClick}
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
