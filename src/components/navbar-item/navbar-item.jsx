import React from "react";
import "./navbar-item.scss";

function NavbarItem({ category }) {
  return (
    <li className="category__item">
      <a href="###" className="category__link">
        {category}
      </a>
    </li>
  );
}

export default NavbarItem;
