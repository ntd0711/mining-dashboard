import React from "react";
import "./menu-item.scss";

function MenuItem({ category }) {
  return (
    <li className="menu__item">
      <a href="###" className="menu__link">
        <span className="menu__icon">{category.icon}</span>
        {category.name}
      </a>
    </li>
  );
}

export default MenuItem;
