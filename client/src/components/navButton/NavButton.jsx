import React from "react";
import "material-symbols";

const Icon = ({ icon }) => (
  <span class="material-symbols-outlined" style={{backgroundColor:"transparent"}}>{icon}</span>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={isActive ? "active" : ""}
    >
      {icon && <Icon icon={icon } />}
      <span style={{backgroundColor:"transparent"}}>{name}</span>
      {hasSubNav && <Icon icon="expand_more" />}
    </button>
  );
};

export default NavButton;
