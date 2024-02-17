import React, { useRef } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);
  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;
  const { name, items } = item;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(name, items) ? "open" : ""}`}
      style={{
        height: isSubNavOpen(name, items) ?  navRef.current?.clientHeight : 0,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItems) => (
          <Link to={subItems.link}>
          <NavButton
            onClick={handleClick}
            name={subItems.name}
            isActive={activeItem === subItems}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
